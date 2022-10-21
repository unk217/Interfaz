var addnew = document.getElementById ('add');
var list =document.getElementById ('list');
var data =[];

addnew.addEventListener("click",add);

function add(){
var name = document.getElementById('name').value;
var lastname = document.getElementById('lastname').value;
var fecha = document.getElementById('fecha').value;

var dateselect=$("#fecha").val();
var fbirth = new Date(dateselect);
var factual = new Date();
var age= parseInt(
    (factual - fbirth) / (1000 * 60 * 60 * 24 * 365)
);

console.log(name);
console.log(lastname);
console.log(fecha);
console.log(age);

data.push(
  {
      'name' : name,
      'lastname': lastname,
      'fecha': fecha,
      'age' : age,

  }
);
var fila = '<tr><td>'+name+'</td><td>'+lastname+'</td><td>'+fecha+'</td><td>'+age+'</td></tr>';
$("#list").append(fila);
$("#name").focus();
}
