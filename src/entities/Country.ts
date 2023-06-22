import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
	OneToMany,
	JoinTable,
} from 'typeorm';
import { Person } from './Person';

@Entity('country')
export class Country extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({
        nullable: true
    })
	name: string;

	@Column()
	country_code: string;

    @CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;

	@OneToMany(() => Person, (user) => user.country_code)
    person: Person

}