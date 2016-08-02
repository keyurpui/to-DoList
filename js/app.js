/**
 * Created by Keyur on 2/15/2016.
 */



function displayTodo()
{
    var getTodo = document.getElementById("inputTodo").value;
    var createLi = document.createElement("li");
    var getUi = document.getElementById("listTodo");
    getUi.appendChild(createLi);
    createLi.innerText = getTodo;
    createLi.onclick = function() {this.parentNode.removeChild(this); saveTodos();}
    saveTodos();
}

function getTodosdata()

{
    var x = document.getElementById("listTodo").getElementsByTagName("li");
    var getLiData = [];
    for(var i =0; i<x.length;i++)
    {
        getLiData[i] = x[i].innerText;
    }
    return getLiData;
}

function saveTodos()
{
    var x = JSON.stringify(getTodosdata());
    localStorage.setItem("ToDos", x);
}
window.onload = function() {
    var src  = localStorage.getItem("ToDos");
    var newAraay =JSON.parse(src);
    var getUi = document.getElementById("listTodo");
    for(var i =0; i<newAraay.length;i++)
    {
        var item = newAraay[i];
        var elem = document.createElement("li");
        elem.innerHTML=item;
        getUi.appendChild(elem);
        elem.onclick = function() {this.parentNode.removeChild(this);saveTodos();}
    }
};

