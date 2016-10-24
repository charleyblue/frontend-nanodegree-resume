// $('#main').append("CharleyBlue Dev");
// var awesomeThoughts = "I am CharleyBlue and I am AWESOME!";
// console.log(awesomeThoughts);
// var funThoughts = awesomeThoughts.replace('AWESOME', 'FUN');
// $('#main').append(funThoughts);
var myName = 'Charley Blewett'
var formattedName = HTMLheaderName.replace("%data%", myName);
var role = 'Web Developer';
var formattedRole = HTMLheaderRole.replace("%data%", role);
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
//make a new bio object
var bio = {
  'name': 'Charley Blewett',
  'role': 'Web Developer',
  contact: {
    'Email': 'charley.blewett@gmail.com',
    'Mobile': '775-225-9390'
  }
  'Welcome Meaasge': 'Web development is the central theme to my business. Building your online business presence to convey your message to your market is what I will help you achieve.',
  'Skills': ['HTML', 'CSS', 'JavaScript', 'Design']
}
