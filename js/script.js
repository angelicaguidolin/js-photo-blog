console.log(axios)
axios.get('https://jsonplaceholder.typicode.com/photos?_limit=6')
  .then(function (resp) {
    // handle success
    console.log(resp.data.url);
  })