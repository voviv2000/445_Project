const textElement = document.getElementById('text')
const imageElement = document.getElementById('character-image')
const optionButtonsElement = document.getElementById('option-buttons');
const musicElement = document.getElementById('music')
const backgroundElement = document.getElementById('background-image')


let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  
  if (textNode.speaker == 0) {                // narration 
    textElement.style.fontStyle = "italic";
    textElement.style.fontWeight = "bold";
    textElement.style.color = "black";
  }
  else if (textNode.speaker == 1) {           // main character speaking
    textElement.style.fontStyle = "normal";
    textElement.style.color = "blue";
  }
  else if (textNode.speaker == 2) {           // main character thinking
    textElement.style.fontStyle = "italic";
    textElement.style.color = "blue";
  }
  else {                                      // other characters speaking
    textElement.style.fontStyle = "normal";
    textElement.style.color = "black";
  }
  textElement.innerText = textNode.text
  
  var char_img = document.getElementById("character-image");
  char_img.src = textNode.image;
  var bkgd_img = document.getElementById("background-image");
  bkgd_img.src = textNode.background;
  

  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('option')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}










//////////////////////////////////////////////////////////////////////////////////////// START OF BEGINNING ////////////////////////////////////////////////////////////////////////////////////////


const textNodes = [
  {
    id: 1,
    speaker: 0, // 0 is narration, 1 main charcater is speaking, 2 main character is thinking, 3 is all other text
    text: 'Horizon High school. A place where memories were made, and bonds forged. Yet at this school, many other tragedies transpired. This is the tale of that story, of the high school reunion murder mystery.',
    
    background: "Background_PNGs/dark_classroom.jpg",
    image:"Character_PNGs/blank.PNG",
    // music: "Music/apep.mp3", idk this isnt working yet kekw
    options: [
      {
        text: 'Continue',
        nextText: 2
      },
    ]
  },
  {
    id: 2,
    speaker: 2,
    text: 'Its been a while since I’ve last walked these halls...',
    image: "",
    background: "Background_PNGs/stairwell.jpg",
    options: [
      
      {
        text: 'Continue',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    speaker: 2,
    text: 'Life has taken us all in different directions and I wonder how different everyone has become.',
    image: "",
    background: "Background_PNGs/stairwell.jpg",
    options: [
      
      {
        text: 'Talk to Wren',
        nextText: 4
      }
    ]
  },
  {
    id: 4,
    speaker: 1,
    text: 'Hey Wren! How have you been?',
    image: "",
    background: "Background_PNGs/cafeteria.jpg",
    options: [
      
      {
        text: 'Continue',
        nextText: 5
      }
    ]
  },
  {
    id: 5,
    speaker: 3,
    text: 'Wren: Hey! I’ve been well. Feeling extra pumped for us all to re-connect.',
    image: "Character_PNGs/wren.PNG",
    background: "Background_PNGs/cafeteria.jpg",
    options: [     
      {
        text: 'Continue',
        nextText: 6
      }
    ]
  },
  {
    id: 6,
    speaker: 1,
    text: 'That’s great man, I wanna learn more about how everyone’s been in recent times.',
    image: 'Character_PNGs/wren.PNG',
    background: "Background_PNGs/cafeteria.jpg",
    options: [     
      {
        text: 'Continue',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    speaker: 3,
    text: 'Wren: Same with me. Hey, I’ll catch up with you in a bit, I’m gonna go take care of a few things.',
    image: "Character_PNGs/wren.PNG",
    background: "Background_PNGs/cafeteria.jpg",
    options: [     
      {
        text: 'Continue',
        nextText: 8
      }
    ]
  },
  {
    id: 8,
    speaker: 1,
    text: 'Hi Illa! It’s been such a long time. How’s it going?',
    image: 'Character_PNGs/illa.PNG',
    background: "Background_PNGs/cafeteria.jpg",
    options: [     
      {
        text: 'Continue',
        nextText: 9
      }
    ]
  },
  {
    id: 9,
    speaker: 3,
    text: 'Illa: Eh could be better. I\'m just trying to keep it together.',
    image: "Character_PNGs/illa.PNG",
    background: "Background_PNGs/cafeteria.jpg",
    options: [     
      {
        text: 'Continue',
        nextText: 10
      }
    ]
  },
 ////////////////////////// START OF PLOT 3 / BODY DISCOVERY //////////////////////////////////////////////////////////////////////////////////////// 
 {
  id: 10,
  speaker: 2,
  text: 'As you continue to catch up with everyone, you hear a scream in the distance...',
  image: 'Character_PNGs/illa.PNG',
  background: "Background_PNGs/cafeteria.jpg",
  options: [     
    {
      text: 'Continue',
      nextText: 11,
      setState: {optionOne: true},
    }
  ]
},
{
  id: 11,
  speaker: 3,
  text: 'Jen: HELP! EVERYONE COME QUICK!',
  image: "Character_PNGs/jen.PNG",
  background: "Background_PNGs/cafeteria.jpg",
  options: [     
    {
      text: 'Continue',
      nextText: 12,
      setState: {optionTwo: true},
    }
  ]
},
{
  id: 12,
  speaker: 1,
  text: 'Was that Jen?',
  image: 'Character_PNGs/jen.PNG',
  background: "Background_PNGs/cafeteria.jpg",
  options: [     
    {
      text: 'Continue',
      nextText: 13,
      setState: {optionThree: true},
    }
  ]
},
{
  id: 13,
  speaker: 3,
  text: 'Illa: I think so, it sounded like she was near the home ec room.',
  image: "Character_PNGs/illa.PNG",
  background: "Background_PNGs/cafeteria.jpg",
  options: [     
    {
      text: 'Continue',
      nextText: 14,
      setState: {optionFour: true},
    }
  ]
},
{
  id: 14,
  speaker: 1,
  text: 'Well then let’s go! Quick!',
  image: 'Character_PNGs/illa.PNG',
  background: "Background_PNGs/cafeteria.jpg",
  options: [     
    {
      text: 'Continue',
      nextText: 15
    }
  ]
},
{
  id: 15,
  speaker: 1,
  text: 'What happened?!?',
  image: 'Character_PNGs/illa.PNG',
  background: "Background_PNGs/dark_hallway.jpg",
  options: [     
    {
      text: 'Continue',
      nextText: 16
    }
  ]
},
{
  id: 16,
  speaker: 3,
  text: 'Jen: She...Amira...',
  image: 'Character_PNGs/jen.PNG',
  background: "Background_PNGs/dark_hallway.jpg",
  options: [     
    {
      text: 'Continue',
      nextText: 18
    }
  ]
},

{
  id: 18,
  speaker: 3,
  text: "Holland: Someone\'s killed her. It\'s terrible in there.",
  image: 'Character_PNGs/holland.PNG',
  background: 'Background_PNGs/dark_hallway.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 19
    }
  ]
},
{
  id: 19,
  speaker: 3,
  text: "Illa: Someone WHAT? No, there\'s no way.",
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/dark_hallway.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 20
    }
  ]
},

{
  id: 20,
  speaker: 1,
  text: "I can already tell it’s real though… the smell of blood and death coming from that room…",
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/dark_hallway.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 21
    }
  ]
},
{
  id: 21,
  speaker: 3,
  text: "Wren: I heard someone scream? What’s going on here?",
  image:'Character_PNGs/wren.PNG' ,
  background: 'Background_PNGs/dark_hallway.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 22
    }
  ]
},
{
  id: 22,
  speaker: 1,
  text: "Jen found Amira dead in the home ec room. I was about to in and check for myself but-",
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/dark_hallway.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 23
    }
  ]
},
{
  id: 23,
  speaker: 3,
  text: "Holland: It’s awful. I’m not going back in there.",
  image: 'Character_PNGs/holland.PNG',
  background: 'Background_PNGs/dark_hallway.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 24
    }
  ]
},
{
  id: 24,
  speaker: 3,
  text: "Illa: No, it can’t be real, you have to let me IN-",
  image: 'Character_PNGs/illa.PNG',
  background:'Background_PNGs/dark_hallway.jpg' ,
  options: [
    {
      text: 'Continue',
      nextText: 25
    }
  ]
},
{
  id: 25,
  speaker: 3,
  text:"Illa: ..." ,
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 26
    }
  ]
},
{
  id: 26,
  speaker: 3,
  text:"Illa: ..." ,
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 27
    }
  ]
},
{
  id: 27,
  speaker: 3,
  text:"Illa: Oh my god..." ,
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 28
    }
  ]
},
{
  id: 28,
  speaker: 3,
  text: "Illa: Amira... NO!",
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 29
    }
  ]
},
{
  id: 29,
  speaker: 0,
  text: "The scene was awful. A massive pool of blood, slowly spreading out from...",
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 30
    }
  ]
},
{
  id: 30,
  speaker: 0,
  text: "Amira. Undoubtedly dead, a dark red hole in her stomach, eyes still wide in shock.",
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 31
    }
  ]
},
{
  id: 31,
  speaker: 2,
  text: "Who could’ve done this? Were we all in danger?",
  image: 'Character_PNGs/illa.PNG',
  background:'Background_PNGs/dark_classroom.jpg' ,
  options: [
    {
      text: 'Continue',
      nextText: 32
    }
  ]
},
{
  id: 32,
  speaker: 2,
  text:"I have to figure out what happened here!" ,
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 33
    }
  ]
},
////////////////////////// INVESTIGATION: OPTION 1 //////////////////////////////////////////////////////////////////////////////////////// 
{
  id: 33,
  speaker: 2,
  text: "Where should I start?",
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Talk to Jen who found the body',
      nextText: 34
    },
    {
      text: 'Talk to Illa who was friends with the victim',
      nextText: 40
     },
     {
      text: 'Stay in the home-ec room to investigate the body for any clues',
      nextText: 103
    },
    {
      text: 'Head to the forensics lab to look for tools to use in the investigation',
      nextText: 106
    }
  ]
},
{
  id: 34,
  speaker: 1,
  text: "Jen, did you see anything when you found Amira?",
  image: 'Character_PNGs/jen.PNG',
  background: 'Background_PNGs/dark_hallway.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 35,
      setState: {optionOne: false},
    }
  ]
},
{
  id: 35,
  speaker: 3,
  text:"Jen: No... I just wanted to see if anything had changed in the home ec room from when we went here, and as soon as I opened the door I could already just smell the blood..." ,
  image: 'Character_PNGs/jen.PNG',
  background: 'Background_PNGs/dark_hallway.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 36
    }
  ]
},
{
  id: 36,
  speaker: 1,
  text: "Did you maybe see anyone leaving or anything?",
  image: 'Character_PNGs/jen.PNG',
  background: 'Background_PNGs/dark_hallway.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 37
    }
  ]
},
{
  id: 37,
  speaker: 3,
  text: "Jen: I didn’t! I swear I didn’t see anything! I just wanted to revisit the room for the memories and... and...",
  image: 'Character_PNGs/jen.PNG',
  background: 'Background_PNGs/dark_hallway.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 38
    }
  ]
},
{
  id: 38,
  speaker: 3,
  text: "Holland: She’s probably in shock about all this. I’ll stay with them, maybe you can go talk to someone else?",
  image: 'Character_PNGs/holland.PNG',
  background: 'Background_PNGs/dark_hallway.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 39
    }
  ]
},
{
  id: 39,
  speaker: 2,
  text: "What should I do now?",
  image: 'Character_PNGs/holland.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Talk to Jen who found the body',
      nextText: 34,
      requiredState: (currentState) => currentState.optionOne,
    },
    {
      text: 'Talk to Illa who was friends with the victim',
      requiredState: (currentState) => currentState.optionTwo,
      nextText: 40,
      
     },
     {
      text: 'Stay in the home-ec room to investigate the body for any clues',
      nextText: 103,
      requiredState: (currentState) => currentState.optionThree,
    },
    {
      text: 'Head to the forensics lab to look for tools to use in the investigation',
      nextText: 106,
      requiredState: (currentState) => currentState.optionFour,
    }

  ]
},
////////////////////////// INVESTIGATION: OPTION 2 //////////////////////////////////////////////////////////////////////////////////////// 
{
  id: 40,
  speaker: 2,
  text: "Illa’s probably taking this pretty hard, she was pretty close with Amira... I’m not sure where she ran off to after we found the body. Maybe to the bio lab?",
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/dark_hallway.jpg',
  options: [
    {
      text: 'Go to the outside of the bio lab',
      nextText: 41,
      setState: {optionTwo: false},
    }
  ]
},
{
  id: 41,
  speaker: 0,
  text: "As you approach the bio lab, you hear voices...",
  image: 'Background_PNGs/outside_bio_lab.jpeg',
  background: 'Background_PNGs/outside_bio_lab.jpeg',
  options: [
    {
      text: 'Continue',
      nextText: 42
    }
  ]
},

