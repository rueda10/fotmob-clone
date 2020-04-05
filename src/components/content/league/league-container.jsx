import React from 'react';
import { useParams } from 'react-router-dom';

const League = () => {
  const { id } = useParams();

  return <div>{`LEAGUE ${id} CONTENT`}</div>;
};

export default League;
