import { Country } from "../entities/Country";

export interface ICountryRepository {
     getAll(): Promise<Country[] | null> 
     getById(id: number): Promise<Country | null>;
     addCountry(country: Country): Promise<Country | null>;
}