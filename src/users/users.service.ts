import { NotFoundException } from '@nestjs/common';
import { BadRequestException, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Contact } from 'src/contacts/entities/contact.entity';

@Injectable()
export class UsersService {

  private readonly logger = new Logger('UserService');
  
  constructor(

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  

    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
    ){}

  async create(createUserDto: CreateUserDto) {

    try {

      const  { contacts = [], ...userDetails} = createUserDto;

      const user = this.userRepository.create({
        ...userDetails,
        contacts: contacts.map(contact=> this.contactRepository.create(contact))
      });
      
      await this.userRepository.save(user);

      return user;
    } catch(error) {
      this.handleExceptions(error);
    }
  }

  //ToDo: page
  findAll(paginationDto:PaginationDto) {

    const { limit=10, offset= 0 } = paginationDto;

    return this.userRepository.find({
      take: limit,
      skip: offset,
      relations: {
        contacts:true,
      },
    });
  }

  async findOne(id: string) {

    const user = await this.userRepository.findOneBy({id});

    if(!user) 
      throw new NotFoundException(`User with id ${id} not found`)
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.preload({
      id:id,
      ...updateUserDto,
      contacts: [],
    });

    if(!user) throw new NotFoundException(`User with id ${id} not found!`);
    
    try {
      await this.userRepository.save(user);
    } catch(error){
      this.handleExceptions(error);
    }
    return user;
  }

  async remove(id: string) {
    const user = await this.findOne(id);
    await this.userRepository.remove(user);
  }

  private handleExceptions(error:any) {
    if(error.code === '23505')
        throw new BadRequestException(error.detail);
      this.logger.error(error)
      throw new InternalServerErrorException('Ayuda!')
  }
}
