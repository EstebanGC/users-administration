import {TypeOrmModule} from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { Contact } from 'src/contacts/entities/contact.entity';
import { Phone } from 'src/phones/entities/phone.entity';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [
    TypeOrmModule.forFeature([User, Contact, Phone])
  ]
})
export class UsersModule {}
