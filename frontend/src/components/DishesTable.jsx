import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DishesTable({ dishes }) {
  const [filter, setFilter] = useState('');
  const [sortKey, setSortKey] = useState('name');
  const [page, setPage] = useState(1);
  const perPage = 10;

  const filtered = dishes
    .filter(d => d.diet.toLowerCase().includes(filter.toLowerCase()))
    .sort((a, b) => a[sortKey].localeCompare(b[sortKey]));

  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div>
      <div className="flex gap-2 mb-2">
        <input
          placeholder="Filter by diet"
          className="border p-1"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
        <select
          value={sortKey}
          onChange={e => setSortKey(e.target.value)}
          className="border p-1"
        >
          <option value="name">Name</option>
          <option value="prep_time">Prep Time</option>
          <option value="cook_time">Cook Time</option>
        </select>
      </div>

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Diet</th>
            <th className="border p-2">Prep Time</th>
            <th className="border p-2">Cook Time</th>
          </tr>
        </thead>
        <tbody>
          {paginated.map(dish => (
            <tr key={dish.name} className="hover:bg-gray-100">
              <td className="border p-2 text-blue-600">
                <Link to={`/dish/${dish.name}`}>{dish.name}</Link>
              </td>
              <td className="border p-2">{dish.diet}</td>
              <td className="border p-2">{dish.prep_time}</td>
              <td className="border p-2">{dish.cook_time}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex gap-2 mt-2">
        <button
          disabled={page === 1}
          onClick={() => setPage(p => p - 1)}
          className="border px-2 py-1"
        >
          Prev
        </button>
        <button
          disabled={page * perPage >= filtered.length}
          onClick={() => setPage(p => p + 1)}
          className="border px-2 py-1"
        >
          Next
        </button>
      </div>
    </div>
  );
}
