import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PostService from '../../services/PostService';

import Sidebar from '../../Components/Sidebar/sidebar';
import CardBlog from '../../Components/CardBlog';
import '../../styles/blog.css';

export default function Blog() {
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(0);

  console.log('contador', page);

  useEffect(() => {
    PostService.getPage(page).then((results) => {
      setPost(results.data);
    });
  }, [page]);

  const mounths = [
    {
      mes: '01',
      name: 'Jan',
    },
    {
      mes: '02',
      name: 'Fev',
    },
    {
      mes: '03',
      name: 'Mar',
    },
    {
      mes: '04',
      name: 'Abr',
    },
    {
      mes: '05',
      name: 'Mai',
    },
    {
      mes: '06',
      name: 'Jun',
    },
    {
      mes: '07',
      name: 'Jul',
    },
    {
      mes: '08',
      name: 'Ago',
    },
    {
      mes: '09',
      name: 'Set',
    },
    {
      mes: '10',
      name: 'Out',
    },
    {
      mes: '11',
      name: 'Nov',
    },
    {
      mes: '12',
      name: 'Dez',
    },
  ];

  return (
    <>
      <div className="blog">
        <Container>
          <Row>
            <h1>Blog de Compliance</h1>
          </Row>
          <Row className="my-5">
            <Col md={8}>
              <Row className="my-5">
                {post.map((item) => {
                  return (
                    <Col className="box-blog-list" md={6} key={item.id}>
                      <CardBlog
                        day={item.created_at.slice(8, 10)}
                        mounth={mounths.map((mes) =>
                          mes.mes === item.created_at.slice(5, 7)
                            ? mes.name
                            : ''
                        )}
                        title={item.titulo}
                        description={item.descricao}
                        link={`blog-de-compliance/${item.slug}`}
                        image={item.image.url}
                      />
                    </Col>
                  );
                })}
              </Row>
              <Row className="button-next">
                <Col md={6}>
                  {page > 0 && (
                    <Button
                      onClick={() => setPage(page - 4)}
                      variant="outline-success"
                      className="px-3 float-right button"
                    >
                      Voltar
                    </Button>
                  )}
                </Col>
                <Col md={6}>
                  {post.length === 4 && (
                    <Button
                      onClick={() => setPage(page + 4)}
                      variant="outline-success"
                      className="px-3 float-right"
                    >
                      Próxima
                    </Button>
                  )}
                </Col>
              </Row>
            </Col>
            <Col md={4}>
              <Sidebar />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
