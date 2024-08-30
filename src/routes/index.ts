import { Router } from "express";
import { gossipRouter } from "./gossip";

const router = Router();
router.use("/gossips", gossipRouter);

export { router };
