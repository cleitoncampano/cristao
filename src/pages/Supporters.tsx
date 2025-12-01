import React from 'react';
import { motion } from 'framer-motion';

const Supporters: React.FC = () => {
    // Logos de empresas simuladas (usando URLs de logos reais para demonstração)
    const supporters = [
        {
            name: "Microsoft",
            logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
            category: "Tecnologia"
        },
        {
            name: "Google",
            logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
            category: "Tecnologia"
        },
        {
            name: "Amazon",
            logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
            category: "E-commerce"
        },
        {
            name: "Coca-Cola",
            logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg",
            category: "Bebidas"
        },
        {
            name: "Nike",
            logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
            category: "Esportes"
        },
        {
            name: "Apple",
            logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
            category: "Tecnologia"
        }
    ];

    return (
        <div className="min-h-screen pt-52 pb-20 bg-white relative">
            {/* Subtle textured background overlay */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(220,38,38,0.08),transparent_50%)]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Hero Section */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold font-serif text-gray-900 mb-6 leading-tight">
                            Nossos <span className="text-secondary-500">Apoiadores</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Empresas e marcas que acreditam na nossa missão de conectar fé e negócios,
                            inspirando empreendedores cristãos em todo o Brasil.
                        </p>
                    </motion.div>
                </div>

                {/* Supporters Grid */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {supporters.map((supporter, index) => (
                            <motion.div
                                key={index}
                                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col items-center justify-center hover:-translate-y-2"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                            >
                                <div className="w-full h-24 flex items-center justify-center mb-4">
                                    <img
                                        src={supporter.logo}
                                        alt={supporter.name}
                                        className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                    />
                                </div>
                                <span className="text-sm text-gray-500 font-medium">{supporter.category}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <motion.div
                    className="mt-20 text-center bg-gray-50 p-12 rounded-3xl shadow-lg max-w-4xl mx-auto border border-gray-200"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Seja um Apoiador</h3>
                    <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                        Sua empresa também pode fazer parte desta missão! Entre em contato e descubra
                        como apoiar o Podcast Cristão Empreendedor.
                    </p>
                    <a
                        href="mailto:contato@podcastcristaoempreendedor.com.br"
                        className="inline-flex items-center gap-2 bg-secondary-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-secondary-600 transition-all duration-300 shadow-lg hover:shadow-secondary-500/50 hover:scale-105"
                    >
                        Quero Apoiar
                    </a>
                </motion.div>
            </div>
        </div>
    );
};

export default Supporters;
