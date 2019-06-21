'use strict';

const quiz = [{
    num: 1,
    question: 'How much do you enjoy sleeping?',
    a: 'I sleep until it’s time to go to the club.',
    b: 'It’s what I look forward to most when I wake up.',
    c: 'I’ll sleep when I’m dead.',
    d: 'I wish I could sleep all day.',
    answer: '’ll sleep when I’m dead.',
    imgSrc: 'https://s3.eu-central-1.amazonaws.com/sol-assets/uploads/public/5ae/093/790/thumb_67150_300_300_0_0_crop.jpg', 
    imgAlt: 'Correct Answer',
    explanation: 'This is one of the biggest changes! Sleeping in? Not anymore. Get used to the idea of waking up in the middle of the night to change a diaper or provide assurance that there are no monsters in the closet!'
  },
  {  
    num: 2,
    question: 'What kind of fun activities would you do with your newborn baby?',
    a: 'All of the fun stuff! Amusement parks, the zoo, etc…',
    b: 'Hibernate. All babies do is sleep, eat, and poop.',
    c: 'Road trip!!!',
    d: 'Can a baby go into a bar if they aren’t planning to drink?',
    answer: 'Hibernate. All babies do is sleep, eat, and poop.',
    imgSrc: 'http://www.makeitcrafty.com/images/detailed/3/Geeky-Love-New-Parents-web.jpg',imgAlt: 'Correct Answer',
    explanation: 'Even with all of the changes that come with being a new parent, you are limited on the newborn friendly activies. Newborns sleep a lot throughout the day, and drink a ton of milk. Getting into a groove takes time, but once you hit your stride and your baby starts to interact with you, everything changes. Get ready to chase them, read books, and play with cool toys!'
  },
  {  
    num: 3,
    question: 'Are you ok with changing dirty diapers?',
    a: 'Nothing grosses me out.',
    b: 'Where’s the barf bag?',
    c: 'I’ll just sit them on the toilet.',
    d: 'It can’t be that bad.',
    answer: 'Nothing grosses me out.',
    imgSrc: 'https://media.istockphoto.com/vectors/dirty-diaper-vector-id696342376?k=6&m=696342376&s=612x612&w=0&h=fBfHl5aUwDE0VISnqkelcaShM6iBvageIgiwNvBnVYM=',
    imgAlt: 'Correct Answer',
    explanation: 'There\'s really no way to sugar coat this one! A newborns\' digestive system is growing and their primary source of nutrition is liquid, so as you can imagine, the outcome isn\'t always that pretty! If you think that\'s bad wait until they start eating solid foods and kicking and screaming because they don\'t want their diaper changed! The day your child becomes potty trained, you are so proud of their accomplishment and relieved that the diaper stage is over!'
  },
  {  
    num: 4,
    question: 'What kind of shows do you watch on TV',
    a: 'Whatever game is on at the bar.',
    b: 'Whatever is already on.',
    c: 'No one can stop me from watching my favorites.',
    d: 'I’m playing video games 24/7.',
    answer: 'Whatever is already on.',
    imgSrc: 'https://www.kidsworldfun.com/blog/wp-content/uploads/2014/05/kids-watching-tv.jpg',
    imgAlt: 'Correct Answer',
    explanation: 'You no longer own the rights to your TV. It\'s now property of your children. You can always rely on their favorite cartoon character to calm a tantrum, but make sure you keep tabs on the remote...it will become more important than ever! In all honesty, I have no clue what parents did before television and youTube! It can be a lifesaver!'
  },
  {  
    num: 5,
    question: 'How well do you handle stress?',
    a: 'Calm, cool, and collected, baby!',
    b: 'I tend to curl into fetal position.',
    c: 'I have a binder with standard operating procedures for any incident that should arise.',
    d: 'I avoid stressful situation at all cost.',
    answer: 'Calm, cool, and collected, baby!',
    imgSrc: 'https://i.pinimg.com/originals/37/22/f4/3722f4f24e79a1573a85d4ea9d32006a.jpg',
    imgAlt: 'Correct Answer',
    explanation: 'Being a parent is not always cute smiles, giggles, and cuddles. It can be very, very stressful. There will be times when your newborn is over tired, teething, or just upset and they are inconsolable. Everyone handles stress differently, and you just need to do the best you can to not let your new baby feel that stress. There will be times when this is nearly impossible, the important thing is to role with the punches and do your best!'
  },
  {  
    num: 6,
    question: 'Does screaming bother you?',
    a: 'No, I’m in a rock band.',
    b: 'As long as it’s not annoying.',
    c: 'If someone’s screaming, just ask them to stop.',
    d: 'Let it all out!',
    answer: 'Let it all out!',
    imgSrc: 'https://i.dlpng.com/static/png/435434_preview.png',
    imgAlt: 'Correct Answer',
    explanation: 'Babies are going to scream and once they are done screaming, they\'ll probably start screaming again! It happens, as it is the only way that a newborn can communicate. Having a colicky baby can be a whole different story, but it\'s important to understand that this a crying baby is normal and do your best to comfort them.'
  },
  {  
    num: 7,
    question: 'If you just found out that you were having a kid, how would you feel?',
    a: 'Not something I’d want to hear right now.',
    b: 'RUN!!!',
    c: 'Anxious, scared, anxious and anxious.',
    d: 'I’m calling everyone to tell the great news!',
    answer: 'I’m calling everyone to tell the great news!',
    imgSrc: 'https://www.heretohelp.bc.ca/sites/default/files/images/t2p-front-cover.jpg',
    imgAlt: 'Correct Answer',
    explanation: 'The reaction of hearing the big news can be different for everyone. While the initial news can be shocking, you\'re overall reaction should be positive! You\'re about to have a baby and expand your family. It is a very exciting time filled with new challenges and new experiences!'
  },
  {  
    num: 8,
    question: 'Do you have a support system to help when times are stressful?',
    a: 'Family is everything.',
    b: 'Just moved to a new town.',
    c: 'I think I have a friend that has a kid?',
    d: 'I can do it on my own.',
    answer: 'Family is everything.',
    imgSrc: 'https://static1.squarespace.com/static/568c3b5c0e4c114023d4ce8e/t/5888cd7c86e6c04d3a744b17/1485360522350/',
    imgAlt: 'Correct Answer',
    explanation: 'Whether or not your support comes from relatives or friends, there will be a time when you need help. The old saying, \"It take a village to raise a child\" is the best way to summarize being a parent. Raising and caring for a newborn is not easy. At times, it is stressful and exhausting. and being able to have an uninterrupted nap can be the difference between sanity and insanity!'
  },
  {  
    num: 9,
    question: 'How important is your career to you?',
    a: 'You mean work?',
    b: 'I\’ll be the CEO of my company some day.',
    c: 'Work will always take 2nd place to my family.',
    d: 'Overtime is where the money is at!',
    answer: 'Work will always take 2nd place to my family.',
    imgSrc: 'https://everydaypower.com/wp-content/uploads/2018/02/busy-parents-min.jpg',
    imgAlt: 'Correct Answer',
    explanation: 'Whether you stay at home and watch the kids or come home after a busy day of work, the job does not end. Being a parents is a full-time job that requires attention and care. It is important to have a life outside of your family, but your family will always be there for you at the end of the day and they will need the same from you.'
  },
  {  
    num: 10,
    question: 'Do you think you are ready to have a baby?',
    a: 'There\’s still so much I want to accomplish.',
    b: 'What time does the pet store open?',
    c: 'Not at this time.',
    d: 'I don’t know, but I’d love to have a kid someday.',
    answer: 'I don’t know, but I’d love to have a kid someday.',
    imgSrc: 'https://freedesignfile.com/upload/2017/08/happy-family-cartoon-illustration-vector-05.jpg',
    imgAlt: 'Correct Answer',
    explanation: 'Let\'s be honest, how can you expect to be ready for something that you have yet to experience. You can never really be ready. The most important part is making a decision that you are comfortable with and be prepared to commit to your decision and do the best you can! You got this!'
  }];