{
  id: 42,
  speaker: 3,
  text: "Illa: YOU DID SOMETHING DIDN’T YOU!",
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Continue',
      nextText: 43
    }
  ]
},
{
  id: 43,
  speaker: 3,
  text:"Wren: I DIDN’T!" ,
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Continue',
      nextText: 44
    }
  ]
},
{
  id: 44,
  speaker: 2,
  text:"Whoa... they’re really going at it, maybe I can learn something if I listen for a bit, but I’ve got to step in if it escalates too much." ,
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/outside_bio_lab.jpeg',
  options: [
    {
      text: 'Continue',
      nextText: 45
    }
  ]
},
{
  id: 45,
  speaker: 3,
  text: "Illa: You went sideways in senior year, you know that?" ,
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Continue',
      nextText: 46
    }
  ]
},
{
  id: 46 ,
  speaker: 3,
  text: "Wren: You were the one who stopped talking to me all of a sudden anyways, so clearly you didn’t care much about that." ,
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Continue',
      nextText: 47
    }
  ]
},
{
  id: 47,
  speaker: 3,
  text: "Illa: Don’t play dumb. You started being really weird around Amira... I couldn’t even get the two of you in the same room together!",
  image: 'Character_PNGs/illa.PNG' ,
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Continue',
      nextText: 48
    }
  ]
},
{
  id: 48,
  speaker: 3,
  text: "Wren: ...so you picked her over me. And right when I lost my sister. That was messed up.",
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Step in',
      nextText: 49
    },
    {
      text: 'Stay put',
      nextText: 50
    }
  ]
},
{
  id: 50,
  speaker: 3,
  text:"Illa: I’ve known her since we were practically babies. You can’t expect me to just leave her like that!" ,
  image:'Character_PNGs/illa.PNG' ,
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Continue',
      nextText: 51
    }
  ]
},
{
  id: 51,
  speaker: 3,
  text:"Wren: I needed someone to rely on and ALL OF YOU LEFT ME." ,
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Continue',
      nextText: 52
    }
  ]
},
{
  id: 52,
  speaker: 3,
  text: "Illa: It... it wasn’t like that I promise. Amira... she needed me too y’know?",
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Continue',
      nextText: 53
    }
  ]
},
{
  id: 53,
  speaker: 3,
  text: "Wren: ...",
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Step in',
      nextText: 49
    },
    {
      text: 'Stay put',
      nextText: 54
    }
  ]
},
{
  id: 54,
  speaker: 3,
  text:"Wren: Did you know?" ,
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Continue',
      nextText: 55
    }
  ]
},
{
  id: 55,
  speaker: 3,
  text: "Illa: Know what?",
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Continue',
      nextText: 56
    }
  ]
},
{
  id: 56,
  speaker: 3,
  text: "Wren: What Amira did.",
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Continue',
      nextText: 57
    }
  ]
},
{
  id: 57,
  speaker: 3,
  text: "Illa: What do you mean? She was devastated about your sister too you know? All of us felt so unsafe because they never caught who did it.",
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Step in',
      nextText: 49
    },
    {
      text: 'Stay put',
      nextText: 58
    }
  ]
},
{
  id: 58,
  speaker: 3,
  text: "Wren: I spent so many years after we graduation searching... To catch the rat that did this.",
  image: 'Character_PNGs/wren.PNG',
  background:'Background_PNGs/bio_lab.webp' ,
  options: [
    {
      text: 'Continue',
      nextText: 59
    }
  ]
},
{
  id: 59,
  speaker: 3,
  text:"Wren: Our family was shattered because we lost her, Mom could barely cope and Dad turned to alcohol." ,
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Continue',
      nextText: 60
    }
  ]
},
{
  id: 60,
  speaker: 3,
  text:"Wren: Amira said she wanted to talk to me when I got here. I couldn’t believe it, but she dragged me to the home ec room for a chat." ,
  image: 'Character_PNGs/wren.PNG',
  background:'Background_PNGs/bio_lab.webp' ,
  options: [
    {
      text: 'Continue',
      nextText: 61
    }
  ]
},
{
  id: 61,
  speaker: 3,
  text: "Wren: You know what she told me?",
  image: 'Character_PNGs/wren.PNG' ,
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Step in',
      nextText: 49
    },
    {
      text: 'Stay put',
      nextText: 62
    }
  ]
},
{
  id: 62,
  speaker: 3,
  text: "Wren: She knew things about my sister’s death that only the investigators and the family knew about.",
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Continue',
      nextText: 63
    }
  ]
},
{
  id: 63,
  speaker: 3,
  text: "Illa: She... what?",
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Continue',
      nextText: 64
    }
  ]
},
{
  id: 64,
  speaker: 3,
  text:"Wren: You heard me. And you two were two peas in a pod. I bet you were in on the whole thing together." ,
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Continue',
      nextText: 65
    }
  ]
},
{
  id: 65,
  speaker: 3,
  text: "Wren: Poor little Wren, attached to his sister at the hip. SO YOU TOOK HER FROM ME.",
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Continue',
      nextText: 66
    }
  ]
},
{
  id: 66 ,
  speaker: 3,
  text:"Illa: I- no! I didn’t know anything!" ,
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Step in',
      nextText: 80
    },
    {
      text: 'Stay put',
      nextText: 67
    }
  ]
},
////////////////////////// INVESTIGATION: OPTION 2 STAY PUT LAST OPTION //////////////////////////////////////////////////////////////////////////////////////// 

