function getData(event){
  console.log('fetching... ' + event.id)
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
  output += '<tr><th><input id="newTask" /></th><th><button onclick="addEntry();" id="btnEdit">Add Entry</button></th></tr>'
  var table = "<div id='content'><table>" + output + "</table></div>";
  document.getElementById("taskTableDiv").innerHTML = table;
}
