
       $(document).ready(function(){
        $("#start").click(function(){

            $("#start").css("background-color","green");
            setInterval(function(){
             let randomBox = Math.floor(Math.random() * 9) + 1;
              
             $("#box div").css("background-color", "white");

             $("#box" + randomBox).css("background-color", "green");
        },(1000));
       });

       let score=0;
       $("#box div").click(function(){
        if($(this).css("background-color")== "rgb(0, 128, 0)"){
            score++;
            $("#score").text(score);
        }
        else if($("#box div").css("background-color")=="rgb(255, 255, 255)"){
                 score--;
                 $("#score").text(score);
            };
       });
    });
    
