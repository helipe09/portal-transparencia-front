import { Container, Image, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../../styles/blog.css';
export default function CardBlog(props) {
  return (
    <Card className="shadow-lg border-0 mb-5">
      <img src={props.image} alt="" />
      <Card.Body>
        <span className="px-3 date-card">
          <h4>{props.day}</h4>
          <h4>{props.mounth}</h4>
        </span>
        <Card.Title>
          <h4>{props.title}</h4>
        </Card.Title>
        <div className="text-desc">
          <Card.Text
            dangerouslySetInnerHTML={{
              __html: props.description,
            }}
          ></Card.Text>
        </div>
        <Link to={props.link}>
          <Button variant="outline-success" className="px-3 float-right">
            Saiba Mais
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
