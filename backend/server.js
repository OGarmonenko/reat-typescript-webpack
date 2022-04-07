const express = require('express');
const recordRouter = require('./routes/recordRoute');
const port = 3033;
const app = express();

app.use(express.json());

app.use('/record', recordRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
