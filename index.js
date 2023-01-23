// Pop-Up functions

$(window).on("load", function() {
    setTimeout(function(){
            $("#popup").css("display", "block");
        },1000)
});


$("#popup-button").click(function(){
    $("#popup").css("display", "none");
});


// Game functions

var trumpList = [];
var userList = [];
var count = 0;

function playTrump(number) {
    var trumpSound = new Audio("sounds/Trump" + number + ".mp3");
    trumpSound.play();
    $("#" + number).css("opacity", "0.5");
    setTimeout(function() {
        $("#" + number).css("opacity", "1");
    }, 500)
}

$("img").click(function(){
    var trumpNumber = $(this).attr("id");
    playTrump(trumpNumber);
})


function addTrump() {
    var newTrump = Math.ceil(Math.random()*4)
    trumpList.push(newTrump);
    playTrump(newTrump);
}

function equalArrays (a, b) {
    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
      }
      return true;
    }
   

function playGame() {
    userList= [];
    $("h1").text("Start Trumping!");
    addTrump();

    $("body").unbind("keypress");

    $("img").click(function() {
        userList.push(parseInt($(this).attr("id")));

        for (i = 0; i < userList.length; i++) {
            if (userList[i] !== trumpList[i]) {
                $("h1").text("You're fired!");
                var oh = new Audio("sounds/Trump1.mp3");
                var no = new Audio("sounds/No.mp3");
                var he = new Audio("sounds/I.mp3");
                var blame = new Audio("sounds/Blame.mp3");
                var ba = new Audio("sounds/Trump2.mp3");
                var mna = new Audio("sounds/Trump3.mp3");
                $("img").attr("src", "images/Sad Trump.png")
                setTimeout(function(){
                    oh.play();
                }, 500)
                setTimeout(function(){
                    no.play();
                }, 900)
                setTimeout(function(){
                    he.play();
                }, 1300)
                setTimeout(function(){
                    blame.play();
                }, 1400)
                setTimeout(function(){
                    oh.play();
                }, 1800)
                setTimeout(function(){
                    ba.play();
                }, 2100)
                setTimeout(function(){
                    mna.play();
                }, 2400)             
                
            }
        }

        if (userList.length == trumpList.length) {
            if (equalArrays(userList, trumpList)) {
                count ++;
                $("h1").text("Trumping = " + count);
                setTimeout (function() {
                    addTrump();
                }, 1000)
                userList = [];
            } else {
                $("h1").text("You're fired!");
            }
        } 
    })
}


$("body").keypress(function() {
    playGame();
})

$("#restart").click(function(){
    playGame();
    $("#1").attr("src", "images/Trump Clip 1.jpg");
    $("#2").attr("src", "images/Trump Clip 2.jpg");
    $("#3").attr("src", "images/Trump Clip 3.jpg");
    $("#4").attr("src", "images/Trump Clip 4.jpg");
});
