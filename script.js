
//variables
//objects

//NorthEast Region
var mNEny = {
  name: "Museum of Modern Art (MoMA)",
  state: "New York (NY)",
  region: "NE",
}
var mNEny2 = {
  name: "Whitney Museum of American Art",
  state: "New York City, New York (NY)",
  region: "NE",
}
var mNEdc = {
  name: "National Gallery of Art",
  state: "Washington D.C.",
  region: "NE",
}
var mNEma = {
  name: "Museum of Fine Arts",
  state: "Boston, Massachusetts (MA)",
  region: "NE",
}
var regionNE = [mNEny, mNEny2, mNEdc, mNEma];

//MidWest Region
var mMWil = {
  name: "Art Institute of Chicago",
  state: "Chicago, Illinois (IL)",
  region: "MW",
}
var mMWoh = {
  name: "Cleveland Museum of Art",
  state: "Ohio (OH)",
  region: "MW",
}
var mMWma = {
  name: "Walker Art Center",
  state: "Minneapolis, Minnesota (MN)",
  region: "MW",
}
var regionMW = [mMWil, mMWoh, mMWma];

//W
var mWca = {
  name: "Los Angeles County Museum of Art",
  state: "California (CA)",
  region: "W",
}
var mWwa = {
  name: "Henry",
  state: "Washington (WA)",
  region: "W",
}
var mWca2 = {
  name: "KOHN Gallery",
  state: "Hollywood, California (CA)",
  region: "W",
}
var regionW = [mWca, mWwa, mWca2];

//S
var mStx = {
  name: "Menil Collection",
  state: "Texas (TX)",
  region: "S",
}
var mSal = {
  name: "Eastern Shore Art Center",
  state: "Alabama (AL)",
  region: "S",
}
var mSfl = {
  name: "Wringling Museum of Art",
  state: "Florida (FL)",
  region: "S"
}
regionS = [mStx, mSal, mSfl];

//accessing elements
var regionD = $(".regionD");
var regionC = $(".regionOut");
var regionBtn = $(".regionSBtn");

//event listener
regionBtn.on("click", addMuseum);

//event handler

function addMuseum(event) {
  event.preventDefault();
  var regionI = regionD.val();
  var list;

  regionC.text("");
  
  if(regionI === "West") {
    list = regionW;
  } else if (regionI === "Midwest") {
    list = regionMW;
  } else if (regionI === "Northeast") {
    list = regionNE;
  } else if (regionI === "South") {
    list = regionS;
  }
  // console.log(regionI);
  regionC.append(`<ol>`)
  list.forEach(function(museum) {
    regionC.append(`<li>The ${museum.name} located in ${museum.state}</li>`);
  });
  regionC.append(`</ol><br><br>`);
}

//Logo Link
var logo = $(".logoL");
logo.on("click", redirectHome);

function redirectHome() {
  location.replace("index.html");
}

//Literature Poem Scroll Effect
//First
var coll = document.getElementsByClassName("collapsible1");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//Second
var coll = document.getElementsByClassName("collapsible2");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//Third
var coll = document.getElementsByClassName("collapsible3");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//Fourth
var coll = document.getElementsByClassName("collapsible4");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//Fifth
var coll = document.getElementsByClassName("collapsible5");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//Sixth
var coll = document.getElementsByClassName("collapsible6");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//Seventh
var coll = document.getElementsByClassName("collapsible7");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//Eighth
var coll = document.getElementsByClassName("collapsible8");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//Ninth
var coll = document.getElementsByClassName("collapsible9");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//Tenth
var coll = document.getElementsByClassName("collapsible10");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//Eleventh
var coll = document.getElementsByClassName("collapsible11");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

//Twelfth
var coll = document.getElementsByClassName("collapsible12");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
