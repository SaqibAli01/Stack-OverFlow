import mongoose from "mongoose";

const { Schema } = mongoose;

const followersSchema = new Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

const Followers = mongoose.model("Followers", followersSchema);

export default Followers;
