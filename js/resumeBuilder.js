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
  'welcomeMessage': 'Web development is the central theme to my business. Building your online business presence to convey your message to your market is what I will help you achieve. Let\'s build',
  'skills': ['HTML', 'CSS', 'JavaScript', 'Design'],
  'biopic': 'images/fry.jpg'
};
bio.display = function() {
  var myName = bio.name;
  var role = bio.role;
  var mobile = bio.contact.mobile;
  var email = bio.contact.email;
  var formattedName = HTMLheaderName.replace("%data%", myName);
  var formattedRole = HTMLheaderRole.replace("%data%", role);
  $('#header').prepend(formattedRole);
  $('#header').prepend(formattedName);

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
  'majors': ['Ladder Logic', 'Timers', 'Counters'],
  'dates': '8/2016 - Current',
  'url': 'http://www.georgebrown.ca/'

  }
  ],
  'onlineCourses': [{

  }]
};
bio.display();
//jose.moreno@reyesic.net
