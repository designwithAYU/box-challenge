$(document).ready(function () {

    let score = 0;
    let currentBox = "";
    let gameRunning = false;
    let timer;

    function showGreenBox() {

        // Make all boxes white
        $("#box div").css("background-color", "white");

        // Select random box
        let random = Math.floor(Math.random() * 9) + 1;

        currentBox = "box" + random;

        $("#" + currentBox).css("background-color", "green");
    }

    $("#start").click(function () {

        if (gameRunning) return;

        gameRunning = true;

        score = 0;
        $("#score").text(score);

        $(this).prop("disabled", true);

        showGreenBox();

        // Stop game after 30 seconds
        timer = setTimeout(function () {

            gameRunning = false;

            $("#box div").css("background-color", "white");

            $("#start").prop("disabled", false);

            alert("🎉 Game Over!\n\nYour Score: " + score);

        }, 30000);

    });

    $("#box div").click(function () {

        if (!gameRunning) return;

        if ($(this).attr("id") === currentBox) {

            score++;
            $("#score").text(score);

            // Immediately show another green box
            showGreenBox();

        } else {

            score--;
            $("#score").text(score);

        }

    });

});
