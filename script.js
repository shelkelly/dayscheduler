var currentDay = document.getElementById("#currentDay");
var timeblockContainer = document.getElementById("#new-todos");
var hourList = document.getElementById("#hour-list")
var userInput = document.getElementById("userInput")


const businessHours = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
businessHours.forEach((o,i)=>o.id=i+1);
console.log(businessHours);


// renders hours, textbox and save buttons.
renderHours();



function renderHours() {

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    hourList.innerHTML = "";
    for (var i = 0; i < businessHours.length; i++) {
        var hours = businessHours[i];

        var li = document.createElement("li");
        li.textContent = hours;

        var textarea = document.createElement("textarea");
        textarea.setAttribute('id', 'userInput');

        var button = document.createElement("button");
        button.setAttribute("data", this);
        button.setAttribute("id", "save");
        button.textContent = "Save";
        console.log(button);

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

function hourTracker() {
    var currentHour = moment().hour();

    $("li").each(function () {
        var hourBlock = parseInt($(this).attr("id").split(businessHours)[1]);
        console.log( blockHour, currentHour)

        if (hourBlock < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        }
        else if (hourBlock === currentHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}