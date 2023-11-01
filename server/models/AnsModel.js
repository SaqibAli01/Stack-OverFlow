import mongoose from "mongoose";

const { Schema } = mongoose;

const answerSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    // required: true,
  },
  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    // required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Answers = mongoose.model("Answers", answerSchema);

export default Answers;