{
  id: 67,
  speaker: 0,
  text: "a sickening squelch sound is heard from the bio lab",
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/outside_bio_lab.jpeg',
  options: [
    {
      text: 'Continue',
      nextText: 68
    }
  ]
},
{
  id: 68,
  speaker: 3,
  text: "Illa: Wren... How could you...",
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Continue',
      nextText: 69
    }
  ]
},
{
  id: 69,
  speaker: 3,
  text:"Wren: That was for my sister. You and Amira have to PAY for what you did to ME, what you did to my FAMILY, what you did to HER." ,
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Continue',
      nextText: 70
    }
  ]
},
{
  id: 70,
  speaker: 2,
  text: "Did he just... kill Illa???",
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/outside_bio_lab.jpeg', // jumpscare idk lmao
  options: [
    {
      text: 'Continue',
      nextText: 71
    }
  ]
},
{
  id: 71,
  speaker: 3,
  text: "Wren: What. What are you doing here.",
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/outside_bio_lab.jpeg',
  options: [
    {
      text: 'Continue',
      nextText: 72
    }
  ]
},
{
  id: 72,
  speaker: 1,
  text: "I’m sorry! I was just trying to find Illa to ask if she knew anything about Amira’s death I-",
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/outside_bio_lab.jpeg',
  options: [
    {
      text: 'Continue',
      nextText: 73
    }
  ]
},
{
  id: 73,
  speaker: 3,
  text:"Wren: Well you found her didn’t you." ,
  image: 'Character_PNGs/wren.PNG',
  background:'Background_PNGs/outside_bio_lab.jpeg' ,
  options: [
    {
      text: 'Continue',
      nextText: 74
    }
  ]
},
{
  id: 74,
  speaker: 3,
  text: "Wren: You’ve sniffed around a little too much for my liking. I think you’ve heard too much.",
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/outside_bio_lab.jpeg',
  options: [
    {
      text: 'Continue',
      nextText: 75
    }
  ]
},
{
  id: 75,
  speaker: 1,
  text: "No! I just got here I didn’t hear anything I-",
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/outside_bio_lab.jpeg',
  options: [
    {
      text: 'Continue',
      nextText: 76
    }
  ]
},
{
  id: 76,
  /************/
  text: "Saving this for potential wren with a knife lmfao",
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/outside_bio_lab.jpeg',
  options: [
    {
      text: 'Continue',
      nextText: 77
    }
  ]
},
{
  id: 77,
  speaker: 3,
  text:"Wren: You still know too much. And I can’t have you telling any secrets." ,
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/outside_bio_lab.jpeg',
  options: [
    {
      text: 'Continue',
      nextText: 78
    }
  ]
},
{
  id: 78,
  speaker: 3,
  text: "Wren: You know what they say... dead men tell no tales... and you certainly won’t be telling any tales now.",
  image: 'Character_PNGs/wren.PNG',
  background:'Background_PNGs/outside_bio_lab.jpeg' ,
  options: [
    {
      text: 'Continue',
      nextText: 79
    }
  ]
},
{
  id: 79,
  speaker: 0,
  text: "Game over, you died.",
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/pool.jpg',
  options: [
    {
      text: 'Replay game?',
      nextText: -1
    }
  ]
},
////////////////////////// INVESTIGATION: OPTION 2 STEP IN LAST OPTION //////////////////////////////////////////////////////////////////////////////////////// 

