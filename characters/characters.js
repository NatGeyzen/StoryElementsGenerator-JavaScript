/* ----------------------------------------------------------------------------------------------------
    CONSTANTS / QUERY SELECTORS
   ---------------------------------------------------------------------------------------------------- */

const textContainer = document.getElementById('js--text-wrapper');
const charContainer = document.getElementById('characters-original-screen');

const genderFilter  = document.getElementById('gender-filter-wrapper');
const genreFilter   = document.getElementById('genre-filter-wrapper');
const genreOptions  = document.getElementById('genre-options');
const speciesFilter = document.getElementById('species-filter-wrapper');
const timeFilter    = document.getElementById('timeperiod-filter-wrapper');


const randomBtn     = document.getElementById('randomBtn');
const customizeBtn  = document.getElementById('customizeBtn')
const nextButton1   = document.getElementById('next-button1');
const nextButton2   = document.getElementById('next-button2');
const nextButton3A  = document.getElementById('next-button3A');
const nextButton3B  = document.getElementById('next-button3B');

const toggleButtons = document.getElementsByClassName('js--toggleButton');
/* ----------------------------------------------------------------------------------------------------
    NAMES OBJECT OF ARRAYS
   ---------------------------------------------------------------------------------------------------- */

const names = {
    male: {
        human: {
            list: ['Liam', 'Noah', 'William', 'James', 'Logan', 'Benjamin', 'Mason', 'Elija', 'Oliver', 'Jacob']
        }
    },
    female: {
        human: {
            list: ['Emma', 'Olivia', 'Ava', 'Isabella', 'Sophia', 'Mia', 'Charlotte', 'Amelia', 'Evelyn', 'Madison']
        }
    },
    unisex: {
        human: {
            list: ['Sam', 'Alex', 'Spencer', 'Phoenix', 'Avery', 'Dallas', 'Morgan', 'Quinn', 'Parker', 'Payton']
        }
    }
}


// return a number between 0 and the max amount of items in each name array
const returnRandomNum = (arrayLength) => {
    return Math.floor(Math.random() * arrayLength);
};

// store each array of names and their lengths in seperate variables for use in functions below
const maleHumanList = [...names.male.human.list];
const femaleHumanList = [...names.female.human.list];
const unisexHumanList = [...names.unisex.human.list];

const maleHumanLength = names.male.human.list.length;
const femaleHumanLength = names.female.human.list.length;
const unisexHumanLength = names.unisex.human.list.length;


/* ----------------------------------------------------------------------------------------------------
    RANDOM NAMES BUTTON
------------------------------------------------------------------------------------------------------- */

const returnRandomName = (namesList ,num) => {
    return namesList[num];
}
    // namesList refers to the variable in wich each list is stored
    // num will be returned from calling returnRandomNum() function

randomBtn.addEventListener('click', () => {
    const ul = document.createGenre('ul');
    ul.setAttribute('class','randomResults');
    charContainer.innerHTML = '';
    charContainer.appendChild(ul);

    for (i = 0; i < 9; i++) {
        const li = document.createGenre('li');
        ul.appendChild(li);
        if (i < 3) { li.innerHTML = `${returnRandomName(maleHumanList, returnRandomNum(maleHumanLength))}`; } 
        else if (i > 6) { li.innerHTML = `${returnRandomName(femaleHumanList, returnRandomNum(femaleHumanLength))}`; }
        else { li.innerHTML = `${returnRandomName(unisexHumanList, returnRandomNum(unisexHumanLength))}`; }
    }
});

/* ----------------------------------------------------------------------------------------------------
   GENERIC FUNCTIONS
------------------------------------------------------------------------------------------------------- */

const toggleButtonStyle = (eventTarget) => {
    if (eventTarget.classList.contains('non-selected')) {
        eventTarget.classList.remove('non-selected');
        eventTarget.classList.add('selected');
    } else {
        eventTarget.classList.remove('selected');
        eventTarget.classList.add('non-selected');
    }  
};

const showNextButton = (button) => {
    button.classList.remove('hidden');
    button.classList.add('visible'); 
}

const hideNextButton = (button) => {
    button.classList.remove('visible');
    button.classList.add('hidden');  
}

const goToNextScreen = (currentScreen, nextScreen) => {
    currentScreen.classList.remove('visible');
    currentScreen.classList.add('hidden');
    nextScreen.classList.remove('hidden');
    nextScreen.classList.add('visible');
}

/* ----------------------------------------------------------------------------------------------------
   FILTER 1: GENDER 
------------------------------------------------------------------------------------------------------- */

