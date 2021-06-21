const numberOfValleys = (trip) => {
  let valleys = 0;
  let altitude = 0;
  const tripArray = trip.split('');
  tripArray.map(leg => {
    switch (leg.toUpperCase()) {
      case 'U':
        altitude++;
        if (altitude === 0) {
          valleys++;
        }
        break;
      case 'D':
        altitude--;
        break;
    }
  });

  return valleys;
};

const trips = [
  'UDDDUDUU',
  'cUDD1DU3DUU',
  'UDDUUDDUUU',
  'DUDDUUDDDUUU',
  'DDUDUU'
];
trips.map(trip => {
  console.log(trip);
  console.log(numberOfValleys(trip));
});