{
  id: 80,
  speaker: 1,
  text: "I’m worried about things escalating past this point.",
  image: 'Character_PNGs/illa.PNG' ,
  background: 'Background_PNGs/outside_bio_lab.jpeg',
  options: [
    {
      text: 'Continue',
      nextText: 81
    }
  ]
},
{
  id: 81,
  speaker: 1,
  text: "Hey Illa, Wren, I’m not interrupting anything am I?",
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Continue',
      nextText: 82
    }
  ]
},
{
  id: 82,
  speaker: 3,
  text: "Wren: You... how much did you hear...",
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Continue',
      nextText: 83
    }
  ]
},
{
  id: 83,
  speaker: 3,
  text: "Illa: Oh my god, he’s dangerous, we need to get OUT OF HERE!",
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Continue',
      nextText: 85
    }
  ]
},
{
  id: 85,
  speaker: 0,
  text:"You and Illa run down the hallway back to the home ec room" ,
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/outside_bio_lab.jpeg',
  options: [
    {
      text: 'Continue',
      nextText: 86
    }
  ]
},
{
  id: 86,
  speaker: 1,
  text: "Jen, Holland, I’m glad you both are still here.",
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 87
    }
  ]
},
{
  id: 87,
  speaker: 3,
  text: "Holland: Of course we are, did something happen?",
  image: 'Character_PNGs/holland.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 88
    }
  ]
},
{
  id: 88,
  speaker: 1,
  text:"It’s Wren, he’s not right. I think he’s the one that killed Amira." ,
  image: 'Character_PNGs/holland.PNG',
  background:'Background_PNGs/dark_classroom.jpg' ,
  options: [
    {
      text: 'Continue',
      nextText: 89
    }
  ]
},
{
  id: 89,
  speaker: 3,
  text: "Jen: Oh... Oh god...",
  image: 'Character_PNGs/jen.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 90
    }
  ]
},
{
  id: 90,
  speaker: 3,
  text:"Holland: Well we called the cops right after we found the body, we just have to hold tight until they arrive." ,
  image: 'Character_PNGs/holland.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 91
    }
  ]
},
{
  id: 91,
  speaker: 0,
  text: "You hear a banging noise coming from the hallway...",
  image: 'Character_PNGs/holland.PNG',
  background: 'Background_PNGs/dark_hallway.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 92
    }
  ]
},
{
  id: 92,
  speaker: 3,
  text: "Illa: No... is that Wren? He’s coming back to finish us all off!",
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 93
    }
  ]
},
{
  id: 93,
  speaker: 3,
  text: "Police: Police Department! Drop all your weapons and come out with your hands up!" ,
  image:'Character_PNGs/illa.PNG' ,
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 94
    }
  ]
},
{
  id: 94,
  speaker: 1,
  text:"We’re gonna be okay..." ,
  image: 'Character_PNGs/illa.PNG',
  background:'Background_PNGs/dark_classroom.jpg' ,
  options: [
    {
      text: 'Continue',
      nextText: 95
    }
  ]
},
{
  id: 95,
  speaker: 1,
  text: "We told the police everything we knew, and with our anecdotes in combination with the official crime scene investigation, Wren became the prime suspect.",
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/office.jpg' ,
  options: [
    {
      text: 'Continue',
      nextText: 1000
    }
  ]
},
{
  id: 1000,
  speaker: 0,
  text: "In the end, it turned out Wren had managed to escape the school. After being on the run for a couple of days, the police were able to track him down and arrest him.",
  image:'Character_PNGs/illa.PNG' ,
  background: 'Background_PNGs/office.jpg',
  options: [
    {
      text: 'Congratulations!, would you like to replay the game?',
      nextText: -1
    }
  ]
},

