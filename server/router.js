import { Router } from 'express';
import * as fileHandler from './request-handler.js';
import auth from './auth.js';
import multer from 'multer';

const storage1 = multer.diskStorage({
    destination: './profile',
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });
  
  const upload1 = multer({ storage: storage1 }).fields([
    { name: 'profile', maxCount: 1 },
  ]);
  
  const router = Router();
  
  router.route('/register').post(upload1, fileHandler.registerUser);
  router.route('/login').post(fileHandler.login);
export default router;
