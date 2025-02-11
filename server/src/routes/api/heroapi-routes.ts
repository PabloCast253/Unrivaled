import dotenv from 'dotenv';
import { Request, Response } from 'express';
dotenv.config();

const express = require("express");
const fetch = require("node-fetch");

const app = express();

// Use the API key from the environment variable
const API_BASE_URL = `https://superheroapi.com/api/${process.env.SUPERHERO_API_KEY}/`;

interface myParams {
  id: string;
}

interface myQuery {
  filter: string;
}

app.get("/api/character/:id", async (req: Request <myParams,{},{}, myQuery>, res: Response) => {
  const { id } = req.params;
  const { filter } = req.query;
  try {
    const response = await fetch(`${API_BASE_URL}${id}`);
    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch character data" });
    }
    const data = await response.json();
    res.json(data);
    console.log(JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
