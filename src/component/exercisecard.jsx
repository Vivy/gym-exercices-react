import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ ex }) => {
  return (
    <Link className='exercise-card' to={`/exercise/${ex.id}`}>
      <img src={ex.gifUrl} alt={ex.name} loading='lazy' />
      <Stack direction='row'>
        <Button
          sx={{
            ml: '21px',
            color: '#fff',
            background: '#FFA9A9',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize',
          }}
        >
          {ex.bodyPart}
        </Button>
        <Button
          sx={{
            ml: '21px',
            color: '#fff',
            background: '#FCC757',
            fontSize: '14px',
            borderRadius: '20px',
            textTransform: 'capitalize',
          }}
        >
          {ex.target}
        </Button>
      </Stack>
      <Typography
        ml='21px'
        color='#000'
        fontWeight='bold'
        sx={{ fontSize: { lg: '24px', xs: '20px' } }}
        mt='11px'
        pb='10px'
        textTransform='capitalize'
      >
        {ex.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
