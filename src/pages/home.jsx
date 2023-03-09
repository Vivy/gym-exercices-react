import { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../component/herobanner';
import SearchExercises from '../component/searchexercises';
import Exercises from '../component/exercises';

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
      />
      <Exercises
        setExercises={setExercises}
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
