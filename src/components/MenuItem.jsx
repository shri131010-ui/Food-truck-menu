import "./MenuItem.css";

function MenuItem({ item, onDelete }) {
  return (
    <div className="menu-card">
      <img src={item.image} alt={item.name} />

      <div className="menu-info">
        <h2>{item.name}</h2>

        <p>{item.category}</p>
        </div>

       <div className="card-footer">
  <h3>₹ {item.price}</h3>

  <button
    className="delete-btn"
    onClick={() => onDelete(item.id)}
    aria-label={`Delete ${item.name}`}
  >
     Delete
  </button>
    </div>
    </div>
  );
}

export default MenuItem;