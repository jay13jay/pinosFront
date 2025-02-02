import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Home from './pages/Home';
import LocationAndHours from './pages/LocationAndHours';
import Menu from './pages/Menu';

const App = () => {
  return (
    <Router>
      <Header />
      <MainContent>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/location-and-hours" component={LocationAndHours} />
          <Route path="/menu" component={Menu} />
        </Switch>
      </MainContent>
      <Footer />
    </Router>
  );
};

export default App;