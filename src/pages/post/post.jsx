import React, { useEffect, useState } from 'react';
import Sidebar from '../../Components/Sidebar/sidebar';

import { Container, Image, Col, Row } from 'react-bootstrap';
import '../../styles/post.css';
// import Posts from '../../Components/Posts/posts';

import PostService from '../../services/PostService';

export default function Post(props) {
  const [post, setPost] = useState([]);
  // const [slug, setSlug] = useState([]);

  // useEffect(() => {
  //   const id = props.match.params.id;
  //   PostService.get(id).then((results) => {
  //     setPost(results.data);
  //   });
  // }, [props]);

  useEffect(() => {
    const slug = props.match.params.slug;
    PostService.getSlug(slug).then((results) => {
      setPost(results.data[0]);
    });
  }, [props]);

  console.log(post);
  return (
    <>
      <div className="post">
        <Col md={12}>
          <Container>
            <Row className="mt-4">
              <h1>{post.titulo}</h1>
            </Row>
            <Row>
              <Col className="my-5" md={8}>
                <Image className="d-block w-100" src={post.image?.url} />
                <div className="mt-4 blog-post">
                  <div
                    dangerouslySetInnerHTML={{ __html: post.descricao }}
                  ></div>
                </div>
                {/* <div>{post.descricao}</div> */}
                {/* <div className="mt-4">
                  <Posts />
                </div> */}
              </Col>
              <Col>
                <Sidebar />
              </Col>
            </Row>
          </Container>
        </Col>
      </div>
    </>
  );
}
