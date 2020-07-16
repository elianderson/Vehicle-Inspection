import React from 'react';
import BasicItem from './items/BasicItem';
import BrakeHardItem from './items/BrakeHardItem';
import BrakeSoftItem from './items/BrakeSoftItem';
import TirePressureItem from './items/TirePressureItem';
import TireTreadItem from './items/TireTreadItem';

const components = {
  BasicItem,
  BrakeHardItem,
  BrakeSoftItem,
  TirePressureItem,
  TireTreadItem,
};

const Area = ({
  name,
  subTitle,
  items: itemsDTO,
  open,
}) => {

  const items = itemsDTO.map((item) => {
    const Component = components[item.type];

    return (
      <Component {...item} key={item.id} />
    );
  });

  const p = subTitle && (
    <p><em>{subTitle}</em></p>
  );

  return (
    <details open={open}>
      <summary><h2>{name}</h2></summary>
      {p}
      {items}
    </details>
 );
};

export default Area;
