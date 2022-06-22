import { Image } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';

export default function GuitareCard() {
  return (
    <>
      <Box
        display='flex'
        sx={{
          margin: '2em',
          bgcolor: '#ffffff',
          height: '332px',
          width: '240px',
          borderRadius: '8px',
          boxShadow: '3px 3px 1px 3px #00000050',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <img src='https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/462511.webp' />
        <Typography align='center'>Gibson</Typography>
        <Typography align='center'>Les Paul Standard 60s UB</Typography>
        <Typography align='center' color='green'>
          2.290 €
        </Typography>
      </Box>
    </>
  );
}
