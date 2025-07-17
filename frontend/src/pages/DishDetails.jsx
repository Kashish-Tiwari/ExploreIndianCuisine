import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function DishDetails() {
  const { name } = useParams();
  const [dish, setDish] = useState(null);
 console.log(name,'name from params');
  useEffect(() => {
    axios.get(`http://localhost:5000/api/dishes/${name}`).then(res => {
      setDish(res.data);
    });
  }, [name]);

  if (!dish) return <p>Loading...</p>;

  return (
    <div className="p-4 border rounded">
      <h1 className="text-2xl mb-2">{dish.name}</h1>
      <p><strong>Ingredients:</strong> {dish.ingredients}</p>
      <p><strong>Diet:</strong> {dish.diet}</p>
      <p><strong>Prep Time:</strong> {dish.prep_time}</p>
      <p><strong>Cook Time:</strong> {dish.cook_time}</p>
      <p><strong>Flavor:</strong> {dish.flavor_profile}</p>
      <p><strong>Course:</strong> {dish.course}</p>
      <p><strong>State:</strong> {dish.state}</p>
      <p><strong>Region:</strong> {dish.region}</p>
    </div>
  );
}
