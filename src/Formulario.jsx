import React from 'react';

const Formulario = ({ onChange }) => {
  const categorias = ['general', 'business', 'entertainment', 'health', 'science', 'sports', 'technology'];

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <form className="mb-3">
      <div className="input-group">
        <select
          className="form-control"
          aria-label="Select category"
          id="category-select" 
          name="category" 
          onChange={handleChange}
        >
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
        <div className="input-group-append">
          <button className="btn btn-primary" type="button">Go!</button>
        </div>
      </div>
    </form>
  );
};

export default Formulario;

