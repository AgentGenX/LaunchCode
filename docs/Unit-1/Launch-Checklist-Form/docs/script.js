document.addEventListener("DOMContentLoaded", function() {

   let form = document.querySelector("form");
   let pilotName = document.querySelector("input[name=pilotName]");
   let coPilotName = document.querySelector("input[name=coPilotName]");
   let fuelLevel = document.querySelector("input[name=fuelLevel]");
   let cargoMass = document.querySelector("input[name=cargoMass]");
   let faultyItems = document.getElementById("faultyItems");
   let fuelStatus = document.getElementById("fuelStatus");
   let launchStatus = document.getElementById("launchStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   let pilotsReady;
   let fuelAndMassGood;


   // form validation
   form.addEventListener("submit", function(event) {

      // using regex to validate letters, space allowed
      let lettersOnly = /^[a-zA-Z ]+$/;
      if (!pilotName.value.match(lettersOnly) || !coPilotName.value.match(lettersOnly)) {
         alert("Pilot names must contain letters only!");
         pilotsReady = false;
      } else {
         pilotsReady = true;
      };

      // @ts-ignore
      if (isNaN(fuelLevel.value) || isNaN(cargoMass.value) || fuelLevel.value === "" || cargoMass.value === "") {
         alert("Fuel Level and Cargo Mass must contain numbers only!");
         fuelAndMassGood = false;
      } else {
         fuelAndMassGood = true;
      };


      // status printout
      if (pilotsReady && fuelAndMassGood) {
         document.getElementById("pilotStatus").innerText = `${pilotName.value} is ready`;
         document.getElementById("coPilotStatus").innerText = `${coPilotName.value} is ready`;

         if (fuelLevel.value < 10000) {
            faultyItems.style.visibility = "visible";
            fuelStatus.innerText = "There is not enough fuel for the journey";
            launchStatus.innerText = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
         } else {
            fuelStatus.innerText = "There is enough fuel for the journey";
         };

         if (cargoMass.value > 10000) {
            faultyItems.style.visibility = "visible";
            cargoStatus.innerText = "There is too much mass for the shuttle to take off";
            launchStatus.innerText = "Shuttle not ready for launch";
            launchStatus.style.color = "red";
         } else {
            cargoStatus.innerText = "Cargo mass low enough for launch";
         }

         if (fuelLevel.value >= 10000 && cargoMass.value <= 10000) {
            faultyItems.style.visibility = "visible";
            launchStatus.innerText = "Shuttle is ready for launch";
            launchStatus.style.color = "green";
            fuelStatus.innerText = "There is enough fuel for the journey";
            cargoStatus.innerText = "Cargo mass low enough for launch";
         };
      };
      event.preventDefault();

   });


   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {

      response.json().then(function(data) {

         document.getElementById("missionTarget").innerHTML = `
            <h2>Mission Destination</h2>
               <ol>
                  <li>Name: ${data[2].name}</li>
                  <li>Diameter: ${data[2].diameter}</li>
                  <li>Star: ${data[2].star}</li>
                  <li>Distance from Earth: ${data[2].distance}</li>
                  <li>Number of Moons: ${data[2].moons}</li>
               </ol>
            <img src="${data[2].image}">
         `;
      });
   });
});
