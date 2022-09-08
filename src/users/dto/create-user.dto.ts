import { IsArray, IsObject, IsOptional, IsString, MaxLength } from "class-validator";
import { Contact } from "../entities";


export class CreateUserDto {
    @IsString()
    @MaxLength(80)
    user: string;

    @IsString()
    @MaxLength(80)
    password: string;

    @IsString({each:true})
    @IsObject()
    @IsOptional()
    contacts?: Contact[];
}
