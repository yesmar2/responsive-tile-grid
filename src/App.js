import React from "react";
import { Route } from "react-router-dom";
import Grid from "components/Grid";
import SearchBar from "./SearchBar";

import circles1 from "data/circles1.json";
import circles2 from "data/circles2.json";

import "./App.css";

const App = () => (
    <div className="app">
        {/* <SearchBar /> */}
        <Route exact path="/" render={() => <Grid circles={circles1} />} />
        <Route exact path="/1" render={() => <Grid circles={circles2} />} />
    </div>
);

export default App;
