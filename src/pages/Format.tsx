import React from 'react';
import { Clock, Calendar, MessageCircle, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const Format: React.FC = () => {
  const details = [
    {
      icon: <Calendar className="w-10 h-10 text-white" />,
      title: "Frequência",
      description: "Episódios novos toda segunda-feira para começar sua semana inspirado."
    },
    {
      icon: <Clock className="w-10 h-10 text-white" />,
      title: "Duração",
      description: "40 a 60 minutos de conversa profunda e edificante."
    },
    {
      icon: <MessageCircle className="w-10 h-10 text-white" />,
      title: "O que abordamos",
      description: "Relacionamento com Deus, milagres, decisões de negócios e desafios superados."
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-white" />,
      title: "Encerramento",
      description: "Insights práticos e um momento especial de oração."
    }
  ];

  return (
    <div className="min-h-screen pt-52 pb-20 bg-white relative">
      {/* Subtle textured background overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_20%,rgba(220,38,38,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(220,38,38,0.08),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h1
            className="text-5xl md:text-6xl font-bold font-serif text-gray-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            O <span className="text-secondary-500">Formato</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Entenda como estruturamos nossos episódios para entregar o máximo de valor espiritual e profissional.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {details.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-start space-x-6 border border-gray-200 group hover:-translate-y-1"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 p-4 rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-secondary-500 transition-colors">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Format;
