import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SneakerPage = () => {
  let { id } = useParams();

  useEffect(()=> {

  }, )

  return (
    <div>
      {console.log(id)}
      <h1>Sneaker Page!!!</h1>
    </div>
  );
};

export default SneakerPage;
