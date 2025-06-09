function addNewTask() {
    var list = document.getElementById("list");
    var text = document.getElementById("taskname").value;
    var listItem = document.createElement("li");
    listItem.className = "list-item";

    if(text.length === 0){
        alert('Tarefa não pode estar em branco');
        return;
    }

    const textElement = document.createTextNode(text);
    listItem.appendChild(textElement);
    list.appendChild(listItem);
}