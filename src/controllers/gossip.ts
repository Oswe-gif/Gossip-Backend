import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
const getGossip = (req: Request, res: Response) => {
  try {
  } catch (e: unknown) {
    if (e instanceof Error) {
      handleHttp(res, "ERROR_GET_GOSSIP: " + e.message);
    }
  }
};

const getGossips = (req: Request, res: Response) => {};

const postGossip = (req: Request, res: Response) => {
  try {
  } catch (e: unknown) {
    if (e instanceof Error) {
      handleHttp(res, "ERROR_GET_GOSSIP: " + e.message);
    }
  }
};

export { getGossip, postGossip };
