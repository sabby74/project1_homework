console.log("hello");
let $form = $("form");

const renderHero = (hero) => {
  let $div = $(`<div> <h1> Name :${hero.name}</h1> </div>`);
  $div.append(`Full Name: ${hero.biography.fullName}`);
  $div.append(`<img src= '${hero.images.sm}' alt='${hero.name}'/>`);
  $div.append(`<p> Intelligence: ${hero.powerstats.intelligence}  </p>`);
  $div.append(`<p> Strength: ${hero.powerstats.strength}  </p>`);
  $div.append(`<p> Speed: ${hero.powerstats.speed}  </p>`);
  $("body").append($div);
};

const promise = $.ajax({
  url: "https://akabab.github.io/superhero-api/api/all.json",
});

promise.then(
  (data) => {
    console.log(data);
    data.map((hero) => {
      renderHero(hero);
    });
  },
  (error) => {
    console.log("bad request: ", error);
  }
);

$form.on("submit", (event) => {
  event.preventDefault();
  let $input = $("input");
  // console.log($input.val());

  const promise = $.ajax({
    url: "https://akabab.github.io/superhero-api/api/all.json",
  });

  promise.then(
    (data) => {
      //   console.log(data);

      let myHero = data.filter((hero) => hero.name === $input.val());
      console.log(myHero);
      if (myHero) {

        
          myHero.map((hero) => {
            renderHero(hero);
          });

      }
    },
 
  );
});
