import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, Query } from '@nestjs/common';
import { PhonesService } from './phones.service';
import { CreatePhoneDto } from './dto/create-phone.dto';
import { UpdatePhoneDto } from './dto/update-phone.dto';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Controller('phones')
export class PhonesController {
  constructor(private readonly phonesService: PhonesService) {}

  @Post()
  create(@Body() createPhoneDto: CreatePhoneDto) {
    return this.phonesService.create(createPhoneDto);
  }

  @Get()
  findAll(@Query() paginationDto:PaginationDto) {
    return this.phonesService.findAll(paginationDto);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.phonesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, 
  @Body() updatePhoneDto: UpdatePhoneDto) {
    return this.phonesService.update(id, updatePhoneDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.phonesService.remove(id);
  }
}
