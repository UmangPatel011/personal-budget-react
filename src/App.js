import React, { useEffect } from 'react';
import './App.css';
import Chart from 'chart.js';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import AboutPage from './AboutPage/AboutPage';
import LoginPage from './LoginPage/LoginPage';

function App() {
  return (
    <Router>
      <Menu />
      <Hero />
      <div className='MainContainer'>
        <Switch>
          <Route path='/about'>
            <AboutPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <Route path='/'>
            <HomePage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

const MyPieChart = ({ data }) => {
  useEffect(() => {
    // Access a canvas element and create a Pie Chart
    const ctx = document.getElementById('myPieChart').getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: data.labels,
        datasets: [{
          data: data.values,
          backgroundColor: ['red', 'green', 'blue'], // Add more colors as needed
        }],
      },
    });
  }, [data]);

  return (
    <div>
      <canvas id="myPieChart" width="400" height="400"></canvas>
    </div>
  );
};

export default App;
