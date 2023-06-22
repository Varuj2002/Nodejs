import { Request, Response } from 'express';
import { UserService } from '../services/UserService';
const service = new UserService();
class UserController {

  public static getAll = (req: Request, res: Response) => {
    service.get().then(users => {
          return res.json(users)
    }).catch(err => {})
  }

  public static createUser = (req: Request, res: Response) => {
    service.add(req.body).then(user => {
      if (user) {
        res.json(user);
      }
    }).catch(err => {})
  }


  public static deleteUser = (req: Request, res: Response) => {
    const {id}  = req.params
    service.delete(Number(id)).then(user => {
        return res.json({
            statusCode: 200,
            message: "Deleted"
        });
    }).catch(err => {})
  }

  public static updateUser = (req: Request, res: Response) => {
  const {id}  = req.params
  service.update(req.body, Number(id)).then(user => {
      return res.json({
          statusCode: 200,
          message: "User Updated"
      });
  }).catch(err => {})
}

  public static getById = (req: Request, res: Response) => {
  const {id}  = req.params
  service.getById(Number(id)).then(user => {
      return res.json(user);
  }).catch(err => {})
}

}

export default UserController;