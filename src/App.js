import AllReports from "./pages/AllReports";
import SingleReport from "./pages/SingleReport";
import Form from "./pages/Form";

import React, { useState, useEffect } from "react";

import { Route, Switch } from "react-router-dom";

function App(props) {

  const h1 = {
    textAlign: "center",
    margin: "10px",
  };

  const url = "https://backend-spends.herokuapp.com/spends/";

  const [reports, setReports] = useState([]);


  //////////////
// Functions
//////////////

const getSpends = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setReports(data);
};

//////////////
// useEffects
//////////////


useEffect(() => {
  getSpends();
}, []);


  return (
    <div className="App">
     <h1 style={h1}>My Spends</h1>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <AllReports {...routerProps} reports={reports} />}
        />
        <Route
          path="/report/:id"
          render={(routerProps) => (
            <SingleReport {...routerProps} reports={reports} />
          )}
        />
        <Route
          path="/new"
          render={(routerProps) => <Form {...routerProps} />}
        />
        <Route
          path="/edit"
          render={(routerProps) => <Form {...routerProps} />}
        />
      </Switch> 

    </div>
  );
}

export default App;
