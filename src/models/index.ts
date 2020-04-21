
import { Sequelize } from 'sequelize';

const db = 'ts_express';
const username = 'root';
const password = 'aaaaaa';

const sequelize = new Sequelize(db, username, password, {
  host: '127.0.0.1',
  dialect: "mysql",
  port: 3306,
});

sequelize.authenticate();

export default sequelize;