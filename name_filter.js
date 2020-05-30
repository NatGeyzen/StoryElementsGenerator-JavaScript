/* ------------------------------------------------------------------------------------------------------
    VARIABLES
------------------------------------------------------------------------------------------------------ */

// ----- filter containers ------
const name_filter_1 = document.getElementById('name-filter-1');
const name_filter_2 = document.getElementById('name-filter-2');
const name_filter_3 = document.getElementById('name-filter-3');
const name_filter_4 = document.getElementById('name-filter-4');

// ----- filter buttons ------
const time_button = document.getElementById('time-value');
const setting_button = document.getElementById('setting-value');
const gender_button = document.getElementById('gender-value');
const species_button = document.getElementById('species-value');

// ----- array of filter buttons ------
const buttons = [time_button, setting_button, gender_button, species_button];

// ----- options per category arrays  ------
const time_options = Array.from(document.getElementsByClassName('js--time'));
const gender_options = Array.from(document.getElementsByClassName('js--gender'));
const history_setting_options = Array.from(document.getElementsByClassName('js--history-setting'));
const present_setting_options = Array.from(document.getElementsByClassName('js--present-setting'));
const future_setting_options = Array.from(document.getElementsByClassName('js--future-setting'));
const fantasy_species_options = Array.from(document.getElementsByClassName('js--fantasy-species'));
const space_species_options = Array.from(document.getElementsByClassName('js--space-species'));
const techworld_species_options = Array.from(document.getElementsByClassName('js--tech-species'));
const postapoc_species_options = Array.from(document.getElementsByClassName('js--postapoc-species'));

// ----- options containers (ul) ------
const history_setting_selections = document.getElementById('history-setting-selections');
const present_setting_selections = document.getElementById('present-setting-selections');
const future_setting_selections = document.getElementById('future-setting-selections');
const gender_selections = document.getElementById('gender-selections');
const fantasy_species_selections = document.getElementById('fantasy-species-selections');
const space_species_selections = document.getElementById('space-species-selections');
const techworld_species_selections = document.getElementById('techworld-species-selections');
const postapoc_species_selections = document.getElementById('postapoc-species-selections');

// ----- array containing any filters when complete ------
const complete_array = Array.from(document.getElementsByClassName('complete'));

// ----- arrays for each filter selection value ------
const time_selection = [];
const setting_selection = [];
const gender_selection = [];
const species_selection = [];



/* ------------------------------------------------------------------------------------------------------
    FUNCTIONS
------------------------------------------------------------------------------------------------------ */

// ----- remove/add class from/to element ------
const toggleClass = (element, oldClass, newClass) => {
    element.classList.remove(oldClass);
    element.classList.add(newClass);
};

// ----- open a list of filter options ------
const openList = (filter, button, option) => {
    toggleClass(filter, 'list-closed', 'list-open');
    if (button.classList.contains('placeholder')) {
        toggleClass(button, 'placeholder', 'selection');
    } else if (button.classList.contains('complete')) {
        toggleClass(button, 'complete', 'selection');  
    }
    // fadeOutAndDisableNextFilter(option);   
};

// ----- close a list of filter options ------
const closeList = (filter, button) => {
    toggleClass(filter, 'list-open', 'list-closed');
    toggleClass(button, 'selection', 'complete');
    
    if (filter === name_filter_1) {
        scaleInNextFilter(name_filter_2);
    } else if (filter === name_filter_2) {
        scaleInNextFilter(name_filter_3);
    } else if (filter === name_filter_3) {
        scaleInNextFilter(name_filter_4);
    }
};

// ----- store selected value and display inside button  ------
const buttonHandler = (selection, eventTarget, button) => {
    if (selection.length === 0) {
        selection.push(eventTarget.textContent);    
        button.textContent = selection[0];
    } else if (selection.length !== 0 && eventTarget.textContent !== selection[0]) {
        selection.pop();
        selection.push(eventTarget.textContent);
        button.textContent = selection[0];
    };
};

