import React from 'react';
import { Mic, DollarSign, Gift, ArrowRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Participate: React.FC = () => {
    const opportunities = [
        {
            icon: <Mic className="w-12 h-12 text-white" />,
            title: "Seja um Convidado",
            description: "Compartilhe sua história com Jesus ou indique alguém com um testemunho impactante.",
            action: "Quero ser convidado",
            gradient: "from-secondary-500 to-secondary-600"
        },
        {
            icon: <DollarSign className="w-12 h-12 text-white" />,
            title: "Seja um Patrocinador",
            description: "Apoie o projeto com sua marca e receba exposição em todos os episódios e canais.",
            action: "Quero patrocinar",
            gradient: "from-gray-700 to-gray-900"
        },
        {
            icon: <Gift className="w-12 h-12 text-white" />,
            title: "Contribuições",
            description: "Colabore com brindes, serviços ou apoio financeiro conforme Deus tocar em seu coração.",
            action: "Quero contribuir",
            gradient: "from-secondary-600 to-red-900"
        }
    ];

    return (
        <div className="min-h-screen pt-52 pb-20 bg-white relative">
            {/* Subtle textured background overlay */}
            <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(220,38,38,0.08),transparent_50%)]" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Hero Section */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-bold font-serif text-gray-900 mb-6 leading-tight">
                            Participe do <span className="text-secondary-500">Projeto</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Existem várias formas de você fazer parte desta missão de inspirar e transformar vidas através da fé e do empreendedorismo.
                        </p>
                    </motion.div>
                </div>

                {/* Opportunities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
                    {opportunities.map((item, index) => (
                        <motion.div
                            key={index}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                        >
                            {/* Icon Section with Gradient */}
                            <div className={`bg-gradient-to-br ${item.gradient} p-12 flex justify-center items-center relative overflow-hidden`}>
                                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
                                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="p-8 text-center">
                                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-secondary-500 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 mb-8 min-h-[100px] leading-relaxed">
                                    {item.description}
                                </p>
                                <button className={`inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${item.gradient} text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-secondary-500/30 transition-all duration-300 w-full group-hover:scale-105`}>
                                    {item.action}
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact Section */}
                <motion.div
                    className="mt-20 text-center bg-gray-50 p-12 rounded-3xl shadow-lg max-w-4xl mx-auto border border-gray-200 relative overflow-hidden"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Subtle glow effect */}
                    <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.2),transparent_70%)]" />

                    <div className="relative z-10">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary-500 rounded-full mb-6">
                            <Mail className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Entre em Contato</h3>
                        <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                            Se sentir no coração que deve participar, estamos abertos para receber seu apoio. Vamos juntos espalhar a palavra de Deus através do empreendedorismo.
                        </p>
                        <a
                            href="mailto:contato@podcastcristaoempreendedor.com"
                            className="inline-flex items-center gap-2 bg-secondary-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-secondary-600 transition-all duration-300 shadow-lg hover:shadow-secondary-500/50 hover:scale-105"
                        >
                            <Mail className="w-5 h-5" />
                            Enviar uma Mensagem
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Participate;
