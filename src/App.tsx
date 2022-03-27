import './App.css';
import TourCard from './components/TourCard';
import { Container, Grid, Typography } from '@mui/material';
import SearchAppBar from './components/AppBar';
import cities from './data.json';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Container sx={{ marginY: 5 }}>
        {cities.map((city) => {
          return (
            <>
              <Typography
                variant="h4"
                component="h2"
                marginTop={5}
                marginBottom={3}
              >
                Top {city.name} Tours
              </Typography>

              <Grid container spacing={5}>
                {city.tours.map((tour, index) => (
                  <TourCard key={index} tour={tour} />
                ))}
              </Grid>
            </>
          );
        })}
      </Container>
    </div>
  );
}

export default App;
