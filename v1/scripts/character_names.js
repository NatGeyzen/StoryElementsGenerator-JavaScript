/* --------------------------------------------------------------------------------------------------------------------
    VARIABLES
-------------------------------------------------------------------------------------------------------------------- */

const originalScreen = document.getElementById('characters-original-screen');
const filterScreen = document.getElementById('filter');
const generatedNamesScreen = document.getElementById('generated-names-container');

// ----- buttons character names generator start screen ------
const randomBtn     = document.getElementById('randomBtn');
const customizeBtn  = document.getElementById('customizeBtn');

// ----- filter containers ------
const name_filter_1 = document.getElementById('name-filter-1');
const name_filter_2 = document.getElementById('name-filter-2');
const name_filter_3 = document.getElementById('name-filter-3');
const name_filter_4 = document.getElementById('name-filter-4');

// ----- array of filter containers ------
const filters = [name_filter_1, name_filter_2, name_filter_3, name_filter_4];

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

// ----- arrays for each filter selection value ------
const time_selection = [];
const setting_selection = [];
const gender_selection = [];
const species_selection = [];

// ----- filters completed/get generated names button ------
const checkmark_button = document.getElementById('checkmark');

// ----- string variables to ensure error on typos ------
const past = 'the past';
const present = 'the present(-ish)';

const ancient_greece = 'in Ancient Greece';
const ancient_rome = 'in Ancient Rome';
const ancient_egypt = 'in Ancient Egypt';
const viking_era = 'in the Viking Era';
const victorian_era = 'in the Victorian Era';
const contemporary = 'on Earth as we know it';
const fantasy = 'in a fantasy Earth/realm';

const he = 'He';
const she = 'She';
const uni = '(S)he';

const new_filtered_names_button = document.getElementById('newFilteredResultsBtn');
const new_random_names_button = document.getElementById('newRandomResultsBtn');

const generatedNamesList = document.getElementById('generated-names-list');

/* --------------------------------------------------------------------------------------------------------------------
    FUNCTIONS
-------------------------------------------------------------------------------------------------------------------- */

// ----- go from start screen to filter page and results page ------
const goToNextScreen = (currentScreen, nextScreen) => {
    currentScreen.classList.remove('visible');
    currentScreen.classList.add('hidden');
    nextScreen.classList.remove('hidden');
    nextScreen.classList.add('visible');
}

// ----- remove/add class from/to element ------
const toggleClass = (element, oldClass, newClass) => {
    element.classList.remove(oldClass);
    element.classList.add(newClass);
};

// ----- when a filter is marked complete, highlight the next filter (making it 'active') ------
const scaleInNextFilter = (nextFilter) => {
    if (nextFilter !== null && !nextFilter.classList.contains('fade-out') && !nextFilter.classList.contains('fade-in')) {
        toggleClass(nextFilter, 'scaled-out', 'scale-bounce-in');    
    }
};

// ----- helper function for next function ------
const fadeOut = (filter) => {
    if (filter.classList.contains('scale-bounce-in')) {
        toggleClass(filter, 'scale-bounce-in', 'fade-out');
    } else if (filter.classList.contains('fade-in')) {
        toggleClass(filter, 'fade-in', 'fade-out');
    }
    if (filter.classList.contains('list-open')) {
        toggleClass(filter, 'list-open', 'list-closed');
    }
};

// ----- when a filter list is opened, hide the next filters if any are visible ------
const fadeOutNextFilters = (button) => {
    const scale_in_filters = Array.from(document.getElementsByClassName('scale-bounce-in'));
    const fade_in_filters = Array.from(document.getElementsByClassName('fade-in'));
    const visible_filters = [...scale_in_filters, ...fade_in_filters];
    if (visible_filters.length > 1) {    
        if(button === time_button) {
            fadeOut(name_filter_2);
            fadeOut(name_filter_3);
            fadeOut(name_filter_4);     
        }
        else if (button === setting_button) {
            fadeOut(name_filter_3);
            fadeOut(name_filter_4);
        }
        else if (button === gender_button) {
            fadeOut(name_filter_4);
        }  
    }
};

