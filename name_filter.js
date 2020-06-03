/* ------------------------------------------------------------------------------------------------------
    VARIABLES
------------------------------------------------------------------------------------------------------ */

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

const checkmark_button = document.getElementById('checkmark');

/* ------------------------------------------------------------------------------------------------------
    FUNCTIONS
------------------------------------------------------------------------------------------------------ */

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
    console.log('bang!')
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
            showOnlyOneSettingList(fantasy_species_selections, space_species_selections, postapoc_species_selections, techworld_species_selections);
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
    else if (eventTarget === checkmark_button) {
        console.log(time_selection, setting_selection, gender_selection, species_selection)
    }

    if (time_selection.length !== 0 && setting_selection.length !== 0 && gender_selection.length !== 0 && species_selection.length !== 0) {
        toggleClass(document.getElementById('getResultsBtn'), 'filter-not-complete', 'filter-complete');
    } 
    else if (time_selection.length === 0 || setting_selection.length === 0 || gender_selection.length === 0 || species_selection.length === 0) {
        toggleClass(document.getElementById('getResultsBtn'), 'filter-complete', 'filter-not-complete');
    }

    return [ time_selection, setting_selection, gender_selection, species_selection ];
 
}

/* ------------------------------------------------------------------------------------------------------
    EVENT HANDLERS
------------------------------------------------------------------------------------------------------ */

// ----- filter buttons ------
time_button.addEventListener('click', () => openList(name_filter_1, time_button, time_selection)); 
setting_button.addEventListener('click', () => openList(name_filter_2, setting_button, setting_selection)); 
gender_button.addEventListener('click', () => openList(name_filter_3, gender_button, gender_selection));
species_button.addEventListener('click', () => openList(name_filter_4, species_button, species_selection));

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

checkmark_button.addEventListener('click', (e) => nameFilterHandler(e.target))