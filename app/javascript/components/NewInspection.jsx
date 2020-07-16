import React, { useEffect, useState } from 'react';
import InspectionForm from './InspectionForm'

const Inspection = () => {
  const [inspection, setInspection] = useState({});
  const [token, setToken] = useState('');

  useEffect(() => {
    fetch(`/api/inspections/new.json`)
      .then(res => res.json())
      .then(setInspection)
    }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/inspections.json`, {
      method: 'POST',
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

  if (!inspection) {
    return <p>Loading Bitch&hellip;</p>;
  }

  return (
    <InspectionForm set={ setInspection } inspection={ inspection } submit={ handleSubmit }/>
  )
}

export default Inspection