// ----- when a filter list is closed, make the filters that were hidden reappear ------
const fadeInNextFilters = () => {
    const faded_filters = Array.from(document.getElementsByClassName('fade-out'));
    faded_filters.forEach(filter => {
        toggleClass(filter, 'fade-out', 'fade-in');
    });
};

// ----- open a list of filter options ------
const openList = (filter, button, selection) => {
    toggleClass(filter, 'list-closed', 'list-open');
    if (button.classList.contains('placeholder')) {
        toggleClass(button, 'placeholder', 'selection');
    } else if (button.classList.contains('complete') && !button.classList.contains('not-allowed')) {
        toggleClass(button, 'complete', 'selection');
        selection.pop();
    }
    fadeOutNextFilters(button);   
};

// ----- close a list of filter options ------
const closeList = (filter, button) => {
    toggleClass(filter, 'list-open', 'list-closed');
    toggleClass(button, 'selection', 'complete');
    fadeInNextFilters();
};

// ----- helper function, resets a completed filter back to uncompleted when a change is made to a previous filter  ------
const resetFilter = (button, selection, text) => {
    toggleClass(button, 'complete', 'placeholder');
    button.textContent = text;
    selection.pop();
    if (button.classList.remove('not-allowed'));
};

// ----- store selected value and display inside button  ------
const buttonHandler = (selection, eventTarget, button) => {

    selection.push(eventTarget.textContent);   
    button.textContent = selection[0];

    if (button === time_button && setting_button.classList.contains('complete')) {
        resetFilter(setting_button, setting_selection, 'setting');
    }
    if (button === time_button  && (species_button.classList.contains('auto-complete') || species_button.classList.contains('complete')) && eventTarget.textContent !== 'the past') {
        resetFilter(species_button, species_selection, 'species');
        species_button.classList.remove('auto-complete');
    }
    if (button === setting_button && species_button.classList.contains('complete')) {
        resetFilter(species_button, species_selection, 'species');
    }
};

// ----- guarantee that filters with multiple possible lists only display the correct list ------
const showOnlyOneSettingList = (selection, other1, other2, other3) => {
    toggleClass(selection, 'hidden', 'visible');
    toggleClass(other1, 'visible', 'hidden');
    toggleClass(other2, 'visible', 'hidden');
    if (other3 !== null) {
        toggleClass(other3, 'visible', 'hidden');
    }
};

// ----- set species to human automatically and mark as complete/disabled/highlighted  ------
const autoSetSpeciesToHuman = () => {
    species_selection.push('human');
    species_button.textContent = 'human';
    species_button.classList.add('not-allowed');
    toggleClass(species_button, 'placeholder', 'auto-complete');
};

// ----- time filter logic ------
const timeHandler = () => {
    if (time_selection.includes('the past')) {
        showOnlyOneSettingList(history_setting_selections, present_setting_selections, future_setting_selections, null); 
        gender_options[2].style.display = 'none';
        autoSetSpeciesToHuman();   
    } 
    else if (time_selection.includes('the present(-ish)')) {
        showOnlyOneSettingList(present_setting_selections, history_setting_selections, future_setting_selections, null);
    }
    else if (time_selection.includes('the future')) {
        showOnlyOneSettingList(future_setting_selections, present_setting_selections, history_setting_selections, null);
    } 
};

