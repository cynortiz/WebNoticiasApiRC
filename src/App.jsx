import React, { useState, useEffect } from 'react';
import Formulario from './Formulario';
import ListaNoticias from './ListaNoticias';

const App = () => {
  const [categoria, setCategoria] = useState('general');
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchNoticias = async () => {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?category=${categoria}&apiKey=09cccd8f9500458d94e305e0e288a0ea`);
      const data = await response.json();
      setNoticias(data.articles);
    };

    fetchNoticias();
  }, [categoria]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center mb-3">Noticias</h1>
          <Formulario onChange={(categoria) => setCategoria(categoria)} />
          <ListaNoticias noticias={noticias} />
        </div>
      </div>
    </div>
  );
};

export default App;



