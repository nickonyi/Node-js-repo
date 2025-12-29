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
    .withMessage(`first name ${alphaErr}`)
    .isLength({ min: 1, max: 10 })
    .withMessage(`first name ${lengthErr}`),
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
      return res.status(400).render("error", {
        title: "Create user",
        errors: errors.array(),
      });
    }

    const { firstName, lastName } = matchedData(req);
    userStorage.addUser({ firstName, lastName });
    res.redirect("/");
  },
];
