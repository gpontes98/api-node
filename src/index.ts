import express, { Request, Response } from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

app.get("/languages", async (req: Request, res: Response) => {
  try {
    const response = await axios.get("http://db-sqlite:8000/languages");
    const data = response.data;
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro na requisição" });
  }
});

app.listen(PORT, () => {
  console.log("API rodando na porta 3000");
});
