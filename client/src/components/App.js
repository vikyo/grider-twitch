import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => <div>Page 1</div>;

const PageTwo = () => <div>Page 2</div>;

const App = () => (
    <BrowserRouter>
        <Route exact path='/' component={PageOne} />
        <Route exact path='/page2' component={PageTwo} />
    </BrowserRouter>
);

export default App;

// import all the stream files and  wireup the route
//put semantic ui
