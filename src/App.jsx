import "./App.css";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Menu from "./components/Menu";
import AddItemForm from "./components/AddItemForm";
import Loading from "./components/Loading";
import CategoryFilter from "./components/CategoryFilter";
import menuData from "./data/menuData";
import Footer from "./components/Footer";

function App() {

  const [menuItems, setMenuItems] = useState(menuData);

  const [searchTerm, setSearchTerm] = useState("");

  const [loading, setLoading] = useState(true);
 
  const [category, setCategory] = useState("All");
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const filteredItems = menuItems.filter((item) => {
  const matchesSearch = item.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase());

  const matchesCategory =
    category === "All" || item.category === category;

  return matchesSearch && matchesCategory;
});

  const handleAddItem = (item) => {
    setMenuItems([...menuItems, item]);
  };
  const handleDelete = (id) => {
  setMenuItems(menuItems.filter((item) => item.id !== id));
};

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <Header />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
         <CategoryFilter
  category={category}
  setCategory={setCategory}
/>

      <AddItemForm onAddItem={handleAddItem} />

      <Menu
  menuItems={filteredItems}
  onDelete={handleDelete}
/><Footer />
    </div>
  );
}

export default App;