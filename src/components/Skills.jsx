import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaPython, FaGitAlt, FaDatabase, FaJava, FaReact, FaWordpress } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb } from 'react-icons/si';

const Container = styled.section`
  max-width: 1000px;
  margin: 0 auto;
  padding: 100px 20px;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 60px;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 25px;
`;

const SkillCard = styled(motion.div)`
  background: rgba(20, 20, 25, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  cursor: default;
  position: relative;
  overflow: hidden;
  transition: 0.4s;

  svg {
    font-size: 3rem;
    color: ${props => props.color};
    filter: saturate(0.5) brightness(0.8);
    transition: 0.4s;
    z-index: 2;
  }

  span {
    font-size: 0.9rem;
    font-weight: 600;
    color: #888;
    transition: 0.4s;
    z-index: 2;
  }

  &::before {
    content: '';
    position: absolute;
    width: 100px; height: 100px;
    background: ${props => props.color};
    filter: blur(50px);
    border-radius: 50%;
    opacity: 0;
    transition: 0.5s;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
  }

  &:hover {
    border-color: ${props => props.color};
    transform: translateY(-5px);
    box-shadow: 0 5px 20px ${props => props.color}40;
    
    svg { 
      filter: saturate(1) brightness(1.2); 
      transform: scale(1.1); 
    }
    
    span { color: white; }
    
    &::before { opacity: 0.4; }
  }
`;

const Skills = () => {
  const techs = [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#38B2AC" },
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "MySQL", icon: <FaDatabase />, color: "#4479A1" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" }, 
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "WordPress", icon: <FaWordpress />, color: "#007396" },
  ];

  return (
    <Container id="skills">
      <Title 
        initial={{ opacity: 0, y: -30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        Minhas Tecnologias
      </Title>
      
      <Grid>
        {techs.map((tech, i) => (
          <SkillCard
            key={i}
            color={tech.color}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            {tech.icon}
            <span>{tech.name}</span>
          </SkillCard>
        ))}
      </Grid>
    </Container>
  );
};

export default Skills;