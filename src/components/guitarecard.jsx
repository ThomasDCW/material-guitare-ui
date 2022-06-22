import { useState } from 'react';
import { Box, Typography, Rating, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';

export default function GuitareCard() {
  const [value, setValue] = useState(4);
  return (
    <>
      <Box
        display='flex'
        sx={{
          margin: '1em',
          bgcolor: '#ffffff',
          width: '80vw',
          borderRadius: '6px',
          boxShadow: '1px 1px 1px 1px #00000050',
          justifyContent: 'space-between',
        }}
      >
        <img src='https://thumbs.static-thomann.de/thumb/thumb220x220/pics/prod/462511.webp' />
        <Box
          display='flex'
          sx={{
            marginRight: '24em',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}
        >
          <Typography color='#313131' variant='h6'>
            Gibson - Les Paul Standard 60s UB
          </Typography>
          <Rating
            name='simple-controlled'
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Typography variant='body' color='#000000a0'>
            Corps en acajou
          </Typography>
          <Typography variant='body' color='#000000a0'>
            Table en érable flammé AA
          </Typography>
          <Typography variant='body' color='#000000a0'>
            Manche en acajou
          </Typography>
          <Typography color='#03b27e'>Disponible immédiatement</Typography>
        </Box>
        <Box
          display='flex'
          sx={{
            padding: '1em',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Typography
            align='center'
            color='#313131'
            variant='h4'
            sx={{ fontWeight: 'bold' }}
          >
            2.290€
          </Typography>
          <Box>
            <IconButton aria-label='fav' size='large'>
              <FavoriteBorderSharpIcon />
            </IconButton>
            <IconButton aria-label='buy' size='large'>
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
}
