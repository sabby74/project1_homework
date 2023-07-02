console.log("hello");


// const $name = $("#name");
// const $appearance = $("#appearance");
// const $biography = $("biography");
// const $powerstats = $("powerstats");



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