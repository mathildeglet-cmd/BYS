import type { RequestHandler } from "express";
import UserRepository from "./UserRepository";

// const readByEmail: RequestHandler = async (req, res, next) => {
//   try {
//     // Fetch a specific item based on the provided ID
//     const userEmail = req.params.email;
//     const userInfo = await userRepository.read(userEmail);

//     // If the item is not found, respond with HTTP 404 (Not Found)
//     // Otherwise, respond with the item in JSON format
//     if (item == null) {
//       res.sendStatus(404);
//     } else {
//       res.json(item);
//     }
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

const add: RequestHandler = async (req, res, next) => {
  try {
    const newUser = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
    };
    if (!newUser) {
      res.json({
        message: "erreur lors de la récupération du formulaire",
      });
    }

    const insertId = await UserRepository.create(newUser);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

export default { add };
