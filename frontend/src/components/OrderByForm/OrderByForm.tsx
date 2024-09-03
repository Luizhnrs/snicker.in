import React from 'react';
import CustomDropdown from '../CustomDropdown';

type OrderByFormProps = {
  orderBy: string,
  setOrderBy: (orderBy: string) => void;
}

const options = [
  {value: 'relevance', label: 'Relevância'},
  {value: 'highestPrice', label: 'Maior Preço'},
  {value: 'lowestPrice', label: 'Menor Preço'},
];

export default function OrderByForm({orderBy, setOrderBy}: OrderByFormProps) {
  return (
    <div>
      <CustomDropdown
        options={options}
        selectedValue={orderBy}
        onSelect={setOrderBy} />
    </div>
  );
}
