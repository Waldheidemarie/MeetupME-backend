import express from 'express';
import dbConfig from './config/db';
import middlewareConfig from './config/middleware';
import { MeetupRoutes, GroupRoutes } from './modules';

const app = express();

/**
  DATABASE
**/
dbConfig();

/**
  MIDDLEWARE
**/
middlewareConfig(app);

app.use('/api', [MeetupRoutes, GroupRoutes]);

const PORT = process.env.PORT || 3000;

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Listening on port ${PORT}!`);
  }
});
