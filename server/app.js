import express from 'express';
import morgan from 'morgan';
import path from 'path';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));
app.use(express.static(path.resolve(__dirname, '..', 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

export default app;
