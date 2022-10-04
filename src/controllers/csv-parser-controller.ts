import { Request, Response } from "express";
import { getCSVFileParsed } from "../services/csv-parser-service";

//This gets the details of a specific repository
export const parseFile = async (req: Request, res: Response, next) => {
  try {
    const parsedFile: string[] = await getCSVFileParsed(req.params["sentence"]);

    if (parsedFile.length != 0) {
      return res.json(parsedFile); //returns the array as a json object
    }
    return res.status(404) //returns this if no word matches
      .json({
        status: 404,
        message: "word not found"
      })
  } catch (err) {
    next(err); // sends server related errors
  }
};