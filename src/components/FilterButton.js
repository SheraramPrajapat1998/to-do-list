import { Button } from '@material-ui/core';
import React from 'react'

const FilterButton = (props) => {
  const { name, setFilter, active } = props;
  return (
    <Button
      type="button"
      color="primary"
      variant="outlined"
      className= {`${active} `}
      onClick={() => setFilter(name)}
    >
      Show {name} tasks
    </Button>
  );
}

export default FilterButton;
