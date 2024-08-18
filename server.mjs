import express from 'express';
import path from 'path';

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`client start port ${PORT}`);
});
