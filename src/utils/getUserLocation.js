const getUserLocation = () => {
    if ('geolocation' in navigator) {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            resolve({ latitude, longitude });
          },
          (error) => {
            reject(error);
          }
        );
      });
    } else {
      return Promise.reject('Geolocation is not supported by your browser.');
    }
  };
  
  // Usage
  getUserLocation()
    .then((location) => {
      const { latitude, longitude } = location;
      console.log('Latitude:', latitude);
      console.log('Longitude:', longitude);
    })
    .catch((error) => console.error('Error:', error));
  