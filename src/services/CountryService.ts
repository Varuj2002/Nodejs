import { getRepository } from 'typeorm';
import { Country } from "../entities/Country";
import { ICountryRepository } from "./CountryRepository";
import { ICountry } from '../models/Country';

export class CountryService implements ICountryRepository {

    async getAll(): Promise<Country[] | null> {
        try {
            const countryRepository = getRepository(Country);
            const users = await countryRepository.find({});
            return users;
        }
        catch (error) {
            return null
        }
    }

    async getById(id: number): Promise<Country | null> {

        const countryRepository = getRepository(Country);
        try {
            const user = await countryRepository.findOneOrFail({
                where: {
                    id: Number(id)
                }
            });
            return user;
        } catch (error) {
            return null;
        }
    }

    async addCountry (country: ICountry): Promise<Country | null>  {
        const countryRepository = getRepository(Country);
        try {
            const savedUser = await countryRepository.save(country);
            return savedUser;
        } catch (e) {
            console.log(e);
            return Promise.reject();
        }
    }

}