import React from 'react';
import Noticia from './Noticia';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ListaNoticias = ({ noticias }) => {
  return (
    <div className="container mt-5">
      <Row xs={1} sm={2} md={3} lg={4} xl={4} xxl={4}>
        {noticias.map((noticia) => (
          <Col key={noticia.title}>
            <Noticia noticia={noticia} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ListaNoticias;


