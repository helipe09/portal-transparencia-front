import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGlobe,
} from 'react-icons/fa';
import '../../styles/unit.css';

export default function UnitInfo(props) {
  return (
    <>
      <Row className='box-unit-info py-5'>
        <Col md={6}>
          <h1>{props.data.nome}</h1>
          <p>{props.data.resumo}</p>
          <h3 className='d-none'>Gestores</h3>
        </Col>
        <Col md={6}>
          {props.data.idArquivoImagem ? (
            <Image
              width='50%'
              className='mb-4'
              src={props.data.urlS3Imagem}
              fluid
            />
          ) : (
            ''
          )}
          <h3>Contato da Unidade</h3>
          <ul className='unit-social'>
            <li>
              <h5>
                <FaPhoneAlt className='mr-3' size={20} />
                {props.data.telefone}
              </h5>
            </li>
            <li>
              <h5>
                <FaEnvelope className='mr-3' size={20} />
                {props.data.email}
              </h5>
            </li>
            <li>
              <h5>
                <FaMapMarkerAlt className='mr-3' size={20} />
                {props.data.endereco}
              </h5>
            </li>
          </ul>
          <div className='unit-social'>
            <li>
              {props.data.urlFacebook ? (
                <a
                  href={props.data.urlFacebook}
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaFacebookF className='mr-3' size={28} />
                </a>
              ) : null}
              {props.data.urlFacebook ? (
                <a
                  href={props.data.urlInstagram}
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaInstagram className='mr-3' size={28} />
                </a>
              ) : null}
              {props.data.urlSite ? (
                <a href={props.data.urlSite} target='_blank' rel='noreferrer'>
                  <FaGlobe className='mr-3' size={28} />
                </a>
              ) : null}
            </li>
          </div>
        </Col>
      </Row>
    </>
  );
}
