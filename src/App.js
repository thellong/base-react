import "./App.scss";
import Header from "./components/Header/Header";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <button>
        <Link to="/users">User</Link>
      </button>
      <button>
        <Link to="/admins">Admin</Link>
      </button>
    </div>
  );
};

export default App;
