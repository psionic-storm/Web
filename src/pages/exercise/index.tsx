import { RootState } from 'Modules';
import React from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';

function Exercise() {
  const user = useSelector((state):RootState => state.user);

  return <div>연습</div>;
}

export default Exercise;