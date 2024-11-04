import React from "react";
import "../styles/contact.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import Footer from "./Footer";
import Navbar from "./Navbar";

const ContactPage = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="wrapper">
      <Navbar />
      <div className="contact-container">
        <div className="contact-header">
          <h1>Contactez-nous</h1>
        </div>
        <div className="contact-content">
          {/* Left Section */}
          <div className="contact-left-section">
            <h2>Contactez Nous</h2>
            <p>Inscrivez-vous à nos prochaines sessions de formations !</p>
            <div className="contact-info">
              <div className="contact-item">
                <EmailIcon />
                <a
                  href="mailto:Elec.learning75@gmail.com"
                  style={{ textDecoration: "none", listStyle: "none" }}
                >
                  edoceolearning@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <LocalPhoneIcon />
                <a href="tel:+33756984523">+33(0)75 69 84 523</a>
              </div>
              <div className="contact-item">
                <PersonPinIcon sx={{ color: "#d90429" }} />
                <p>9 Rue Hélène Boucher, Parray-vielle-poste 94390 </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="contact-right-section">
            <h2>Formulaire d’inscription</h2>
            <form className="contact-form">
              <div className="input-group">
                <TextField fullWidth label="Nom Complet" id="fullWidth" />
                <TextField fullWidth label="Telephone" id="fullWidth" />
              </div>
              <div className="input-group">
                <TextField fullWidth label="E-mail" id="fullWidth" />
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Formation
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Age"
                      onChange={handleChange}
                    >
                      <MenuItem value={10}>CFA</MenuItem>
                      <MenuItem value={20}>AC</MenuItem>
                      <MenuItem value={30}>Qualifiante</MenuItem>
                    </Select>
                  </FormControl>
                </Box>{" "}
              </div>
              <div className="input-group">
                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                />
              </div>
              <Button variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
