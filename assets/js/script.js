//NAVBAR SECTION

window.addEventListener("scroll", () => {
  document
    .querySelector(".primary-header")
    .classList.toggle("window-scroll", window.scrollY > 1);
  document
    .querySelector(".primary-header")
    .classList.toggle("gradient__bg", window.scrollY > 1);

  // window.scrollY > 1 defines the scroll of Y axis in pixels after which is event listner will fire
});

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");
  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

// //HOME SECTION - AUTO-TYPING
// try {
//   const texts = ["Web-Developer   ", "Web-Designer   "]; //array of auto-typing text
//   let count = 0;
//   let index = 0;
//   let currentText = "";
//   let letter = "";

//   (function typing() {
//     //connecting the end index to initial index of array
//     if (count === texts.length) {
//       count = 0;
//     }

//     currentText = texts[count]; //assigning the selected word to the current-text
//     letter = currentText.slice(0, ++index); //assigning every character from the word currently selected
//     document.querySelector(".auto-typing").textContent = letter; //displaying the character assigned to letter on screen

//     //switching the letter when all the characters of a letter are displayed on screen
//     if (letter.length === currentText.length) {
//       count++; //selecting the next word from array
//       index = 0; //reseting the index count to 0
//     }

//     //calling typing-function at every 300 milli-seconds
//     setTimeout(typing, 200);
//   })();
// } catch (e) {
//   console.log(`Error caught in HOME SECTION - Auto-typing: ${e}`);
// }

// RECENT WORK SECTION /TABS
try {
  const tabList = document.querySelector('[role="tablist"]'); //Selecting div containing the tabs
  const tabs = tabList.querySelectorAll('[role="tab"]'); //Selecting all the tabs in form of array

  //click event on our every tab
  tabs.forEach((tab) => {
    tab.addEventListener("click", changeTabPanel);
  });

  //fuction to change the tabs through click
  function changeTabPanel(e) {
    const targetTab = e.target; //selecting the clicked tab
    const targetPanel = targetTab.getAttribute("aria-controls"); //getting value of "aria-control" of the clicked tab

    const tabContainer = targetTab.parentNode; //Selecting the parent container of the clicked tab
    const mainContainer = tabContainer.parentNode; //Selecting the top most container which consist of all different sections

    //Switching the underline from one tab to selected one
    tabContainer
      .querySelector('[aria-selected="true"]')
      .setAttribute("aria-selected", false);
    targetTab.setAttribute("aria-selected", true);

    var hiddenContainer = mainContainer.querySelectorAll("[role='tabpanel']"); //Selecting the containers which are linked to tab
    hiddenContainer.forEach((panel) => panel.setAttribute("hidden", true)); //Hidden all the linked containers

    var switchingContainers = mainContainer.querySelectorAll([
      `.${targetPanel}`,
    ]); //Selecting all the container which needs to be displayed on screen
    switchingContainers.forEach((container) =>
      container.removeAttribute("hidden")
    ); // Removing hidden attribute to display required components

    //switching the underline indicator for selected tab
    tabs.forEach((tab) => {
      if (tab === targetTab) {
        //adding underline on selected tab
        tab.classList.add("active");
      } else {
        //removing underline from not-selected tabs
        tab.classList.remove("active");
      }
    });
  }
} catch (e) {
  console.log(`Error caught in HOME SECTION - Tabs: ${e}`);
}

//FORM-VALIDATION
try {
  const form = document.getElementById("form");
  const firstName = document.getElementById("first-name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  const controls = document.querySelectorAll(".form-control");
  const loadingSpinner = document.getElementById('spinner'); //LOADING SPINNER
  const main = document.querySelector('main');
  const body = document.querySelector('body');

  //Show input error messages
  function showError(input, message) {
    const formControl = input.parentElement.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
  }

  //show success colour
  function showSucces(input) {
    const formControl = input.parentElement.parentElement;
    formControl.className = "form-control success";
  }

  //remover added classes to allow resubmission after error
  function removeClass() {
    controls.forEach((control) => {
      if (control.classList.contains("error")) {
        control.classList.remove("error");
      } else if (control.classList.contains("success")) {
        control.classList.remove("success");
      } else {
        return;
      }
    });
  }

  //check email is valid
  function checkEmail(input) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSucces(input);     
      return true;
    } else {
      showError(input, "Email is invalid");
      return false;
    }
  }

  //check input Length
  function checkLength(input, min, max) {
    if (input.value.trim().length < min) {
      showError(
        input,
        `${getFieldName(input)} must be at least ${min} characters`
      );
      return false;
    } else if (input.value.trim().length > max) {
      showError(
        input,
        `${getFieldName(input)} must be less than ${max} characters`
      );
      return false;
    } else {
      showSucces(input);
      return true;
    }
  }

  //get FieldName
  function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }

  //sending email
  function sendEmail () {    
    const serivce_id = "service_ep5wsq2";
    const template_id = "template_9qk7m26";
    let formData = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      message: message.value,
    };
    loadingSpinner.style.display = "flex";
    main.style.opacity = '0.2';
    body.style.overflowY = 'hidden';

    emailjs
      .send(serivce_id, template_id, formData)
      .then((res) => {
        main.style.opacity = '1';
        body.style.overflowY = 'scroll';
        loadingSpinner.style.display = "none";
        alert("Your Response Has Been Recorded Successfully !!");
        firstName.value = "";
        lastName.value = "";
        email.value = "";
        message.value = "";
      })
    .catch((e) => console.log(`Error caught in submitting form: ${e}`));
  }

  //Event Listeners
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    removeClass();

    let A = checkLength(firstName, 3, 15);
    let B = checkLength(lastName, 3, 20);
    let C = checkLength(message, 5, 500);
    let D = checkEmail(email);

    if ( 
      A == true && 
      B == true && 
      C == true && 
      D == true 
    ){      
      sendEmail();
    }
    else { 
      return;
    }
  });
} catch (e) {
  console.log(`Error caught in form section: ${e}`);
}

//INTERSECTION OBSERVER
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -150px 0px",
};
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});
