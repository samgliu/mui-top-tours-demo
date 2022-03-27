import {
  Paper,
  Grid,
  Typography,
  Box,
  Rating,
  createTheme,
  ThemeProvider,
  Link,
} from '@mui/material';

import { AccessTime } from '@mui/icons-material';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    body3: true;
  }
}

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: 'body2' },
          style: {
            fontSize: 11,
          },
        },
        {
          props: { variant: 'body3' },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

export interface TourType {
  id: number;
  image: string;
  rating: number;
  price: number;
  numberOfReviews: number;
  duration: number;
  name: string;
}

interface TourProps {
  tour: TourType;
}

const TourCard = ({ tour }: TourProps) => {
  return (
    <Grid item xs={3} sx={{ minWidth: '250px' }}>
      <ThemeProvider theme={theme}>
        <Link href={`/tour/${tour.id}`}>
          <Paper elevation={3}>
            <img className="img" src={tour.image} alt="test" />
            <Box padding={1}>
              <Typography variant="subtitle1" component="h2">
                {tour.name}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                }}
                marginTop={3}
              >
                <AccessTime sx={{ width: 12.5 }} />
                <Typography marginLeft={0.5} variant="body2" component="p">
                  {tour.duration} hours
                </Typography>
                <Rating
                  value={tour.rating}
                  readOnly
                  precision={0.5}
                  size="small"
                />
                <Typography marginLeft={0.5} variant="body2" component="p">
                  {tour.rating}
                </Typography>
                <Typography marginLeft={1.5} variant="body3" component="p">
                  ({tour.numberOfReviews} reviews)
                </Typography>
              </Box>
              <Box>
                <Typography marginLeft={1.5} variant="h6" component="p">
                  from C ${tour.price}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Link>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
