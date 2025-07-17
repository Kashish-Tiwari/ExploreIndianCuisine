// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export default function Header() {
//   const [query, setQuery] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (query.length > 1) {
//       axios
//         .get(`http://localhost:5000/api/dishes`)
//         .then(res => {
//           const matches = res.data.filter(d =>
//             d.name.toLowerCase().includes(query.toLowerCase()) ||
//             d.ingredients.toLowerCase().includes(query.toLowerCase()) ||
//             d.region.toLowerCase().includes(query.toLowerCase())
//           );
//           setSuggestions(matches.slice(0, 5));
//         });
//     } else {
//       setSuggestions([]);
//     }
//   }, [query]);

//   const handleSelect = (name) => {
//     navigate(`/dish/${name}`);
//     setQuery('');
//     setSuggestions([]);
//   };

//   return (
//     <header className="bg-white shadow p-4 flex flex-col">
//       <input
//         type="text"
//         placeholder="Search dishes..."
//         className="border p-2 rounded"
//         value={query}
//         onChange={e => setQuery(e.target.value)}
//       />
//       {suggestions.length > 0 && (
//         <div className="bg-white border rounded mt-1">
//           {suggestions.map(s => (
//             <div
//               key={s.name}
//               className="p-2 hover:bg-gray-100 cursor-pointer"
//               onClick={() => handleSelect(s.name)}
//             >
//               {s.name}
//             </div>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// }

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Header() {
  console.log('✅ Header component is rendering...');

  // This will throw an error immediately if no Router context is found:
  const navigate = useNavigate();
  console.log('✅ useNavigate() hook is working!');

  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    console.log('🔍 useEffect triggered, query =', query);
    if (query.length > 1) {
      axios
        .get(`http://localhost:5000/api/dishes`)
        .then(res => {
          const matches = res.data.filter(d =>
            d.name.toLowerCase().includes(query.toLowerCase()) ||
            d.ingredients.toLowerCase().includes(query.toLowerCase()) ||
            d.region.toLowerCase().includes(query.toLowerCase())
          );
          console.log('🔍 Found matches:', matches);
          setSuggestions(matches.slice(0, 5));
        })
        .catch(err => console.error('❌ Error fetching dishes:', err));
    } else {
      setSuggestions([]);
    }
  }, [query]);

  const handleSelect = (name) => {
    console.log('👉 Navigating to dish:', name);
    navigate(`/dish/${name}`);
    setQuery('');
    setSuggestions([]);
  };

  return (
    <header className="bg-white shadow p-4 flex flex-col">
      <input
        type="text"
        placeholder="Search dishes..."
        className="border p-2 rounded"
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      {suggestions.length > 0 && (
        <div className="bg-white border rounded mt-1">
          {suggestions.map(s => (
            <div
              key={s.name}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(s.name)}
            >
              {s.name}
            </div>
          ))}
        </div>
      )}
    </header>
  );
}

