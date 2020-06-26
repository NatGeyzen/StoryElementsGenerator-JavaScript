// screens 
const originalScreen = document.getElementById('characters-original-screen');
const generatedNamesScreen = document.getElementById('generated-names-container');
const filterScreen = document.getElementById('filter');

// filter containers
const name_filter_1 = document.getElementById('name-filter-1');
const name_filter_2 = document.getElementById('name-filter-2');
const name_filter_3 = document.getElementById('name-filter-3');
const name_filter_4 = document.getElementById('name-filter-4');
const filters = [ name_filter_1, name_filter_2, name_filter_3, name_filter_4 ];

// filter buttons 
const time_button = document.getElementById('time-value');
const setting_button = document.getElementById('setting-value');
const gender_button = document.getElementById('gender-value');
const species_button = document.getElementById('species-value');

// options per category arrays  
const time_options = Array.from(document.getElementsByClassName('js--time'));
const gender_options = Array.from(document.getElementsByClassName('js--gender'));
const history_setting_options = Array.from(document.getElementsByClassName('js--history-setting'));
const present_setting_options = Array.from(document.getElementsByClassName('js--present-setting'));
const fantasy_species_options = Array.from(document.getElementsByClassName('js--fantasy-species'));

// options containers (ul) 
const history_setting_selections = document.getElementById('history-setting-selections');
const present_setting_selections = document.getElementById('present-setting-selections');
const gender_selections = document.getElementById('gender-selections');
const fantasy_species_selections = document.getElementById('fantasy-species-selections');

// buttons 
const checkmark_button = document.getElementById('checkmark');
const new_filtered_names_button = document.getElementById('newFilteredResultsBtn');
const new_random_names_button = document.getElementById('newRandomResultsBtn');

// container for generated names
const generatedNamesList = document.getElementById('generated-names-list');

// arrays for each filter selection value 
const time_selection = [];
const setting_selection = [];
const gender_selection = [];
const species_selection = [];

// string variables to ensure error on typos 
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