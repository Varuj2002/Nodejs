import express from 'express';
import CountryController from '../controllers/CountryController';
import UserController from '../controllers/UserController';

const router = express.Router();

router.get('/api/getUser/:id', UserController.getById);
router.post('/api/user', UserController.createUser);
router.post('/api/deleteUser/:id', UserController.deleteUser);
router.get('/api/getUsers', UserController.getAll);
router.put('/api/userUpdate/:id', UserController.updateUser);
router.get('/api/login', UserController.login);
router.post('/api/createCountry', CountryController.createCountry);

export default router;