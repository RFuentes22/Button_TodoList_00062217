window.onload = init;

function init() {
    let todoList = {
        listHTML: document.getElementById("todoList"),
        listTask: [],
        add(task, priority = false) {

            let element = document.createElement("li");

            let text = document.createTextNode(task);

            let Button_element = document.createElement("button");
            let B_delete = document.createTextNode("Delete");
            Button_element.appendChild(B_delete);

            let Button_element2 = document.createElement("button");
            let B_Done = document.createTextNode("Done");
            Button_element2.appendChild(B_Done);

            element.appendChild(Button_element);
            element.appendChild(Button_element2);
            element.appendChild(text);

            Button_element.addEventListener("click", function () {
                let parent = element.parentNode;
                if (parent) {
                    parent.removeChild(element);
                }
            })

            Button_element2.addEventListener("click", function () {
                element.style.textDecoration = "line-through";
            });

            if (priority) {
                this.listTask.unshift({
                    element,
                    task
                });
                this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
            } else {
                this.listTask.push({
                    element,
                    task
                });
                this.listHTML.appendChild(element);
            }
        }
    }

    let form = document.managerTask;
    form.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let task = form.task.value;

        let validTask = /.{2,}/;
        if (!validTask.test(task)) {
            console.log("Ingrese una descripcion clara");
            return false;
        }

        todoList.add(task, form.important.checked);

    });
}
