const fs = require('fs');

try {
  const data = fs.readFileSync('./docs/api-doc.json', 'utf8');
  const doc = JSON.parse(data);
  console.log('Функции системы:', doc.features);
} catch (err) {
  console.error('Ошибка при чтении файла:', err);
}
