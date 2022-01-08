import AllReports from "./pages/AllReports";
import SingleReport from "./pages/SingleReport";
import Form from "./pages/Form";

import React, { useState, useEffect } from "react";

import { Route, Switch, Link } from "react-router-dom";

function App(props) {

  const h1 = {
    textAlign: "center",
    margin: "10px",
  };

  const button = {
    backgroundColor: "navy",
    display: "block",
    margin: "auto",
  };

  const url = "https://backend-spends.herokuapp.com/spends/";

  const [reports, setReports] = useState([]);

  const nullSpend = {
    concept: "",
    amount: "",
    details: "",
    date: "",
  };

  const [targetSpend, setTargetSpend] = useState(nullSpend);
  //////////////
// Functions
//////////////

const getSpends = async () => {
  const response = await fetch(url);
  const data = await response.json();
  setReports(data);
};

const addSpends = async (newSpend) => {
  await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSpend),
  });
  getSpends();
};


const getTargetSpend = (spend) => {
  setTargetSpend(spend);
  props.history.push("/edit");
};

const updateSpend = async (spend) => {
  await fetch(url + spend.id + "/", {
    method: "put",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(spend),
  });

  getSpends();
};

const deleteSpend = async (spend) => {
  await fetch(url + spend.id + "/", {
    method: "delete",
  });

  getSpends();
  props.history.push("/");
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
     <Link to="/new"><button style={button}>Create New Report</button></Link>
      <Switch>
        <Route
          exact
          path="/"
          render={(routerProps) => <AllReports {...routerProps} reports={reports} />}
        />
        <Route
          path="/report/:id"
          render={(routerProps) => (
            <SingleReport {...routerProps} 
            reports={reports} 
            edit={getTargetSpend}
            deleteSpend={deleteSpend}/>
          )}
        />
        <Route
          path="/new"
          render={(routerProps) => (
          <Form 
            {...routerProps} 
            initialSpend={nullSpend}
            handleSubmit={addSpends}
            buttonLabel="Add report"
          />)}
        />
        <Route
          path="/edit"
          render={(routerProps) => (
          <Form {...routerProps} 
          initialSpend={targetSpend}
          handleSubmit={updateSpend}
          buttonLabel="update Report"/>)}
        />
      </Switch> 

    </div>
  );
}

export default App;
