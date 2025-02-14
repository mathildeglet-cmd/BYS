import type { RequestHandler } from "express";
import programRepository from "./programRepository";

const add: RequestHandler = async (req, res, next) => {
  try {
    const newProgram = {
      title: req.body.title,
      description: req.body.description,
    };

    const insertId = await programRepository.create(newProgram);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const browse: RequestHandler = async (req, res, next) => {
  try {
    const programs = await programRepository.read();
    res.json(programs);
  } catch (error) {
    next(error);
  }
};
export default { add, browse };
