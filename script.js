$(document).ready(function () {

    let score = 0;
    let currentBox = 0;
    let gameInterval;
    let gameRunning = false;

    $("#start").click(function () {

        if (gameRunning) return; // Prevent multiple starts

        gameRunning = true;
        score = 0;
        $("#score").text(score);

        $("#start").text("PLAYING...");
        $("#start").prop("disabled", true);

        gameInterval = setInterval(function () {

            // Remove previous green box
            $("#box div").css("background-color", "white");

            // Select random box
            currentBox = Math.floor(Math.random() * 9) + 1;

            // Make it green
            $("#box" + currentBox).css("background-color", "green");

        }, 1000);

        // Stop game after 30 seconds
        setTimeout(function () {

            clearInterval(gameInterval);

            $("#box div").css("background-color", "white");

            gameRunning = false;

            $("#start").text("START AGAIN");
            $("#start").prop("disabled", false);

            alert("Game Over!\nYour Score: " + score);

        }, 30000);

    });

    $("#box div").click(function () {

        if (!gameRunning) return;

        let clickedBox = $(this).attr("id");

        if (clickedBox == "box" + currentBox) {

            score++;
            $("#score").text(score);

            // Prevent multiple clicks on same green box
            currentBox = 0;

            $(this).css("background-color", "white");

        } else {

            score--;

            if (score < 0)
                score = 0;

            $("#score").text(score);

        }

    });

});
