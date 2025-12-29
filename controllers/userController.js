import { userStorage } from "../storage/userStorage.js";
import { body, validationResult, matchedData } from "express-validator";

const alphaErr = " Must only contain alphabet errors";
const lengthErr = "Must only be between 1 and 10 characters";

const validateUser = [
  body("firstName")
    .trim()
    .isAlpha()
    .withMessage(`first name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`first name ${lengthErr}`),
  body("lastName")
    .trim()
    .isAlpha()
    .withMessage(`last name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`last name ${lengthErr}`),
];

export const usersListGet = (req, res) => {
  res.render("index", {
    title: "Users List",
    users: userStorage.getUsers(),
  });
};
export const usersCreateGet = (req, res) => {
  res.render("createUser", {
    title: "create user",
  });
};
export const usersCreatePost = [
  validateUser,
  (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).render("createUser", {
        title: "Create user",
        errors: errors.array(),
      });
    }

    const { firstName, lastName } = matchedData(req);
    userStorage.addUser({ firstName, lastName });
    res.redirect("/");
  },
];

export const usersUpdateGet = (req, res) => {
  const user = userStorage.getUser(req.params.id);
  res.render("updateUser", {
    title: "Update User",
    user: user,
  });
};
export const usersUpdatePost = [
  validateUser,
  (req, res) => {
    const user = userStorage.getUser(req.params.id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("updateUser", {
        title: "UPdate user",
        user: user,
        errors: errors.array(),
      });
    }
    const { firstName, lastName } = matchedData(req);
    userStorage.updateUser(req.params.id, { firstName, lastName });
    res.redirect("/");
  },
];

export const userDelete = (req, res) => {
  userStorage.deleteUser(req.params.id);
  res.render("/");
};
