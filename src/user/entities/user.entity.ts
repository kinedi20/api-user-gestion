import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class User {

@PrimaryGeneratedColumn()
id: number;


@Column()
firstname: string;

@Column()
lastname: string;

@Column()
role: string;

@Column()
address: string;

@Column()
phone: string;

@Column()
email: string;

@Column()
status: boolean;


@Column()
password: string;

}