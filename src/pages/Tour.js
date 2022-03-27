import {
  Container,
  Typography,
  Box,
  BottomNavigation,
  Paper,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import QuiltedImageList from '../components/ImageCollage';
import Accordion from '../components/Accordion';
import BasicModal from '../components/Modal';

const Tour = () => {
  let { id } = useParams();
  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World! Tour #{id}!
      </Typography>
      <Box marginTop={3} sx={{ display: 'flex' }}>
        <img
          src="https://www.tekportal.net/wp-content/uploads/2019/02/la-0675.jpg"
          alt="la"
          height={325}
        />
        <QuiltedImageList />
      </Box>

      <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
          About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </Box>
      <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
          Frequently asked question
        </Typography>
        <Accordion />
      </Box>

      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation showLabels>
          <BasicModal />
        </BottomNavigation>
      </Paper>
    </Container>
  );
};

export default Tour;
