import { Router } from "express";

import {
  usersListGet,
  usersCreateGet,
  usersCreatePost,
} from "../controllers/userController.js";
export const userRouter = Router();

userRouter.get("/", usersListGet);
userRouter.get("/create", usersCreateGet);
userRouter.post("/create", usersCreatePost);
