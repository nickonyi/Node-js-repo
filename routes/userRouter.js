import { Router } from "express";

import {
  usersListGet,
  usersCreateGet,
  usersCreatePost,
  usersUpdateGet,
  usersUpdatePost,
  userDelete,
} from "../controllers/userController.js";
export const userRouter = Router();

userRouter.get("/", usersListGet);
userRouter.get("/create", usersCreateGet);
userRouter.post("/create", usersCreatePost);
userRouter.get("/:id/update", usersUpdateGet);
userRouter.post("/:id/update", usersUpdatePost);
userRouter.post("/:id/delete", userDelete);
