import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Phone } from "src/phones/entities/phone.entity";
import { User } from "src/users/entities/user.entity";

@Entity()
export class Contact{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', {length:80})
    name: string;

    @Column('varchar', {length:80})
    surname: string;
 
    @Column('boolean')
    status: boolean;

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
    phones?:Phone[];
}
