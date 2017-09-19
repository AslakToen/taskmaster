function getData(){
  console.log('fetch')
  fetch('http://localhost:3000/nodefetch').then(function (data) {
    console.log(data)
    data.json().then(function(my_json) {
      console.log(my_json)
    });
  });
}
