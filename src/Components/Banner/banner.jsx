import React, { useState, useEffect } from 'react';
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import BannerService from '../../services/BannerService';

import './banner.css';

export default function Banner() {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    BannerService.get().then((results) => {
      setBanner(results.data);
    });
  }, []);

  return (
    <Container className="banner" fluid>
      <Row>
        <Col md={12}>
          <Carousel>
            {banner.map((item) => {
              return (
                <Carousel.Item key={item.id}>
                  <a href={item.link} target="_blank" rel="noreferrer">
                    <img
                      className="d-block w-100"
                      src={item.imagem.url}
                      alt="First slide"
                    />
                  </a>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}
