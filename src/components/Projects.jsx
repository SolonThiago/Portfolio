import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaFolder } from "react-icons/fa";

const Container = styled.section`
  max-width: 1100px;
  margin: 0 auto;
  padding: 100px 20px;
`;

const HeaderInfo = styled.div`
  text-align: center;
  margin-bottom: 60px;
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  background: var(--accent-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.p)`
  color: var(--text-secondary);
  margin-top: 10px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  transition: 0.4s;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: translateY(-10px);
    border-color: var(--accent-color);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 10px 40px -10px rgba(50, 92, 217, 0.3);
  }
`;

const FolderIcon = styled.div`
  color: var(--accent-color);
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 10px;
`;

const ProjectDesc = styled.p`
  color: #a0a0a0;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
`;

const Tags = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 25px;
  flex-wrap: wrap;

  span {
    font-size: 0.8rem;
    font-family: monospace;
    color: var(--accent-color);
    background: rgba(50, 92, 217, 0.1);
    padding: 5px 10px;
    border-radius: 5px;
  }
`;

const Links = styled.div`
  display: flex;
  gap: 20px;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
    font-weight: 600;
    color: #ccc;
    &:hover {
      color: white;
    }
  }
`;

const ViewMoreButton = styled(motion.a)`
  background: rgba(50, 92, 217, 0.1);
  color: white;
  padding: 14px 35px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 1px solid var(--accent-color);
  text-decoration: none;
  transition: 0.3s;
  box-shadow: 0 0 20px rgba(50, 92, 217, 0.2);
  margin: 40px auto 0;
  width: fit-content;

  &:hover {
    background: var(--accent-color);
    box-shadow: 0 0 40px rgba(50, 92, 217, 0.6);
    transform: translateY(-5px);
  }
`;

const Projects = () => {
  return (
    <Container id="projects">
      <HeaderInfo>
        <Title
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projetos Selecionados
        </Title>
        <Subtitle
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Alguns trabalhos que desenvolvi recentemente.
        </Subtitle>
      </HeaderInfo>

      <Grid>
        {/* Card 1 */}
        <ProjectCard
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <FolderIcon>
              <FaFolder />
            </FolderIcon>
            <ProjectTitle>Chronos</ProjectTitle>
            <ProjectDesc>
              O Chronos é uma aplicação web de gestão de tempo e produtividade
              basada na Técnica Pomodoro . Ele permite configurar ciclos de foco
              e descanso, acompanhar estatísticas e histórico de tarefas,
              integrar atividades em tempo real e usar elementos de gamificação
              para manter a motivação.
            </ProjectDesc>
            <Tags>
              <span>React</span>
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>Next.js</span>
            </Tags>
          </div>
          <Links>
            <a href="https://github.com/SolonThiago/chronos" target="_blank">
              <FaGithub /> Código
            </a>
            <a href="https://chronossolondev.vercel.app/" target="_blank">
              <FaExternalLinkAlt /> Demo
            </a>
          </Links>
        </ProjectCard>

        {/* Card 2 */}
        <ProjectCard
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div>
            <FolderIcon>
              <FaFolder />
            </FolderIcon>
            <ProjectTitle>As 7 Maravilhas do Mundo Moderno</ProjectTitle>
            <ProjectDesc>
              O site apresenta as 7 Maravilhas do Mundo Moderno em um formato
              visual com efeito parallax, trazendo informações históricas e
              curiosidades sobre cada monumento de forma interativa e atrativa.
            </ProjectDesc>
            <Tags>
              <span>HTML5</span>
              <span>CSS3</span>
            </Tags>
          </div>
          <Links>
            <a
              href="https://github.com/SolonThiago/Projeto_Efeito_Paralax"
              target="_blank"
            >
              <FaGithub /> Código
            </a>
            <a
              href="https://solonthiago.github.io/Projeto_Efeito_Paralax/"
              target="_blank"
            >
              <FaExternalLinkAlt /> Demo
            </a>
          </Links>
        </ProjectCard>

        {/* Card 3 */}
        <ProjectCard
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <FolderIcon>
              <FaFolder />
            </FolderIcon>
            <ProjectTitle>SolonTec</ProjectTitle>
            <ProjectDesc>
              O site SolonTec é uma plataforma educativa voltada para quem
              deseja aprender desenvolvimento web, oferecendo conteúdos
              organizados sobre HTML, CSS e JavaScript, do nível básico ao
              avançado.
            </ProjectDesc>
            <Tags>
              <span>HTML5</span>
              <span>CSS3</span>
            </Tags>
          </div>
          <Links>
            <a href="https://github.com/SolonThiago/SolonTec" target="_blank">
              <FaGithub /> Código
            </a>
            <a href="https://solonthiago.github.io/SolonTec/" target="_blank">
              <FaExternalLinkAlt /> Demo
            </a>
          </Links>
        </ProjectCard>
      </Grid>

      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}
      >
        <ViewMoreButton
          href="https://github.com/SolonThiago"
          target="_blank"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <FaGithub /> Visualizar mais projetos
        </ViewMoreButton>
      </div>
    </Container>
  );
};

export default Projects;
