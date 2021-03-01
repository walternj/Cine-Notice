import React from "react"
import {
  Switch,
  Route,
} from "react-router-dom"

import { Home, FilmDetails, MyList, Profil, Login } from '../pages'

const Routes = () => (
  <Switch>
    <Route path="/" exact >
      <Home />
    </Route>
    <Route path="/details" >
      <FilmDetails />
    </Route>
    <Route path="/mylist" >
      <MyList />
    </Route>
    <Route path="/profil" >
      <Profil />
    </Route>
    <Route path="/login" >
      <Login />
    </Route>
  </Switch>
)

export default Routes
