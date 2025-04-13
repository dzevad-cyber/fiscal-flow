import app from './server.ts';

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server listening. ${process.env.NODE_ENV}:${PORT}`)
);
