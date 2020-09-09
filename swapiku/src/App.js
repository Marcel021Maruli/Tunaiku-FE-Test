import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navbar from "./components/navbar"
import FilmPage from "./pages/filmPage"
import CharacterPage from "./pages/characterPage"
import DetailsPage from './pages/details'

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/film">
            <FilmPage />
          </Route>
          <Route path="/character">
            <CharacterPage />
          </Route>
          <Route path="/details">
            <DetailsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
