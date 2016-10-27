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
  'welcomeMessage': 'Website creation is the central theme to my business. Helping you Build your online business presence to convey your message to your market is what I will help you achieve. Let\'s build together!',
  'skills': ['HTML', 'CSS', 'JavaScript', 'Design'],
  'biopic': 'images/fry.jpg'
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
  var image = bio.biopic;
  var formattedName = HTMLheaderName.replace("%data%", myName);
  var formattedRole = HTMLheaderRole.replace("%data%", role);
  var formattedMobile = HTMLmobile.replace("%data%", mobile);
  var formattedEmail = HTMLemail.replace("%data%", email);
  var formattedGithub = HTMLgithub.replace("%data%", github);
  var formattedTwitter = HTMLtwitter.replace("%data%", twitter);
  var formattedLocation = HTMLlocation.replace("%data%", location);
  $('#header').prepend(formattedName, formattedRole);
  $('#topContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);

};

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
//jose.moreno@reyesic.net
