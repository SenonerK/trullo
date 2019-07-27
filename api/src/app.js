import express from 'express';

// own pkgs
// import log from './util/logger';
import sectionRoute from './routes/sections';
import cardRoute from './routes/card';

const app = express();

app.use('/api/section', sectionRoute);
app.use('/api/card', cardRoute);

export default app;
