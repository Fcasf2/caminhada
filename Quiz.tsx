import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Question {
  id: number;
  text: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "Como você tem se sentido ultimamente?",
    options: [
      "Buscando direção e propósito",
      "Enfrentando desafios",
      "Grato(a) e abençoado(a)",
      "Precisando de conforto espiritual"
    ]
  },
  {
    id: 2,
    text: "O que mais toca seu coração?",
    options: [
      "Mensagens de esperança",
      "Histórias de superação",
      "Palavras de conforto",
      "Reflexões profundas"
    ]
  },
  {
    id: 3,
    text: "Qual área da sua vida precisa de mais atenção?",
    options: [
      "Relacionamentos",
      "Vida profissional",
      "Crescimento espiritual",
      "Paz interior"
    ]
  }
];

const getPersonalizedMessage = (name: string, answers: string[]) => {
  const messages = [
    {
      title: "Uma Mensagem de Amor e Esperança",
      paragraphs: [
        `Querido(a) ${name}, que a paz do Senhor Jesus esteja contigo! Sinto em meu coração que você está passando por um momento de transformação espiritual. Como nos ensina o livro de Isaías, "Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus."`,
        
        `Veja bem, meu irmão, minha irmã, Deus conhece cada suspiro do seu coração. Quando você se sente sozinho(a), lembre-se: o Senhor está mais perto de você do que o ar que respira. Ele está tecendo uma linda história em sua vida, mesmo quando você não consegue ver o desenho completo.`,
        
        `E hoje, quero te dizer com todo amor: permita-se ser abraçado(a) por esse Deus maravilhoso. Abra seu coração como uma flor se abre para o sol da manhã. Pois assim como a chuva rega a terra e faz brotar a semente, o amor de Deus vai fazer florescer em você uma nova esperança, uma nova alegria.`
      ]
    },
    {
      title: "Um Novo Amanhecer em Cristo",
      paragraphs: [
        `${name}, meu querido(a) irmão(ã) em Cristo! Como é bonito ver sua busca por uma conexão mais profunda com o Senhor. Sabe, às vezes nos sentimos como aquela ovelha que se distanciou do rebanho, mas o nosso Bom Pastor sempre vem ao nosso encontro.`,
        
        `Neste momento, sinto que o Espírito Santo quer te dizer: você é muito mais forte do que imagina. Suas lutas não são em vão, suas orações não são em vão. Como diz em Jeremias, "Porque eu bem sei os pensamentos que tenho a vosso respeito, pensamentos de paz, e não de mal, para vos dar o fim que esperais."`,
        
        `E veja só que coisa linda: enquanto você está aqui, buscando uma palavra de conforto, Deus já está preparando uma mesa farta de bênçãos em sua vida. Continue firme, continue orando, continue acreditando. O milagre já está a caminho!`
      ]
    },
    {
      title: "Renovação e Fortalecimento",
      paragraphs: [
        `Amado(a) ${name}, que alegria poder compartilhar esta palavra com você! Sabe, enquanto estava em oração, senti forte em meu coração que você está em um momento de renovação espiritual. Como é lindo ver sua busca por mais de Deus!`,
        
        `O Senhor está me mostrando que você tem um coração sensível, um coração que deseja mais da presença dEle. E isso, meu irmão, minha irmã, é um presente precioso. Pois como está escrito: "Bem-aventurados os puros de coração, porque eles verão a Deus."`,
        
        `Quero te dizer hoje: não desista! Seus sonhos estão no coração de Deus. Suas lágrimas são preciosas para Ele. E assim como o oleiro trabalha o barro com carinho e paciência, Deus está trabalhando em sua vida, moldando algo extraordinário. Confie neste processo!`
      ]
    }
  ];

  return messages[Math.floor(Math.random() * messages.length)];
};

const Quiz = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [showNameInput, setShowNameInput] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [message, setMessage] = useState<{ title: string; paragraphs: string[] } | null>(null);

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setShowNameInput(false);
    }
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const personalizedMessage = getPersonalizedMessage(name, newAnswers);
      setMessage(personalizedMessage);
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-12 px-4">
      <AnimatePresence mode="wait">
        {showNameInput && (
          <motion.div
            key="name-input"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-xl mx-auto"
          >
            <div className="card p-8">
              <h2 className="text-2xl font-semibold mb-6 text-center text-gray-900">
                Bem-vindo(a) ao seu momento de reflexão
              </h2>
              <form onSubmit={handleNameSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Como podemos te chamar?
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input-primary"
                    placeholder="Seu nome"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Começar Jornada
                </button>
              </form>
            </div>
          </motion.div>
        )}

        {!showNameInput && !showResult && (
          <motion.div
            key="questions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-xl mx-auto"
          >
            <div className="card p-8">
              <div className="mb-8">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                    style={{
                      width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <h2 className="text-2xl font-semibold mb-6 text-gray-900">
                {questions[currentQuestion].text}
              </h2>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(option)}
                    className="w-full text-left p-4 border rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    {option}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {showResult && message && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="max-w-2xl mx-auto"
          >
            <div className="card p-8">
              <h2 className="text-3xl font-semibold mb-8 text-center text-gray-900">
                {message.title}
              </h2>
              <div className="space-y-6 text-gray-700">
                {message.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-12 flex justify-center space-x-4">
                <button
                  onClick={() => {
                    setShowNameInput(true);
                    setCurrentQuestion(0);
                    setAnswers([]);
                    setShowResult(false);
                    setMessage(null);
                  }}
                  className="btn-secondary"
                >
                  Receber Nova Mensagem
                </button>
                <Link
                  to="/"
                  className="btn-primary"
                >
                  Voltar ao Início
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Quiz;