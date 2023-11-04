import mongoose from "mongoose";

const { Schema } = mongoose;

const answerSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    // required: true,
  },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    // required: true,
  },
  QuestionAuthor: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  verifiedAnswers: {
    type: Boolean,
    default: false,
  },
});

const Answers = mongoose.model("Answers", answerSchema);

export default Answers;
