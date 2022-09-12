import { IsString, MaxLength } from "class-validator";

export class CreatePhoneDto {

    @IsString()
    contact:{id:string};

    @IsString()
    @MaxLength(80)
    phone: string;
}
