import { Request, Response } from "express";
import { getCSVFileParsed } from "src/services/csv-parser-service";

//This gets the details of a specific repository
export const parseFile = async (req: Request, res: Response) => {
    const parsedFile = getCSVFileParsed();
    res.send("controller");
  };