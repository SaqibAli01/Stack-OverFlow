import Answers from "../models/AnsModel.js";
import Comment from "../models/commentModel.js";
import Question from "../models/questionModel.js";
import User from "../models/userModel.js";

const askQuestion = async (req, res) => {
  try {
    const { text, id } = req.body;
    // console.log("req.body id:", id);
    // console.log("user", id);
    const findUser = await User.findOne({ _id: id });

    // console.log("-- users --:", findUser);

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

const deleteQuestion = async (req, res) => {
  try {
    const { QuestionId } = req.params;

    const findQuestion = await Answers.findById(QuestionId);

    if (!findQuestion) {
      return res
        .status(404)
        .json({ success: false, message: "Question not found" });
    }

    // const findAnswer = await Answers.findById(answerId);

    // if (!findAnswer) {
    //   return res
    //     .status(404)
    //     .json({ success: false, message: "Answer not found" });
    // }
    await Answers.deleteMany({ questionId: findQuestion?._id });
    await Comment.deleteMany({ questionId: findQuestion?._id });

    // await Answers.findByIdAndDelete(answerId);

    await Question.findByIdAndUpdate(findQuestion._id, {
      $inc: { answerCount: -1 },
    });

    return res.status(200).json({
      success: true,
      message: "Question  deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

const askAnswer = async (req, res) => {
  try {
    const { text, userId, questionId, QuestionAuthor } = req.body;

    const findUser = await User.findOne({ _id: userId });
    const findQuestion = await Question.findOne({ _id: questionId });

    if (!findUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    if (!findQuestion) {
      return res
        .status(404)
        .json({ success: false, message: "Question not found" });
    }

    const answerCount = await Answers.countDocuments({
      questionId: findQuestion?._id,
    });

    // Increment the view count for the new answer
    const view = (findQuestion.viewCount += 1);

    findQuestion.viewCount += 1;
    await findQuestion.save();

    console.log("🚀 view:", view);

    const answer = new Answers({
      text,
      user: findUser?._id,
      answerCount: answerCount,
      questionId: findQuestion?._id,
      QuestionAuthor: findQuestion?.user?._id,
    });

    await answer.save();

    await Question.findByIdAndUpdate(findQuestion._id, {
      answerCount: answerCount,
    });

    // res.status(201).json({
    //   success: true,
    //   message: "Answer asked successfully!",
    //   answer,
    //   answerCount,
    //   viewCount: findQuestion.viewCount,
    // });

    res.status(201).json({
      success: true,
      message: "Answer asked successfully!",
      answer,
      answerCount,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const deleteAnswer = async (req, res) => {
  try {
    const { answerId } = req.params;

    const findAnswer = await Answers.findById(answerId);

    if (!findAnswer) {
      return res
        .status(404)
        .json({ success: false, message: "Answer not found" });
    }

    await Comment.deleteMany({ answerId: answerId });

    await Answers.findByIdAndDelete(answerId);

    await Question.findByIdAndUpdate(findAnswer.questionId, {
      $inc: { answerCount: -1 },
    });

    return res.status(200).json({
      success: true,
      message: "Answer and associated comments deleted successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

// const deleteAnswer = async (req, res) => {
//   try {
//     const { answerId } = req.params;

//     const findAnswer = await Answers.findById(answerId);

//     if (!findAnswer) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Answer not found" });
//     }

//     await Answers.findByIdAndDelete(answerId);
//     await Question.findByIdAndUpdate(findAnswer.questionId, {
//       $inc: { answerCount: -1 },
//     });

//     return res
//       .status(200)
//       .json({ success: true, message: "Answer deleted successfully" });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ success: false, error: error.message });
//   }
// };

const correctAnswer = async (req, res) => {
  try {
    const { answerId } = req.body;
    console.log("🚀 req.body:", req.body);

    const findAuth = await Answers.findOne({ _id: answerId });
    // console.log(" ~ findAuth:", findAuth);

    if (!findAuth) {
      return res
        .status(404)
        .json({ success: false, message: "Answer Not found ......... " });
    }

    await Answers.findByIdAndUpdate(answerId, {
      verifiedAnswers: true,
    });

    res.status(200).json({
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
    const findQuestion = await Question.findOne({ _id: questionId });
    findQuestion.viewCount += 1;
    await findQuestion.save();
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

const getSingleUserAnswer = async (req, res, next) => {
  try {
    const { userId } = req.body;
    console.log("userId", userId);
    // const findAnswer = await Answers.findOne({ _id: userId });

    const AllAnswer = await Answers.find({ user: userId }).populate({
      path: "user",
      select: "_id firstName lastName avatar",
      options: { strictPopulate: false },
    });

    res.status(200).json({
      success: true,
      data: AllAnswer,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const getSingleUserQuestion = async (req, res, next) => {
  try {
    const { userId } = req.body;
    console.log("userId", userId);
    // const findAnswer = await Answers.findOne({ _id: userId });

    const AllQuestion = await Question.find({ user: userId }).populate({
      path: "user",
      select: "_id firstName lastName avatar",
      options: { strictPopulate: false },
    });

    res.status(200).json({
      success: true,
      data: AllQuestion,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export {
  askQuestion,
  getQuestions,
  askAnswer,
  getAnswer,
  correctAnswer,
  getSingleUserAnswer,
  getSingleUserQuestion,
  deleteAnswer,
  deleteQuestion,
};
