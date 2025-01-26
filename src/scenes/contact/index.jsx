import {
  Column,
  LeftSide,
  RightSide,
  RightSideContent,
  SceneLayout,
} from "../../components/common/Layout";
import PageTitle from "../../components/common/PageTitle";
import useMediaQuery from "../../hooks/useMediaQuery";
import { texts } from "../../utils/texts";
import Divider from "./../../components/common/Divider";
import { Button, FormGroup, Input, Label, TextArea } from "./components/style";
import { ValidationError, useForm } from "@formspree/react";
import Toast from "./components/toast";
import Loading from "../../components/common/Loading";
import { motion } from "framer-motion";
import profile from "../../assets/profile/contact.png"

const Contact = ({ language }) => {
  const desktop = useMediaQuery("(min-width: 1019px)");
  const [state, handleSubmit] = useForm("xwkgjbpr");

  if (state.succeeded) {
    document.getElementById("form").reset();
  }

  return (
    <SceneLayout
      className="md"
      id="contact"
      style={{
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "column",
      }}
    >
      {state.submitting && <Loading />}
      <Column width={desktop ? "50%" : "100%"}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: desktop ? -200 : -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <PageTitle>{texts[language].contact.title}</PageTitle>
          <Divider width={"30%"} />
        </motion.div>
      </Column>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexDirection: desktop ? "row" : "column",
        }}
      >
        <RightSide>
          {state.succeeded && (
            <Toast
              title={language === "en" ? "Success!" : "Uspjeh!"}
              text={
                language === "en"
                  ? "Your message has been sent successfully!"
                  : "Vaša poruka je poslana uspješno!"
              }
              type={"success"}
              className="show"
            />
          )}

          {state.errors && (
            <Toast
              title={language === "en" ? "Error!" : "Greška!"}
              text={
                language === "en"
                  ? "There was an error sending your message. Try again later."
                  : "Greška prilikom slanja vaše poruke. Pokušajte ponovo kasnije."
              }
              type={"error"}
              className="show"
            />
          )}

          <RightSideContent>
            <img src={profile} alt="Asmer Karabeg" />
          </RightSideContent>
        </RightSide>
        <LeftSide>
          <p>{texts[language].contact.text}</p>
          <form
            id="form"
            onSubmit={handleSubmit}
            style={{
              margin: "2rem 0",
            }}
          >
            {" "}
            <Column>
              <FormGroup>
                <Label htmlFor="name">
                  {language === "en" ? "Name" : "Ime"}
                </Label>
                <Input
                  type="text"
                  placeholder={language === "en" ? "Name" : "Ime"}
                  name="name"
                  id="name"
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  type="email"
                  placeholder="e-mail"
                  name="email"
                  id="email"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="message">
                  {language === "en" ? "Message" : "Poruka"}
                </Label>
                <TextArea
                  type="text"
                  placeholder={language === "en" ? "Message" : "Poruka"}
                  cols={30}
                  rows={10}
                  name="message"
                  id="message"
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </FormGroup>
              <Button type="submit" disabled={state.submitting}>
                {language === "en" ? "Send" : "Pošalji"}
              </Button>
            </Column>
          </form>
        </LeftSide>
      </div>
    </SceneLayout>
  );
};

export default Contact;