// ----- guarantee that filters with multiple possible lists only display the correct list ------
const showOnlyOneSettingList = (selection, other1, other2) => {
    toggleClass(selection, 'hidden', 'visible');
    toggleClass(other1, 'visible', 'hidden');
    toggleClass(other2, 'visible', 'hidden');
};

// ----- set species to human automatically and mark as complete/disabled/highlighted  ------
const autoSetSpeciesToHuman = () => {
    species_selection.push('human');
    species_button.textContent = 'human';
    species_button.setAttribute('disabled', true);
    toggleClass(species_button, 'no-highlight', 'scale-bounce-in');
    toggleClass(species_button, 'placeholder', 'complete');
};

// ----- time filter logic ------
const timeHandler = () => {
    if (time_selection.includes('the past')) {
        showOnlyOneSettingList(history_setting_selections, present_setting_selections, future_setting_selections); 
        gender_options[2].style.display = 'none';
        autoSetSpeciesToHuman();   
    } 
    else if (time_selection.includes('the present(-ish)')) {
        showOnlyOneSettingList(present_setting_selections, history_setting_selections, future_setting_selections);
    }
    else if (time_selection.includes('the future')) {
        showOnlyOneSettingList(future_setting_selections, present_setting_selections, history_setting_selections );
    } 
};

// ----- setting filter logic ------
const settingHandler = () => {
    switch (setting_selection[0]) {
        case 'on Earth as we know it':      autoSetSpeciesToHuman();                                        break;  
        case 'in a fantasy Earth/realm':    toggleClass(fantasy_species_selections, 'hidden', 'visible');   break;      
        case 'in space somewhere':          toggleClass(space_species_selections, 'hidden', 'visible');     break;   
        case 'on a post-apocalyptic Earth': toggleClass(postapoc_species_selections, 'hidden', 'visible');  break;   
        case 'on a highly advanced Earth':  toggleClass(techworld_species_selections, 'hidden', 'visible'); break; 
    }
};

// // ----- when a filter list is opened, hide the next filter (making it 'inactive') ------
// const fadeOutAndDisableNextFilter = (option) => {
//     const nextFilter = Array.from(document.getElementsByClassName('no-highlight')).slice(0, 3);  
//     nextFilter.forEach(element => {
//         toggleClass(element, 'no-highlight', 'faded-out');
//         if (element.classList.contains(option)) {
//             element.setAttribute('disabled', true);
//         }
//     });
// };

// ----- when a filter is marked complete, highlight the next filter (making it 'active') ------
const scaleInNextFilter = (nextFilter) => {
    if (nextFilter !== null) {
        toggleClass(nextFilter, 'scaled-out', 'scale-bounce-in');    
    }
};

// ----- generic function handling the return of the selected value independent of filter ------
const returnValue = (selection, eventTarget, button, filterHandler, nextFilter) => {
    if (selection.length === 0) {
        buttonHandler(selection, eventTarget, button);
        filterHandler();
    } 
    else if (selection.length !== 0 && selection[0] !== eventTarget.textContent) {
        selection.pop();
        filterHandler(); 
        buttonHandler(selection, eventTarget, button);
    }
    scaleInNextFilter(nextFilter);
}

// ----- function handling the return of the selected 'TIME' value ------
const returnTimeValue = (eventTarget) => {
    returnValue(time_selection, eventTarget, time_button, timeHandler, name_filter_2);
    closeList(name_filter_1, time_button);
    return [ time_selection ];
};

// ----- function handling the return of the selected 'SETTING' value ------
const returnSettingValue = (eventTarget) => {
    returnValue(setting_selection, eventTarget, setting_button, settingHandler, name_filter_3);
    closeList(name_filter_2, setting_button);
    return [ setting_selection ];
};

