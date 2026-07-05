import "./CategoryFilter.css";

function CategoryFilter({ category, setCategory }) {
  return (
    <div className="filter-container">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        aria-label="Filter by category"
      >
        <option value="All">All</option>
        <option value="Burger">Burger</option>
        <option value="Pizza">Pizza</option>
        <option value="Sandwich">Sandwich</option>
        <option value="Drinks">Drinks</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default CategoryFilter;