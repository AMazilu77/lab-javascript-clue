// Characters

const mrGreen = {
first_name:   'Jacob',
last_name:    'Green',
color:        'green',
description:  'He has a lot of connections',
age:          45,
image:        'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
occupation:   'Entrepreneur',
}


const drOrchid = {
frst_name:   "Doctor",
lst_name:    "Orchid",
color:        "white" ,  
description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
age:          26,
image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
ocupation:   "Scientist",
}


const profPlum = {
first_name:   "Victor",
last_name:    "Plum",
color:        "purple",
description:  "Billionare video game designer",
age:          22,
image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
occupation:   "Designer",
}


const missScarlet = {
first_name:   "Kasandra",
last_name:    "Scarlet",
color:        "red",
description:  "She is an A-list movie star with a dark past",
age:          31,
image:        "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
occupation:   "Actor",
}

const mrsPeacock = {
first_name:   "Eleanor",
last_name:    "Peacock",
color:        "blue",
description:  "She is from a wealthy family and uses her status and money to earn popularity",
age:          36,
image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
occupation:   "Socialité",
}


const mrMustard = {
first_name:   "Jack",
last_name:    "Mustard",
color:        "yellow",
description:  "He is a former football player who tries to get by on his former glory",
age:          62,
image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
occupation:   "Retired Football player",
}

// Weapons

/*name: rope        ---   weight: 10
name: knife       ---   weight: 8
name: candlestick ---   weight: 2
name: dumbbell    ---   weight: 30
name: poison      ---   weight: 2
name: axe         ---   weight: 15
name: bat         ---   weight: 13
name: trophy      ---   weight: 25
name: pistol      ---   weight: 20*/

// Rooms
const diningRoom = {name: "Dinning Room"}
const conserv = {name: "Conservatory"}
const kitchen = {name: "Kitchen"}
const study = {name: "Study"}
const Library = { name: "Library"}
const bill = { name: "Billiard Room"}
const lounge = {name: "Lounge"}
const ball = {name: "Ballroom"}
const hall = {name: "Hall"}
const spa = {name: "Spa"}
const living = {name: "Living Room"}
const obs = {name: "Observatory"}
const theater = {name: "Theater"}
const guest = {name: "Guest House"}
const patio = {name: "Patio"}


// Characters Collection
var charactersArray = [];

// Rooms' Collection
var roomsArray = [];

// Weapons Collection
var weaponsArray = [
    const rope = { name: "rope", weight: 10 };
    const knife = { name: "knife", weight: 8 };
    const candlestick = { name: "candlestick", weight: 2 };
    const dumbell = { name: "dumbell", wieght: 30 };
    const posion = { name: "poison", weight: 2 };
    const axe = { name: "axe", weight: 15};
    const bat = { name: "bat", wieght: 13};
    const trophy = { name: "trophy", weight: 25};
    const pistol = { name: "pistol", weight: 20};
  ];

  function randomSelector (arr) {
      theELement+arr[Math.floor( Math.random()*arr.length)]
      return theELement;
  }

  function randomMystery(characters, weapons, rooms) {
      let mystery = [];
      mystery.push(randomSelector(characters));
      mystery.push(randomSelector(weapons));
      mystery.push(randomSelector(rooms));
      return randomMystery;
  }




/* parameters:
envelope: this is an array of 3 elements containing characters, weapons, rooms
return:
returns an answer string*/

  function revealMystery(enveolope) {
   
 let answer = "<firstname> <lastname>  killed Mr.Boddy using the <weapon> in the <room>"
    answer = answer.replace('<First Name>'), enveolope[0].first_name);
    answer = answer.replace('<First Name>'), enveolope[0].last_name);
    answer = answer.replace('<First Name>'), enveolope[1].name);
    answer = answer.replace('<First Name>'), enveolope[2].name);
  }
