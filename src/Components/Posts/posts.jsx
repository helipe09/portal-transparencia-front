import React from 'react';
import { Row, Col, Figure, Button } from 'react-bootstrap';

export default function Posts() {
  return (
    <div className="mt-4">
      <Row>
        <Col md={12}>
          <Row>
            <Col md={4}>
              <Figure>
                <Figure.Image
                  width={120}
                  height={120}
                  alt="171x180"
                  src="https://isac.org.br/wp-content/uploads/2021/01/11-11-politica-de-privacidade-1280x720-1-768x432.png"
                />
              </Figure>
            </Col>
            <Col md={4}>
              <Figure>
                <Figure.Image
                  width={120}
                  height={120}
                  alt="171x180"
                  src="https://isac.org.br/wp-content/uploads/2021/01/Fachada-160x100.jpg"
                />
              </Figure>
            </Col>
            <Col md={4}>
              <Figure>
                <Figure.Image
                  width={120}
                  height={120}
                  alt="171x180"
                  src="https://isac.org.br/wp-content/uploads/2021/01/Treinamentos-atendimento-humanizado-160x100.jpg"
                />
              </Figure>
            </Col>
          </Row>
        </Col>
        <Col >
          <Button variant="outline-success">Anterior</Button>
        </Col>
        <Button variant="outline-success">Próximo</Button>
      </Row>
    </div>
  )
}