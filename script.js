$(document).ready(function () {


    var currentDay = document.getElementById("#currentDay");
    var timeListItem = document.getElementById("timeListItem");
    var todoList = ["hello world", "whats up"];
    var todoList9 = ["hello world", "whats up"];
    var todoList10 = ["hello world", "whats up"];
    var todoList11 = ["hello world", "whats up"];
    var todoList12 = ["hello world", "whats up"];
    var todoList1 = ["hello world", "whats up"];
    var todoList2 = ["hello world", "whats up"];
    var todoList3 = ["hello world", "whats up"];
    var todoList4 = ["hello world", "whats up"];
    var todoList5 = ["hello world", "whats up"];
    

    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    function alertInput() {
        var todo =$(this).attr("data-name");

    }



    $("#save9").on("click", function(event) {
        $("#area9").empty();
        event.preventDefault();
        var todo9 = $("#userInput9").val().trim();

        todoList9.push(todo9);



        for (var i = 0; i < todoList9.length; i++) {
            var listButton = $("<button>");
            listButton.addClass("todoItem");
            listButton.attr("data-name", todoList9[i]);
            listButton.text(todoList9[i]);
            $("#area9").append(listButton);
        }

        renderTodos9();
    });

    $("#save10").on("click", function(event) {
        $("#area10").empty();
        event.preventDefault();
        var todo10 = $("#userInput10").val().trim();

        todoList10.push(todo10);



        for (var i = 0; i < todoList10.length; i++) {
            var listButton = $("<button>");
            listButton.addClass("todoItem");
            listButton.attr("data-name", todoList10[i]);
            listButton.text(todoList10[i]);
            $("#area10").append(listButton);
        }

    });

    $("#save11").on("click", function(event) {
        $("#area11").empty();
        event.preventDefault();
        var todo11 = $("#userInput11").val().trim();

        todoList11.push(todo11);



        for (var i = 0; i < todoList11.length; i++) {
            var listButton = $("<button>");
            listButton.addClass("todoItem");
            listButton.attr("data-name", todoList11[i]);
            listButton.text(todoList11[i]);
            $("#area11").append(listButton);
        }

    });

    $("#save12").on("click", function(event) {
        $("#area12").empty();
        event.preventDefault();
        var todo12 = $("#userInput12").val().trim();

        todoList12.push(todo12);



        for (var i = 0; i < todoList12.length; i++) {
            var listButton = $("<button>");
            listButton.addClass("todoItem");
            listButton.attr("data-name", todoList12[i]);
            listButton.text(todoList12[i]);
            $("#area12").append(listButton);
        }

    });

    $("#save1").on("click", function(event) {
        $("#area1").empty();
        event.preventDefault();
        var todo1 = $("#userInput1").val().trim();

        todoList1.push(todo1);



        for (var i = 0; i < todoList1.length; i++) {
            var listButton = $("<button>");
            listButton.addClass("todoItem");
            listButton.attr("data-name", todoList1[i]);
            listButton.text(todoList1[i]);
            $("#area1").append(listButton);
        }

    });

    $("#save2").on("click", function(event) {
        $("#area2").empty();
        event.preventDefault();
        var todo2 = $("#userInput2").val().trim();

        todoList2.push(todo2);



        for (var i = 0; i < todoList2.length; i++) {
            var listButton = $("<button>");
            listButton.addClass("todoItem");
            listButton.attr("data-name", todoList2[i]);
            listButton.text(todoList2[i]);
            $("#area2").append(listButton);
        }

    });

    $("#save3").on("click", function(event) {
        $("#area3").empty();
        event.preventDefault();
        var todo3 = $("#userInput3").val().trim();

        todoList3.push(todo3);



        for (var i = 0; i < todoList3.length; i++) {
            var listButton = $("<button>");
            listButton.addClass("todoItem");
            listButton.attr("data-name", todoList3[i]);
            listButton.text(todoList3[i]);
            $("#area3").append(listButton);
        }

    });

    $("#save4").on("click", function(event) {
        $("#area4").empty();
        event.preventDefault();
        var todo4 = $("#userInput4").val().trim();

        todoList4.push(todo4);



        for (var i = 0; i < todoList4.length; i++) {
            var listButton = $("<button>");
            listButton.addClass("todoItem");
            listButton.attr("data-name", todoList4[i]);
            listButton.text(todoList4[i]);
            $("#area4").append(listButton);
        }

    });

    $("#save5").on("click", function(event) {
        $("#area5").empty();
        event.preventDefault();
        var todo5 = $("#userInput5").val().trim();

        todoList5.push(todo5);



        for (var i = 0; i < todoList5.length; i++) {
            var listButton = $("<button>");
            listButton.addClass("todoItem");
            listButton.attr("data-name", todoList5[i]);
            listButton.text(todoList5[i]);
            $("#area5").append(listButton);
        }

    });




});
