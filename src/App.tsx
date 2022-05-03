import React from "react";
import "./App.css";
import { NavbarComponent } from "./components/Navbar/Navbar";
import About from "./components/TabComponents/AboutComponent";
import Blog from "./components/TabComponents/BlogComponent";
import { Login } from "./components/Login/LoginComponent";
import { SearchTracking } from "./components/SearchTracking/searchTracking";
import { TokenContext } from "./context/GlobalState";
import { SearchUpload } from "./components/SearchTracking/SearchTrackingUpload";
import { SoftwareEngineering, DataScience } from "./components/TabComponents/Resumes";
import { Home } from "./components/Home/Home";


function App() {
  let [token, setToken] = React.useState("");
  function handleLogin(token: string) {
    setToken(token);
    localStorage.setItem('token', token);
  }
  const getStyles = (): string => { if (tab === "home" || tab === "") { return "background" } else { return "App background" } }

  const [tab, setTab] = React.useState("");
  const getTab = () => {
    if (tab === "about") {
      return <About />;
    } else if (tab === "blog") {
      return <Blog />;
    } else if (tab === "home") {
      return <Home />;
    } else if (tab === "login") {
      return <Login login={handleLogin} />
    } else if (tab === "logout") {
      localStorage.setItem('token', "");
      return <SearchUpload />
    } else if (tab === "searchTracking") {
      return <SearchTracking />
    } else if (tab === "dsresume") {
      return <DataScience />
    } else if (tab === "csresume") {
      return <SoftwareEngineering />
    } else {
      return <Home />;
    }
  };
  return (
    <div className={getStyles()}>
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
