import React from "react";
import Todo from "../components/Todo" ;
import Likes from "../components/Likes" ;
import NotFoundPage from "../components/NotFoundPage";
import LocalStorage from "../components/LocalStorage";
import {BrowserRouter, Route, Switch, Link, NavLink} from 
"react-router-dom";

const TodoRouter = () => 
<BrowserRouter>

<Switch>
<Route exact path="/" component ={Todo} />
<Route path="/likesApp" component ={Likes} />
<Route path="/localStorage" component ={LocalStorage} />
<Route component={NotFoundPage} />
</Switch>

</BrowserRouter>

export default TodoRouter;