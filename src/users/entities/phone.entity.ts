import { IsArray } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contact.entity";


@Entity()
export class Phone {

    @PrimaryGeneratedColumn()
    id: number;
    
    @Column('varchar', {length: 80})
    phone: number;

    @IsArray()
    @ManyToOne(
        () => Contact,
        (contact) => contact.phones
    )
    contact:Contact;


}