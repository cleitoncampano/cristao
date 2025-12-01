import React from 'react';
import Hero from '../components/Home/Hero';
import About from '../components/Home/About';
import Episodes from '../components/Home/Episodes';

const Home: React.FC = () => {
    return (
        <div className="min-h-screen">
            <Hero />
            <About />
            <Episodes />
        </div>
    );
};

export default Home;