////////////////////////// INVESTIGATION: OPTION 2 STEP IN ANY POINT//////////////////////////////////////////////////////////////////////////////////////// 

{
  id: 49,
  speaker: 1,
  text: "Hey Illa! Wren! I’ve been looking for you guys.",
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Continue',
      nextText: 96
    }
  ]
},
{
  id: 96,
  speaker: 3,
  text: "Wren: For what? Did you find anything?",
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Continue',
      nextText: 97
    }
  ]
},
{
  id: 97,
  speaker: 1,
  text: "No... I wanted to ask you guys if you knew anything. Illa, in particular, you were pretty close with Amira right? Do you know who might’ve done this?",
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Continue',
      nextText: 98
    }
  ]
},
{
  id: 98,
  speaker: 3,
  text: "Illa: ...Not a clue. Amira was pretty friendly with everyone. Sometimes too friendly, and it hurts her, but I don’t think that’s what happened here.",
  image: 'Character_PNGs/illa.PNG',
  background:'Background_PNGs/bio_lab.webp' ,
  options: [
    {
      text: 'Continue',
      nextText: 99
    }
  ]
},
{
  id: 99,
  speaker: 3,
  text: "Illa: I can’t imagine why anyone would want to kill her, I mean, she’s practically always the happy pill of any group.",
  image:'Character_PNGs/illa.PNG' ,
  background:'Background_PNGs/bio_lab.webp' ,
  options: [
    {
      text: 'Continue',
      nextText: 100
    }
  ]
},
{
  id: 100,
  speaker: 1,
  text: "You’re right, she didn’t seem like the type to have enemies, especially not ones that would want to kill her.",
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Continue',
      nextText: 101
    }
  ]
},
{
  id: 101,
  speaker: 3,
  text: "Wren: Yeah we don’t know anything. If you’re trying to figure out who did it, this isn’t the place to find answers.",
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Continue',
      nextText: 102
    }
  ]
},
{
  id: 102,
  speaker: 1,
  text: "Alright, thanks for telling me all of that.",
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/bio_lab.webp',
  options: [
    {
      text: 'Continue',
      nextText: 39
    }
  ]
},
////////////////////////// INVESTIGATION: OPTION 3  //////////////////////////////////////////////////////////////////////////////////////// 

{
  id: 103,
  speaker: 2,
  text:"What a grisly scene... just so much blood. There’s no way the killer didn’t get blood on them." ,
  image: 'Character_PNGs/illa.PNG',
  background:'Background_PNGs/dark_classroom.jpg' ,
  options: [
    {
      text: 'Continue',
      nextText: 104
    }
  ]
},
{
  id: 104,
  speaker: 2,
  text:"The emergency shower here looks like it was used, maybe to rinse off the blood?",
  image:'Character_PNGs/illa.PNG' ,
  background:'Background_PNGs/dark_classroom.jpg' ,
  options: [
    {
      text: 'Continue',
      nextText: 105
    }
  ]
},
{
  id: 105,
  speaker: 2,
  text: "If only I had something I could use to detect blood even if it had been washed off...",
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 39,
      setState: {optionThree: false},
    }
  ]
},
////////////////////////// INVESTIGATION: OPTION 4  //////////////////////////////////////////////////////////////////////////////////////// 

