import {
  ProjectLink,
  ProjectTechnologies,
} from "../../../scenes/projects/components/project/components/style";
import { Row } from "../Layout";
import {
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalOverlay,
  ModalText,
  ModalTitle,
} from "./components/style";

const Modal = ({ setModal, project, language }) => {
  const handleModal = () => {
    setModal(false);
  };

  return (
    <ModalOverlay onClick={() => setModal(false)}>
      <ModalContainer>
        <ModalClose onClick={handleModal}>
          <i class="fa-solid fa-xmark"></i>
        </ModalClose>
        <ModalBody>
          <ModalTitle>
            {project.title}
            <div className="divider"></div>
          </ModalTitle>
          <ModalText>{project.subtitle[language]}</ModalText>
          <ModalText>
            {language === "pt" ? "Tehnologije: " : "Technologies:"}
          </ModalText>
          <Row justify="flex-start">
            {project.technologies.map((tech, index) => (
              <ProjectTechnologies key={index}>{tech}</ProjectTechnologies>
            ))}
          </Row>
          <ModalText style={{ marginTop: "1rem" }}>
            {language === "pt" ? "Saznajte više:" : "Learn more:"}
          </ModalText>
          <Row justify="flex-start">
            {project.git && (
              <ProjectLink target="_blank" href={project.git}>
                <i className="fab fa-github"></i> GitHub
              </ProjectLink>
            )}
            {project.path && (
              <ProjectLink target="_blank" href={project.path}>
                <i
                  className={`fas ${
                    project?.isMobile ? "fa-download" : "fa-external-link-alt"
                  }`}
                ></i>{" "}
                {project?.isMobile
                  ? language === "pt"
                    ? "Preuzmite za Android"
                    : "Download for Android"
                  : language === "pt"
                  ? "Posjeti"
                  : "Visit"}
              </ProjectLink>
            )}
          </Row>
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
