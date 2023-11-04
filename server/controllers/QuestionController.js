import Answers from "../models/AnsModel.js";
import Question from "../models/questionModel.js";
import User from "../models/userModel.js";

const askQuestion = async (req, res) => {
  try {
    const { text, id } = req.body;
    console.log("req.body id:", id);
    console.log("user", id);
    const findUser = await User.findOne({ _id: id });

    console.log("-- users --:", findUser);

    if (!findUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not Login " });
    }

    const question = new Question({
      text,
      user: findUser?._id,
    });

    await question.save();

    res.status(201).json({
      success: true,
      message: "Question asked successfully!",
      question,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const getQuestions = async (req, res) => {
  try {
    const questions = await Question.find().populate({
      path: "user",
      select: "_id firstName lastName avatar",
    });

    res.status(200).json({
      success: true,
      data: questions,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const askAnswer = async (req, res) => {
  try {
    const { text, userId, questionId, QuestionAuthor } = req.body;
    // console.log("text:", text);
    // console.log("userId:", userId);
    // console.log("questionId:", questionId);

    const findUser = await User.findOne({ _id: userId });
    const findQuestion = await Question.findOne({ _id: questionId });

    console.log("-- questionId --:", findQuestion);

    if (!findUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not Login " });
    }

    if (!findQuestion) {
      return res
        .status(404)
        .json({ success: false, message: "Question Not find " });
    }

    const answer = new Answers({
      text,
      user: findUser?._id,
      questionId: findQuestion?._id,
      QuestionAuthor: findQuestion?.user?._id,
    });
    console.log("answer", answer);
    await answer.save();

    res.status(201).json({
      success: true,
      message: "Answer asked successfully!",
      answer,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
const correctAnswer = async (req, res) => {
  try {
    const id = req.body;

    const findAuth = await Answers.findOne({ QuestionAuthor: id });

    if (!findAuth) {
      return res
        .status(404)
        .json({ success: false, message: "Answer Not found ......... " });
    }

    // await User.findByIdAndUpdate(user._id, { verified: true });
    await Answers.findByIdAndUpdate({ verified: true });

    res
      .status(200)
      .json({
        success: true,
        message: "Answers Verify successfully",
        data: findAuth,
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
};

const getAnswer = async (req, res, next) => {
  try {
    const { questionId } = req.body;
    // console.log("req.body", req.body);
    // console.log("questionId", questionId);

    const answers = await Answers.find({ questionId }).populate({
      path: "user",
      select: "_id firstName lastName avatar",
      options: { strictPopulate: false },
    });

    res.status(200).json({
      success: true,
      data: answers,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export { askQuestion, getQuestions, askAnswer, getAnswer, correctAnswer };
