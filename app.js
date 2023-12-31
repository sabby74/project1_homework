// console.log("hello");
let $form = $("form");

const renderHero = (hero) => {
  let $div = $(`<div class="hero"> <h1> Hero Name :${hero.name}</h1> </div>`);
  $div.append(`<img src= '${hero.images.lg}' alt='${hero.name}' width="650" height="650"/>`);
  $div.append(`<p>Full Name: ${hero.biography.fullName}</p>`);
  $div.append(`<p> Intelligence: ${hero.powerstats.intelligence}  </p>`);
  $div.append(`<p> Strength: ${hero.powerstats.strength}  </p>`);
  $div.append(`<p> Speed: ${hero.powerstats.speed}  </p>`);
  $("#myhero").append($div);
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
      if (myHero.length !== 0) {
     let herodiv = $("#myhero")
     herodiv.empty()

        
          myHero.map((hero) => {
            renderHero(hero);
          });

      }else{
        data.map((hero) => renderHero(hero));
      }
    },
 
  );
});

$(document).ready(function() {
    $("#myList li").click(function() {
        let link = $(this).find("a").attr("href");
        window.open(link, "_blank");
    });
});


$(document).ready(function() {
    $('#scrollToTopBtn').hide();
    
  
   
    $(window).scroll(function() {
      if ($(this).scrollTop() > 1000) {
        // console.log($(this).scrollTop()); 
        $('#scrollToTopBtn').show();
      } else {
        $('#scrollToTopBtn').hide();
      }
    });
  
   
    $('#scrollToTopBtn').click(function() {
      $('html, body').animate({ scrollTop: 100}, 'slow');
      return false;
    });
  });