import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const InspectionForm = (props) => {
  const inspection = props.inspection

  const updateVin = (e) => {
    props.set({...inspection, vin: e.target.value});
  };

  const updateNotes = (e) => {
    props.set({...inspection, notes: e.target.value});
  };

  const updateDate = (e) => {
    props.set({...inspection, date_performed: e.target.value});
  };

  const updateDatePerformed = (date) => {
    props.set({...inspection, date_performed: date});
  };

  if (!inspection) {
    return <p>Loading&hellip;</p>;
  }

  return (
    <form onSubmit={ props.submit }>
      <label>
        VIN:
        <input type="text" value={inspection.vin} onChange={updateVin} />
      </label>
      <label>
        Date Performed:
        <DatePicker selected={new Date(inspection.date_performed)} onChange={updateDatePerformed} />
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
