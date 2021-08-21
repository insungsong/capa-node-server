/**
 * 앱에서 사용하는 환경변수를 설정하는 파일입니다.
 *
 * @author InsungSong, Inc.
 * @packageDocumentation
 */

let certs = null;

let dbconfig = {};
try {
  dbconfig = require("./config/db.config");
} catch (e) {}

const isDev = process.env.NODE_ENV === "development";
const isTest = process.env.NODE_ENV === "test";

if (isTest) {
  dbconfig = {
    // dropSchema: true,
    logging: false
  };
}

module.exports = {
  PORT: process.env.PORT || 8080,
  DEV: isDev,
  DATABASE: {
    type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    ...dbconfig
  }
};
