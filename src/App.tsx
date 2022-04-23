import React from "react";
import "./App.css";
import { NavbarComponent } from "./components/Navbar/Navbar";
import { ITodos } from "./components/TodoComponents/TodosComponent";
import About from "./components/TabComponents/AboutComponent";
import Blog from "./components/TabComponents/BlogComponent";
import { Login } from "./components/Home/LoginComponent";
import { SearchTracking } from "./components/Home/searchTracking";
import { TokenContext } from "./context/GlobalState";
import { SearchUpload } from "./components/Home/SearchTrackingUpload";


function App() {
  let [token, setToken] = React.useState("");
  function handleLogin(token: string) {
    setToken(token);
    localStorage.setItem('token', token);
  }

  const [tab, setTab] = React.useState("");
  const getTab = () => {
    if (tab === "about") {
      return <About />;
    } else if (tab === "blog") {
      return <Blog />;
    } else if (tab === "login") {
      return <Login login={handleLogin} />
    } else if (tab === "logout") {
      localStorage.setItem('token', "");
      return <SearchUpload />
    } else if (tab === "search_tracking") {
      return <SearchTracking />
    } else if (tab === "search_tracking_upload") {
      return <SearchUpload />
    } else {
      return <></>;
    }
  };
  return (
    <div className="App background">
      <div className="App-content">
        <TokenContext.Provider value={{ token: token }}>
          <NavbarComponent
            changeTab={(newTab: any) => {
              setTab(newTab);
            }}
          />
        </TokenContext.Provider>
        {getTab()}
      </div>
    </div>
  );
}
export default App;
