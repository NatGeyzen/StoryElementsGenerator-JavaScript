/* ----------------------------------------------------------------------------------------------------
    CONSTANTS / QUERY SELECTORS
   ---------------------------------------------------------------------------------------------------- */

const textContainer = document.getElementById('js--text-wrapper');
const customizeBtn = document.getElementById('js--customizeBtn');
const randomBtn = document.getElementById('js--randomBtn');
const charContainer = document.getElementById('js--characters-original-screen');
const genderFilter = document.getElementById('js--gender-filter-wrapper');
const male = document.getElementById('js--male');
const female = document.getElementById('js--female');
const unisex = document.getElementById('js--unisex');
const nextButton1 = document.getElementById('next-button1');
const genreFilter = document.getElementById('js--genre-filter-wrapper');
const genreOptions = document.getElementById('genre-options');
const nextButton2 = document.getElementById('next-button2');
const contemporary = document.getElementById('js--contemporary')
const fantasy = document.getElementById('js--fantasy');
const historical = document.getElementById('js--historical');
const scifi = document.getElementById('js--sciencefiction');
const genreWarningArray = [];

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
    const ul = document.createElement('ul');
    ul.setAttribute('class','randomResults');
    charContainer.innerHTML = '';
    charContainer.appendChild(ul);

    for (i = 0; i < 9; i++) {
        const li = document.createElement('li');
        ul.appendChild(li);
        if (i < 3) { li.innerHTML = `${returnRandomName(maleHumanList, returnRandomNum(maleHumanLength))}`; } 
        else if (i > 6) { li.innerHTML = `${returnRandomName(femaleHumanList, returnRandomNum(femaleHumanLength))}`; }
        else { li.innerHTML = `${returnRandomName(unisexHumanList, returnRandomNum(unisexHumanLength))}`; }
    }
});

/* ----------------------------------------------------------------------------------------------------
   BUTTON HANDLERS
------------------------------------------------------------------------------------------------------- */

const showNextButton = (button) => {
    button.classList.remove('hidden');
    button.classList.add('visible'); 
}

const hideNextButton = (button) => {
    button.classList.remove('visible');
    button.classList.add('hidden');  
}

const genderCheck = () => {
    if (male.classList.contains('selected') || female.classList.contains('selected') || unisex.classList.contains('selected')) {
        showNextButton(nextButton1);
    } else {
        hideNextButton(nextButton1);
    };
};

const genreWarning = (eventTarget) => {
    if (eventTarget.id === 'js--contemporary' || eventTarget.id === 'js--fantasy' || eventTarget.id === 'js--historical' || eventTarget.id === 'js--sciencefiction' ) {
        genreWarningArray.push(eventTarget.id); 
    }
    if (genreWarningArray.length > 1) {
        alert('Sorry, only one option can be selected');
        eventTarget.classList.remove('selected');
        eventTarget.classList.add('non-selected');
    }
}

const toggleHandler = (e) => {

    if (e.target.classList.contains('non-selected')) {
        e.target.classList.remove('non-selected');
        e.target.classList.add('selected');
    } else {
        e.target.classList.remove('selected');
        e.target.classList.add('non-selected');
    }  
    
    genderCheck();

    genreWarning(e.target);

    if (contemporary.classList.contains('selected') || fantasy.classList.contains('selected') || historical.classList.contains('selected') || scifi.classList.contains('selected')) {
        nextButton2.classList.remove('hidden');
        nextButton2.classList.add('visible');
    } else {
        nextButton2.classList.remove('visible');
        nextButton2.classList.add('hidden');
    }
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

contemporary.addEventListener('click', (e) => toggleHandler(e));
fantasy.addEventListener('click', (e) => toggleHandler(e));;
historical.addEventListener('click', (e) => toggleHandler(e));;
scifi.addEventListener('click', (e) => toggleHandler(e));
