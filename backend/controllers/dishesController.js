const fs = require('fs');
const csv = require('csv-parser');

let dishes = [];

// Load CSV data at server start
fs.createReadStream('./data/indian_food.csv')
  .pipe(csv())
  .on('data', (row) => {
    dishes.push(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });

exports.getAllDishes = (req, res) => {
  res.json(dishes);
};

exports.getDishById = (req, res) => {
  const { id } = req.params;
  const dish = dishes.find(
    d => d.name.toLowerCase() === id.toLowerCase() || d.id === id
  );
  if (dish) {
    res.json(dish);
  } else {
    res.status(404).json({ message: 'Dish not found' });
  }
};

exports.suggestDishes = (req, res) => {
  const { ingredients } = req.body; // array of strings
  if (!Array.isArray(ingredients)) {
    return res.status(400).json({ message: 'Ingredients must be an array' });
  }

  const result = dishes.filter(dish => {
    const dishIngredients = dish.ingredients.toLowerCase().split(',').map(i => i.trim());
    return dishIngredients.every(i => ingredients.map(x => x.toLowerCase()).includes(i));
  });

  res.json(result);
};
