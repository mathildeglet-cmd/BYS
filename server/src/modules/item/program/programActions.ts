import type { RequestHandler } from "express";
import programRepository from "./programRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    const { title, image, description } = req.body;

    const newProgram = {
      title: title,
      image: image,
      description: description,
    };
    const insertId = await programRepository.create(newProgram);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

export default { add };
