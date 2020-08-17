var currentDay = document.getElementById("#currentDay");
var timeblockContainer = document.getElementById("#new-todos");
var hourList = document.getElementById("#hour-list")
var businessHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var userInput = document.getElementById("userInput")

// renders hours, textbox and save buttons.
renderHours();

function renderHours() {
    hourList.innerHTML = "";
    for (var i = 0; i < businessHours.length; i++) {
        var hours = businessHours[i];

        var li = document.createElement("li");
        li.textContent = hours;

        var textarea = document.createElement("textarea");
        textarea.setAttribute('id', 'userInput');

        var button = document.createElement("button");
        button.setAttribute("id", "save");
        button.textContent = "Save";

        li.appendChild(textarea);
        li.appendChild(button);
        hourList.appendChild(li);
    }

        //on clicking save button, then user input should persist
    button.addEventListener("click", function (event) {
        event.preventDefault();


        userInput.value = "";

        if (localStorage.getItem("userInput") != null) {
            $('#userInput').val() = localStorage.getItem("userInput");
        };

        $("userInput").change(function () {
           localStorage.setItem("userInput", $("#userInput").val());
        })

    })



};