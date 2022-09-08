import { truncate } from "fs";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Phone } from "./phone.entity";
import { User } from "./user.entity";

@Entity()
export class Contact{

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', {length:80})
    name: string;

    @Column('varchar', {length:80})
    surname: string;
 
    @Column('boolean')
    state: boolean;

    @ManyToOne(
        () => User,
        (user) => user.contacts
    )
    user:User;
    
    @OneToMany(
        () => Phone,
        (phone) => phone.contact,
        {cascade:true}
    )
    phones?:Phone
}