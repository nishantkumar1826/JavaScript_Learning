// fetch :- function used for making HTTP requests to feth resources
//          (JSON style data, images, files)
//          Simplifies asynchronous data fetching in Javascript and 
//          used for interacting with API's to reterive and send send
//          data asynchronously over the web.
//          fetch(url, {get})

// get is used to fetch data from an API
// post is used to send some data
// put is used to replace some data
// delete is used to delete data

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => response.json())
    .then(data => console.log(data.weight))
    .catch(error => console.error(error));

    //Finally javascript ended successfully
    