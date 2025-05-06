import React, { useState, useEffect } from "react";
import axios from "axios";

const MultiSelectSearch = () => {
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Fetch data from API
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users") // Replace with your API
      .then((res) => setOptions(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // Filter options based on search query
  useEffect(() => {
    if (query === "") {
      setFilteredOptions([]);
    } else {
      setFilteredOptions(
        options.filter((option) =>
          option.name.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  }, [query, options]);

  // Handle selection
  const handleSelect = (option) => {
    if (!selectedOptions.find((item) => item.id === option.id)) {
      setSelectedOptions([...selectedOptions, option]);
    }
    setQuery("");
  };

  // Handle removing selected item
  const handleRemove = (id) => {
    setSelectedOptions(selectedOptions.filter((item) => item.id !== id));
  };

  return (
    <div className="w-80 mx-auto my-5 relative">
      {/* Selected Items */}
      <div className="flex flex-wrap gap-2 p-2 border rounded bg-white">
        {selectedOptions.map((item) => (
          <span key={item.id} className="bg-blue-500 text-white px-3 py-1 rounded flex items-center">
            {item.name}
            <button
              className="ml-2 text-white hover:text-red-400"
              onClick={() => handleRemove(item.id)}
            >
              ✕
            </button>
          </span>
        ))}
        <input
          type="text"
          className="flex-1 p-2 border-none focus:ring-0"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Dropdown Options */}
      {filteredOptions.length > 0 && (
        <ul className="absolute w-full bg-white border mt-1 rounded shadow-md max-h-40 overflow-y-auto">
          {filteredOptions.map((option) => (
            <li
              key={option.id}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleSelect(option)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MultiSelectSearch;
