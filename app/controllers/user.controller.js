const db = require("../models");
const UserProfile = db.userProfile;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.getUserProfile = async (req, res) => {
  try {
    const profile = await UserProfile.findOne({
      where: {
        // userId: req.userId
        userId: 2
      },
      include: ["phones", "emails", "socials", "addresses"]
    });
    if (!profile) {
      return res.status(500).json({ errorMsg: "No profile found" });
    }
    return res.status(200).send(profile);

  } catch (err) {
    console.log(err);
    return res.status(500).json({ errorMsg: "Server Error" });
  }
};




