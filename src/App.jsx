// import React from 'react';
import { Element } from 'react-scroll';


import Navbar from "./component/layout/Navbar";
// import Header from "./component/layout/Header";
import Introduce from "./component/Introduce";
import About from "./component/About";
import Education from "./component/Education";
import Skill from "./component/Skill";
import Speciality from "./component/Speciality";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Footer from "./component/layout/Footer";
import "./App.css";

function App() {
    return (
      <div className="overflow-hidden">
        <Element name='home' className="mb-[20px]">
            <header>
                <Navbar/>
            </header>
        </Element>
        <section className="relative mt-30 after:absolute after:-top-1/2 after:-right-20 after:-z-10 after:bg-[#8750f7] after:size-80 after:rounded-full after:blur-[150px] after:opacity-60">
            <Introduce/>
        </section>
        <Element name='information'>
            <section>
                <About/>
            </section>
        </Element>
        <Element>
            <Education/>
        </Element>
        <Element name='services'>
            <section>
                <Speciality/>
            </section>
        </Element>
        <Element className="">
            <Skill/>
        </Element>
        <Element name='project'>
            <section>
                <Project/>
            </section>
        </Element>
        <Element name='contact'>
            <section className="bg-[#050709]">
                <Contact/>
            </section>
        </Element>
        <footer className="bg-[#140c1c] ">
            <Footer/>
        </footer>
      </div>
    )
}

export default App