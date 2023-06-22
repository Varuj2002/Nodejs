import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	BaseEntity,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

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
}