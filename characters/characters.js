/* ----------------------------------------------------------------------------------------------------
    CONSTANTS / QUERY SELECTORS
   ---------------------------------------------------------------------------------------------------- */

const textContainer = document.getElementById('js--text-wrapper');
const charContainer = document.getElementById('characters-original-screen');

const genderFilter  = document.getElementById('gender-filter-wrapper');
const genreFilter   = document.getElementById('genre-filter-wrapper');
const genreOptions  = document.getElementById('genre-options');
const modernFilter  = document.getElementById('modern-filter-wrapper');
const fantasyFilter = document.getElementById('fantasy-filter-wrapper');
const timeFilter    = document.getElementById('timeperiod-filter-wrapper');
const scifiFilter   = document.getElementById('scifi-filter-wrapper');

const randomBtn     = document.getElementById('randomBtn');
const customizeBtn  = document.getElementById('customizeBtn');
const nextButton1   = document.getElementById('next-button1');

const nextButtons   = document.getElementsByClassName('js--nextButton');
const toggleButtons = document.getElementsByClassName('js--toggleButton');

/* ----------------------------------------------------------------------------------------------------
    NAMES OBJECT OF ARRAYS
   ---------------------------------------------------------------------------------------------------- */




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
   TOGGLE STYLING FUNCTIONS
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
   TOGGLE STYLING FUNCTIONS
------------------------------------------------------------------------------------------------------- */

const selectedGenre = []; 
const selectedNameType = [];
const selectedSpeciesFantasy = [];
const selectedTimePeriod = [];
const selectedSpeciesScifi = [];

const oneOptionOnlyHandler = (selection, button, eventTarget) => {
    if (selection.length === 0) {
            selection.push(eventTarget.id);
            showNextButton(button);
        } 
        else if (selection.length === 1) {
            if (selection.includes(eventTarget.id) && eventTarget.classList.contains('non-selected')) {
                selection.pop();
                hideNextButton(button);
            }
            else if (!selection.includes(eventTarget.id) && eventTarget.classList.contains('selected')) {
                alert('Sorry, only one option can be selected');
                eventTarget.classList.remove('selected');
                eventTarget.classList.add('non-selected'); 
            }
        }
    return selection;
}

const filterHandler = (eventTarget) => {

    if (eventTarget.id === 'contemporary' || eventTarget.id === 'fantasy' || eventTarget.id === 'historical' || eventTarget.id === 'sciencefiction') {
        oneOptionOnlyHandler(selectedGenre, document.getElementById('next-button2'), eventTarget);
    } 
    else if (eventTarget.id === 'common' || eventTarget.id === 'unique' || eventTarget.id === 'surprise' ) {
        oneOptionOnlyHandler(selectedNameType, document.getElementById('next-button3A'), eventTarget);
    }
    else if (eventTarget.id === 'human' || eventTarget.id === 'elf' || eventTarget.id === 'angel' || eventTarget.id === 'demon' || eventTarget.id === 'mythological' || eventTarget.id === 'shifter' ) {
        oneOptionOnlyHandler(selectedSpeciesFantasy, document.getElementById('next-button3B'), eventTarget);
    }  
    else if (eventTarget.id === 'ancient-greece' || eventTarget.id === 'ancient-rome' || eventTarget.id === 'ancient-egypt' || eventTarget.id === 'viking-era' || eventTarget.id === 'elizabethan-era' || eventTarget.id === 'victorian-era' ) {
        oneOptionOnlyHandler(selectedTimePeriod, document.getElementById('next-button3C'), eventTarget);
    }  
    else if (eventTarget.id === 'human-scifi' || eventTarget.id === 'humanoid' || eventTarget.id === 'non-humanoid' ) {
        oneOptionOnlyHandler(selectedSpeciesScifi, document.getElementById('next-button3D'), eventTarget);
    }

    return [selectedGenre, selectedNameType, selectedSpeciesFantasy, selectedTimePeriod, selectedSpeciesScifi];
}


/* ----------------------------------------------------------------------------------------------------
   FILTER 1: GENDER 
------------------------------------------------------------------------------------------------------- */

customizeBtn.addEventListener('click', () => goToNextScreen(charContainer, genderFilter));

const genderOptions = [male, female, unisex];
const selectedGenders = []; 

const genderCheck = (eventTarget) => {
    if (eventTarget === male || eventTarget === female || eventTarget === unisex) {
        if (eventTarget.classList.contains('selected')) { 
            selectedGenders.push(eventTarget.id);
            showNextButton(nextButton1); 
        } else if (selectedGenders.includes(eventTarget.id) && eventTarget.classList.contains('non-selected')) {
            for (let i = 0; i < selectedGenders.length; i++) {
                if (selectedGenders[i] === eventTarget.id) {
                    selectedGenders.splice(i, 1);
                }
            }
        }  
        if (!(male.classList.contains('selected') || 
              female.classList.contains('selected') || 
              unisex.classList.contains('selected'))) {
            hideNextButton(nextButton1);

        }
    }
    return selectedGenders;  
};

/* ----------------------------------------------------------------------------------------------------
   OTHER
------------------------------------------------------------------------------------------------------- */

let activeScreen = 1;
let currentScreen;
let nextScreen;

for (let i = 0; i < nextButtons.length; i++) {
    nextButtons[i].addEventListener('click', (e) => {
        const selectedValues = toggleHandler(e);
        switch (activeScreen) {
            case 1: 
                currentScreen = genderFilter;
                nextScreen = genreFilter;
                break;
            case 2: 
                currentScreen = genreFilter;
                if (selectedValues[1].includes('contemporary')) { nextScreen = modernFilter; } 
                else if (selectedValues[1].includes ('fantasy')) {nextScreen = fantasyFilter; }
                else if (selectedValues[1].includes('historical')) {nextScreen = timeFilter; } 
                else if (selectedValues[1].includes('sciencefiction')) {nextScreen = scifiFilter; }
                break;
        }
        goToNextScreen(currentScreen, nextScreen);
        activeScreen += 1;
    });
};

const toggleHandler = (e) => {

    toggleButtonStyle(e.target);

    const genders =  genderCheck(e.target);
    const oneOptionFilters = filterHandler(e.target);
    const genre = oneOptionFilters[0];
    const contemporary = oneOptionFilters[1];
    const fantasy = oneOptionFilters[2];
    const historical = oneOptionFilters[3];
    const scifi = oneOptionFilters[4];

    let lastFilter;

    if (contemporary.length === 1) {
        lastFilter = contemporary;
    } else if (fantasy.length === 1) {
        lastFilter = fantasy;
    } else if (historical.length === 1) {
        lastFilter = historical;
    } else if (scifi.length === 1) {
        lastFilter = scifi;
    }

    return [genders, genre, lastFilter];
};

for (let j = 0; j < toggleButtons.length; j++) {
    toggleButtons[j].addEventListener('click', (e) => toggleHandler(e));
};