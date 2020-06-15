document.addEventListener("DOMContentLoaded", function(event) {

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {

        response.json().then(function(data) {

            // or tradition loop: (let astro = 0; astro < data.length; astro++)
            for (const astro in data) {

            document.getElementById("container").innerHTML += `

                <div class="astronaut">
                    <div class="bio">
                        <h3>${data[astro].firstName} ${data[astro].lastName}</h3>
                        <ul>
                        <li>Hours in space: ${data[astro].hoursInSpace}</li>
                        <li>Active: ${data[astro].active}</li>
                        <li>Skills: ${data[astro].skills.join(", ")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="images/astronaut-rikku.png">
                </div>
                `;
            };
        });
    });
});
