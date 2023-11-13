import express from "express";
import passport from "passport";
import {
  askAnswer,
  askQuestion,
  correctAnswer,
  deleteAnswer,
  deleteQuestion,
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

router.delete(
  "/delete-answer/:answerId",
  passport.authenticate("jwt", { session: false }),
  deleteAnswer
);

router.delete(
  "/delete-question/:questionId",
  passport.authenticate("jwt", { session: false }),
  deleteQuestion
);

export default router;
