/* ----------------------------------------------------------------------------------------------------
    VARIABLES
   ---------------------------------------------------------------------------------------------------- */

const textContainer = document.getElementById('js--text-wrapper');
const customizeBtn = document.getElementById('js--customizeBtn');
const randomBtn = document.getElementById('js--randomBtn');
const charContainer = document.getElementById('characters-container');


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

let genderFilter = `
    <div class="filter-wrapper">
        <div class="filter-text">
            <p class="character-text filter">Gender</p>
            <p class="character-text smaller">(Multiple options can be selected)</p>
        </div>
        <div class="genders-button-wrapper">
            <button>Male</button>
            <button>Female</button>
            <button>Unisex</button>
        </div> 
        <div class="btn-next-wrapper" id="js--btn-container">
            <button class="btn-nxt" id="btn-gender"><ion-icon name="arrow-forward" class="icon-next"></ion-icon></button>
        </div>
    </div>
    
`
// First question of customization process
customizeBtn.addEventListener('click', () => {
    charContainer.innerHTML = genderFilter;
});


// // Add event listener to dynamically inserted button to continue from 'gender' page
// document.addEventListener('click',function(e){

//     // Use event delegation on specific target to trigger the event listener
//     if(e.target && e.target.id== 'btn-gender'){

//         // Storing variables inside of function so DOM selection only happens AFTER elements have dynamically been inserted into the page
//         const checkboxMale = document.getElementById('genderM');
//         const checkboxFemale = document.getElementById('genderF');
//         const checkboxUnisex = document.getElementById('genderU');

//         let maleChecked;
//         let femaleChecked;
//         let unisexChecked;

//         if (checkboxMale.checked == true) {
//             maleChecked = true;
//             console.log(maleChecked);
//         }
//         if (checkboxFemale.checked == true) {
//             femaleChecked = true;
//             console.log(femaleChecked);
//         }
//         if (checkboxUnisex.checked == true) {
//             unisexChecked = true;
//             console.log(unisexChecked);
//         }

//         // If one or more options are selected, clear screen (go to next screen)
//         if (checkboxMale.checked == true || checkboxFemale.checked == true || checkboxUnisex.checked == true) {
//             charContainer.innerHTML = '';
//         }

//         // If none of the options are selected, give a validation warning
//         else if (checkboxMale.checked == false && checkboxFemale.checked == false && checkboxUnisex.checked == false) {
//             alert('Please select one or more options to continue.');
//             // const validationDiv = document.createElement('div'); 
//             // validationDiv.classList.add('genderValidation');
//             // var validationText = document.createTextNode('');
//             // validationDiv.appendChild(validationText);
//             // var buttonDiv = document.getElementById('js--btn-container');
//             // document.body.insertAdjacentElement('afterEnd', validationDiv);
//         }
//      }
//  });



