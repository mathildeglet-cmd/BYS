import databaseClient from "../../../../database/client";

import type { Result, Rows } from "../../../../database/client";

export type ProgramType = {
  title: string;
  image: string;
  description: string;
};

class ProgramRepository {
  async create(newProgram: ProgramType) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO program (title, image, description) VALUES (?, ?, ?)",
      [newProgram.title, newProgram.image, newProgram.description],
    );
    return result.insertId;
  }
}

export default new ProgramRepository();
