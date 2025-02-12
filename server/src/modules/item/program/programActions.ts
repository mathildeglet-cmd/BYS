import type { RequestHandler } from "express";
import programRepository from "./programRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    const newProgram = {
      title: req.body.title,
      image: req.body.image,
      description: req.body.description,
    };

    const insertId = await programRepository.create(newProgram);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

export default { add };
