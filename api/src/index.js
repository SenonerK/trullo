import {connect} from 'mongoose';
import app from './app';
import logger from './util/logger';
import {server, db} from './config';

const start = async() => {
  try {
    // Connect to Database
    await connect(db, {useNewUrlParser: true});
    logger.info('Connected to DB');

    app.listen(server.port, () => {
      logger.info(`Running on port ${server.port}`);
    });
  } catch (err) {
    logger.error(err);
  }
};
start();
