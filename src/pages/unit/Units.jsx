import React, { useEffect, useState } from 'react';
import UnitService from '../../services/UnitService';

export default function Units() {
  // eslint-disable-next-line
  // const [units, setUnits] = useState(null);
  // eslint-disable-next-line
  const [units, setUnits] = useState([]);

  useEffect(() => {
    UnitService.getAll().then(results => {
      setUnits(results.data);
    })
  }, []);

  return (
    <></>
  );

}