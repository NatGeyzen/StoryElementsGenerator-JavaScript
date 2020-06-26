// resets a completed filter back to uncompleted when a change is made to a previous filter
const resetFilter = (button, selection, text) => {
    toggleClassHelper(button, 'complete', 'placeholder');
    button.textContent = text;
    selection.pop();
};

// store selected value and display inside button
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

// set species to human automatically and mark as complete/disabled/highlighted 
const autoSetSpeciesToHuman = () => {
    species_selection.push('human');
    species_button.textContent = 'human';
    species_button.classList.add('not-allowed');
    toggleClassHelper(species_button, 'placeholder', 'auto-complete');
};

// time filter logic
const timeHandler = () => {
    if (time_selection.includes(past)) {
        showOnlyOneSettingList(history_setting_selections, present_setting_selections); 
        gender_options[2].style.display = 'none';
        autoSetSpeciesToHuman();   
    } 
    else if (time_selection.includes(present)) {
        showOnlyOneSettingList(present_setting_selections, history_setting_selections);
    };
};

// setting filter logic
const settingHandler = () => {
    switch (setting_selection[0]) {
        case contemporary:      
            autoSetSpeciesToHuman();                                        
            break;  
        case fantasy:    
            toggleClassHelper(fantasy_species_selections, 'hidden', 'visible');   
            break;      
    }
};

// helper function handling the return of the selected value independent of filter 
const returnValueHelper = (selection, eventTarget, button, filterHandler, nextFilter) => {
    if (selection.length === 0 || selection[0] !== eventTarget.textContent) {
        buttonHandler(selection, eventTarget, button);
        filterHandler();
        if (selection[0] === past && !species_selection.includes('human')) {
            autoSetSpeciesToHuman();
        }
    }
    scaleInNextFilter(nextFilter);
};

// function calling the specific filter functions and returning the selected value
const nameFilterHandler = (eventTarget) => {

    time_options.forEach(time_option => { if (eventTarget === time_option) {
            returnValueHelper(time_selection, eventTarget, time_button, timeHandler, name_filter_2);
            closeList(name_filter_1, time_button);    
        }} 
    );

    const setting_options = [ ...history_setting_options, ...present_setting_options ];

    setting_options.forEach(option => {
        if (eventTarget === option) {
            returnValueHelper(setting_selection, eventTarget, setting_button, settingHandler, name_filter_3);
            closeList(name_filter_2, setting_button);
        }
    });

    gender_options.forEach(gender_option => {
        if (eventTarget === gender_option) {
            returnValueHelper(gender_selection, eventTarget, gender_button, () => {}, name_filter_4);
            closeList(name_filter_3, gender_button);
        }
    });

    fantasy_species_options.forEach(fantasy_option => {
        if (eventTarget === fantasy_option) {
            returnValueHelper(species_selection, eventTarget, species_button, () => {}, null);
            closeList(name_filter_4, species_button);
        }
    });

    if (time_selection.length !== 0 && setting_selection.length !== 0 && gender_selection.length !== 0 && species_selection.length !== 0) {
        toggleClassHelper(document.getElementById('getResultsBtn'), 'filter-not-complete', 'filter-complete');
    } 
    else if ((!time_button.classList.contains('complete') || !setting_button.classList.contains('complete') || !gender_button.classList.contains('complete')|| !species_button.classList.contains('complete'))) {
        toggleClassHelper(document.getElementById('getResultsBtn'), 'filter-complete', 'filter-not-complete');
    }

    return [ time_selection, setting_selection, gender_selection, species_selection ];
 
};
