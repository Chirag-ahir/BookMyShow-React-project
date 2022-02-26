import React from "react";
import Header from "./components/Header/Header";
import ImageSlider from "./components/ImageSlider";
import CardsSlider from "./components/CardsSlider";
import Premieres from "./components/Premieres";
import Footer from "./components/Footer";
import AllMovies from "./components/AllMovies";


import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <ImageSlider />
            <CardsSlider />
            <Premieres />
          </Route>

          <Route excat path="/movies">
            <AllMovies />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