{
  id: 106,
  speaker: 2,
  text:"I remember taking Forensics 101 and thinking it was interesting, but I never thought I’d be using it like this." ,
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/forensics_lab.jpeg',
  options: [
    {
      text: 'Continue',
      nextText: 107
    }
  ]
},
{
  id:107 ,
  speaker: 2,
  text: "Okay, let’s see what we can work with here.",
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/forensics_lab.jpeg',
  options: [
    {
      text: 'Take the fingerprinting kit – can be used to dust for prints',
      nextText: 108
    },
    {
      text: 'Take the luminol – can be used to find blood traces',
      nextText: 113
    }
  ]
},
{
  id: 108,
  speaker: 1,
  text: "No one’s messed with anything here right? Moved anything or hid anything?",
  image: 'Character_PNGs/illa.PNG',
  background: 'Background_PNGs/dark_classroom.jpg' ,
  options: [
    {
      text: 'Continue',
      nextText: 109
    }
  ]
},
{
  id: 109,
  speaker: 3,
  text: "Jen: I’ve been here since I first found the body and called for all of you. Holland was the first to get here, and neither of us touched anything here or noticed anyone doing anything." ,
  image:'Character_PNGs/jen.PNG' ,
  background:'Background_PNGs/dark_classroom.jpg' ,
  options: [
    {
      text: 'Continue',
      nextText: 110
    }
  ]
},
{
  id: 110,
  speaker: 3,
  text:"Holland: Yeah, the whole scene is just so gruesome I can’t imagine anyone would’ve wanted to mess with anything here anyways." ,
  image: 'Character_PNGs/holland.PNG',
  background:'Background_PNGs/dark_classroom.jpg' ,
  options: [
    {
      text: 'Continue',
      nextText: 111
    }
  ]
},
{
  id: 111,
  speaker: 1,
  text: "Strange... there’s no sign of what could’ve been used as the murder weapon, maybe we could’ve dusted for prints on it but that doesn’t look like an option.",
  image: 'Character_PNGs/holland.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 112
    }
  ]
},
{
  id: 112,
  speaker: 2,
  text:"Maybe I should try the luminol instead" ,
  image: 'Character_PNGs/holland.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 113
    }
  ]
},
{
  id: 113,
  speaker: 2,
  text:"I should try to find everyone to use this on. The murderer probably has traces of blood on their hand, even if it was washed off." ,
  image: 'Character_PNGs/holland.PNG',
  background:'Background_PNGs/forensics_lab.jpeg' ,
  options: [
    {
      text: 'Continue',
      nextText: 114
    }
  ]
},
{
  id: 114,
  speaker: 2,
  text: "I left Jen and Holland in the home ec room, they’re probably still there." ,
  image: 'Character_PNGs/holland.PNG' ,
  background: 'Background_PNGs/forensics_lab.jpeg',
  options: [
    {
      text: 'Continue',
      nextText: 115
    }
  ]
},
{
  id: 115,
  speaker: 1,
  text: "Hey Jen, Holland, I got something from the forensics lab. Mind if I try it out?",
  image: 'Character_PNGs/holland.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 116
    }
  ]
},
{
  id: 116,
  speaker: 3,
  text: "Jen: What is it?",
  image: 'Character_PNGs/jen.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Explain the luminol',
      nextText: 117
    },
    {
      text: 'Hide what the luminol is',
      nextText: 125
    }
  ]
},
{
  id: 117,
  speaker: 1,
  text:"This bottle of luminol, mind if I just spray your hands with it?" ,
  image: 'Character_PNGs/jen.PNG',
  background:'Background_PNGs/dark_classroom.jpg' ,
  options: [
    {
      text: 'Continue',
      nextText: 118
    }
  ]
},
{
  id: 118,
  speaker: 3,
  text: "Holland: What does it do?" ,
  image: 'Character_PNGs/holland.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 119
    }
  ]
},
{
  id: 119,
  speaker: 1,
  text: 'If I spray it, when we turn the lights off, if your hands have had blood on them recently, it’ll show.',
  image: 'Character_PNGs/holland.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 120
    }
  ]
},
{
  id: 120,
  speaker: 1,
  text: "If you’re both innocent, then there shouldn’t be any problem right?",
  image: 'Character_PNGs/holland.PNG',
  background:'Background_PNGs/dark_classroom.jpg' ,
  options: [
    {
      text: 'Continue',
      nextText: 121
    }
  ]
},
{
  id:121 ,
  speaker: 3,
  text: "Jen: Fine with me.",
  image: 'Character_PNGs/jen.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 122
    }
  ]
},
{
  id:122 ,
  speaker: 3,
  text: "Holland: Yeah, we only found the body. Didn’t have anything to do with how she died.",
  image:'Character_PNGs/holland.PNG' ,
  background:'Background_PNGs/dark_classroom.jpg' ,
  options: [
    {
      text: 'Continue',
      nextText: 123
    }
  ]
},
{
  id: 123,
  speaker: 0,
  text: "You spray both Jen and Holland.",
  image: 'Character_PNGs/holland.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 124
    }
  ]
},
{
  id: 125,
  speaker: 1,
  text:"First, I’ve got this disinfectant, I think we should all use this before we mess with anything just in case." ,
  image:'Character_PNGs/jen.PNG' ,
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 126
    }
  ]
},
{
  id: 126,
  speaker: 3,
  text: "Jen: Sure.",
  image: 'Character_PNGs/jen.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 128
    }
  ]
},
{
  id: 128,
  speaker: 3,
  text:"Holland: Okay." ,
  image: 'Character_PNGs/holland.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 129
    }
  ]
},
{
  id: 129,
  speaker: 0,
  text: "You spray both Jen and Holland.",
  image:'Character_PNGs/holland.PNG' ,
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 130
    }
  ]
},
{
  id: 130,
  speaker: 1,
  text:"I found this blue light, and I think we might be able to find something if we shut off the lights and have a look around." ,
  image:'Character_PNGs/holland.PNG' ,
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 131
    }
  ]
},
{
  id: 131,
  speaker: 3,
  text:"Holland: I don’t think that’s gonna turn anything up." ,
  image: 'Character_PNGs/holland.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 132
    }
  ]
},
{
  id:132 ,
  speaker: 3,
  text: "Jen: Whoa, I don’t think we should just shut the lights off. Anyone could do anything and we’d have no idea in the dark.",
  image:'Character_PNGs/jen.PNG' ,
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 133
    }
  ]
},
{
  id: 133,
  speaker: 1,
  text: "You’re right, sorry, it was a stupid idea.",
  image: 'Character_PNGs/jen.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 134
    }
  ]
},
{
  id: 134,
  speaker: 1,
  text:"Honestly, what I sprayed on your hands is a substance called luminol. When we turn the lights off, if your hands have had blood on them recently, it’ll show." ,
  image:'Character_PNGs/jen.PNG' ,
  background:'Background_PNGs/dark_classroom.jpg' ,
  options: [
    {
      text: 'Continue',
      nextText: 135
    }
  ]
},
{
  id: 135,
  speaker: 1,
  text: "You can’t be too sure who to trust, but if you guys are innocent, it should be okay to turn the lights off for a moment just to check right?",
  image: 'Character_PNGs/jen.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 136
    }
  ]
},
{
  id: 136,
  speaker: 3,
  text: "Holland: You could’ve just told us upfront. We would’ve been fine with that!",
  image: 'Character_PNGs/holland.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 137
    }
  ]
},
{
  id: 137,
  speaker: 3,
  text: "Jen: Holland’s right, if you just tell us upfront, turning out the lights is way less suspicious. Check quickly though. I don’t trust the dark.",
  image:'Character_PNGs/jen.PNG' ,
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 138
    }
  ]
},
{
  id: 138,
  speaker: 1,
  text:"I didn’t want you to refuse, in case either of you had done it though..." ,
  image: 'Character_PNGs/jen.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 124
    }
  ]
},
{
  id: 124,
  speaker: 1,
  text: "Now I’ll just hit the lights and...",
  image:'Character_PNGs/jen.PNG' ,
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 139
    }
  ]
},
{
  id: 139,
  speaker: 0,
  text: "The class darkens to black for a moment", 
  image: 'Character_PNGs/jen.PNG',
  background: "Background_PNGs/black_screen.jpeg",
  options: [
    {
      text: 'Continue',
      nextText: 140
    }
  ]
},
{
  id: 140,
  speaker: 1,
  text: "Yep, you’re both clean. Thanks for working with me on this.",
  image:'Character_PNGs/jen.PNG' ,
  background:'Background_PNGs/dark_classroom.jpg' ,
  options: [
    {
      text: 'Continue',
      nextText: 141
    }
  ]
},
{
  id:141 ,
  speaker: 1,
  text: "Do either of you know where Wren or Illa might’ve run off to?",
  image:'Character_PNGs/jen.PNG' ,
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 142
    }
  ]
},
{
  id: 142,
  speaker: 3,
  text: "Holland: I saw Wren heading in the direction of the gym a couple of minutes ago. He couldn’t have gone far from there.",
  image: 'Character_PNGs/holland.PNG' ,
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 143
    }
  ]
},
{
  id: 143,
  speaker: 1,
  text: "Alright, thanks.",
  image: 'Character_PNGs/holland.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 144
    }
  ]
},
{
  id: 144,
  speaker: 3,
  text: "Holland: Wait, we’ll go with you. If the culprit gets cornered, we can back you up.",
  image: 'Character_PNGs/holland.PNG',
  background: 'Background_PNGs/dark_classroom.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 145
    }
  ]
},
{
  id: 145,
  speaker: 1,
  text:"Is that him in the corner?" ,
  image: 'Character_PNGs/holland.PNG',
  background: 'Background_PNGs/gym.png',
  options: [
    {
      text: 'Continue',
      nextText: 146
    }
  ]
},
{
  id: 146,
  speaker: 3,
  text: "Jen: Looks like it. I’ll stay by the light switch.",
  image: 'Character_PNGs/jen.PNG',
  background: 'Background_PNGs/gym.png',
  options: [
    {
      text: 'Continue',
      nextText: 147
    }
  ]
},
{
  id: 147,
  speaker: 3,
  text:"Wren: Hey everyone, did you find something? Where’s Illa?" ,
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/gym.png',
  options: [
    {
      text: 'Continue',
      nextText: 148
    }
  ]
},
{
  id: 148,
  speaker: 1,
  text:"We aren’t sure where she is yet, but we found something that could help us figure out who did it." ,
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/gym.png',
  options: [
    {
      text: 'Continue',
      nextText: 149
    }
  ]
},
{
  id: 149,
  speaker: 3,
  text: "Wren: Really? What is it?",
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/gym.png',
  options: [
    {
      text: 'Continue',
      nextText: 150
    }
  ]
},
{
  id: 150,
  speaker: 1,
  text: "Do you mind if we spray your hands with this real quick?",
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/gym.png',
  options: [
    {
      text: 'Continue',
      nextText: 151
    }
  ]
},
{
  id: 151,
  speaker: 3,
  text: "Wren: What is that, hand sanitizer? Don’t want to contaminate evidence?",
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/gym.png',
  options: [
    {
      text: 'Explain the luminol',
      nextText: 152
    },
    {
      text: 'Hide what the luminol is',
      nextText: 170
    }
  ]
},
{
  id:152 ,
  speaker: 1,
  text: "It’s actually luminol. Once it’s sprayed on a surface, we can turn off the lights and see traces of blood.",
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/gym.png',
  options: [
    {
      text: 'Continue',
      nextText: 153
    }
  ]
},
{
  id: 153,
  speaker: 1,
  text:"With the mess that the crime scene was, I figured the culprit would have blood traces all over their hands." ,
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/gym.png',
  options: [
    {
      text: 'Continue',
      nextText: 154
    }
  ]
},
{
  id: 154,
  speaker: 3,
  text: "Wren: Well you don’t need to use it on me! I didn’t do it.",
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/gym.png',
  options: [
    {
      text: 'Continue',
      nextText: 155
    }
  ]
},
{
  id: 155,
  speaker: 1,
  text: "I mean, I’m using it on everyone, I’ve already cleared Jen and Holland here.",
  image:'Character_PNGs/wren.PNG' ,
  background: 'Background_PNGs/gym.png',
  options: [
    {
      text: 'Continue',
      nextText: 156
    }
  ]
},
{
  id: 156,
  speaker: 1,
  text: "Really, if you’re innocent, there shouldn’t be anything to worry about. It’s not going to do anything to you.",
  image:'Character_PNGs/wren.PNG' ,
  background: 'Background_PNGs/gym.png',
  options: [
    {
      text: 'Continue',
      nextText: 157
    }
  ]
},
{
  id: 157,
  speaker: 3,
  text: "Wren: When are you, some kind of forensics expert? Yeah no thanks.",
  image:'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/gym.png',
  options: [
    {
      text: 'Continue',
      nextText: 158
    }
  ]
},
{
  id: 158,
  speaker: 3,
  text: "Holland: What are you so afraid of? Clearly Jen and I are fine, nothing’s going to happen to you.",
  image: 'Character_PNGs/holland.PNG',
  background: 'Background_PNGs/gym.png',
  options: [
    {
      text: 'Continue',
      nextText: 159
    }
  ]
},
{
  id: 159,
  speaker: 3,
  text:"Wren: Yeah well something’s gonna happen to you, you little rat." ,
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/gym.png',
  options: [
    {
      text: 'Continue',
      nextText: 160
    }
  ]
},
{
  id: 160,
  speaker: 0,
  text: "A flash of red fills your eyes.",
  image: 'Character_PNGs/wren.PNG',
  background: "Background_PNGs/red_screen.jpeg",
  options: [
    {
      text: 'Continue',
      nextText: 161
    }
  ]
},
{
  id: 161,
  speaker: 3,
  text: "Jen: Holland, no!",
  image: 'Character_PNGs/jen.PNG',
  background: 'Background_PNGs/gym.png',
  options: [
    {
      text: 'Continue',
      nextText: 162
    }
  ]
},
{
  id: 162,
  speaker: 3,
  text: "Holland: Ughhh...",
  image: 'Character_PNGs/holland.PNG',
  background: 'Background_PNGs/gym.png',
  options: [
    {
      text: 'Continue',
      nextText: 163
    }
  ]
},
{
  id: 163,
  speaker: 1,
  text: "You... you just... stabbed him?",
  image: 'Character_PNGs/holland.PNG',
  background:'Background_PNGs/gym.png' ,
  options: [
    {
      text: 'Continue',
      nextText: 164
    }
  ]
},
{
  id: 164,
  speaker: 3,
  text: "Wren: Ha! And I’ll do it again.",
  image: 'Character_PNGs/wren.PNG',
  background:'Background_PNGs/gym.png' ,
  options: [
    {
      text: 'Continue',
      nextText: 165
    }
  ]
},
{
  id: 165,
  speaker: 2,
  text:"Jen: AHHHHHHHHH!" ,
  image: 'Character_PNGs/jen.PNG',
  background: 'Background_PNGs/gym.png',
  options: [
    {
      text: 'Continue',
      nextText: 166
    }
  ]
},
{
  id: 166,
  speaker: 0,
  text: "A flash of red fills your eyes.",
  image: 'Character_PNGs/jen.PNG',
  background: "Background_PNGs/red_screen.jpeg",
  options: [
    {
      text: 'Continue',
      nextText: 167
    }
  ]
},
{
  id: 167,
  speaker: 1,
  text:"No! Jen!" ,
  image: 'Character_PNGs/jen.PNG',
  background:'Background_PNGs/gym.png' ,
  options: [
    {
      text: 'Continue',
      nextText: 168
    }
  ]
},
{
  id: 168,
  speaker: 1,
  text: "Wren, how could you do this!",
  image: 'Character_PNGs/jen.PNG',
  background:'Background_PNGs/gym.png' ,
  options: [
    {
      text: 'Continue',
      nextText: 169
    }
  ]
},
{
  id:169 ,
  speaker: 3,
  text: "Wren: I mean I have my reasons. You just won’t be living long enough to find them out.",
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/gym.png',
  options: [
    {
      text: 'Continue',
      nextText: 79
    }
  ]
},
{
  id: 170,
  speaker: 1,
  text: "Yeah, something like that.",
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/gym.png',
  options: [
    {
      text: 'Continue',
      nextText: 171
    }
  ]
},
{
  id: 171,
  speaker: 3,
  text:"Holland: Wha-" ,
  image:'Character_PNGs/holland.PNG' ,
  background: 'Background_PNGs/gym.png',
  options: [
    {
      text: 'Continue',
      nextText: 172
    }
  ]
},
{
  id: 172,
  speaker: 3,
  text: "Wren: Good thinking! Go ahead and spray them.",
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/gym.png',
  options: [
    {
      text: 'Continue',
      nextText: 173
    }
  ]
},
{
  id: 173,
  speaker: 0,
  text: "You spray everyone",
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/gym.png',
  options: [
    {
      text: 'Continue',
      nextText: 174
    }
  ]
},
{
  id: 174,
  speaker: 0,
  text:"The lights turn off..." ,
  image:'Character_PNGs/wren.PNG',
  background:'Background_PNGs/moonlight_gym.jpg' ,
  options: [
    {
      text: 'Continue',
      nextText: 175
    }
  ]
},
{
  id: 175,
  speaker: 3,
  text:"Wren: Hey whoa! Why turn off the lights?" ,
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/moonlight_gym.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 176
    }
  ]
},
{
  id: 176,
  speaker: 3,
  text: "Holland: His hands!",
  image: 'Character_PNGs/holland.PNG',
  background: 'Background_PNGs/moonlight_gym.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 177
    }
  ]
},
{
  id: 177,
  speaker: 3,
  text: "Wren: What, why are my hands glowing... what did you spray on them?!?!",
  image: 'Character_PNGs/wren.PNG',
  background:'Background_PNGs/moonlight_gym.jpg' ,
  options: [
    {
      text: 'Continue',
      nextText: 178
    }
  ]
},
{
  id: 178,
  speaker: 1,
  text:"Holland, help me restrain him!" ,
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/moonlight_gym.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 179
    }
  ]
},
{
  id: 179,
  speaker: 0,
  text:"Together, Holland and I were able to pin him down until the authorities arrived. They were able to confirm additional evidence connecting Wren to the murder." ,
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/moonlight_gym.jpg',
  options: [
    {
      text: 'Continue',
      nextText: 180
    }
  ]
},
{
  id: 180,
  speaker: 0,
  text: "As it turns out, Wren had discovered that Amira had been partially responsible for his sister’s death back in high school, and committed the crime in retaliation.",
  image: 'Character_PNGs/wren.PNG',
  background: 'Background_PNGs/moonlight_gym.jpg',
  options: [
    {
      text: 'Congratulations!, would you like to replay the game?',
      nextText: -1
    }
  ]
},
]

startGame()