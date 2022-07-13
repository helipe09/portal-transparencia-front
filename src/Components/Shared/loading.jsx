import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function Loading() {
  return (
    <div className='loading'>
      <Spinner animation='border' role='status' variant='primary'>
        <span className='sr-only'>Loading...</span>
      </Spinner>
    </div>
  );
}