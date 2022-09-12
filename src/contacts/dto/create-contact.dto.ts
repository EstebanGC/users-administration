
import { IsArray, IsBoolean, IsOptional, IsString, MaxLength } from "class-validator";
import { Phone } from "src/phones/entities/phone.entity";

export class CreateContactDto {

    @IsString()
    user:{id:string};

    @IsString()
    @MaxLength(80)
    name: string;

    @IsString()
    @MaxLength(80)
    surname: string;

    @IsBoolean()
    status:boolean;

    @IsArray()
    @IsOptional()
    phones:Phone[];
}
