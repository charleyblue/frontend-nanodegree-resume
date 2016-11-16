//Build a resume using javascript to insert objects into DOM
//bio object containing biographical info
var bio = {
  "name": "Charley Blewett",
  "role": "Web Developer",
  "contacts": {
    "mobile": "775-225-9390",
    "email": "charley.blewett@gmail.com",
    "github": "https://github.com/charleyblue",
    "twitter": "@charleyblue",
    "location": "Reno, NV"
  },
  "welcomeMessage": "I am passionate about website application development, design, and market penetration. Seeking an opportunity to become a member of a web development team responsible for building and maintaining online business presence through web applications.",
  "skills": ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Layout"],
  "bioPic": "images/fry.jpg"
};
//bio display function to insert objects into document
bio.display = function(){
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedImage = HTMLbioPic.replace("%data%", bio.bioPic);
  var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $('#header').prepend(formattedName, formattedRole);
  $('#topContacts').append(formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation);
  $('#header').append(formattedImage);
  $("#header").append(formattedMessage);
//Check for a skills array and then populate DOM
  (function() {
    if (bio.skills) {
      $("#header").append(HTMLskillsStart);
      bio.skills.forEach(function(e) {
        var skill = HTMLskills.replace("%data%", e);
        $("#header").append(skill);
      });
    }
  })();
}();

//education object with schools and online arays
var education = {
  "schools": [
    {
      "name": "Reno Collective Boot Camp",
      "location": "Reno, NV, US",
      "degree": "Certificate",
      "majors": ["Web Developer"],
      "dates": "4/2016 - 6/2016",
      "url": "http://renocollective.com/"
    },
    {
      "name": "New Horizons CLC",
      "location": "Reno, NV, US",
      "degree": "Cert of Completion",
      "majors": ["Adobe", "Web Developer"],
      "dates": "9/2015 - 5/2016",
      "url": "http://nhlearninggroup.com/"
    },
    {
      "name": "George Brown College",
      "location": "Toronto, ON, CA",
      "degree": "Cert of Completion",
      "majors": ["PLC Technician"],
      "dates": "2013",
      "url": "http://www.georgebrown.ca/"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front End Nanodegree",
      "school": "Udacity.com",
      "dates": "8/2016 - Present",
      "url": "http://udacity.com"
    },
    {
      "title": "Miscelaneous computer courses",
      "school": "Lynda.com",
      "dates": "2013 - 2015",
      "url": "https://www.lynda.com/"
    }
  ]
};
//create an education display function
education.display = function() {

};

//work object containg an array of work history objects
var work = {
  "jobs": [
    {
      "employer": "Clorox",
      "title": "Automation Tech",
      "location": "Reno, NV",
      "dates": "2013-1014",
      "description": "Journeyman industrial electrician training for factory automation technician, level 1. Trained on Allen Bradely RSLogix 5000 PLC and Wonderware SCADA systems. Researched and wrote the maintenance department training program."
    },
    {
      "employer": "Aerotek",
      "title": "Journeyman Electrician",
      "location": "Reno, NV",
      "dates": "2013",
      "description": "Multiple industrial electrician assignments; plant electrician for a hot roll mill and journeyman industrial construction electrician for a new dried milk processing plant."
    },
    {
      "employer": "RR Donnelley",
      "title": "Industrial Electrician",
      "location": "Reno, NV",
      "dates": "2007 - 2012",
      "description": "Factory Electrician; troubleshooting, repair, and installations plant-wide, printing presses, hazardous location, substations, switch-gear, Etc. NEC code compliance research and supervision. Many technology upgrade projects to update printing press controls, material handling charging stations, industrial IT and other systems."
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
//work display function
work.display = function() {
  (function() {
    if(work.jobs) {
      for(var e = 0; e < work.jobs.length; e++) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[e].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[e].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[e].dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[e].location);
        $(".work-entry:last").append(formattedDates, formattedLocation);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[e].description);
        $(".work-entry:last").append(formattedDescription);
      }
    }
  })();
}();

//projects object containng projects array with project info
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
//projects display method
projects.display = function() {

};

$("#main").append(internationalizeButton);
function inName() {
  var interName;
  if(bio.name) {
    interName = bio.name;
    var nameArray = interName.trim().split(" ");
    //console.log(nameArray);
    nameArray[1] = nameArray[1].toUpperCase();
    nameArray[0] = nameArray[0].slice(0,1) + nameArray[0].slice(1).toLowerCase();
    interName = nameArray.join(" ");
  }
  return interName;
}
