console.log("hello");


const $name = $("#name");
const $appearance = $("#appearance");
const $biography = $("biography");
const $powerstats = $("powerstats");


// sending the request to get the data back to browser.
const promise = $.ajax({
  url: "https://akabab.github.io/superhero-api/api/all.json",
});

promise.then(
  (data) => {
    console.log(data);
  },
  (error) => {
    console.log("bad request: ", error);
  }
);