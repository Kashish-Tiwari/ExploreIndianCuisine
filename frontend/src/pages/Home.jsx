import React, { useState, useEffect } from 'react';
import DishesTable from '../components/DishesTable';
import DishSuggester from '../components/DishSuggester';
import axios from 'axios';

export default function Home() {
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/dishes').then(res => {
      setDishes(res.data);
    });
  }, []);

  return (
    <div className="space-y-8">
      <DishesTable dishes={dishes} />
      <DishSuggester />
    </div>
  );
}
