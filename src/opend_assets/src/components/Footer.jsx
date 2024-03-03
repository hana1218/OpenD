import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div id="footer">
      <footer>
      <Container fluid="md">
          
              <p>Copyright ⓒ {year}</p>
 
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
