import { useState } from "react";
import ProductTable from "./components/ProductTable.jsx";
import SearchBar from "./components/SearchBar.jsx";

function App() {
  const [products, setProducts] = useState([
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
  ]);

  const filteredProducts = (name, onlyInStock) => {
    console.log("Filtering for:", name, onlyInStock);
  };

  return (
    <div>
      <SearchBar onSearch={filteredProducts} />
      <ProductTable products={products} />
    </div>
  );
}

export default App;

