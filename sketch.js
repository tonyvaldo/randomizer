// class roster objects

let roster = [{
    firstName: "Zainib",
    lastName: "Ahmed",
    color: "Blue",
    animal: "Giraffe",
    book: "The Book Thief",
    movie: "Amelie",
    game: "none",
    superHero: "The Hulk",
    randomFact: "I love to eat olives."
  },
  {
    firstName: "Toni",
    lastName: "Anguiano",
    color: "blue",
    animal: "cat",
    movie: "Horror",
    superHero: "batman",
    randomFact: "I like to hangout at cemeteries and research dark California history"
  },
  {
    firstName: "Camila",
    lastName: "Avina Garcia",
    color: "Green",
    animal: "Dog",
    book: "Match",
    game: " Guitar Hero",
    superHero: "Spiderman",
    randomFact: "I have a twin",
  },
  {
    firstName: "Hector",
    lastName: "Flores",
    color: "blue",
    animal: "Dog",
    book: "Captain underpants",
    movie: "Ace Ventura pet detective",
    game: "Smash Brothers",
    superHero: "Flash",
    randomFact: "I'm a Libra"
  },
  {
    firstName: "Eddson",
    lastName: "Jose",
    color: "midnight blue",
    animal: "pig",
    book: "The Dark Forest",
    movie: "The Fountain",
    game: "Halo Reach",
    superHero: "Superman",
    randomFact: "I am made up of stardust"
  },
  {
    firstName: "Matteo",
    lastName: "Leva",
    color: "Black",
    animal: "Cat",
    book: "Pillars of the earth",
    movie: "The Godfather",
    game: "Witcher 3",
    superHero: "spider man",
    randomFact: "I'm dissapointed in GOT seasoon 8"
  },
  {
    firstName: "Lydia",
    lastName: "Lim",
    color: "blue",
    animal: "dog",
    book: "No",
    movie: "me before you",
    game: "No",
    superHero: "Thor",
    randomFact: " birds are tetrapods even though they only walk on two legs"
  },
  {
    firstName: "Chi",
    lastName: "Nguyen",
    color: "purple",
    animal: "bird",
    book: "Math Curse",
    movie: "Big Hero 6",
    game: "Checkers",
    superHero: "Big Hero 6 (team)",
    randomFact: "Lately this year, monsters have especially been occupying my mind, among other things."
  },
  {
    firstName: "Leon",
    lastName: "Quach",
    color: "silver",
    animal: "penguins",
    book: "Letters to a Young Poet",
    movie: "Kung fu Hustle",
    game: "Pokemon Crystal Version",
    superHero: "Batman",
    randomFact: "I have two pet guinea pigs"
  },
  {
    firstName: "Sierra",
    lastName: "Roe",
    color: "purple",
    animal: "dog",
    book: "phantom tollbooth",
    movie: "Naussica of the Valley of the Wind",
    game: "pokemon heartgold",
    superHero: "captain marvel",
    randomFact: "can run 7 minute mile"
  },
  {
    firstName: "Hao",
    lastName: "Rong",
    color: "blue",
    animal: "otter",
    book: "A Brief History of Time",
    movie: "Angry Birds 2",
    game: "Final Fantasy XIV",
    superHero: "Tony Stark",
    randomFact: "I like cats."
  },
  {
    firstname: "Kaicong",
    lastname: "Tang",
    color: "black",
    animal: "dog",
    movie: "iron man123",
    game: "csgo",
    superHero: "iron man",
    randomFact: "love gaming"
  },
  {
    firstName: "Sumedh",
    lastName: "Vedanthi",
    color: "Blue",
    animal: "Crow",
    book: "Of Mice and Men",
    movie: "American Psycho",
    game: "Fruit Ninja",
    superHero: "Batman",
    randomFact: "im a black belt"
  },
  {
    firstName: "Chris",
    lastName: "Weber",
    color: "green",
    animal: "cat",
    book: "Hitchhiker's Guide to the Galaxy",
    movie: "Spiderman Into The Spiderverse",
    game: "The Legend of Zelda Breath of the Wild",
    superHero: "Iron Man",
    randomFact: "I'm vegetarian"
  },
  {
    firstName: "Andy",
    lastName: "Wu",
    color: "Red",
    animal: "Kiwi",
    book: "Romance of the Three Kingdoms",
    movie: "Shrek 2",
    game: "Super Mario 64",
    superHero: "Static Shock",
    randomFact: "I've had jaw correction surgery"
  },
  {
    firstName: "xiaowei",
    lastName: "zheng",
    color: " green",
    animal: "babies",
    book: "the little girl at the window",
    movie: "eat drink man woman",
    game: "none",
    superHero: "none",
    randomFact: "don't drink coke"
  },
  {
    firstName: "Anthony",
    lastName: "Valdovinos",
    color: "purple",
    animal: "eagle",
    book: "Hatchet",
    movie: "Titanic",
    game: "Starfox Adventures",
    superHero: "none",
    randomFact: "I studied Japanese for 4 years"
  },
  {
    firstName: "Kevin",
    lastName: "Sagara",
    color: "yellow",
    animal: "cat",
    book: "sherlock holmes",
    movie: "Shaun of the Dead",
    game: "osu!",
    superHero: "batman",
    randomFact: "learning japanese"
  },
  {
    firstName: "Vanessa",
    lastName: "Blacow-Berggen",
    color: "pink",
    animal: "cat",
    book: "The Heartstriker series",
    movie: "Cats Don't Dance",
    game: "Spyro Reignited Trilogy",
    superHero: "Spiderman",
    randomFact: "I really like cats, especially my cat"
  },
  {
    firstName: "Alicia",
    lastName: "Breinke",
    favoriteColor: "purple",
    favoriteAnimal: "dog",
    favoriteBook: "The Art of Racing in the Rain",
    favoriteMovie: "Spirited Away",
    favoriteSuperHero: "Wonder Woman",
    randomFact: "I want to live in another country someday"
  },
   {
    firstName: "asra",
    lastName: "siddiqui",
    color: "idk",
    animal: "chameleons",
    book: "codex 1962",
    movie: "pulp fiction",
    game: "idk",
    superHero: "hate em all",
    randomFact: "im grumpy"
  }
];


function setup() {
  createCanvas(400, 400);
  background(150);

  console.log(roster[1].firstName + " 's random fact is " + roster[1].randomFact);
  // console.log(`a string sentence ${roster [1].name}`)

}

function draw() {
  textSize(38)
text(roster[1].firstName + " 's random fact is " + roster[1].randomFact)


}
