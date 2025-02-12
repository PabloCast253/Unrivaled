import dotenv from 'dotenv';
import { Request, Response } from 'express';
import { Router } from 'express'; 
import fetch from 'node-fetch';
dotenv.config();

const router = Router();

// Use the API key from the environment variable
const API_BASE_URL = `https://superheroapi.com/api/${process.env.SUPERHERO_API_KEY}/`;

interface myParams {
  id: string;
}

interface myQuery {
  filter: string;
}

router.get("/:id", async (req: Request <myParams,{},{}, myQuery>, res: Response) => {
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

export default router;
