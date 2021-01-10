import React from 'react'

const FilterButton = (props) => {
  const { name, setFilter } = props;
  return (
    <button
      type="button"
      className="btn toggle-btn btn-filter-group"
      onClick={() => setFilter(name)}
    >
      <span>Show </span>
      <span>{name} </span>
      <span>Tasks</span>
    </button>
  );
}

export default FilterButton;
