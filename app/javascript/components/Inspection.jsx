import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import InspectionForm from './InspectionForm'

const Inspection = () => {
  const { id } = useParams();
  const initialInspection = {vin: '', notes: '', date_performed: new Date()}
  const [inspection, setInspection] = useState(initialInspection);
  const [token, setToken] = useState('');

  const { isLoading, error, data } = useQuery('inspections', () =>
    fetch(`/api/inspections/${id}.json`)
      .then(res => res.json())
      .then(setInspection)
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/api/inspections/${id}.json`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('[name=csrf-token]').content
      },
      body: JSON.stringify(inspection),
    })
    .then(response => response.json())
    .then(data => {
      setInspection({...data});
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <InspectionForm set={ setInspection } inspection={ inspection } submit={ handleSubmit }/>
  )
}

export default Inspection
