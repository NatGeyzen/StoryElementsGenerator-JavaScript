// ----- PAGE 1 buttons ------
document.getElementById('customizeBtn').addEventListener('click', () => 
    toggleScreenHelper(originalScreen, filterScreen));

document.getElementById('randomBtn').addEventListener('click', () => {
    toggleScreenHelper(originalScreen, generatedNamesScreen);
    new_random_names_button.classList.remove('hidden');
    returnRandomNames();
});

// ----- PAGE 2A filter buttons ------
time_button.addEventListener('click', () => openList(name_filter_1, time_button, time_selection)); 
setting_button.addEventListener('click', () => openList(name_filter_2, setting_button, setting_selection)); 
gender_button.addEventListener('click', () => openList(name_filter_3, gender_button, gender_selection));
species_button.addEventListener('click', () => openList(name_filter_4, species_button, species_selection));

// ----- PAGE 2A filter options ------
const options_arrays = [ time_options, history_setting_options, present_setting_options, gender_options, fantasy_species_options ];
options_arrays.forEach(array => 
    array.forEach(option => 
        option.addEventListener('click', (e) => nameFilterHandler(e.target))
    )
);

// ----- PAGE 2A get filtered names button ------
checkmark_button.addEventListener('click', (e) => {
    toggleScreenHelper(filterScreen, generatedNamesScreen);
    toggleClassHelper(checkmark_button, 'filter-complete', 'filter-not-complete');
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