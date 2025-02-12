import databaseClient from "../../../../database/client";

import type { Result, Rows } from "../../../../database/client";

export type ProgramType = {
  title: string;
  description: string;
};

class ProgramRepository {
  async create(newProgram: ProgramType) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO program (title, description) VALUES (?, ?)",
      [newProgram.title, newProgram.description],
    );
    return result.insertId;
  }

  async read() {
    const [row] = await databaseClient.query<Result>("SELECT * FROM program");
    return row;
  }
}

export default new ProgramRepository();
