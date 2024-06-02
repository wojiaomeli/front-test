"use client";
import React from "react";
import './globals.css';
import 'tailwindcss/tailwind.css';
import Posts from "../app/components/Posts";
import Post from "../app/components/Post";
import Container from "@mui/material/Container";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PushUpContainer from "../app/components/PushUpContainer";
import TextEffect from "./components/TextEffect";
import ContainerJumelage from "./components/ContainerJumelage";
import Banner from "./components/Banner";
import ContainerVideo from "./components/ContainerVideo";
import Macaron from "./components/Macaron";

function App() {
  return (
    <div className="App">
      <div className="w-full h-100 bg-banner-bg mb-20"> {/* Réduire mb-80 à mb-20 */}
      
        <div className="flex flex-wrap gap-10 justify-center mb-10 mx- mt-5">
          <Banner/>
        </div>

        {/* Ajout des composants PushUp */}
        <div className="flex flex-wrap gap-10 justify-center mb-5 mx-6 mt-5"> {/* Réduire mb-10 à mb-5 et mt-10 à mt-5 */}
          <PushUpContainer/>
        </div>
      </div>

      <div className="flex flex-wrap gap-8 justify-center mb-10 mx-4 mt-5"> {/* Réduire mb-20 à mb-10 et mt-10 à mt-5 */}
        <ContainerJumelage />
      </div>

      <Container className="border border-100 p-8 flex flex-col items-center justify-center"> {/* Utilisation de classes Tailwind CSS pour centrer le contenu verticalement et horizontalement */}
        <h1 className="text-4xl font-normal mb-4 text-BluFil text-center p-4">
          <span className="text-redFil">L</span>es derniers articles
        </h1>
        <Router>
          <Routes>
            <Route path="/" exact Component={Posts}></Route>
            <Route path="/Post/:id" Component={Post}></Route>
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;
