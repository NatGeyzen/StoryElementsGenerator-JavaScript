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
   FILTER 1: GENDER
------------------------------------------------------------------------------------------------------- */

customizeBtn.addEventListener('click', () => {
    charContainer.classList.remove('visible');
    charContainer.classList.add('hidden');
    genderFilter.classList.remove('hidden');
    genderFilter.classList.add('visible');
});

const toggleHandler = (e) => {

    if (e.target.classList.contains('non-selected')) {
        e.target.classList.remove('non-selected');
        e.target.classList.add('selected');
    } else {
        e.target.classList.remove('selected');
        e.target.classList.add('non-selected');
    }  
    
    if (male.classList.contains('selected') || female.classList.contains('selected') || unisex.classList.contains('selected')) {
        nextButton1.classList.remove('hidden');
        nextButton1.classList.add('visible');
    } else {
        nextButton1.classList.remove('visible');
        nextButton1.classList.add('hidden');
    }
};

male.addEventListener('click', (e) => toggleHandler(e));
female.addEventListener('click', (e) => toggleHandler(e));
unisex.addEventListener('click', (e) => toggleHandler(e));


nextButton1.addEventListener('click', () => {
    genderFilter.classList.remove('visible');
    genderFilter.classList.add('hidden');
})