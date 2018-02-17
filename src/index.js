import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';


//Componenents
import Home from './components/home';
import Teams from './components/teams';
import Team from './components/team';

const App = ()=>{
    return(
        <BrowserRouter>
        <div>
        <Route exact path="/" component={Home} ></Route>
        <Route exact path="/teams" component={Teams} ></Route>
        <Route exact path="/team/:id" component={Team} ></Route>
        </div>
        </BrowserRouter>
    );
};






ReactDOM.render(<App/>, document.getElementById('root'));
