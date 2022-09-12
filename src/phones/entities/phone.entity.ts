import { Contact } from "src/contacts/entities/contact.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Phone {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column('varchar', {length: 80})
    phone: string;

    @ManyToOne(
        () => Contact,
        (contact) => contact.phones
    )
    contact:Contact;
}