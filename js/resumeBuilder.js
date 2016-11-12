
var bio = {
  "name": "Charley Blewett",
  "role": "Web Developer",
  "welcomeMessage": "Welcome to CharleyBlue Dev! Building your online business presence to convey your message to your market is what I will help you achieve.",
  "bioPic": "images/fry.jpg",
  "contacts": {
    "mobile": "775-225-9390",
    "email": "charley.blewett@gmail.com",
    "github": "https://github.com/charleyblue",
    "twitter": "@charleyblue",
    "location": "Reno, NV"
  },
  "skills": ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Layout"]
};

var work = {
  "jobs": [
    {
      "employer": "Clorox",
      "title": "Automation Tech",
      "location": "Reno, NV",
      "dates": "2013-1014",
      "description": "Journeyman industrial electrician training for factory automation technician, level 1."
    },
    {
      "employer": "Aerotek",
      "title": "Journeyman Electrician",
      "location": "Reno, NV",
      "dates": "2013",
      "description": "Multiple industrial electrician assignments"
    },
    {
      "employer": "RR Donnelley",
      "title": "Industrial Electrician",
      "location": "Reno, NV",
      "dates": "2007 - 2012",
      "description": "Factory electrician; troubleshooting, repair, and installations plant-wide and printing presses"
    }
    // {
    //   "employer": "",
    //   "title": "",
    //   "location": "",
    //   "dates": "",
    //   "description": ""
    // },
  ]
};

var projects = {
  "projects": [
    {
      "title": "",
      "dates": "",
      "description": "",
      "images": []
    }
  ]
};

var education = {
  "schools": [
    {
      "name": "Reno Collective Boot Camp",
      "Location": "Reno, NV, US",
      "degree": "Certificate",
      "dates": "4/2016 - 6/2016",
      "url": "http://renocollective.com/",
      "major": ["Web Dev"]
    },
    {
      "name": "New Horizons CLC",
      "Location": "Reno, NV, US",
      "degree": "Cert of Completion",
      "dates": "9/2015 - 5/2016",
      "url": "http://nhlearninggroup.com/",
      "major": ["Adobe", "Web Dev"]
    },
    {
      "name": "George Brown College",
      "Location": "Toronto, ON, CA",
      "degree": "Cert of Completion",
      "dates": "20",
      "url": "http://www.georgebrown.ca/",
      "major": ["PLC Technician"]
    }
  ],
  "onlineCourses":
  [
    {
      "title": "Front End Nanodegree",
      "school": "Udacity.com",
      "dates": "8/2016 - Present",
      "url": "http://udacity.com",
      "course": ["Front End Nanodegree - FEND"]
    },
    {
      "title": "Miscelaneous computer courses",
      "school": "Lynda.com",
      "dates": "2013 - 2015",
      "url": "https://www.lynda.com/",
      "course": ["Adobe", "Design", "Web Dev"]
    }
  ]
};

var skillsCheck = function() {
  if (bio.skills) {
    $("#header").append(HTMLskillsStart);
    for (var i in bio.skills) {
      var skill = HTMLskills.replace("%data%", bio.skills[i]);
      $("#header").append(skill);
    }
  }
}();

var workCheck = function() {
  if(work.jobs) {
    for(var e in work.jobs) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[e].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[e].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      $(".work-entry:last").append(formattedEmployerTitle);
    }
  }
}();
