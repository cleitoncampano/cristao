import React from 'react';
import { Play } from 'lucide-react';

const Episodes: React.FC = () => {
    // Placeholder data for episodes
    const episodes = [
        {
            id: 1,
            title: "A Jornada da Fé nos Negócios",
            guest: "João Silva",
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop",
            duration: "45 min"
        },
        {
            id: 2,
            title: "Superando Crises com Oração",
            guest: "Maria Oliveira",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
            duration: "52 min"
        },
        {
            id: 3,
            title: "Empreendedorismo e Propósito",
            guest: "Pedro Santos",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop",
            duration: "40 min"
        }
    ];

    return (
        <section className="py-20 bg-gray-50 relative">
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_50%)]" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-2">Últimos Episódios</h2>
                        <p className="text-gray-600">Assista aos nossos encontros mais recentes.</p>
                    </div>
                    <a href="https://www.youtube.com/@PodcastCrist%C3%A3oEmpreendedor" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center text-secondary-500 font-semibold hover:text-secondary-600 transition-colors">
                        Ver todos no YouTube <Play className="w-4 h-4 ml-2" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {episodes.map((episode) => (
                        <a
                            key={episode.id}
                            href="https://www.youtube.com/@PodcastCrist%C3%A3oEmpreendedor"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group cursor-pointer block"
                        >
                            <div className="relative overflow-hidden rounded-xl mb-4 shadow-md aspect-video">
                                <img
                                    src={episode.image}
                                    alt={episode.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <div className="w-12 h-12 bg-secondary-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                        <Play className="w-5 h-5 text-white ml-1 fill-white" />
                                    </div>
                                </div>
                                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                                    {episode.duration}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-secondary-500 transition-colors">
                                {episode.title}
                            </h3>
                            <p className="text-gray-600 text-sm">Convidado: {episode.guest}</p>
                        </a>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <a href="https://www.youtube.com/@PodcastCrist%C3%A3oEmpreendedor" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-secondary-500 font-semibold hover:text-secondary-600 transition-colors">
                        Ver todos no YouTube <Play className="w-4 h-4 ml-2" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Episodes;
