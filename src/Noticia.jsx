import React from 'react';
import Card from 'react-bootstrap/Card';

const Noticia = ({ noticia }) => {
  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={noticia.urlToImage} alt={noticia.title} />
      <Card.Body>
        <Card.Title>{noticia.title}</Card.Title>
        <Card.Text>{noticia.description}</Card.Text>
        <Card.Link href={noticia.url} target="_blank">Leer más</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default Noticia;


