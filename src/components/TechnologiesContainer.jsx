import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiPhp,
  DiJava
} from "react-icons/di";

import "../style/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, description: "Marcação de conteúdo web." },
  { id: "css", name: "CSS3", icon: <DiCss3 />, description: "Estilização avançada para páginas web." },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, description: "Interatividade nas páginas web." },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, description: "Plataforma de tempo de execução JavaScript no servidor." },
  { id: "mysql", name: "MySQL", icon: <DiMysql />, description: "Banco de dados relacional." },
  { id: "react", name: "React", icon: <DiReact />, description: " Biblioteca JavaScript para construção de interfaces de usuário." },
  { id: "php", name: "PHP", icon: <DiPhp />, description: "Linguagem de programação para desenvolvimento de aplicações web." },
  { id: "java", name: "Java", icon: <DiJava />, description: "Linguagem de programação versátil para desenvolvimento de diversos tipos de aplicativos." },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
