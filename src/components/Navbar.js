import React, { useState, useEffect, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { IoBookOutline } from "react-icons/io5";
import { GiSkills } from "react-icons/gi";

const NAV_ITEMS = [
  { path: "/", icon: <AiOutlineHome />, label: "Home" },
  { path: "/about", icon: <AiOutlineUser />, label: "About" },
  { path: "/project", icon: <AiOutlineFundProjectionScreen />, label: "Projects" },
  { path: "/research", icon: <IoBookOutline />, label: "Research" },
  { path: "/skills", icon: <GiSkills />, label: "Skills" },
  { path: "/resume", icon: <CgFileDocument />, label: "Resume" },
];

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const clickTimeoutRef = useRef(null);

  useEffect(() => {
    const scrollHandler = () => updateNavbar(window.scrollY >= 20);
    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  const handleBrandClick = (e) => {
    e.preventDefault();
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
      clickTimeoutRef.current = null;
      window.dispatchEvent(new Event("rv-easter-egg"));
      return;
    }
    clickTimeoutRef.current = window.setTimeout(() => {
      updateExpanded(false);
      navigate("/");
      clickTimeoutRef.current = null;
    }, 220);
  };

  useEffect(() => {
    return () => {
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex" onClick={handleBrandClick}>
          <span className="logo-text">RV</span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {NAV_ITEMS.map(({ path, icon, label }) => (
              <Nav.Item key={path}>
                <Nav.Link
                  as={Link}
                  to={path}
                  onClick={() => updateExpanded(false)}
                  className={isActive(path) ? "nav-link-active" : ""}
                >
                  <span style={{ marginBottom: "2px", marginRight: "4px" }}>
                    {icon}
                  </span>
                  {label}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
