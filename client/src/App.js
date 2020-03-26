import React from 'react';
import { Home } from './pages/Home';
import { QuestionPage } from './pages/QuestionPage';
import { GlobalProvider } from './context/GlobalState';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'



function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/question/:id" component={QuestionPage} />
          </Switch>
        </div>
      </Router>

    </GlobalProvider>
  );
}

export default App;