// ----- function handling the return of the selected 'GENDER' value ------
const returnGenderValue = (eventTarget) => {
    returnValue(gender_selection, eventTarget, gender_button, () => {}, name_filter_4);
    closeList(name_filter_3, gender_button);
    return [ gender_selection ];
};

// ----- function handling the return of the selected 'SPECIES' value ------
const returnSpeciesValue = (eventTarget) => {
    returnValue(species_selection, eventTarget, species_button, () => {}, null);
    closeList(name_filter_4, species_button);
    return [ species_selection ];
};

// ----- function calling the specific filter functions and returning the selected value ------
const nameFilterHandler = (eventTarget) => {

    if 
    (eventTarget ===  time_options[0] || eventTarget ===  time_options[1] || eventTarget ===  time_options[2]) {
        returnTimeValue(eventTarget);   
    }
    else if 
    (eventTarget ===  history_setting_options[0] || eventTarget ===  history_setting_options[1] || eventTarget ===  history_setting_options[2] || eventTarget ===  history_setting_options[3] || eventTarget ===  history_setting_options[4] || 
     eventTarget === present_setting_options[0] || eventTarget === present_setting_options[1] || eventTarget === present_setting_options[2] || 
     eventTarget === future_setting_options[0] || eventTarget === future_setting_options[1] || eventTarget === future_setting_options[2] ) {
        returnSettingValue(eventTarget);
    }
    else if 
    (eventTarget ===  gender_options[0] || eventTarget ===  gender_options[1] || eventTarget ===  gender_options[2]) {
        returnGenderValue(eventTarget);
    } 
    else if 
    (eventTarget === fantasy_species_options[0] || eventTarget === fantasy_species_options[1] || eventTarget === fantasy_species_options[2] || eventTarget === fantasy_species_options[3] || eventTarget === fantasy_species_options[4] || eventTarget === fantasy_species_options[5] ||
     eventTarget === space_species_options[0] || eventTarget === space_species_options[1] || eventTarget === space_species_options[2] || 
     eventTarget === postapoc_species_options[0] || eventTarget === postapoc_species_options[1] || 
     eventTarget === techworld_species_options[0] || eventTarget === techworld_species_options[1] ) {
        returnSpeciesValue(eventTarget);
    }

    if (time_selection.length !== 0 && setting_selection.length !== 0 && gender_selection.length !== 0 && species_selection.length !== 0) {
        toggleClass(document.getElementById('getResultsBtn'), 'filter-not-complete', 'filter-complete');
    }

    
    
    
}

/* ------------------------------------------------------------------------------------------------------
    EVENT HANDLERS
------------------------------------------------------------------------------------------------------ */

// ----- filter buttons ------
time_button.addEventListener('click', () => openList(name_filter_1, time_button, 'setting-option')); 
setting_button.addEventListener('click', () => openList(name_filter_2, setting_button, 'gender-option')); 
gender_button.addEventListener('click', () => openList(name_filter_3, gender_button, 'species-option'));
species_button.addEventListener('click', () => openList(name_filter_4, species_button, null));

// ----- filter options ------
time_options.forEach(option => option.addEventListener('click', (e) => nameFilterHandler(e.target)));
history_setting_options.forEach(option => option.addEventListener('click', (e) => nameFilterHandler(e.target)));
present_setting_options.forEach(option => option.addEventListener('click', (e) => nameFilterHandler(e.target)));
future_setting_options.forEach(option => option.addEventListener('click', (e) => nameFilterHandler(e.target)));
gender_options.forEach(option => option.addEventListener('click', (e) => nameFilterHandler(e.target)));
fantasy_species_options.forEach(option => option.addEventListener('click', (e) => nameFilterHandler(e.target)));
space_species_options.forEach(option => option.addEventListener('click', (e) => nameFilterHandler(e.target)));
techworld_species_options.forEach(option => option.addEventListener('click', (e) => nameFilterHandler(e.target)));
postapoc_species_options.forEach(option => option.addEventListener('click', (e) => nameFilterHandler(e.target)));