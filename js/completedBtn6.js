document.getElementById("completed-btn6").addEventListener("click" , function(event){
    event.preventDefault();
    
    const checkPoint = document.getElementById("check-point");
    const taskAssignedPoint = document.getElementById("task-assigned-point");
    const completedButton = document.getElementById("completed-btn6");
    completedButton.disabled = true;

    alert("Board updated successfully");
    alert("Congrates!!! You have completed all the current task");

    checkPoint.innerText = '29' ;
    taskAssignedPoint.innerText = '00';  
    
    const notificationMassage = document.getElementById("notification-massage");
    const card1 = document.getElementById("card-6");


    const div = document.createElement("div");
    div.classList.add("bg-indigo-50")
    div.classList.add("rounded-xl")
    div.classList.add("text-left")
    div.classList.add("p-4")

    div.innerHTML = `
    <h1>You have completed the task ${card1.innerText} at ${new Date().toLocaleTimeString()}</h1>
    `
    notificationMassage.appendChild(div);

    document.getElementById("clear-history-btn").addEventListener("click" , function(event){
        event.preventDefault();
        notificationMassage.innerHTML = ' ';
    })

});