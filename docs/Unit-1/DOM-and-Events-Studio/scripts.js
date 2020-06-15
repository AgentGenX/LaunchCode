window.addEventListener('DOMContentLoaded', function(event) {

    let flightStatus = document.getElementById("flightStatus");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");

    // takeoff button
    document.getElementById("takeoff").addEventListener("click", function(event) {

        if (confirm("Confirm that the shuttle is ready for takeoff.")) {

            let totalHeight = Number(shuttleHeight.innerText);

            flightStatus.innerText = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight.innerText = "10000";
        };
    });

    // landing button
    let landing = document.getElementById("landing");
    landing.addEventListener("click", (event) => {

        alert("The shuttle is landing. Landing gear engaged.");

        flightStatus.innerText = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerText = "0";
    });

    // abort mission button
    document.getElementById("missionAbort").addEventListener("click", function(event) {

        if (confirm("Confirm that you want to abort the mission.")) {

            flightStatus.innerText = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerText = "0";
        };
    });

    // movement section
    let rocket = document.getElementById("rocket");
    rocket.style.position = "relative";
    let vertPosition = rocket.style.top = "250px";
    let horiPosition = rocket.style.left = "0px";
    let moveVertical = Number(vertPosition.slice(0, vertPosition.indexOf('px')));
    let moveHorizontal = Number(horiPosition.slice(0, horiPosition.indexOf('px')));

    document.getElementById("up").addEventListener("click", function(event) {

        shuttleHeight.innerHTML = String(Number(shuttleHeight.innerHTML) + 10000);
        moveVertical -= 10;
        rocket.style.top = `${moveVertical}px`;
    });

    document.getElementById("down").addEventListener("click", function(event) {

        shuttleHeight.innerHTML = String(Number(shuttleHeight.innerHTML) - 10000);
        moveVertical += 10;
        rocket.style.top = `${moveVertical}px`;
    });

    document.getElementById("right").addEventListener("click", function(event) {

        moveHorizontal += 10;
        rocket.style.left = `${moveHorizontal}px`;
    });

    document.getElementById("left").addEventListener("click", function(event) {

        moveHorizontal -= 10;
        rocket.style.left = `${moveHorizontal}px`;
    });
});