// ----- setting filter logic ------
const settingHandler = () => {
    switch (setting_selection[0]) {
        case 'on Earth as we know it':      
            autoSetSpeciesToHuman();                                        
            break;  
        case 'in a fantasy Earth/realm':    
            toggleClass(fantasy_species_selections, 'hidden', 'visible');   
            // showOnlyOneSettingList(fantasy_species_selections, space_species_selections, postapoc_species_selections, techworld_species_selections);
            break;      
        case 'in space somewhere':          
            toggleClass(space_species_selections, 'hidden', 'visible');   
            showOnlyOneSettingList(space_species_selections, fantasy_species_selections, postapoc_species_selections, techworld_species_selections);
            break;   
        case 'on a post-apocalyptic Earth': 
            toggleClass(postapoc_species_selections, 'hidden', 'visible');  
            showOnlyOneSettingList(postapoc_species_selections, fantasy_species_selections, space_species_selections, techworld_species_selections);
            break;   
        case 'on a highly advanced Earth':  
            toggleClass(techworld_species_selections, 'hidden', 'visible'); 
            showOnlyOneSettingList(techworld_species_selections, fantasy_species_selections, space_species_selections, postapoc_species_selections);
            break; 
    }
};

// ----- generic function handling the return of the selected value independent of filter ------
const returnValue = (selection, eventTarget, button, filterHandler, nextFilter) => {

    if (selection.length === 0 || selection[0] !== eventTarget.textContent) {
        
        buttonHandler(selection, eventTarget, button);
        filterHandler();

        if (selection[0] === 'the past' && !species_selection.includes('human')) {
            autoSetSpeciesToHuman();
        }
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
    ((eventTarget === fantasy_species_options[0] || eventTarget === fantasy_species_options[1] || eventTarget === fantasy_species_options[2] || eventTarget === fantasy_species_options[3] || eventTarget === fantasy_species_options[4] || eventTarget === fantasy_species_options[5] ||
     eventTarget === space_species_options[0] || eventTarget === space_species_options[1] || eventTarget === space_species_options[2] || 
     eventTarget === postapoc_species_options[0] || eventTarget === postapoc_species_options[1] || 
     eventTarget === techworld_species_options[0] || eventTarget === techworld_species_options[1]) &&  !species_button.classList.contains('not-allowed')) {
        returnSpeciesValue(eventTarget);
    }
    if (time_selection.length !== 0 && setting_selection.length !== 0 && gender_selection.length !== 0 && species_selection.length !== 0) {
        toggleClass(document.getElementById('getResultsBtn'), 'filter-not-complete', 'filter-complete');
    } 
    else if (time_selection.length === 0 || setting_selection.length === 0 || gender_selection.length === 0 || species_selection.length === 0) {
        toggleClass(document.getElementById('getResultsBtn'), 'filter-complete', 'filter-not-complete');
    }

    return [ time_selection, setting_selection, gender_selection, species_selection ];
 
}

// ----- return index number between 0 and array length ------
const returnRandomIndex = (arrayLength) => {
    return Math.floor(Math.random() * arrayLength);
};

// ----- return name from specified array at the specified index  ------
const returnNameAtRandomIndex = (namesList, num) => {
    return namesList[num];
} 

// ----- return 10 names, using two previous functions to generate index numbers and retrieve names ------
const returnListOfNames = (array, gender) => {
    const names_array = [];
    while (names_array.length !== 10) {
        const name = returnNameAtRandomIndex(array, returnRandomIndex(array.length));
        if (!names_array.includes(name)) {
            names_array.push(name);
        } else {
            returnNameAtRandomIndex(array, returnRandomIndex(array.length))
        }
    }
    names_array.forEach(name => {
        const li = document.createElement('li'); 
        li.classList.add('generated-name'); 
        if (gender === 'male') {
            li.classList.add('male');
        } else if (gender === 'female') {
            li.classList.add('female');
        } else if (gender === 'unisex') {
            li.classList.add('unisex');
        }
        li.textContent = name;
        generatedNamesList.appendChild(li);
    })
};

// ----- return a list of names, based on chosen filters, using two previous functions ------
const returnFilteredNames = (eventTarget) => {
    const selected_filters = nameFilterHandler(eventTarget);

    if (selected_filters[0].includes(past)) {
        if (selected_filters[1].includes(ancient_greece)) {
            if (selected_filters[2].includes(he)) {
                returnListOfNames(ancient_greek_names.male, 'male');
            } else if (selected_filters[2].includes(she)) {
                returnListOfNames(ancient_greek_names.female, 'female');
            }
        } else if (selected_filters[1].includes(ancient_rome)) {
            if (selected_filters[2].includes(he)) {
                returnListOfNames(ancient_roman_names.male, 'male');
            } else if (selected_filters[2].includes(she)) {
                returnListOfNames(ancient_roman_names.female, 'female');
            }
        } else if (selected_filters[1].includes(ancient_egypt)) {
            if (selected_filters[2].includes(he)) {
                returnListOfNames(ancient_egyptian_names.male, 'male');
            } else if (selected_filters[2].includes(she)) {
                returnListOfNames(ancient_egyptian_names.female, 'female');
            }
        } else if (selected_filters[1].includes(viking_era)) {
            if (selected_filters[2].includes(he)) {
                returnListOfNames(viking_names.male, 'male');
            } else if (selected_filters[2].includes(she)) {
                returnListOfNames(viking_names.female, 'female');
            }
        } else if (selected_filters[1].includes(victorian_era)) {
            if (selected_filters[2].includes(he)) {
                returnListOfNames(victorian_names.male, 'male');
            } else if (selected_filters[2].includes(she)) {
                returnListOfNames(victorian_names.female, 'female');
            }
        }
    }

    else if (selected_filters[0].includes(present)) {
        if (selected_filters[1].includes(contemporary)) {
            if (selected_filters[2].includes(he)) {
                returnListOfNames(current_names.male, 'male');
            } else if (selected_filters[2].includes(she)) {
                returnListOfNames(current_names.female, 'female');
            } else if (selected_filters[2].includes(uni)) {
                returnListOfNames(current_names.unisex, 'unisex');
            }
        } else if (selected_filters[1].includes(fantasy)) {
            if (selected_filters[2].includes(he) && selected_filters[3].includes('human')) {
                returnListOfNames(current_names.male, 'male');
            } 
            if (selected_filters[2].includes(she) && selected_filters[3].includes('human')) {
                returnListOfNames(current_names.female, 'female');
            } 
            if (selected_filters[2].includes(uni) && selected_filters[3].includes('human')) {
                returnListOfNames(current_names.unisex, 'unisex');
            }
            if (selected_filters[2].includes(he) && selected_filters[3].includes('elf')) {
                returnListOfNames(elf_names.male, 'male');
            } 
            if (selected_filters[2].includes(she) && selected_filters[3].includes('elf')) {
                returnListOfNames(elf_names.female, 'female');
            } 
            if (selected_filters[2].includes(uni) && selected_filters[3].includes('elf')) {
                returnListOfNames(elf_names.unisex, 'unisex');
            }
            if (selected_filters[2].includes(he) && selected_filters[3].includes('angel')) {
                returnListOfNames(angel_names.male, 'male');
            } 
            if (selected_filters[2].includes(she) && selected_filters[3].includes('angel')) {
                returnListOfNames(angel_names.female, 'female');
            } 
            if (selected_filters[2].includes(uni) && selected_filters[3].includes('angel')) {
                returnListOfNames(angel_names.unisex, 'unisex');
            }
            if (selected_filters[2].includes(he) && selected_filters[3].includes('demon')) {
                returnListOfNames(demon_names.male, 'male');
            } 
            if (selected_filters[2].includes(she) && selected_filters[3].includes('demon')) {
                returnListOfNames(demon_names.female, 'female');
            } 
            if (selected_filters[2].includes(uni) && selected_filters[3].includes('demon')) {
                returnListOfNames(demon_names.unisex, 'unisex');
            }
            if (selected_filters[2].includes(he) && selected_filters[3].includes('(demi) God(dess)')) {
                returnListOfNames(godlike_names.male, 'male');
            } 
            if (selected_filters[2].includes(she) && selected_filters[3].includes('(demi) God(dess)')) {
                returnListOfNames(godlike_names.female, 'female');
            } 
            if (selected_filters[2].includes(uni) && selected_filters[3].includes('(demi) God(dess)')) {
                returnListOfNames(godlike_names.unisex, 'unisex');
            }
        }
    }
}

const returnRandomNames = () => {
    const random_male_names = [];
    const random_female_names = [];
    const random_unisex_names = [];
    while (random_male_names.length !== 4) {
        const male_name = returnNameAtRandomIndex(all_names.male, returnRandomIndex(all_names.male.length));
        random_male_names.push(male_name);
    }
    while (random_female_names.length !== 4) {
        const female_name = returnNameAtRandomIndex(all_names.female, returnRandomIndex(all_names.female.length));
        random_female_names.push(female_name);
    }
    while (random_unisex_names.length !== 2) {
        const unisex_name = returnNameAtRandomIndex(all_names.unisex, returnRandomIndex(all_names.unisex.length));
        random_unisex_names.push(unisex_name);
    }
    const random_names = [...random_male_names, ...random_female_names, ...random_unisex_names];

    for (let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        li.classList.add('generated-name'); 
        if (i < 4) {
            li.classList.add('male'); 
        } else if (i >= 4 && i < 8) {
            li.classList.add('female'); 
        } else {
            li.classList.add('unisex');  
        }
        li.textContent = random_names[i];
        generatedNamesList.appendChild(li);
    }
}

/* --------------------------------------------------------------------------------------------------------------------
    EVENT HANDLERS
-------------------------------------------------------------------------------------------------------------------- */

// ----- PAGE 1 buttons ------
customizeBtn.addEventListener('click', () => goToNextScreen(originalScreen, filterScreen));
randomBtn.addEventListener('click', () => {
    goToNextScreen(originalScreen, generatedNamesScreen);
    new_random_names_button.classList.remove('hidden');
    returnRandomNames();
});

// ----- PAGE 2A filter buttons ------
time_button.addEventListener('click', () => openList(name_filter_1, time_button, time_selection)); 
setting_button.addEventListener('click', () => openList(name_filter_2, setting_button, setting_selection)); 
gender_button.addEventListener('click', () => openList(name_filter_3, gender_button, gender_selection));
species_button.addEventListener('click', () => openList(name_filter_4, species_button, species_selection));

// ----- PAGE 2A filter options ------
time_options.forEach(option => option.addEventListener('click', (e) => nameFilterHandler(e.target)));
history_setting_options.forEach(option => option.addEventListener('click', (e) => nameFilterHandler(e.target)));
present_setting_options.forEach(option => option.addEventListener('click', (e) => nameFilterHandler(e.target)));
future_setting_options.forEach(option => option.addEventListener('click', (e) => nameFilterHandler(e.target)));
gender_options.forEach(option => option.addEventListener('click', (e) => nameFilterHandler(e.target)));
fantasy_species_options.forEach(option => option.addEventListener('click', (e) => nameFilterHandler(e.target)));
space_species_options.forEach(option => option.addEventListener('click', (e) => nameFilterHandler(e.target)));
techworld_species_options.forEach(option => option.addEventListener('click', (e) => nameFilterHandler(e.target)));
postapoc_species_options.forEach(option => option.addEventListener('click', (e) => nameFilterHandler(e.target)));

// ----- PAGE 2A get filtered names button ------
checkmark_button.addEventListener('click', (e) => {
    goToNextScreen(filterScreen, generatedNamesScreen);
    toggleClass(checkmark_button, 'filter-complete', 'filter-not-complete');
    new_filtered_names_button.classList.remove('hidden');
    returnFilteredNames(e.target);
});


new_filtered_names_button.addEventListener('click', (e) => {
    generatedNamesList.textContent = '';
    returnFilteredNames(e.target);
    
});

new_random_names_button.addEventListener('click', () => {
    generatedNamesList.textContent = '';
    returnRandomNames();
});

