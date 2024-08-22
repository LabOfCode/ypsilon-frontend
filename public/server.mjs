import express from 'express';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Определение пути к текущему модулю и его директории
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Использование __dirname для определения пути к статическим файлам
//app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
