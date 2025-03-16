import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Mensagem de Fé</h3>
            <p className="text-gray-300">
              Levando esperança e amor através da palavra de Deus
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="text-gray-300 hover:text-white">
                  Quiz Espiritual
                </Link>
              </li>
              <li>
                <Link to="/doacoes" className="text-gray-300 hover:text-white">
                  Doações
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <p className="text-gray-300">
              Email: contato@mensagemde.fe<br />
              Tel: (11) 1234-5678
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} Mensagem de Fé. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;