import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { appContext } from "../App";
export default function Header() {
  const { user, setUser, cart, products,orders } = useContext(appContext);
  const items = products.filter((value) => cart[value.id] > 0);
  console.log(items);
  return (
    <div className="App-Header-Row">
      <div>React Store</div>
      <div>
        <Link to={"/"}>Home</Link>-
        <Link to={"/cart"}>Cart({items.length})</Link>-
        <Link to={"/orders"}>Orders({orders.length})</Link>-
        {user.email === "" ? (
          <Link to={"/login"}>Login</Link>
        ) : (
          <Link
            to={"/login"}
            onClick={() =>
              setUser({ ...user, name: "", email: "", password: "" })
            }
          >
            Logout
          </Link>
        )}
      </div>
    </div>
  );
}