import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {User} from "../models/User.js";
import { Request, Response } from "express";

export const signup = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await User.create({ username, email, password: hashedPassword });
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: "User already exists" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });

  if (!user) return res.status(400).json({ error: "User not found" });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).json({ error: "Invalid credentials" });

  const token = jwt.sign({ id: user.id }, "secretkey", { expiresIn: "1h" });
  res.json({ token, username: user.username });
};
