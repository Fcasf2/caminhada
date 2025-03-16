import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { motion } from 'framer-motion';

const Donations = () => {
  const [copySuccess, setCopySuccess] = useState('');
  const pixKey = "exemplo@email.com"; // Substitua pela chave PIX real
  
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopySuccess('Chave PIX copiada!');
      setTimeout(() => setCopySuccess(''), 2000);
    } catch (err) {
      setCopySuccess('Falha ao copiar!');
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Faça uma Doação
        </h1>
        <p className="text-xl text-gray-600">
          Sua contribuição nos ajuda a continuar espalhando a palavra de Deus
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">QR Code PIX</h2>
          <div className="flex justify-center mb-6">
            <QRCodeSVG
              value={pixKey}
              size={200}
              level="H"
              includeMargin={true}
            />
          </div>
          <p className="text-center text-gray-600">
            Escaneie o QR Code acima com seu aplicativo bancário
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Chave PIX
          </h2>
          <div className="mb-6">
            <div className="bg-gray-100 p-4 rounded-md text-center">
              <p className="font-mono text-lg mb-4">{pixKey}</p>
              <button
                onClick={handleCopyClick}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
              >
                {copySuccess || 'Copiar Chave PIX'}
              </button>
            </div>
          </div>
          <p className="text-center text-gray-600">
            Copie a chave PIX acima e cole no seu aplicativo bancário
          </p>
        </motion.div>
      </div>

      <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          Por que doar?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Apoio à Missão</h3>
            <p className="text-gray-600">
              Sua doação ajuda a manter e expandir nosso trabalho de evangelização
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Impacto Social</h3>
            <p className="text-gray-600">
              Contribua para projetos sociais e ajude pessoas necessitadas
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Crescimento Espiritual</h3>
            <p className="text-gray-600">
              Participe ativamente na propagação da palavra de Deus
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donations;