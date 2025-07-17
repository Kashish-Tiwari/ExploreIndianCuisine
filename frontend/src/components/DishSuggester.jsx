import React, { useState } from 'react';
import axios from 'axios';

export default function DishSuggester() {
  const [ingredients, setIngredients] = useState('');
  const [results, setResults] = useState([]);

  const handleSuggest = () => {
    const items = ingredients.split(',').map(i => i.trim());
    axios
      .post('http://localhost:5000/api/dishes/suggest', { ingredients: items })
      .then(res => setResults(res.data));
  };

  return (
    <div className="p-4 border rounded">
      <h2 className="text-xl mb-2">Dish Suggester</h2>
      <input
        className="border p-1 w-full"
        placeholder="Enter ingredients comma separated"
        value={ingredients}
        onChange={e => setIngredients(e.target.value)}
      />
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
        onClick={handleSuggest}
      >
        Suggest Dishes
      </button>
      <ul className="mt-2 list-disc pl-5">
        {results.map(r => (
          <li key={r.name}>{r.name}</li>
        ))}
      </ul>
    </div>
  );
}
