import databaseClient from "../../../../database/client";

import type { Result, Rows } from "../../../../database/client";

export type UserType = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};

class UserRepository {
  async create(user: Omit<UserType, "id">) {
    const [result] = await databaseClient.query<Result>(
      "INSERT INTO user (firstname, lastname, email, password) VALUES (?, ?, ?, ?)",
      [user.firstname, user.lastname, user.email, user.password],
    );

    return result.insertId;
  }

  async readEmails(email: string) {
    const [rows] = await databaseClient.query<Rows>(
      "select * from user where email = ?",
      [email],
    );

    return rows[0] as UserType;
  }

  async readUserByEmail(email: string) {
    const [rows] = await databaseClient.query<Rows>(
      "SELECT * FROM user WHERE email=?",
      [email],
    );
    return rows[0] as UserType;
  }
}

export default new UserRepository();
