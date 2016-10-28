// $('#main').append("CharleyBlue Dev");
// var awesomeThoughts = "I am CharleyBlue and I am AWESOME!";
// console.log(awesomeThoughts);
// var funThoughts = awesomeThoughts.replace('AWESOME', 'FUN');
// $('#main').append(funThoughts);
//make a new bio object
var bio = {
  'name': 'Charley Blewett',
  'role': 'Web Developer',
  'contact': {
    'mobile': '775-225-9390',
    'email': 'charley.blewett@gmail.com',
    'github': 'https://github.com/charleyblue',
    'twitter': '@charleyblue',
    'location': 'Reno, NV'
  },
  'welcomeMessage': "Welcome to CharleyBlue Dev! Building your online business presence to convey your message to your market is what I will help you achieve.",
  'skills': ['HTML', 'CSS', 'JavaScript', "Frameworks", 'Design'],
  'bioPic': 'images/fry.jpg'
};
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
  var formattedSkills = HTMLskills.replace("%data%", skills);
  $('#header').prepend(formattedName, formattedRole);
  $('#topContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
  $('#topPic').append(formattedImage);
  $("#topPic").append(HTMLskillsStart, formattedSkills, formattedMessage);
};

var work = {};
work.jobs = [
  {"employer": "Clorox"},
  {"title": "Automation Technician"},
  {"location": "Reno, NV"},
  {"dates": "2013-2014"},
  {"description": "Journeyman electrician in training for factory automation techincian level 1."}
];

work.display = function(){
  var employer = work.jobs.employer;
  var title = work.jobs.title;
  var location = work.jobs.location;
  var dates = work.jobs.dates;
  var formattedEmployer = HTMLworkStart.replace("%data%", employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", title);
  var formattedLocation = HTMLworkLocation.replace("%data%", location);
  var formattedDates = HTMLworkDates.replace("%data%", dates);
  $("#workExperience").append(formattedEmployer, formattedTitle, formattedLocation, formattedDates);
};

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
var education = {
  'schools': [
    {'name': 'Udacity',
    'location':'Mountain View, CA',
    'degree': 'Front End Nano Degree',
    'majors': ['HTML', 'CSS', 'JavaScript', 'Python', 'Responsive Design', 'SQL'],
    'dates': '8/2016 - Current',
    'url': 'http://udacity.com'
  },
    {'name': 'New Horizons Computer Learning Center',
    'location':'Reno, NV',
    'degree': 'Adobe Design Club and Web Development',
    'majors': ['Photoshop', 'Illustrator', 'InDesign', 'Acrobat', 'HTML', 'CSS', 'JavaScript', 'PHP'],
    'dates': '8/2015 - 4/2016',
    'url': 'http://nhlearninggroup.com/'
  },
  {'name': 'George Brown College',
  'location':'Toronto, Ontario, Canada',
  'degree': 'Programmable Logic Control Technician',
  'majors': ['PLC Ladder Logic', 'Timers', 'Counters', 'I/O Racks'],
  'dates': '8/2016 - Current',
  'url': 'http://www.georgebrown.ca/'

  }
  ],
  'onlineCourses': [{

  }]
};
bio.display();
work.display();
//jose.moreno@reyesic.net