let results = [];

function startQuestion(index, score) {
  console.log(question);
  console.log(quiz[index]);

  let title = quiz[index].question;
  let current_question = index;
  let current_answerA = quiz[index].a;
  let current_answerB = quiz[index].b;
  let current_answerC = quiz[index].c;
  let current_answerD = quiz[index].d;


  $("#question").html(`<header role='heading'><h1>Are You Ready For Parenthood Quiz</h1></header><section><div class='questionResults'><p>Question<span> ${++current_question}</span> of ${quiz.length}</p></div><div class='scoreResults'><p>Current score: <span>${score}</span></p></div></section><form role='form'><fieldset><legend class='quiz'><p>${title}</p></legend><input type='button' class='js-submit' role='button' name='question1' value=${current_answerA}><br><input type='button' class='js-submit'  role='button' name='question1' value=${current_answerB}><br><input type='button' class='js-submit' role='button' name='question1' value=${current_answerC}><br><input type='button' class='js-submit' role='button' name='question1' value=${current_answerD}><br></fieldset></form>`);

  $(".js-submit").click(function() {
    if(true) {
      ++score;
    }

    console.log('answerQuestion runs');
    startQuestion(++index, score);
  });
};

$("#start").click(function() {
  startQuestion(0, 0);
});


  /*function answerFeedback () {};

  function updateScoreCount () {};

  function updateQuestionCount () {};

  function nextQuestion () {};

  function quizResults () {};

  function restartQuiz () {};*/