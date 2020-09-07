import React, { Fragment, useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min";
import Searchbar from "./Components/Layout/SearchBar";
import Logs from "./Components/logs/Logs";
import "./App.css";
import AddBtn from "./Components/Layout/AddBtn";
import AddLogModal from "./Components/logs/AddLogModal";

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
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
