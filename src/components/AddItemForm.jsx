import { useState } from "react";
import "./AddItemForm.css";

function AddItemForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const [errors, setErrors] = useState({});

  const sanitize = (text) => {
    return text.replace(/<[^>]*>?/gm, "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!name.trim()) newErrors.name = true;
    if (!category.trim()) newErrors.category = true;
    if (!price.trim()) newErrors.price = true;

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newItem = {
      id: Date.now(),
      name: sanitize(name),
      category: sanitize(category),
      price: Number(price),
      image: "/images/burger.jpg",
    };

    onAddItem(newItem);

    console.log("[Analytics] User interacted with React Components");

    setName("");
    setCategory("");
    setPrice("");
    setErrors({});
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Food Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={errors.name ? "error" : ""}
        aria-label="Food Name"
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={errors.category ? "error" : ""}
        aria-label="Category"
      />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className={errors.price ? "error" : ""}
        aria-label="Price"
      />

      <button type="submit">
        Add Item
      </button>
    </form>
  );
}

export default AddItemForm;