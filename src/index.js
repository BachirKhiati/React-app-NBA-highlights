import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';


//Componenents
import Home from './components/home';
import Team from './components/team';

const App = ()=>{
    return(
        <BrowserRouter>
        <div>
        <Route exact path="/" component={Home} ></Route>
        <Route path="/team/:teamName" component={Team} ></Route>
        </div>
        </BrowserRouter>
    );
};






ReactDOM.render(<App/>, document.getElementById('root'));
