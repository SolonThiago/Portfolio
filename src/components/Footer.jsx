import styled from "styled-components";
import { motion } from "framer-motion";
import { FaEnvelope, FaHeart } from "react-icons/fa";

const FooterContainer = styled.footer`
  padding: 80px 20px 40px;
  text-align: center;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.02) 0%,
    transparent 100%
  );
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
`;

const GlowEffect = styled.div`
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 400px;
  background: var(--accent-color);
  opacity: 0.15;
  filter: blur(120px);
  z-index: 0;
  pointer-events: none;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 25px;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactText = styled(motion.p)`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 40px;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const Button = styled(motion.a)`
  background: rgba(50, 92, 217, 0.1);
  color: white;
  padding: 14px 35px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border: 1px solid var(--accent-color);
  text-decoration: none;
  transition: 0.3s;
  box-shadow: 0 0 20px rgba(50, 92, 217, 0.2);

  &:hover {
    background: var(--accent-color);
    box-shadow: 0 0 40px rgba(50, 92, 217, 0.6);
    transform: translateY(-5px);
  }
`;

const Copyright = styled(motion.p)`
  margin-top: 80px;
  color: #555;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  svg {
    color: var(--accent-color);
    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <GlowEffect />

      <Content>
        <Title
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Vamos Construir Algo Incrível?
        </Title>

        <ContactText
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Estou sempre aberto a novos desafios e parcerias. Se você tem uma
          ideia ou projeto, mande um "Oi"!
        </ContactText>

        <Button
          href="https://mail.google.com/mail/?view=cm&fs=1&to=solonthiagowork@gmail.com&su=Contato%20%20&body=Olá!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <FaEnvelope /> Entrar em Contato
        </Button>

        <Copyright
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          © 2025 Feito por SolonDev | Todos os direitos reservados.
        </Copyright>
      </Content>
    </FooterContainer>
  );
};

export default Footer;
