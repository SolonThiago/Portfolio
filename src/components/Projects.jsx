import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaFolder } from 'react-icons/fa';

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
    box-shadow: 0 10px 40px -10px rgba(138, 79, 255, 0.3);
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
    background: rgba(138, 79, 255, 0.1);
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
    &:hover { color: white; }
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
            <FolderIcon><FaFolder /></FolderIcon>
            <ProjectTitle>Portal ManCare</ProjectTitle>
            <ProjectDesc>
              Plataforma web voltada à Saúde do Homem, com o objetivo de promover o bem-estar masculino por meio de informações acessíveis e confiáveis.
            </ProjectDesc>
            <Tags>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript ES6+</span>
            </Tags>
          </div>
          <Links>
            <a href="https://github.com/MaduSantoss/ManCare"><FaGithub /> Código</a>
            <a href="https://man-care.vercel.app"><FaExternalLinkAlt /> Demo</a>
          </Links>
        </ProjectCard>

        {/* Card 2 */}
        <ProjectCard 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div>
            <FolderIcon><FaFolder /></FolderIcon>
            <ProjectTitle>Consultor de Clima via API</ProjectTitle>
            <ProjectDesc>
              Projeto em terminal que consulta a API OpenWeatherMap para exibir a temperatura e o clima atual de uma cidade.
            </ProjectDesc>
            <Tags>
              <span>Python 3</span>
              <span>Requests</span>
              <span>Python-Dotenv</span>
            </Tags>
          </div>
          <Links>
            <a href="https://github.com/MaduSantoss/consultor-clima"><FaGithub /> Código</a>
          </Links>
        </ProjectCard>

        {/* Card 3 */}
        <ProjectCard 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <FolderIcon><FaFolder /></FolderIcon>
            <ProjectTitle>Sistema Bancário NeoBank</ProjectTitle>
            <ProjectDesc>
              Simulação completa de um sistema bancário digital, apelidado de NeoBank.
            </ProjectDesc>
            <Tags>
              <span>Python 3</span>
              <span>Flask</span>
              <span>SQLite</span>
              <span>HTML5</span>
              <span>CSS3</span>

            </Tags>
          </div>
          <Links>
            <a href="https://github.com/MaduSantoss/sistema_bancario-neo_bank"><FaGithub /> Código</a>
          </Links>
        </ProjectCard>
      </Grid>
    </Container>
  );
};

export default Projects;