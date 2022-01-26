import React from 'react';
import { Image, Col } from 'react-bootstrap';
import defaultImg from '../../assets/img/default.png';

export default function Contractor(props) {
  return (
    <Col md={3} className="mb-5">
      <h3>Contratante</h3>
      <Image
        width="60%"
        className="ml-4"
        src={props.logo ? props.logo : defaultImg}
        fluid
      />
    </Col>
  );
}
