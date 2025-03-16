import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16 bg-gradient-to-b from-primary-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Nossa Missão
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Levar a palavra de Deus e esperança para todas as pessoas, através de mensagens
            inspiradoras e momentos de reflexão.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          <div className="card text-center p-8">
            <div className="text-primary-600 text-4xl mb-4">🙏</div>
            <h3 className="text-xl font-semibold mb-4">Fé</h3>
            <p className="text-gray-600">
              Fortalecendo a conexão espiritual através da palavra de Deus
            </p>
          </div>

          <div className="card text-center p-8">
            <div className="text-primary-600 text-4xl mb-4">❤️</div>
            <h3 className="text-xl font-semibold mb-4">Amor</h3>
            <p className="text-gray-600">
              Compartilhando o amor de Cristo com todos que precisam
            </p>
          </div>

          <div className="card text-center p-8">
            <div className="text-primary-600 text-4xl mb-4">✨</div>
            <h3 className="text-xl font-semibold mb-4">Esperança</h3>
            <p className="text-gray-600">
              Levando luz e esperança para os momentos difíceis
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-soft p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Nossa História</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4">
              Nossa jornada começou com um simples propósito: criar um espaço onde as pessoas
              pudessem encontrar conforto, orientação e fortalecimento espiritual através da
              palavra de Deus.
            </p>
            <p className="text-gray-600 mb-4">
              Acreditamos que cada pessoa tem uma jornada única de fé, e nossa missão é
              apoiar cada indivíduo em seu caminho espiritual, oferecendo mensagens
              personalizadas e momentos de reflexão que tocam o coração.
            </p>
            <p className="text-gray-600">
              Através de nossa plataforma, buscamos criar uma comunidade onde a fé, o amor
              e a esperança se encontram, permitindo que cada pessoa descubra sua própria
              conexão com Deus.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;