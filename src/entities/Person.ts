import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
	OneToOne,
	JoinTable,
	JoinColumn,
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

	

	@Column({
		nullable: true

	})
	countryId: string;

    @CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@OneToOne(() => Country, (country) => country.country_code)
	@JoinColumn({ name: 'countryId', referencedColumnName: 'id' })
	// @JoinColumn({ country_code: 'country_code', referencedColumnName: 'country_code' })
	country: Country
}