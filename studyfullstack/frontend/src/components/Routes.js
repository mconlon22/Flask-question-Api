import React from 'react';
import TopicFinder from "./Questions/Searcher/TopicFinder.js";
import Searcher from "./PastPaper/Searcher/Searcher.js";
import Register from './accounts/Register'
import Login from './accounts/Login'
import Questions from './Questions/Questions/Questions'

const Home = () => {
  return (
    <h1>Home</h1>
  );
};

const Standings = () => {
  return (
    <h1>Standings</h1>
  );
};

const Teams= () => {
  return (
    <h1>Teams</h1>
  );
};

const Routes = [
 {
    path: '/',
    sidebarName: 'Home',
    component: Searcher
  },
  {
    path: '/ExamPapers',
    sidebarName: 'Home',
    component: Searcher
  },
  {
    path: '/PapersByTopic',
    sidebarName: 'TopicFinder',
    component: TopicFinder
  },
   {
    path: '/Register',
    sidebarName: 'Register',
    component: Register
  },
  {
    path: '/Login',
    sidebarName: 'Login',
    component: Login
  },
  {
    path: '/Questions',
    sidebarName: '',
    component: Questions
  }
  
];

export default Routes;