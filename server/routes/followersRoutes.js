import express from "express";
import passport from "passport";
import { myFollowers } from "../controllers/followersController.js";

const router = express.Router();

router.post(
  "/followers-list",
  passport.authenticate("jwt", { session: false }),
  myFollowers
);

export default router;
