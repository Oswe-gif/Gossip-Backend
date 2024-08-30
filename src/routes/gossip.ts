import { Request, Response, Router } from "express";

const gossipRouter = Router();
gossipRouter.get("/", (req: Request, res: Response) => {
  res.send({ data: "gossip " });
});

export { gossipRouter };
