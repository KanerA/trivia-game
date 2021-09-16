require("dotenv").config();
const { Op } = require("sequelize");
const { country, question, saved_question, User } = require("./models");
const sequelize = require("sequelize");
const jwt = require("jsonwebtoken");
const { hashSync, compare } = require("bcrypt");
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

const getQuestion = async (req, res) => {
  const result = await question.findOne({
    order: sequelize.literal("rand()"),
  });
  const questionObject = {};
  const selectedQuestion = result.dataValues;
  const column = selectedQuestion.columns;
  questionObject.question = selectedQuestion.template;
  questionObject.desc = selectedQuestion.desc;
  let countries;
  switch (selectedQuestion.type) {
    case 1:
      countries = await country.findAll({
        attributes: ["country", column],
        where: {
          [column]: {
            [Op.ne]: null,
          },
        },
        order: sequelize.literal("rand()"),
        limit: 4,
      });
      const answer1 = countries
        .sort((a, b) => {
          if (selectedQuestion.desc) return b[column] - a[column];
          return a[column] - b[column];
        })
        .slice(0, 1);
      questionObject.answer = answer1[0].country;
      questionObject.options = countries.map(
        (countryData) => countryData.dataValues.country
      );
      res.json(questionObject);
      break;
    case 2:
      countries = await country.findAll({
        attributes: ["country", column],
        where: {
          [column]: {
            [Op.ne]: null,
          },
        },
        group: column,
        order: sequelize.literal("rand()"),
        limit: 4,
      });
      let randomIndex = Math.floor(Math.random() * 4);
      const replacementWord = countries[randomIndex].dataValues.country;
      questionObject.question = questionObject.question.replace(
        "~X~",
        replacementWord
      );
      questionObject.options = countries.map(
        (countryData) => countryData.dataValues[column]
      );
      const answer2 = countries.filter((country) => {
        // filter with the country in the question to get the right country object
        if (replacementWord === country.dataValues.country)
          return country.dataValues[column];
      })[0].dataValues[column]; // filter returns an array and we want the first and basically the only object in the array // gets the value of the answer
      questionObject.answer = answer2;
      res.json(questionObject);
      break;
    case 3:
      countries = await country.findAll({
        attributes: ["country", column],
        where: {
          [column]: {
            [Op.ne]: null,
          },
        },
        order: sequelize.literal("rand()"),
        limit: 2,
      });
      let randomIndex3 = Math.floor(Math.random() * 2);
      const firstCountry = countries[randomIndex3].dataValues;
      const secondCountry = countries[1 - randomIndex3].dataValues;
      questionObject.question = questionObject.question.replace(
        "~X~",
        firstCountry.country
      );
      questionObject.question = questionObject.question.replace(
        "~Y~",
        secondCountry.country
      );
      questionObject.options = ["true", "false"];
      // numerical based options, if the first country's value in the question is bigger than
      // the second country's value, the answer is true, otherwise , false
      const answer3 =
        firstCountry[column] - secondCountry[column] > 0 ? "true" : "false";
      questionObject.answer = answer3;
      res.json(questionObject);
      break;
  }
};

const saveRatedQuestion = async (req, res) => {
  console.log("hi");
  try {
    const { body } = req;
    const savedQuery = {
      where: {
        [Op.and]: {
          question: {
            [Op.eq]: body.question,
          },
          option_1: {
            [Op.eq]: body.option_1,
          },
          option_2: {
            [Op.eq]: body.option_2,
          },
          option_3: {
            [Op.eq]: body.option_3,
          },
          option_4: {
            [Op.eq]: body.option_4,
          },
        },
      },
    };
    const saved = await saved_question.findOne(savedQuery);
    if (!saved) {
      body.vote_count = 1;
      await saved_question.create(body); // saves the question in the saved_question table
      res.status(200).json({ message: "Question saved successfully" });
    } else {
      const updatedObj = body;
      const newRating =
        (saved.rating * saved.vote_count + body.rating) /
        (saved.vote_count + 1);
      updatedObj.rating = newRating;
      updatedObj.vote_count = saved.vote_count + 1;
      await saved_question.update(updatedObj, savedQuery);
      res.status(200).json({ message: "update" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const userLogin = async (req, res) => {
  const { name, password } = req.body;
  const user = await User.findOne({
    where: {
      name: name,
    },
  });
  if (!user)
    return res
      .status(201)
      .json({ message: "User doesn't exist, please sign up" });
  const isPasswordCorrect = await compare(password, user.password);
  if (!isPasswordCorrect) return res.sendStatus(403);
  const payload = {
    name: user.name,
    password: user.password,
  };
  const refreshToken = jwt.sign(payload, REFRESH_TOKEN_SECRET);
  const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, {
    expiresIn: "10m",
  });
  res.json({
    accessToken,
    refreshToken,
    id: user.id,
  });
};

const createUser = async (req, res) => {
  // ----------- POST - /quiz/user
  const { body } = req;
  if (!body.name)
    return res.status(400).json({ message: "no name was specified" });
  const isExist = await User.findOne({
    where: {
      name: body.name,
    },
  });
  if (isExist) return res.status(200).json({ message: "Name already exist" });
  const hashedPW = hashSync(body.password, 10);
  const user = await User.create({
    name: body.name,
    password: hashedPW,
    score: 0,
  });
  const payload = {
    name: user.name,
    password: user.password,
  };
  const refreshToken = jwt.sign(payload, REFRESH_TOKEN_SECRET);
  const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, {
    expiresIn: "10m",
  });
  const id = user.id;
  res.status(201).json({ accessToken, refreshToken, id });
};

const updateUserScore = async (req, res) => {
  //------ PATCH - /quiz/user
  const { body } = req;
  try {
    const userScore = body.score;
    const updatedUser = await User.update(
      { score: userScore },
      {
        where: { id: body.id },
      }
    );
    res.json(updatedUser);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const getAllUsers = async (req, res) => {
  const users = await User.findAll({
    attributes: ["name", "score"],
    order: [["score", "DESC"]],
  });
  res.json(users);
};

module.exports = {
  getQuestion,
  saveRatedQuestion,
  createUser,
  updateUserScore,
  userLogin,
  getAllUsers,
};
