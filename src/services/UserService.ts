import { IUserRepository } from "./UserRepository";
import { getRepository } from 'typeorm';
import { IPerson } from '../models/Person';
import { Person } from "../entities/Person";

export class UserService implements IUserRepository {

    async get(): Promise<Person[] | null> {
        try {
            const userRepository = getRepository(Person);
            const users = await userRepository.find({});
            return users;
        }
        catch (error) {
            return null
        }
    }

    async getById(id: number): Promise<Person | null> {

        const userRepository = getRepository(Person);
        try {
            const user = await userRepository.findOneOrFail({
                where: {
                    id: Number(id)
                }
            });
            return user;
        } catch (error) {
            return null;
        }
    }

    async add (model: IPerson): Promise<Person | null>  {
        const userRepository = getRepository(Person);
        try {
            const savedUser = await userRepository.save(model);
            return savedUser;
        } catch (e) {
            console.log(e);
            return Promise.reject();
        }
    }

    async update (model: IPerson, id: number): Promise<Person | null>  {
        const userRepository = getRepository(Person);

        try {
            await userRepository.update({ id }, {...model});
            return null;
        } catch (e) {
            console.log(e);
            return Promise.reject();
        }
    }

    async checkUser (model: IPerson): Promise<Person | null>  {
        const userRepository = getRepository(Person);
        const { email, password } = model;

        try {
            const findUser = await userRepository.findOne({
                where: [{ email, password }],
            });
            return findUser;
        } catch (e) {
            return Promise.reject();
        }
    }

    async delete(id: number): Promise<Person | null> {
        const userRepository = getRepository(Person);
        let user: Person;

        try {
            user = await userRepository.findOneOrFail({
                where: {
                    id: Number(id)
                }
            });
            if (user) {
                userRepository.delete({
                            id: Number(id)
                          })
            }
            return null;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

}