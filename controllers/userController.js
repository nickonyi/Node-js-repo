import { userStorage } from "../storage/userStorage.js";
import { body, validationResult, matchedData, query } from "express-validator";

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
  body("email").isEmail().withMessage("Enter a valid email address"),
  body("age")
    .optional()
    .isInt({ min: 18, max: 120 })
    .withMessage("Age must be a number between 18 and 120"),
  body("bio")
    .optional()
    .isLength({ max: 120 })
    .withMessage("bio must be maximum 200 characters"),
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

    const { firstName, lastName, email, age, bio } = matchedData(req);
    userStorage.addUser({ firstName, lastName, email, age, bio });
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
  res.redirect("/");
};

export const searchUser = (req, res) => {
  //get the name from the query
  const name = req.query.name;
  //fetch the users
  const people = userStorage.getUsers();
  //check if the name matches any of the users in my list
  const exists = people.filter(
    (person) =>
      person.firstName.toLowerCase() === name.toLowerCase() ||
      person.lastName.toLowerCase() === name.toLowerCase()
  );
  if (!exists) {
    return res.status(404).render("notFound", {
      title: "User Not Found",
      message: "The user you are trying to update does not exist.",
      backLink: "/users",
    });
  }

  res.render("search", {
    query: name,
    results: exists,
  });
};
