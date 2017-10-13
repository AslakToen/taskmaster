function getData(){
  console.log('fetching...')
  fetch('http://localhost:3000/api/nodefetch').then(function (data) {
    console.log(data)
    data.json().then(function(my_json) {
      generateTable(my_json);
    });
  });
}

function generateTable(my_json){
  var output = "";
  for(var i = 0; i < my_json.length; i++){
    output += ("<tr><th>" + my_json[i].TaskName + "</th>" +
    "<th><button onclick='deliteEntry(event);' id=" + my_json[i].idTask + ">delite</button></th></tr>");
  }
  var table = "<table>" + output + "</table>";
  document.getElementById("root").innerHTML = table;
}
