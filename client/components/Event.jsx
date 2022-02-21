import React from 'react';
import DateBox from './DateBox';
import ShareButton from './ShareButton';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';

const Event = ({
  name,
  startDate,
  startTime,
  venue,
  city,
  state,
  price,
  vendorUrl
}) => {
  const modVenue = venue.replace(`- ${city}`, '');
  console.log('url', vendorUrl);
  return (
    <Paper sx={{
      borderRadius: 5,
      p: 1
    }}>
      <Grid container spacing={2}>
        <Grid item xs={9}>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="body2">{startDate} at {startTime}</Typography>
          <Typography variant="body2">{modVenue} · {city}, {state}</Typography>
        </Grid>
        <Grid item xs={3}>
          <DateBox startDate={startDate} />
        </Grid>
      </Grid>
      <Grid container justifyContent="space-between">
        <Grid item xs={6}>
          <Button startIcon={<BookmarkAddIcon />} variant='text'>SAVE</Button>
        </Grid>
        <Grid item xs={6}>
          {/* <Button variant='text'>SHARE</Button> */}
          <ShareButton url={vendorUrl} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Event;