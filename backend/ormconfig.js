const { DATABASE } = require("./env.config");

module.exports = [
  {
    ...DATABASE,
    synchronize: true,
    entities: ["server/models/**/*.entity.{js,ts}"]
  }
];
