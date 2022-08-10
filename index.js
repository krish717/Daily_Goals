const title = document.getElementById("title");
const description = document.getElementById("desc");

const form = document.querySelector("form");
const container =  document.querySelector(".container");

const task = localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : [];
showAllTasks();
function showAllTasks(){
    task.forEach((value,index) => {
        const div = document.createElement("div");
        div.setAttribute("Class", "task");
        const innerDiv = document.createElement("div");
        div.append(innerDiv);

        const p = document.createElement("p");
        p.innerText=value.title;
        innerDiv.append(p);

        const span = document.createElement("span");
        span.innerText=value.description;
        innerDiv.append(span);

        const btn =  document.createElement("btn");
        btn.setAttribute("class", "deletebtn");
        btn.innerText = "-";

        btn.addEventListener("click", () => {
            removeTask();
                task.splice(index, 1);
                localStorage.setItem("task", JSON.stringify(task));
                showAllTasks();
        });




        div.append(btn);

        container.append(div);
    });
}


function removeTask(){
    task.forEach(() => {
         const div = document.querySelector(".task");
         div.remove();
    });
}






form.addEventListener("submit", (e) => {
    e.preventDefault();
    removeTask();
    task.push({
        title:title.value,
        description:description.value
    });
    localStorage.setItem("task", JSON.stringify(task));
    showAllTasks();
});


























