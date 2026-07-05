import MenuItem from "./MenuItem";
import "./Menu.css";

function Menu({ menuItems, onDelete }) {
  return (
    <div className="menu-container">
      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          item={item}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default Menu;