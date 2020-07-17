import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

const Inspections = () => {
  const [inspections, setInspections] = useState([]);

  const { isLoading, error, data } = useQuery('inspections', () =>
    fetch('/api/inspections.json')
      .then(res => res.json())
      .then(setInspections)
  );

  const destroy = (e, b) => {
    const id = e.target.getAttribute('inspection-id');
    e.preventDefault();
    fetch(`/api/inspections/${id}.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('[name=csrf-token]').content
      }
    })
    .then(response => response)
    .then(data => {
      const inspectionList = inspections.filter((inspection) => {
        return (parseInt(inspection.id) !== parseInt(id));
      });
      setInspections(inspectionList);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };


  if (isLoading) {
    return <p>Loading&hellip;</p>;
  }

  if (error) {
    return "An error has occurred: " + error.message;
  }

  return (
    <ul>
      {
        inspections.map((inspection) => {
          return (
            <li key={inspection.id}>
              <Link to={ `/inspections/${inspection.id}`}>
                {inspection.id} - { inspection.vin }
              </Link>
              <button inspection-id={inspection.id} onClick={ destroy }>Delete</button>
            </li>
          )
        })
      }
    </ul>
  )
}

export default Inspections
