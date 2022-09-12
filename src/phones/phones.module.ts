import { Module } from '@nestjs/common';
import { PhonesService } from './phones.service';
import { PhonesController } from './phones.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Phone } from './entities/phone.entity';

@Module({
  controllers: [PhonesController],
  providers: [PhonesService],
  imports: [TypeOrmModule.forFeature([Phone])],
  exports: [PhonesService, TypeOrmModule],
})
export class PhonesModule {}
