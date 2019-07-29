console.log("Hello");
window.onload = showItem;


let submitBtn = document.querySelector('#submitbtn');
let closeBtn = document.querySelector('.close');
submitbtn.addEventListener('click', saveItem);

function saveItem(){
  let item = document.querySelector('#itemName').value;

  if(localStorage.length === 0){
    let list = [];
    list.push(item);
    var data = JSON.stringify(list);
    localStorage.setItem('List', data);
    console.log('Your Item saved Successfully');
  }
  else{
    let list = JSON.parse(localStorage.getItem('List'));
    list.push(item);
    var data = JSON.stringify(list);
    localStorage.setItem("List", data);
    console.log('Your Item saved Successfully');
  }
  location.reload();
}

function showItem(){
  const allItem = JSON.parse(localStorage.getItem('List'));
  const taskList = document.querySelector('#taskList');

  for(var i=0; i<allItem.length; i++){
    var list = document.createElement('li')
    var divEle = document.createElement('div');
    var divTxt = document.createTextNode(allItem[i]);
    var spanEle = document.createElement('span');
    divEle.setAttribute('class', 'alert alert-info alert-dismissible fade show');
    spanEle.setAttribute('class', 'close');
    spanEle.setAttribute('data-dismiss', 'alert');
    spanEle.innerHTML = "x";
    divEle.appendChild(divTxt);
    divEle.appendChild(spanEle);
    list.appendChild(divEle);
    taskList.appendChild(list);
  }
}

(function(){

  var allItem = document.getElementsByClassName('close');
  console.log(allItem);
  for(var i=0; i<allItem.length; i++){
    let currentItem = allItem[i];
  }
})();

closeBtn.addEventListener('click', deletion){
	
}