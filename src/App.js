import React, { Fragment, useEffect } from "react";
import Searchbar from "./Components/Layout/SearchBar";
import Logs from "./Components/logs/Logs";
import AddBtn from "./Components/Layout/AddBtn";
import AddLogModal from "./Components/logs/AddLogModal";
import EditLogModal from "./Components/logs/EditLogoModal";
import AddTechModal from "./Components/techs/AddTechModal";
import M from "materialize-css/dist/js/materialize.min";
import TechListModal from "./Components/techs/TechListModal";
import "materialize-css/dist/css/materialize.min.css";
import "./App.css";

const App = () => {
  useEffect(() => {
    // Init Materilaize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <Searchbar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
