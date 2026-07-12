$(document).ready(function () {

    let score = 0;
    let game;

    $("#start").click(function () {

        clearInterval(game); // Prevent multiple intervals

        game = setInterval(function () {

            // Make all boxes white
            $("#box div").css("background-color", "white");

            // Select random box
            let randomBox = Math.floor(Math.random() * 9) + 1;

            // Make one box green
            $("#box" + randomBox).css("background-color", "green");

        }, 1000);

    });

    $("#box div").click(function () {

        // Check ONLY the clicked box
        if ($(this).css("background-color") == "rgb(0, 128, 0)") {

            score++;
            $("#score").text(score);

            // Prevent multiple scoring from the same green box
            $(this).css("background-color", "white");

        } else {

            score--;
            $("#score").text(score);

        }

    });

});
