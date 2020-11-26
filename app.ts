import express from 'express';
import { json, urlencoded } from 'body-parser';
import apiVersion1 from './router/v1';
import responses  from './services/utility/responses';

const { WELCOME, PAGE_NOT_FOUND } = responses;

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));
app.use('/api/v1', apiVersion1);

app.get('/', (req, res) => {
  res.send(WELCOME);
});

app.use((req, res) => {
  res.status(404).send(PAGE_NOT_FOUND);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

export default app;
