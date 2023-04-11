const express = require('express');
const addTaskItem = require('./routes/addTaskItem');

const app = express();
const port = process.env.NODE_PORT || 3000;

app.use(express.json());

app.post('/task-items', addTaskItem);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
