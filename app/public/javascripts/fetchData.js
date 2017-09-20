function getData(){
  console.log('fetching...')
  fetch('http://localhost:3000/api/nodefetch').then(function (data) {
    console.log(data)
    data.json().then(function(my_json) {
      console.log(my_json)
    });
  });
}
