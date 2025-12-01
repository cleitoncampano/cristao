import React from 'react';
import { Instagram, Youtube, Mic } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <img src="/logo.png" alt="Cristão Empreendedor" className="h-32 w-auto" />
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://www.instagram.com/podcastcristaoempreendedor/" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-500 transition-colors">
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a href="https://www.youtube.com/@PodcastCrist%C3%A3oEmpreendedor" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-500 transition-colors">
                            <Youtube className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:text-secondary-500 transition-colors">
                            <Mic className="w-6 h-6" />
                        </a>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Podcast Cristão Empreendedor. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
