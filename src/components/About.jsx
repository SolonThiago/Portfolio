import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.section`
  max-width: 1200px; 
  margin: 0 auto;
  padding: 100px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GlassCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 60px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  width: 100%;
  
  height: auto; 
  
  @media (max-width: 768px) {
    padding: 30px 25px; 
  }

  &::before {
    content: '';
    position: absolute;
    top: 0; left: -100%;
    width: 100%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
    animation: shine 8s infinite linear;
  }

  @keyframes shine {
    0% { left: -100%; }
    20% { left: 100%; }
    100% { left: 100%; }
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-align: left;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const Text = styled.p`
  color: var(--text-secondary);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  width: 100%;
  
  text-align: justify; 
  
  @media (max-width: 768px) {
    text-align: left; 
    font-size: 1rem;   
    line-height: 1.6; 
  }
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <GlassCard
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Content>
          <Title>Sobre Mim</Title>
          <Text>
            Sou graduada em <strong>Análise e Desenvolvimento de Sistemas</strong>. 
            Minha trajetória inclui experiência prática no desenvolvimento de soluções institucionais e automação 
            de processos, atuando na integração de sistemas e suporte técnico em ambientes 
            corporativos e públicos.
          </Text>
          <Text>
            Com sólida base em <strong>Python, Node.js e SQL</strong>, meu objetivo é atuar no 
            desenvolvimento de aplicações completas e escaláveis. Busco ambientes colaborativos 
            onde possa aplicar meus conhecimentos em APIs e boas práticas de código para criar soluções 
            inovadoras e eficientes.
          </Text>
        </Content>
      </GlassCard>
    </AboutContainer>
  );
};

export default About;