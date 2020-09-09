$(document).ready(function () {

    var todoItem = document.querySelector("todoItem");
    var todoList9 = [];
    var todoList10 = [];
    var todoList11 = [];
    var todoList12 = [];
    var todoList1 = [];
    var todoList2 = [];
    var todoList3 = [];
    var todoList4 = [];
    var todoList5 = [];

    init();
    renderTodos();

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    //push local storage to button elements
    function renderTodos() {
        todoList9.innerHTML = "";
        for (var i = 0; i < todoList9.length; i++) {
            var listButton = $("<button>");
            listButton.addClass("todoItem");
            listButton.attr("data-name", todoList9[i]);
            listButton.text(todoList9[i]);
            $("#area9").append(listButton);
        }
        todoList10.innerHTML = "";
        for (var i = 0; i < todoList10.length; i++) {
            var listButton = $("<button>");
            listButton.addClass("todoItem");
            listButton.attr("data-name", todoList10[i]);
            listButton.text(todoList10[i]);
            $("#area10").append(listButton);
        }
        todoList11.innerHTML = "";
        for (var i = 0; i < todoList11.length; i++) {
            var listButton = $("<button>");
            listButton.addClass("todoItem");
            listButton.attr("data-name", todoList11[i]);
            listButton.text(todoList11[i]);
            $("#area11").append(listButton);
        }
        todoList12.innerHTML = "";
        for (var i = 0; i < todoList12.length; i++) {
            var listButton = $("<button>");
            listButton.addClass("todoItem");
            listButton.attr("data-name", todoList12[i]);
            listButton.text(todoList12[i]);
            $("#area12").append(listButton);
        }
        todoList1.innerHTML = "";
        for (var i = 0; i < todoList1.length; i++) {
            var listButton = $("<button>");
            listButton.addClass("todoItem");
            listButton.attr("data-name", todoList1[i]);
            listButton.text(todoList1[i]);
            $("#area1").append(listButton);
        }
        todoList2.innerHTML = "";
        for (var i = 0; i < todoList2.length; i++) {
            var listButton = $("<button>");
            listButton.addClass("todoItem");
            listButton.attr("data-name", todoList2[i]);
            listButton.text(todoList2[i]);
            $("#area2").append(listButton);
        }
        todoList3.innerHTML = "";
        for (var i = 0; i < todoList3.length; i++) {
            var listButton = $("<button>");
            listButton.addClass("todoItem");
            listButton.attr("data-name", todoList3[i]);
            listButton.text(todoList3[i]);
            $("#area3").append(listButton);
        }
        todoList4.innerHTML = "";
        for (var i = 0; i < todoList4.length; i++) {
            var listButton = $("<button>");
            listButton.addClass("todoItem");
            listButton.attr("data-name", todoList4[i]);
            listButton.text(todoList4[i]);
            $("#area4").append(listButton);
        }
        todoList5.innerHTML = "";
        for (var i = 0; i < todoList5.length; i++) {
            var listButton = $("<button>");
            listButton.addClass("todoItem");
            listButton.attr("data-name", todoList5[i]);
            listButton.text(todoList5[i]);
            $("#area5").append(listButton);
        }
    }

    //check local storage
    function init() {
        var storedTodos9 = JSON.parse(localStorage.getItem("todos9"));
        if (storedTodos9 !== null) {
            todoList9 = storedTodos9;
        }
        var storedTodos10 = JSON.parse(localStorage.getItem("todos10"));
        if (storedTodos10 !== null) {
            todoList10 = storedTodos10;
        }
        var storedTodos11 = JSON.parse(localStorage.getItem("todos11"));
        if (storedTodos11 !== null) {
            todoList11 = storedTodos11;
        }
        var storedTodos12 = JSON.parse(localStorage.getItem("todos12"));
        if (storedTodos12 !== null) {
            todoList12 = storedTodos12;
        }
        var storedTodos1 = JSON.parse(localStorage.getItem("todos1"));
        if (storedTodos1 !== null) {
            todoList1 = storedTodos1;
        }
        var storedTodos2 = JSON.parse(localStorage.getItem("todos2"));
        if (storedTodos2 !== null) {
            todoList2 = storedTodos2;
        }
        var storedTodos3 = JSON.parse(localStorage.getItem("todos3"));
        if (storedTodos3 !== null) {
            todoList3 = storedTodos3;
        }
        var storedTodos4 = JSON.parse(localStorage.getItem("todos4"));
        if (storedTodos4 !== null) {
            todoList4 = storedTodos4;
        }
        var storedTodos5 = JSON.parse(localStorage.getItem("todos5"));
        if (storedTodos5 !== null) {
            todoList5 = storedTodos5;
        }
    }

    //storing input from each array
    function storeTodos() {
        localStorage.setItem("todos9", JSON.stringify(todoList9));
        localStorage.setItem("todos10", JSON.stringify(todoList10));
        localStorage.setItem("todos11", JSON.stringify(todoList11));
        localStorage.setItem("todos12", JSON.stringify(todoList12));
        localStorage.setItem("todos1", JSON.stringify(todoList1));
        localStorage.setItem("todos2", JSON.stringify(todoList2));
        localStorage.setItem("todos3", JSON.stringify(todoList3));
        localStorage.setItem("todos4", JSON.stringify(todoList4));
        localStorage.setItem("todos5", JSON.stringify(todoList5));
    }

    //push new input to 9:00
    $("#save9").on("click", function (event) {
        $("#area9").empty();
        event.preventDefault();
        var todo9 = $("#userInput9").val().trim();

        todoList9.push(todo9);
        storeTodos();

        for (var i = 0; i < todoList9.length; i++) {
            var listButton = $("<button>");
            listButton.addClass("todoItem");
            listButton.attr("data-name", todoList9[i]);
            listButton.text(todoList9[i]);
            $("#area9").append(listButton);
        }
    });

    //push new input to 10:00
    $("#save10").on("click", function (event) {
        $("#area10").empty();
        event.preventDefault();
        var todo10 = $("#userInput10").val().trim();

        todoList10.push(todo10);
        storeTodos();

        for (var i = 0; i < todoList10.length; i++) {
            var listButton = $("<button>");
            listButton.addClass("todoItem");
            listButton.attr("data-name", todoList10[i]);
            listButton.text(todoList10[i]);
            $("#area10").append(listButton);
        }
    });

    //push new input to 11:00
    $("#save11").on("click", function (event) {
        $("#area11").empty();
        event.preventDefault();
        var todo11 = $("#userInput11").val().trim();

        todoList11.push(todo11);
        storeTodos();

        for (var i = 0; i < todoList11.length; i++) {
            var listButton = $("<button>");
            listButton.addClass("todoItem");
            listButton.attr("data-name", todoList11[i]);
            listButton.text(todoList11[i]);
            $("#area11").append(listButton);
        }
    });

    //push new input to 12:00
    $("#save12").on("click", function (event) {
        $("#area12").empty();
        event.preventDefault();
        var todo12 = $("#userInput12").val().trim();

        todoList12.push(todo12);
        storeTodos();

        for (var i = 0; i < todoList12.length; i++) {
            var listButton = $("<button>");
            listButton.addClass("todoItem");
            listButton.attr("data-name", todoList12[i]);
            listButton.text(todoList12[i]);
            $("#area12").append(listButton);
        }

    });

    //push new input to 1:00
    $("#save1").on("click", function (event) {
        $("#area1").empty();
        event.preventDefault();
        var todo1 = $("#userInput1").val().trim();

        todoList1.push(todo1);
        storeTodos();

        for (var i = 0; i < todoList1.length; i++) {
            var listButton = $("<button>");
            listButton.addClass("todoItem");
            listButton.attr("data-name", todoList1[i]);
            listButton.text(todoList1[i]);
            $("#area1").append(listButton);
        }

    });

    //push new input to 2:00
    $("#save2").on("click", function (event) {
        $("#area2").empty();
        event.preventDefault();
        var todo2 = $("#userInput2").val().trim();

        todoList2.push(todo2);
        storeTodos();

        for (var i = 0; i < todoList2.length; i++) {
            var listButton = $("<button>");
            listButton.addClass("todoItem");
            listButton.attr("data-name", todoList2[i]);
            listButton.text(todoList2[i]);
            $("#area2").append(listButton);
        }

    });

    //push new input to 3:00
    $("#save3").on("click", function (event) {
        $("#area3").empty();
        event.preventDefault();
        var todo3 = $("#userInput3").val().trim();

        todoList3.push(todo3);
        storeTodos();

        for (var i = 0; i < todoList3.length; i++) {
            var listButton = $("<button>");
            listButton.addClass("todoItem");
            listButton.attr("data-name", todoList3[i]);
            listButton.text(todoList3[i]);
            $("#area3").append(listButton);
        }

    });

    //push new input to 4:00
    $("#save4").on("click", function (event) {
        $("#area4").empty();
        event.preventDefault();
        var todo4 = $("#userInput4").val().trim();

        todoList4.push(todo4);
        storeTodos();

        for (var i = 0; i < todoList4.length; i++) {
            var listButton = $("<button>");
            listButton.addClass("todoItem");
            listButton.attr("data-name", todoList4[i]);
            listButton.text(todoList4[i]);
            $("#area4").append(listButton);
        }

    });

    //push new input to 5:00
    $("#save5").on("click", function (event) {
        $("#area5").empty();
        event.preventDefault();
        var todo5 = $("#userInput5").val().trim();

        todoList5.push(todo5);
        storeTodos();

        for (var i = 0; i < todoList5.length; i++) {
            var listButton = $("<button>");
            listButton.addClass("todoItem");
            listButton.attr("data-name", todoList5[i]);
            listButton.text(todoList5[i]);
            $("#area5").append(listButton);
        }

    });

    $(".todoItem").on("click", removeEl);

    function removeEl() {
        var element = event.target;

        if (element.matches("button") === true) {
            var index = element.parentElement.getAttribute("data-name");
            todoList9.splice(index, 1);
            todoList10.splice(index, 1);
            todoList11.splice(index, 1);
            todoList12.splice(index, 1);
            todoList1.splice(index, 1);
            todoList2.splice(index, 1);
            todoList3.splice(index, 1);
            todoList4.splice(index, 1);
            todoList5.splice(index, 1);

            storeTodos();
            renderTodos();
        }
    };

});
