import { Request, Response } from "express";
import { getCSVFileParsed } from "../services/csv-parser-service";

//This gets the details of a specific repository
export const parseFile = async (req: Request, res: Response) => {
  try {
    const parsedFile: string[] = await getCSVFileParsed(req.params["sentence"]);

    if (parsedFile.length != 0) {
      return res.json(parsedFile); //returns the array as a json object
    }
    return res.status(404)
      .json({
        status: 404,
        message: "word not found"
      })
  } catch (err) {
    throw err;
  }
};