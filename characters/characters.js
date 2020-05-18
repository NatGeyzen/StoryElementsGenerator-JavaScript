/* ----------------------------------------------------------------------------------------------------
    CONSTANTS / QUERY SELECTORS
   ---------------------------------------------------------------------------------------------------- */

const textContainer = document.getElementById('js--text-wrapper');
const charContainer = document.getElementById('characters-original-screen');

const genderFilter  = document.getElementById('gender-filter-wrapper');
const genreFilter   = document.getElementById('genre-filter-wrapper');
const genreOptions  = document.getElementById('genre-options');


const randomBtn     = document.getElementById('randomBtn');
const customizeBtn  = document.getElementById('customizeBtn')
const nextButton1   = document.getElementById('next-button1');
const nextButton2   = document.getElementById('next-button2');


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
   CLICK HANDLERS
------------------------------------------------------------------------------------------------------- */

customizeBtn.addEventListener('click', () => goToNextScreen(charContainer, genderFilter));

nextButton1.addEventListener('click', () => goToNextScreen(genderFilter, genreFilter));

/* ----------------------------------------------------------------------------------------------------
   GENDER FILTER VARIABLES/FUNCTIONS
------------------------------------------------------------------------------------------------------- */

const genderOptions = [male, female, unisex];
const selectedGenders = []; 

const genderCheck = (eventTarget) => {
    if (eventTarget.id === 'male' || eventTarget.id === 'female' || eventTarget.id === 'unisex') {
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
   GENRE FILTER VARIABLES/FUNCTIONS
------------------------------------------------------------------------------------------------------- */

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



const toggleHandler = (e) => {

    toggleButtonStyle(e.target);
    
    const selectedGenders = genderCheck(e.target);
    const selectedGenre = genreCheck(e.target);
    return [selectedGenders, selectedGenre];
};
/* ----------------------------------------------------------------------------------------------------
   FILTER 1: GENDER
------------------------------------------------------------------------------------------------------- */





document.getElementById('male').addEventListener('click', (e) => toggleHandler(e));
document.getElementById('female').addEventListener('click', (e) => toggleHandler(e));
document.getElementById('unisex').addEventListener('click', (e) => toggleHandler(e));



/* ----------------------------------------------------------------------------------------------------
   FILTER 2: GENRE
------------------------------------------------------------------------------------------------------- */

document.getElementById('contemporary').addEventListener('click', (e) => toggleHandler(e));
document.getElementById('fantasy').addEventListener('click', (e) => toggleHandler(e));;
document.getElementById('historical').addEventListener('click', (e) => toggleHandler(e));;
document.getElementById('sciencefiction').addEventListener('click', (e) => toggleHandler(e));

nextButton2.addEventListener('click', (e) => {
    genreFilter.classList.remove('visible');
    genreFilter.classList.add('hidden');
});

