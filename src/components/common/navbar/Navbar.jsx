import useMediaQuery from "./../../../hooks/useMediaQuery";
import Link from "./components/Link";
import {
  Nav,
  NavBrand,
  NavContainer,
  NavLinkContainer
} from "./components/style";
import Language from "./components/Language";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SideMenu from "./components/sideMenu/SideMenu";

const Navbar = ({ selectedPage, setSelectedPage, language, setLanguage }) => {
  const desktop = useMediaQuery("(min-width: 1024px)");
  const small = useMediaQuery("(max-width: 768px)");

  return (
    <Nav>
      <NavContainer>
        <AnchorLink
          href="#home"
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <NavBrand>{"<AK/>"}</NavBrand>
        </AnchorLink>
        {desktop && (
          <NavLinkContainer>
            <Link
              page="home"
              label={language === "pt" ? "početna" : "home"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="about"
              label={language === "pt" ? "o meni" : "about"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="skills"
              label={language === "pt" ? "vještine" : "skills"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="projects"
              label={language === "pt" ? "projekti" : "projects"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="contact"
              label={language === "pt" ? "kontakt" : "contact"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Language language={language} setLanguage={setLanguage} />
          </NavLinkContainer>
        )}
        {small && (
          <SideMenu
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
            language={language}
            setLanguage={setLanguage}
          />
        )}
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
