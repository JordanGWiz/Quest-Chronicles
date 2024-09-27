const { User } = require("../models");

const userData = [
  {
    username: "pythonPanda",
    email: "panda@codeforest.com",
    password: "Bamboo123",
  },
  {
    username: "javaJaguar",
    email: "jaguar@devjungle.com",
    password: "FastPaws456",
  },
  {
    username: "rubyRaven",
    email: "raven@rubywing.com",
    password: "DarkFeather789",
  },
  {
    username: "cssCheetah",
    email: "cheetah@stylerun.com",
    password: "SpeedyStyles321",
  },
  {
    username: "nodeNighthawk",
    email: "hawk@nodeflight.com",
    password: "NightCode654",
  },
  {
    username: "reactRaccoon",
    email: "raccoon@frontendpro.com",
    password: "CodeNinja987",
  },
];

const seedUsers = async () => {
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
};

module.exports = seedUsers;
