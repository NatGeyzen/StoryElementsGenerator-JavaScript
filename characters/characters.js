/* ----------------------------------------------------------------------------------------------------
    CONSTANTS / QUERY SELECTORS
   ---------------------------------------------------------------------------------------------------- */

const textContainer = document.getElementById('js--text-wrapper');
const customizeBtn = document.getElementById('js--customizeBtn');
const randomBtn = document.getElementById('js--randomBtn');
const charContainer = document.getElementById('js--characters-original-screen');
const genderFilter = document.getElementById('js--gender-filter-wrapper');

const nextButton1 = document.getElementById('next-button1');
const genreFilter = document.getElementById('js--genre-filter-wrapper');
const genreOptions = document.getElementById('genre-options');
const nextButton2 = document.getElementById('next-button2');


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
   BUTTON HANDLERS
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

/* ----------------------------------------------------------------------------------------------------
   GENDER FILTER VARIABLES/FUNCTIONS
------------------------------------------------------------------------------------------------------- */

const male = document.getElementById('male');
const female = document.getElementById('female');
const unisex = document.getElementById('unisex');
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
   GENRE FILTER VARIABLES/FUNCTIONS
------------------------------------------------------------------------------------------------------- */

const contemporary = document.getElementById('contemporary')
const fantasy = document.getElementById('fantasy');
const historical = document.getElementById('historical');
const scifi = document.getElementById('sciencefiction');

const genreCheck = (eventTarget) => {
    let selectedGenre;
    if (eventTarget === contemporary || eventTarget === fantasy || eventTarget === historical || eventTarget === scifi ) {
        if (!selectedGenre) {
           if (eventTarget.classList.contains('selected')) { 
                selectedGenre = eventTarget.id;
                showNextButton(nextButton2);
           }
        } else if (selectedGenre === eventTarget.id) {
            hideNextButton(nextButton2);
            selectedGenre = null;
        } else if (selectedGenre !== eventTarget.id) {
            alert('Sorry, only one option can be selected');
            eventTarget.classList.remove('selected');
            eventTarget.classList.add('non-selected');
        }
        
    }
    return selectedGenre;
}

const toggleHandler = (e) => {

    toggleButtonStyle(e.target);
    
    const selectedGenders = genderCheck(e.target);
    const selectedGenre = genreCheck(e.target);
    return [selectedGenders, selectedGenre];
};
/* ----------------------------------------------------------------------------------------------------
   FILTER 1: GENDER
------------------------------------------------------------------------------------------------------- */

customizeBtn.addEventListener('click', () => {
    charContainer.classList.remove('visible');
    charContainer.classList.add('hidden');

    genderFilter.classList.remove('hidden');
    genderFilter.classList.add('visible');
});



male.addEventListener('click', (e) => toggleHandler(e));
female.addEventListener('click', (e) => toggleHandler(e));
unisex.addEventListener('click', (e) => toggleHandler(e));

/* ----------------------------------------------------------------------------------------------------
   FILTER 2: GENRE
------------------------------------------------------------------------------------------------------- */

nextButton1.addEventListener('click', () => {
    genderFilter.classList.remove('visible');
    genderFilter.classList.add('hidden');
    genreFilter.classList.remove('hidden');
    genreFilter.classList.add('visible');
});

contemporary.addEventListener('click', (e) => console.log(toggleHandler(e)));
fantasy.addEventListener('click', (e) => toggleHandler(e));;
historical.addEventListener('click', (e) => toggleHandler(e));;
scifi.addEventListener('click', (e) => toggleHandler(e));
