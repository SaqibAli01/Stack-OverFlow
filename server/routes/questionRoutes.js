import express from "express";
import passport from "passport";
import {
  askAnswer,
  askQuestion,
  correctAnswer,
  getAnswer,
  getQuestions,
  getSingleUserAnswer,
  getSingleUserQuestion,
} from "../controllers/QuestionController.js";

const router = express.Router();

router.post(
  "/ask-question",
  passport.authenticate("jwt", { session: false }),
  askQuestion
);

router.post(
  "/ask-answer",
  passport.authenticate("jwt", { session: false }),
  askAnswer
);

router.get("/get-question", getQuestions);
router.post("/get-answer", getAnswer);

router.post(
  "/verify-ans",
  passport.authenticate("jwt", { session: false }),
  correctAnswer
);

router.post("/get-single-user-ans", getSingleUserAnswer);
router.post("/get-single-user-que", getSingleUserQuestion);
export default router;
