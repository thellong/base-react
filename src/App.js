import "./App.scss";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="sidenav-container"></div>
      </div>
      <div className="app-content">
        {/* 
          Bên trong cha, muốn render con ở chỗ nào -- outlet chỗ đó.
          Outlet tag specify the place, where the child component
          will be renderted within the parent component.
        */}
        <Outlet />
      </div>
    </div>
  );
};

export default App;
