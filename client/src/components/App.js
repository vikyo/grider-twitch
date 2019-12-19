import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => <div>Page 1</div>;

const PageTwo = () => <div>Page 2</div>;

const App = () => (
    <BrowserRouter>
        <div>Hello</div>
        <Route exact path='/page1' component={PageOne} />
        <Route exact path='/page2' component={PageTwo} />
    </BrowserRouter>
);

export default App;
