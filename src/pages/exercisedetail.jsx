import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../component/detail';
import ExercisesVideos from '../component/exercisevideos';
import SimilarExercises from '../component/similarexercises';
import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchdata';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();
  const [exerciseVideos, setExerciseVideos] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';

      const youtubeSearchUrl =
        'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );

      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideosData.contents);
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExercisesVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;
