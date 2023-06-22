import { Request, Response } from 'express';
import { CountryService } from '../services/CountryService';
const service = new CountryService();
class CountryController {

  public static getAllCountries = (req: Request, res: Response) => {
    service.getAll().then(countries => {
          return res.json(countries)
    }).catch(err => {})
  }

  public static createCountry = (req: Request, res: Response) => {
    service.addCountry(req.body).then(country => {
      if (country) {
        res.json(country);
      }
    }).catch(err => {})
  }


  public static getById = (req: Request, res: Response) => {
  const {id}  = req.params
  service.getById(Number(id)).then(country => {
      return res.json(country);
  }).catch(err => {})
}

}

export default CountryController;