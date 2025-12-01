import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Briefcase, Star } from 'lucide-react';

const About: React.FC = () => {
    const features = [
        {
            icon: <Briefcase className="w-8 h-8 text-secondary-500" />,
            title: "Fé e Negócios",
            description: "Unimos princípios bíblicos com estratégias empresariais para transformar vidas."
        },
        {
            icon: <Heart className="w-8 h-8 text-secondary-500" />,
            title: "Testemunhos Reais",
            description: "Histórias impactantes de empreendedores que viveram milagres em suas jornadas."
        },
        {
            icon: <Star className="w-8 h-8 text-secondary-500" />,
            title: "Propósito Maior",
            description: "Priorizamos o relacionamento com Deus acima de qualquer sucesso financeiro."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold font-serif text-primary-900 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Sobre o Podcast
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-600 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        O <strong>Cristão Empreendedor</strong> é um podcast que explora a jornada de fé de empreendedores cristãos.
                        Nossa missão é inspirar você através de conversas profundas sobre como Deus atua no mundo dos negócios.
                        Focamos em entregar conteúdo para quem está atarefado demais na rotina, lembrando que o verdadeiro sucesso começa no altar.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="bg-primary-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary-900 mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
