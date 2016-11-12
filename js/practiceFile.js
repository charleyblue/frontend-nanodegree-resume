var s = "audacity";

var udacityizer = function(s) {
  s = s[1].toUpperCase() + s.slice(2);
  return s;
};

udacityizer(s);
//
//function to increase array of numbers by 1
//my solution
var sampleArray = [0,0,7];

var incrementLastArrayElementMine = function(_array) {
  var x = _array.pop();
  x= x + 1;
  newArray = _array.push(x);
  newArray = _array;
  return newArray;
};
//call
incrementLastArrayElementMine(sampleArray);
//instructors solution
 var incrementLastArrayElement = function(_array) {
   //put elements of argument into a new array
   var newArray = [];
   newArray = _array.slice(0);
   //create a var to store value of last number and remove it from newArray
   var lastNumber = newArray.pop();
   newArray.push(lastNumber + 1);
   return newArray;
 };
 //call
 incrementLastArrayElement(sampleArray);

 //

 var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    // split() into array with space between words
    var names = finalName.split(' ');
    //change second name to all caps
    names[1] = names[1].toUpperCase();
    //change first name to first upper and all other lower Classes
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    //join the two array names into a single strings
    finalName = names.join(' ');

    return finalName;
}
console.log(nameChanger(name));

var objectLiteral = {
  'firstName': 'Mary',
  'isAProgramer': true
};

var jsonString = JSON.stringify(objectLiteral);
console.log(jsonString);

var jsString = JSON.parse(jsonString);

console.log(jsString);
//
bio.display = function() {
  var myName = bio.name;
  var role = bio.role;
  var mobile = bio.contact.mobile;
  var email = bio.contact.email;
  var github = bio.contact.github;
  var twitter = bio.contact.twitter;
  var location = bio.contact.location;
  var welcomMessage = bio.welcomeMessage;
  var skills = bio.skills;
  var image = bio.bioPic;
  var message = bio.welcomeMessage;
  var formattedName = HTMLheaderName.replace("%data%", myName);
  var formattedRole = HTMLheaderRole.replace("%data%", role);
  var formattedMobile = HTMLmobile.replace("%data%", mobile);
  var formattedEmail = HTMLemail.replace("%data%", email);
  var formattedGithub = HTMLgithub.replace("%data%", github);
  var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
  var formattedLocation = HTMLlocation.replace("%data%", location);
  var formattedImage = HTMLbioPic.replace("%data%", image);
  var formattedMessage = HTMLwelcomeMsg.replace("%data%", message);
  // var formattedSkills = HTMLskills.replace("%data%", skills);
  $('#header').prepend(formattedName, formattedRole);
  $('#topContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
  $('#header').append(formattedImage);
  $("#header").append(HTMLskillsStart, formattedSkills, formattedMessage);
};
// education["school"] = "Udacity.com";
// education["display"] = function() {
//   var school = education["school"];
//   $("#education").append(HTMLschoolStart);
//   $("#education").append(school);
// }();
// work.jobs = [
//   {"employer": "Clorox"},
//   {"title": "Automation Technician"},
//   {"location": "Reno, NV"},
//   {"dates": "2013-2014"},
//   {"description": "Journeyman electrician in training for factory automation techincian level 1."}
// ];
//
// work.display = function(){
//   var employer = work.jobs.employer;
//   var title = work.jobs.title;
//   var location = work.jobs.location;
//   var dates = work.jobs.dates;
//   var formattedEmployer = HTMLworkStart.replace("%data%", employer);
//   var formattedTitle = HTMLworkTitle.replace("%data%", title);
//   var formattedLocation = HTMLworkLocation.replace("%data%", location);
//   var formattedDates = HTMLworkDates.replace("%data%", dates);
//   $("#workExperience").append(formattedEmployer, formattedTitle, formattedLocation, formattedDates);
// };

// function Work(employer, title, location, dates, description) {
//   this.employer = employer;
//   this.title = title;
//   this.location = location;
//   this.dates = dates;
//   this.description = description;
// }
//
// var clorox = new Work("Clorox", "Automation Technician", "Reno, NV", "2013-1014", "" );
// clorox.prototype.display = function() {
//   var newWorkSection = HTMLworkStart;
//   var formattedEmployer = HTMLworkEmployer.replace("%data%", this.employer);
// };

// class Work2 {
//   constructor(employer, title, location, dates, description) {
//     this.employer = employer;
//     this.title = title;
//     this.location = location;
//     this.dates = dates;
//     this.description = description;
//   }
//   display(){
//     //DOM manipulation
//   }
// }
//
// let clorox2 = new Work2();
// clorox2.employer = "Clorox";
// clorox2.display();
//Education section

work.display = function() {
  var employer = work.employer;
  $("#workExperience").append(HTMLworkStart);
  $("#workExperience").append(employer);
}();
bio.display();
work.display();
//jose.moreno@reyesic.net
// $('#main').append("CharleyBlue Dev");
// var awesomeThoughts = "I am CharleyBlue and I am AWESOME!";
// console.log(awesomeThoughts);
// var funThoughts = awesomeThoughts.replace('AWESOME', 'FUN');
// $('#main').append(funThoughts);
//make a new bio object
