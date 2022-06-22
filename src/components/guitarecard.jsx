import { Button } from '@mui/material';
import { Box, Typography } from '@mui/material';

export default function GuitareCard() {
  return (
    <>
      <Box
        display='flex'
        sx={{
          margin: '2em',
          bgcolor: '#ffffff',
          height: '200px',
          borderRadius: '6px',
          boxShadow: '1px 1px 1px 1px #00000050',
          justifyContent: 'space-around',
        }}
      >
        <img src='https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/462511.webp' />
        <Box
          display='flex'
          sx={{
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}
        >
          <Typography color='#313131' variant='h6'>
            Gibson - Les Paul Standard 60s UB
          </Typography>
          <Typography color='#000000a0'>Corps en acajou</Typography>
          <Typography color='#000000a0'>Table en érable flammé AA</Typography>
          <Typography color='#000000a0'>Manche en acajou</Typography>
          <Typography color='#03b27e'>Disponible immédiatement</Typography>
        </Box>
        <Box>
          <Typography
            color='#313131'
            variant='h5'
            sx={{ fontWeight: 'bold', marginRight: '10px' }}
          >
            2.290€
          </Typography>
        </Box>
      </Box>
    </>
  );
}
