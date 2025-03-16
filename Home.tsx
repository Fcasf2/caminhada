import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HeartIcon, SparklesIcon } from '@heroicons/react/24/outline';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 to-white/40 backdrop-blur-sm" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Encontre Paz e Renovação Espiritual
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Um espaço sagrado para fortalecer sua fé e receber mensagens personalizadas
            que tocam o coração
          </p>
          <Link
            to="/quiz"
            className="btn-primary inline-flex items-center space-x-2 text-lg"
          >
            <SparklesIcon className="h-5 w-5" />
            <span>Receber Mensagem Personalizada</span>
          </Link>
        </motion.div>
      </section>

      {/* Versículo do Dia */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-semibold mb-8 text-gray-900">
              Palavra do Dia
            </h2>
            <blockquote className="text-xl italic text-gray-700 mb-4">
              "O Senhor é o meu pastor; nada me faltará. Deitar-me faz em pastos verdejantes;
              guia-me mansamente a águas tranquilas."
            </blockquote>
            <p className="text-gray-600">Salmos 23:1-2</p>
          </motion.div>
        </div>
      </section>

      {/* Subtle Donation Section */}
      <section className="py-12 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link
              to="/doacoes"
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
            >
              <HeartIcon className="h-5 w-5" />
              <span className="text-sm font-medium">Apoie Nossa Missão</span>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;