var story = {
  project: {
    text: `Interactive Story is a project where my partner and I created a story where the player is able to choose options as the story progresses. Different choices will affect the outcome of the story. We had to follow the 12 steps of a hero's journey along with multiple endings.`,
    options: [[`Go back`, `back`]]
  }, 
  process: {
    text: `This project was definitely my favorite just because I can write a story.  My partner and I decided on a medieval fantasy story about killing a dragon. We thought of it as a good old school adventure. We used Lucidchart to create a storyflow. It is also a good visual of when the story branches out so we know what is going to happen in the story. Then we wrote the full story and code it using mostly Javascript.`, 
    options: [[`Go back`, `back`]]
  }, 
  challenges: {
    text: `The most difficult part of this project was Javascript. A problem we had is image transition. As the player plays through the story, the background image changes it make it feel more immersive. However, as the image changes, it flickers white which is very annoying. We solved this problem by preloading images. However, another problem occurred. The website takes very long to load. So to fix this, we had to reduce the file size of every image by using photoshop. Reducing the quality and size. We aimed for around 300 KB which made the website load a lot faster.`,
    options: [[`Go Back`, `back`]]
  }, 
  back: {
      text: `As you enter the Interactive Story page, you are greeted with three options, learn about the project, the process, and the challenges. Learn about the...`, 
      options: [[`The Project`, `project`], [`The Process`, `process`], [`The Challenges`, `challenges`]]
  }
  
}


var choices = document.getElementById("buttons");
var items = document.getElementById("items");

mybutton = document.getElementById("buttons");

function scrollUp() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function removeItems() {
    items.innerHTML = "";
}
var progress = [``]
function start(x) {
    window.setTimeout(removeItems, 500);
    progress = [x]
    faded();
}

function faded() {
    fadeOut();
}

function fadeOut() {
    document.getElementById('items').style.opacity = '0';
    document.getElementById('buttons').style.opacity = '0';
    window.setTimeout(fadeIn, 500);
}
function fadeIn() {
    document.getElementById('items').style.opacity = '1';
    document.getElementById('buttons').style.opacity = '1';
    changeStory();
}

function addText(text) {
    document.getElementById("items").innerHTML = "<p>" + text + "</p>";
}



function button(text, buttonText) {
    var button = document.createElement("button");
    button.innerHTML = text;
    choices.appendChild(button);
    button.addEventListener("click", function() {
        faded();
        progress.push(buttonText);
    });
}

function changeStory() {
    for (let i of progress) {
        addText(story[i].text);
        choices.innerHTML = "";
        if (progress.includes('back')) {
            progress = ["project"]
        }
        for (let amountOfOptions = 0; amountOfOptions < story[i].options.length; amountOfOptions++) {
            button(story[i].options[amountOfOptions][0], story[i].options[amountOfOptions][1]);
        }
    }

}