import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
	OneToOne,
	JoinTable,
} from 'typeorm';
import { Country } from './Country';

@Entity('person')
export class Person extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
        nullable: true
    })
	first_name: string;

	@Column()
	last_name: string;

	@Column({
        nullable: true
    })
	country_code: string;

	@Column({
        nullable: true
    })
	password: string;

	@Column({
		unique: true,
	})
	email: string;

	@Column({
		unique: true,
		length: 10,
	})
	card_number: string;

    @CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@OneToOne(() => Country, (country) => country.country_code)
	country: Country
}