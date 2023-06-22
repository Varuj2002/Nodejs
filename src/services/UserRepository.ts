import { Person } from "../entities/Person";

export interface IUserRepository {
     get(): Promise<Person[] | null>;
     getById(id: number): Promise<Person | null>;
     add(user: Person): Promise<Person | null>;
     delete(id: number): Promise<Person | null>;
     update (model: Person, id: number): Promise<Person | null>;
}