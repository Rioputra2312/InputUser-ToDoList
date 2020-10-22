function myFunction() {
  var v = document.getElementById("name").value;
  var w = document.getElementById("email").value;
  var x = document.getElementById("negara").value;
  var z = document.getElementsByName('gender');
  for (var i = 0;i < z.length; i++){
	  if (z[i].checked == true) {
	  	var g = z[i].value;
	  }
  }
  var y = document.getElementById("tahun").value;
  var u = 2020-y;
  var tulisan = "Selamat Datang Di Hatiku <br><br>"+
  "<table><tr><td>Nama Lengkap </td><td>:</td><td>"+v+"</td></tr><tr><td>Email </td><td>:</td><td>"+w+
  "</td></tr><tr><td>Jenis Kelamin </td><td>:</td><td>"+g+
  "</td></tr><tr><td>Negara </td><td>:</td><td>"+x+
  "</td></tr><tr><td>Umur </td><td>:</td><td>"+u+"</td></tr></table>";
  var hasil = tulisan.bold();
  if (w == ""){
    document.getElementById("tampilan").innerHTML = "Mohon masukan Email";
  }
  if (v == "") {
  	document.getElementById("tampilan").innerHTML = "Mohon Masukan Nama";
  }
  if (x.length == 0){
  	document.getElementById("tampilan").innerHTML = "Mohon masukan Asal Negara";
  }
  if (g.checked == 0){
  	document.getElementsByName("tampilan").innerHTML = "Mohon masukan Gender";
  }
  if (y.length == 0){
  	document.getElementById("tampilan").innerHTML = "Mohon Masukan Tahun Lahir";
  }
  else{
  document.getElementById("tampilan").innerHTML = hasil;
	}
}



var addTask=function(){
	console.log("Add Task...");
	//Create a new list item with the text from the #new-task:
	var listItem=createNewTaskElement(taskInput.value);

	//Append listItem to incompleteTaskHolder
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);

	taskInput.value="";

}

//Edit an existing task.

var editTask=function(){
console.log("Edit Task...");
console.log("Change 'edit' to 'save'");


var listItem=this.parentNode;

var editInput=listItem.querySelector('input[type=text]');
var label=listItem.querySelector("label");
var containsClass=listItem.classList.contains("editMode");
		//If class of the parent is .editmode
		if(containsClass){

		//switch to .editmode
		//label becomes the inputs value.
			label.innerText=editInput.value;
		}else{
			editInput.value=label.innerText;
		}

		//toggle .editmode on the parent.
		listItem.classList.toggle("editMode");
}




//Delete task.
var deleteTask=function(){
		console.log("Delete Task...");

		var listItem=this.parentNode;
		var ul=listItem.parentNode;
		//Remove the parent list item from the ul.
		ul.removeChild(listItem);

}


//Mark task completed
var taskCompleted=function(){
		console.log("Complete Task...");
	
	//Append the task list item to the #completed-tasks
	var listItem=this.parentNode;
	completedTasksHolder.appendChild(listItem);
				bindTaskEvents(listItem, taskIncomplete);

}


var taskIncomplete=function(){
		console.log("Incomplete Task...");
//Mark task as incomplete.
	//When the checkbox is unchecked
		//Append the task list item to the #incomplete-tasks.
		var listItem=this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
			bindTaskEvents(listItem,taskCompleted);
}



var ajaxRequest=function(){
	console.log("AJAX Request");
}

//The glue to hold it all together.


//Set the click handler to the addTask function.
addButton.onclick=addTask;
addButton.addEventListener("click",addTask);
addButton.addEventListener("click",ajaxRequest);


var bindTaskEvents=function(taskListItem,checkBoxEventHandler){
	console.log("bind list item events");
//select ListItems children
	var checkBox=taskListItem.querySelector("input[type=checkbox]");
	var editButton=taskListItem.querySelector("button.edit");
	var deleteButton=taskListItem.querySelector("button.delete");


			//Bind editTask to edit button.
			editButton.onclick=editTask;
			//Bind deleteTask to delete button.
			deleteButton.onclick=deleteTask;
			//Bind taskCompleted to checkBoxEventHandler.
			checkBox.onchange=checkBoxEventHandler;
}

//cycle over incompleteTaskHolder ul list items
	//for each list item
	for (var i=0; i<incompleteTaskHolder.children.length;i++){

		//bind events to list items chldren(tasksCompleted)
		bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
	}




//cycle over completedTasksHolder ul list items
	for (var i=0; i<completedTasksHolder.children.length;i++){
	//bind events to list items chldren(tasksIncompleted)
		bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
	}

