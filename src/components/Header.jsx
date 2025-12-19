import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeaderContainer = styled(motion.header)`
  width: 100%;
  padding: 15px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0; left: 0; z-index: 1000;
  
  background: rgba(5, 5, 5, 0.6);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) { padding: 15px 20px; }
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
  font-family: 'Fira Code', monospace;
  display: flex;
  align-items: center;
  gap: 5px;

  span.brackets {
    color: var(--accent-color);
    font-weight: 900;
  }
  
  span.name {
    background: linear-gradient(90deg, #fff, #ccc);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  &:hover { opacity: 0.9; text-shadow: 0 0 10px rgba(138, 79, 255, 0.5); }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 768px) { display: none; }
`;

const NavLink = styled.a`
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-secondary);
  position: relative;
  transition: 0.3s;
  &:hover { color: white; }

  &::after {
    content: '';
    position: absolute;
    width: 0%; height: 2px;
    bottom: -5px; left: 0;
    background: var(--accent-gradient);
    transition: 0.3s;
  }
  &:hover::after { width: 100%; }
`;

const Button = styled(motion.a)`
  background: rgba(138, 79, 255, 0.1);
  border: 1px solid var(--accent-color);
  color: white;
  padding: 8px 24px;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 600;
  transition: 0.3s;
  @media (max-width: 768px) { display: none; }

  &:hover {
    background: var(--accent-color);
    box-shadow: 0 0 15px rgba(138, 79, 255, 0.4);
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  color: white;
  @media (max-width: 768px) { display: block; cursor: pointer;}
`;

const Header = () => {
  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Logo href="#">
        <span className="brackets">&lt;</span>
        <span className="brackets">/&gt;</span>
      </Logo>

      <Nav>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">Sobre mim</NavLink>
        <NavLink href="#skills">Tecnologias</NavLink> 
        <NavLink href="#projects">Projetos</NavLink>
        
        <Button href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Vamos Conversar
        </Button>
      </Nav>

      <MobileMenuIcon>☰</MobileMenuIcon>
    </HeaderContainer>
  );
};

export default Header;