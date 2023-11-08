import User from "../models/userModel.js";
import Followers from "../models/FollowerModels.js";

const myFollowers = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;

    const sender = await User.findById(senderId);
    const receiver = await User.findById(receiverId);

    if (!sender || !receiver) {
      return res.status(404).json({ message: "User not found" });
    }

    const followerUser = new Followers({
      senderId: sender._id,
      receiverId: receiver._id,
    });
    await followerUser.save();

    // sender.following.push(receiverId);
    // await sender.save();

    // receiver.followers.push(senderId);
    // await receiver.save();

    sender.following.push({
      user: sender?._id,
      firstName: sender?.firstName,
      lastName: sender?.lastName,
      avatar: sender?.avatar,
      id: sender?.id,
    });
    await sender.save();

    receiver.followers.push({
      user: receiver?._id,
      firstName: receiver?.firstName,
      lastName: receiver?.lastName,
      avatar: receiver?.avatar,
      id: receiver?.id,
    });
    await receiver.save();

    return true;
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

export { myFollowers };