customizeBtn.addEventListener('click', () => goToNextScreen(charContainer, genderFilter));

const genderOptions = [male, female, unisex];
const selectedGenders = []; 

const genderCheck = (eventTarget) => {
    // if ANY of the gender options gets clicked
    if (eventTarget === male || eventTarget === female || eventTarget === unisex) {
        // if the option got selected (not deselected)
        if (eventTarget.classList.contains('selected')) { 
            // store the id of the button clicked inside the selectedGenders array
            selectedGenders.push(eventTarget.id);
            // show the button that goes to the next page
            showNextButton(nextButton1);
        // if the option got deselected and was stored inside the array,    
        } else if (selectedGenders.includes(eventTarget.id) && eventTarget.classList.contains('non-selected')) {
            // loop over the array
            for (let i = 0; i < selectedGenders.length; i++) {
                // if there is a match, 
                if (selectedGenders[i] === eventTarget.id) {
                    // remove it from the array
                    selectedGenders.splice(i, 1);
                }
            }
        }  
        // if NONE of the options are selected
        if (!(male.classList.contains('selected') || 
              female.classList.contains('selected') || 
              unisex.classList.contains('selected'))) {
            // hide the button allowing a user to continue to the next filter
            hideNextButton(nextButton1);

        }
    }
    return selectedGenders;  
};

/* ----------------------------------------------------------------------------------------------------
   FILTER 2: GENRE
------------------------------------------------------------------------------------------------------- */
nextButton1.addEventListener('click', () => goToNextScreen(genderFilter, genreFilter));

const selectedGenre = []; 

const genreCheck = (eventTarget) => {

    if (eventTarget.id === 'contemporary' || eventTarget.id === 'fantasy' || eventTarget.id === 'historical' || eventTarget.id === 'sciencefiction' ) {

        switch(selectedGenre.length) {
            case 0:
                selectedGenre.push(eventTarget.id);
                showNextButton(nextButton2);
                break;
            case 1:
                if (eventTarget.classList.contains ('non-selected')) {
                    selectedGenre.pop();
                    hideNextButton(nextButton2);
                } else {
                    alert('Sorry, only one option can be selected');
                    eventTarget.classList.remove('selected');
                    eventTarget.classList.add('non-selected'); 
                }
                break;
        }
    }
    return selectedGenre;
};

const goToNextFilter = (e) => {
    let nextScreen;
    const selectedValues = toggleHandler(e);
    if (selectedValues[1].includes ('fantasy')) {
        nextScreen = speciesFilter;
    }
    else if (selectedValues[1].includes('historical')) {
        nextScreen = timeFilter;
    } 
    return nextScreen;
}

const nextScreen = (e) => goToNextFilter(e);

nextButton2.addEventListener('click', (e) => goToNextScreen(genreFilter, nextScreen(e)));



/* ----------------------------------------------------------------------------------------------------
   FILTER 3B: HISTORICAL
------------------------------------------------------------------------------------------------------- */

const selectedTimePeriod = [];

const timeCheck = (eventTarget) => {
    
    if (eventTarget.id === 'ancient-greece' || eventTarget.id === 'ancient-rome'    || eventTarget.id === 'ancient-egypt'  || 
        eventTarget.id === 'viking-era'     || eventTarget.id === 'elizabethan-era' || eventTarget.id === 'victorian-era') {
            if (eventTarget.classList.contains('selected')) {
                selectedTimePeriod.push(eventTarget.id);
                showNextButton(nextButton3);
            } else if (selectedTimePeriod.includes(eventTarget.id) && eventTarget.classList.contains('non-selected')) {
                for (let i = 0; i < selectedTimePeriod.length; i++) {
                    if (selectedTimePeriod[i] === eventTarget.id) {
                        selectedTimePeriod.splice(i, 1);
                    }
                }
            }
    }
    return selectedTimePeriod;
}

nextButton3B.addEventListener('click', (e) => {
    const selectedValues = toggleHandler(e);
    console.log(selectedValues[2]);
});




const toggleHandler = (e) => {

    toggleButtonStyle(e.target);
    
    const selectedGenders = genderCheck(e.target);
    const selectedGenre = genreCheck(e.target);
    const selectedTimePeriod = timeCheck(e.target);
    console.log(selectedTimePeriod);
    return [selectedGenders, selectedGenre, selectedTimePeriod];
};

for (let i = 0; i < toggleButtons.length; i++) {
    toggleButtons[i].addEventListener('click', (e) => toggleHandler(e));
}