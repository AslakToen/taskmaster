function deliteEntry(e){
  console.log("delete...")
  let id= e.target.id;
  fetch('http://localhost:3000/api/nodedelite/' + id).then(function(data){
    console.log(data);
  });
}
