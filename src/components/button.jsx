import { Button, IconButton, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

export default function MyButton() {
  return (
    <>
      <Stack direction='column' alignItems='center' spacing={2}>
        <Button variant='contained' size='small'>
          HELLO
        </Button>
        <Button variant='contained' color='success' size='medium'>
          SUCCES
        </Button>
        <Button variant='outlined' color='error' size='large'>
          Error
        </Button>
        <IconButton
          color='primary'
          aria-label='upload picture'
          component='span'
        >
          <PhotoCamera />
        </IconButton>
        <Button variant='outlined' startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant='contained' endIcon={<SendIcon />}>
          Send
        </Button>
        <IconButton aria-label='delete' size='large'>
          <DeleteIcon fontSize='inherit' />
        </IconButton>
      </Stack>
    </>
  );
}
