"use client";
import React from "react";
import Posts from "./compenents/Posts";
import Post from "./compenents/Post";
import Container from "@mui/material/Container";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Container>
      <div className="App">
         <Router>
      <Routes>
        <Route path="/" exact Component={Posts}></Route>
        <Route path="/Post/:id" Component={Post}></Route>
      </Routes>
    </Router>
      </div>
    </Container>
  );
}

export default App;