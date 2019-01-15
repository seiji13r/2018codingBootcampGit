// Captain Planet JavaScript/jQuery
// Students: As you observe the code below, notice how jQuery takes a lot of the pain
// out of actions that might seem tedious with Vanilla JavaScript.
// jQuery Ready function(encloses all other functions)

// ==============================

$(document).ready(function() {

    // Audio Setup
    // ===========

    // Create an audio element with JavaScript
    var audioElement = document.createElement("audio");

    // Set it's source to the location
    // of our Captain Planet theme song file.
    audioElement.setAttribute("src", "Assets/captainplanet24.mp3");

    // Theme Button
    $(".theme-button").on("click", function() {
    audioElement.play();
    });

    // Pause Button
    $(".pause-button").on("click", function() {
    audioElement.pause();
    });

    // Size Buttons
    // ============

    // Normal Size
    $(".normal-button").on("click", function() {
    $(".captain-planet").animate({
        height: "300px"
    });
    });

    // Larger Size
    $(".grow-button").on("click", function() {
    $(".captain-planet").animate({
        height: "500px"
    });
    });

    // Smaller Size
    $(".shrink-button").on("click", function() {
    $(".captain-planet").animate({
        height: "100px"
    });
    });

    // Visibility Buttons
    // ==================

    // Make Visible
    $(".vis-button").on("click", function() {
    $(".captain-planet").animate({
        opacity: "1"
    });
    });

    // Make Invisible
    $(".invis-button").on("click", function() {
    $(".captain-planet").animate({
        opacity: "0.05"
    }, 3000);
    });

    // Move Buttons
    // ============

    // Move Captain Planet Upward
    $(".up-button").on("click", function() {
    $(".captain-planet").animate({
        top: "-=200px"
    }, "normal");
    });

    // Move Captain Planet Downward
    $(".down-button").on("click", function() {
    $(".captain-planet").animate({
        top: "+=200px"
    }, "normal");
    });

    // Move Captain Planet Leftward
    $(".left-button").on("click", function() {
    $(".captain-planet").animate({
        left: "-=200px"
    }, "normal");
    });

    // Move Captain Planet to the Right
    $(".right-button").on("click", function() {
    $(".captain-planet").animate({
        left: "+=200px"
    }, "normal");
    });

    // Bring Captain Planet Back to His First Position
    $(".back-button").on("click", function() {
    $(".captain-planet").animate({
        top: "50px",
        left: "80px"
    }, "fast");
    });

    // Move Events for Keyboard Presses
    // ============================

    // Keyboard Up
    $(document).keyup(function(e) {
    switch (e.which) {
    case 38:
        $(".captain-planet").animate({
        top: "-=200px"
        }, "normal");
    }
    });

    // Keyboard Down
    $(document).keyup(function(e) {
    switch (e.which) {
    case 40:
        $(".captain-planet").animate({
        top: "+=200px"
        }, "normal");
    }
    });

    // Keyboard Left
    $(document).keyup(function(e) {
    switch (e.which) {
    case 37:
        $(".captain-planet").animate({
        left: "-=200px"
        }, "normal");
    }
    });

    // Keyboard Right
    $(document).keyup(function(e) {
    switch (e.which) {
    case 39:
        $(".captain-planet").animate({
        left: "+=200px"
        }, "normal");
    }
    });
});