import axios from './request.jsx'

axios.get('https://api.golemio.cz/v2/gtfs/routes?limit=30', headers: { 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJlYmVraW4ubGUuMjAyMEBza29sYS5zc3BzLmN6IiwiaWQiOjE2NDMsIm5hbWUiOm51bGwsInN1cm5hbWUiOm51bGwsImlhdCI6MTY3NDQ3NTM5OCwiZXhwIjoxMTY3NDQ3NTM5OCwiaXNzIjoiZ29sZW1pbyIsImp0aSI6IjkzNzA5NTU5LWExNzMtNDVlYS1hN2Y2LTU3NDBhNTE1ZTU0MSJ9.Mm8JUGAJlZ7Ed2fQoXRzlwlKvUni6VWURQzRROpvL_4' })
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });