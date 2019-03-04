import React from 'react';
import { Typography } from '@material-ui/core';

const MatchDay = ({day}: { day: number }) => {
  return (
    <Typography component="h2" variant="display1" color="inherit">
      &lt; MatchDay {day}
    </Typography>
  )
}

export default MatchDay;
