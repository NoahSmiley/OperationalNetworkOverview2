import { Navbar, Nav, Container } from "react-bootstrap";
import BasicModal from "./BasicModal";
import logo from "./Mesonet.png";
import "./Navigation.css";
import "./blink.css";
import Red from "./red.gif";
import Settings from "../core/Settings";
import { Typography } from "@mui/material";
const Navigation = () => {
  return (
    <Navbar
      style={{
        background: "#0C0C0C",
        maxHeight: "10vh",
        height:"10vh",
        position: "absolute",
        bottom: 0,
        width:"100vw"
      }}
    >
      <Container>
        <Navbar.Brand style={{ color: "white"}} href="/">
            <img
              src={logo}
              style={{ width: "auto", height: "3vh" }}
              alt="Logo"
            />
        </Navbar.Brand>
       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav className="me-auto" style={{marginTop:"2vh"}}>
          <Nav.Link style={{ color: "white" }} href="/">
            <Typography>Central Report</Typography>
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="/images">
            Images
          </Nav.Link>
          <Nav.Link style={{ color: "white" }} href="/maps">
            Maps
          </Nav.Link>
          <Nav.Link>
            <img
              src={Red}
              width="auto"
              height="10px"
              style={{ alignContent: "center", paddingLeft: "19vw" }}
              alt="none"
            />
          </Nav.Link>
          <Nav.Link>
            <p style={{ color: "white" }}>Live </p>
          </Nav.Link>
          <div style={{marginTop:".7vh",marginLeft:"1vw"}}>
          <Settings/>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};
export default Navigation;
