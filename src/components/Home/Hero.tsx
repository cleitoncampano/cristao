import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Video Background Overlay */}
            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source
                        src="https://cdn.midjourney.com/video/f9ca38e2-f9af-48e0-b126-efdbba30ced0/2.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
            </div>

            {/* Content */}
            <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl font-semibold tracking-wider mb-4 uppercase text-secondary-500">
                        Conectando Fé e Negócios
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight">
                        Cristão Empreendedor
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 font-light italic">
                        "Qual a sua história com Jesus?"
                    </p>
                    <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl mx-auto">
                        Um podcast que entrevista empreendedores com grandes histórias com Jesus.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a
                            href="https://spotify.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-secondary-500 text-primary-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary-900 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <Play className="w-5 h-5 fill-current" />
                            Ouça Agora
                        </a>
                        <a
                            href="https://www.youtube.com/@PodcastCrist%C3%A3oEmpreendedor"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary-900 transition-all duration-300"
                        >
                            Assistir no YouTube
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
