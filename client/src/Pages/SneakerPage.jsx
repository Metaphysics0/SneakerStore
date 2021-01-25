import React from 'react';
import Data from './data.json';
import PageBottom from './SneakerPage/PageBottom';
import PageTop from './SneakerPage/PageTop';

const SneakerPage = () => {
  return (
    <div className="product">
      <PageTop Data={Data} />
      <PageBottom />
    </div>
  );
};

export default SneakerPage;
