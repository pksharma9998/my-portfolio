import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork, CgSoftwareDownload } from "react-icons/cg";
import { AiFillStar, AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { PUBLIC_ROUTES, ROUTE_TEXTS, SOCIAL_LINKS } from "../../constant/routes";
import { CONFIG } from "../../config";


function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  const navigationItems = [
    { label: ROUTE_TEXTS?.HOME_PAGE, path: PUBLIC_ROUTES?.HOME_PAGE, icon: <AiOutlineHome /> },
    { label: ROUTE_TEXTS?.ABOUT, path: PUBLIC_ROUTES?.ABOUT, icon: <AiOutlineUser /> },
    { label: ROUTE_TEXTS?.PROJECTS, path: PUBLIC_ROUTES?.PROJECTS, icon: <AiOutlineFundProjectionScreen /> },
    { label: ROUTE_TEXTS?.RESUME, path: PUBLIC_ROUTES.RESUME, icon: <CgSoftwareDownload /> },
  ];

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <div style={{ color: '#CD5FF8', fontSize: '25px' }}>{CONFIG.PS}</div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {navigationItems?.map((item, index) => {
              return (
                <Nav.Item key={index}>
                  <Nav.Link as={Link} to={item.path}
                    onClick={() => {
                      updateExpanded(false);
            
                      // Check if it's the resume link
                      if (item.label === ROUTE_TEXTS?.RESUME) {
                        const resumeURL = item.path; // Specify your resume PDF path here
                        const link = document.createElement("a");
                        link.href = resumeURL;
                        link.setAttribute("download", item.path); // Download attribute with filename
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link); // Clean up
                      }
                    }}
                  >
                    {React.cloneElement(item.icon, { style: { marginBottom: "2px" } })} {item.label}
                  </Nav.Link>
                </Nav.Item>
              )
            })}

            <Nav.Item className="fork-btn">
              <Button
                href={SOCIAL_LINKS.GITHUB}
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
