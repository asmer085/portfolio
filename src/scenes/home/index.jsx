import {
  LeftSide,
  RightSide,
  RightSideContent,
  Row,
  SceneLayout,
} from "../../components/common/Layout";
import { MainTitle, Subtitle } from "./components/style";
import { motion } from "framer-motion";
import { texts } from "./../../utils/texts";
import profile from "./../../assets/profile/shaped-profile.png";
import useMediaQuery from "../../hooks/useMediaQuery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Home = ({ setSelectedPage, language, selectedPage }) => {
  const desktop = useMediaQuery("(min-width: 1279px)");

  return (
    <SceneLayout className="md" id="home">
      <RightSide>
        <RightSideContent>
          <img src={profile} alt="Landing" />
        </RightSideContent>
      </RightSide>
      <LeftSide>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: desktop ? -200 : -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <MainTitle>
            {`<Asmer`}
            <br />
            {`Karabeg/>`}
          </MainTitle>
          <Subtitle>{texts[language].landing.subtitle}</Subtitle>
          <Row
            className="social-media"
            justify={desktop ? "flex-start" : "space-evenly"}
            style={{
              margin: desktop ? "2rem 0" : "1rem 0",
            }}
          >
            <a
              href="https://github.com/asmer085"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginRight: "1rem" }}
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/asmer-karabeg-6ba619269/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </Row>
        </motion.div>
      </LeftSide>
    </SceneLayout>
  );
};

export default Home;
