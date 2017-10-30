function addEntry() {
  console.log("adding...")
  let task = document.getElementById("newTask").value;
  console.log(task);
  fetch('http://localhost:3000/api/nodeadd/' + task).then(function(data){
    console.log(data.body);
  });
}
