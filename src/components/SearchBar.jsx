import React, {useState} from 'react'
import { data } from '../data';
import { Link } from 'react-router-dom';
import "../assets/SearchBar.css"


const SearchBar = () => {
    const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);

    // Filtra las sugerencias en función de la entrada del usuario
    const filteredSuggestions = data.filter((product) =>
      product.nameProduct.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSuggestions(filteredSuggestions);

    // Activa/desactiva las sugerencias según si hay una entrada o no
    setIsActive(!!inputValue);
  };

  return (
    <div className="search-bar">
      <input
        placeholder="Buscar"
        onChange={handleInputChange}
        value={query}
      />
      {isActive && (
        <div className="suggestions">
          {suggestions.map((product) => (
            <Link to={`/detalle_producto/${product.id}`}>
            <div className="suggestion" key={product.id}>
              {product.nameProduct}
            </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchBar;