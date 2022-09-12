import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';

import logoImg from '../../assets/img/logo.svg';

export default function Footer() {
  return (
    <div className='footer shadow-lg bg-white pt-md-5 pt-5'>
      <Container className='pt-md-5'>
        <Row className='pt-md-5'>
          <Col md={5}>
            <a
              href='https://isac.org.br'
              target='_blank'
              without
              rel='noreferrer'
            >
              <Image src={logoImg} alt='Isac' />
            </a>
            <div className='box-text mt-3 text-muted font-weight-bold'>
              O ISAC é uma organização social sem fins lucrativos que realiza a
              gestão de serviços de saúde e administração hospitalar para entes
              públicos e privados.
            </div>
            <ul className='social-links d-flex p-0 mt-2'>
              <li>
                <a
                  href='https://www.facebook.com/isacsaude'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaFacebookF className='ml-2 mr-2' size='1.5rem' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/isac_os/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaInstagram className='ml-2 mr-2' size='1.5rem' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/company/isac-instituto-saude-e-cidadania/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaLinkedin className='ml-2 mr-2' size='1.5rem' />
                </a>
              </li>
              <li>
                <a
                  href='https://www.youtube.com/channel/UCH7g5mRH3THHjNp-GEIk5og'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaYoutube className='ml-2 mr-2' size='1.5rem' />
                </a>
              </li>
            </ul>
          </Col>
          <Col align-content-center md={3}>
            <h2>Links</h2>
            <ul className='p-0'>
              <li>
                <a href='https://isac.org.br/' rel='noreferrer' target='_blank'>
                  Inicial
                </a>
              </li>
              <li>
                <a
                  href='https://isac.org.br/politica-de-privacidade/'
                  rel='noreferrer'
                  target='_blank'
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href='https://isac.org.br/canal-de-denuncias/'
                  rel='noreferrer'
                  target='_blank'
                >
                  Canal de Denúncias
                </a>
              </li>
              <li>
                <a
                  href='https://isac.org.br/quem-somos/'
                  rel='noreferrer'
                  target='_blank'
                >
                  Quem Somos
                </a>
              </li>
              {/* <li><Link to="/">Quem Somos</Link></li> */}
              <li>
                <a
                  href='https://vagas.isac.org.br'
                  rel='noreferrer'
                  target='_blank'
                >
                  Portal de Vagas
                </a>
              </li>
              <li>
                <a
                  href='https://isac.org.br/category/noticias/'
                  rel='noreferrer'
                  target='_blank'
                >
                  Notícias do ISAC
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h2>Contato</h2>
            <ul className='p-0'>
              <li>
                <a
                  href='mailto:sac@isac.org.br'
                  rel='noreferrer'
                  target='_blank'
                >
                  sac@isac.org.br
                </a>
              </li>
              <li>
                <a href='tel:6121967841' rel='noreferrer' target='_blank'>
                  (61) 2196-7841
                </a>
              </li>
              <li>
                <a
                  href='https://g.page/isacsaude?share'
                  rel='noreferrer'
                  target='_blank'
                >
                  Setor Comercial Sul Quadra 09 Bloco C, Torre C, Ed. Parque
                  Cidade Corporate Sala 1001, Asa Sul
                  <br />
                  CEP: 70308-200, Brasília/DF
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
