import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';


const InspectionForm = (props) => {
  const inspection = props.inspection

  const updateVin = (e) => {
    props.set({...inspection, vin: e.target.value});
  };

  const updateNotes = (e) => {
    props.set({...inspection, notes: e.target.value});
  };

  if (!props.inspection) {
    return <p>Loading Bitch&hellip;</p>;
  }

  return (
    <form onSubmit={ props.submit }>
      Form:
      <label>
        VIN:
        <input type="text" value={inspection.vin} onChange={updateVin} />
      </label>
      <label>
        Notes:
        <input type="text" value={inspection.notes} onChange={updateNotes} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}

export default InspectionForm
