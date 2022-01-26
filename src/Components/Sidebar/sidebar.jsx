import React, { useState, useEffect } from 'react';
import { Row, Col, Figure, Container } from 'react-bootstrap';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

import {
  ImagemSide,
  DateSide,
  TitleSide,
  TitlePost,
} from '../../styles/siderbarStyle';
import PostService from '../../services/PostService';
import '../../styles/sidebar.css';

export default function Sidebar() {
  const [postagem, setPostagem] = useState([]);

  // useEffect(() => {
  //   PostService.getAll().then((results) => {
  //     setPostagem(results.data);
  //     setLast(results.data.length);
  //     setPen(results.data.length - 2);
  //   });
  // }, []);

  useEffect(()=>{
    PostService.getLastTwo()
    .then((results) => {
      setPostagem(results.data)
    })
  },[]);


  const mounths = [
    {
      mes: '01',
      name: 'janeiro',
    },
    {
      mes: '02',
      name: 'fevereiro',
    },
    {
      mes: '03',
      name: 'março',
    },
    {
      mes: '04',
      name: 'abril',
    },
    {
      mes: '05',
      name: 'maio',
    },
    {
      mes: '06',
      name: 'junho',
    },
    {
      mes: '07',
      name: 'julho',
    },
    {
      mes: '08',
      name: 'agosto',
    },
    {
      mes: '09',
      name: 'setembro',
    },
    {
      mes: '10',
      name: 'outubro',
    },
    {
      mes: '11',
      name: 'novembro',
    },
    {
      mes: '12',
      name: 'dezembro',
    },
  ];

  return (
    <>
      <div className="sidebar">
        <Figure>
          <Row>
            <Container>
              <TitlePost color="var(--color--isac-blue)">Veja também</TitlePost>
            </Container>
          </Row>
          <>
            {postagem.map((item) => {
              return (
                <Link to={`/blog-de-compliance/${item.slug}`}>
                  <Row className="mt-4">
                    <Col md={5}>
                      <ImagemSide
                        width="100%"
                        height="90rem"
                        object-fit="cover"
                        src={item.image.url}
                      />
                    </Col>
                    <Col className="my-auto">
                      <Figure.Caption>
                        <DateSide color="var(--color--isac-light-green)">
                          {item.created_at.slice(8, 10)} de{' '}
                          {mounths.map((mes) =>
                            mes.mes === item.created_at.slice(5, 7)
                              ? mes.name
                              : ''
                          )}
                        </DateSide>
                        <TitleSide color="grey" weight="10px">
                          {item.titulo}
                        </TitleSide>
                      </Figure.Caption>
                    </Col>
                  </Row>
                </Link>
              );
            })}
          </>
        </Figure>
        <Row>
          <Container>
            <TitlePost color="var(--color--isac-blue)">Siga-nos</TitlePost>
            <div className="footer social-links">
              <ul className="social-links d-flex p-0 mt-2">
                <li>
                  <a
                    href="https://www.facebook.com/isacsaude"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookF className="ml-2 mr-2" size="1.5rem" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/isac_os/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram className="ml-2 mr-2" size="1.5rem" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/isac-instituto-saude-e-cidadania/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="ml-2 mr-2" size="1.5rem" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCH7g5mRH3THHjNp-GEIk5og"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaYoutube className="ml-2 mr-2" size="1.5rem" />
                  </a>
                </li>
              </ul>
            </div>
          </Container>
        </Row>
      </div>
    </>
  );
}
