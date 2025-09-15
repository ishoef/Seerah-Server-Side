import User from "../models/User.js";

// @desc    Create a new user or return existing
// @route   POST /api/users
export const createUser = async (req, res) => {
  try {
    const { uid, email } = req.body;

    // Check if the user already exists
    let user = await User.findOne({ uid });

    if (!user) {
      // First-time login: create user
      user = await User.create(req.body);
      return res.status(201).json(user);
    } else {
      // User already exists: optionally update last login or extraData
      user.extraData = req.body.extraData || user.extraData;
      await user.save();
      return res.status(200).json(user);
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Server Error" });
  }
};


// @desc    Get all users
// @route   GET /api/users
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// @desc    Update user
// @route   PUT /api/users/:id
export const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// @desc    Delete user
// @route   DELETE /api/users/:id
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
