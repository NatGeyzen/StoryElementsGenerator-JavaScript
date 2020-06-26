// remove/add class from/to element
const toggleClassHelper = (element, oldClass, newClass) => {     
    element.classList.remove(oldClass);
    element.classList.add(newClass);
};

// hide current screen, show next screen
const toggleScreenHelper = (currentScreen, nextScreen) => {      
    toggleClassHelper(currentScreen, 'visible', 'hidden');
    toggleClassHelper(nextScreen, 'hidden', 'visible');
};

// set class of correct elements to 'fade-out'
const fadeOutHelper = (filter) => {                              
    if (filter.classList.contains('scale-bounce-in')) {
        toggleClassHelper(filter, 'scale-bounce-in', 'fade-out');
    } 
    else if (filter.classList.contains('fade-in')) {
        toggleClassHelper(filter, 'fade-in', 'fade-out');
    }
    if (filter.classList.contains('list-open')) {
        toggleClassHelper(filter, 'list-open', 'list-closed');
    }
};

// when a filter is marked complete, animate the next filter in 
const scaleInNextFilter = (nextFilter) => {
    if (nextFilter !== null && !nextFilter.classList.contains('fade-out') && !nextFilter.classList.contains('fade-in')) {
        toggleClassHelper(nextFilter, 'scaled-out', 'scale-bounce-in');    
    };
};

// when a filter list is closed, make the filters that were hidden reappear
const fadeInNextFilters = () => {
    Array.from(document.getElementsByClassName('fade-out')).forEach(filter => toggleClassHelper(filter, 'fade-out', 'fade-in'));
};

// open a list of filter options 
const openList = (filter, button, selection) => {
    toggleClassHelper(filter, 'list-closed', 'list-open');
    if (button.classList.contains('placeholder')) {
        toggleClassHelper(button, 'placeholder', 'selection');
    } 
    else if (button.classList.contains('complete') && !button.classList.contains('not-allowed')) {
        toggleClass(button, 'complete', 'selection');
        selection.pop();
    }
    fadeOutNextFilters(button);   
};

// close a list of filter options
const closeList = (filter, button) => {
    toggleClassHelper(filter, 'list-open', 'list-closed');
    toggleClassHelper(button, 'selection', 'complete');
    fadeInNextFilters();
};

// when a filter list is opened, hide the next filters if any are visible
const fadeOutNextFilters = (button) => {
    const visible_filters = [
        ...Array.from(document.getElementsByClassName('fade-in')), 
        ...Array.from(document.getElementsByClassName('scale-bounce-in'))
    ];
    if (visible_filters.length > 1) {    
        if (button === time_button) {
            filters.forEach(filter => filter !== filters[0] && fadeOutHelper(filter));
        }
        else if (button === setting_button) {
            filters.forEach(filter => !(filter === filters[0] || filter == filters[1]) && fadeOutHelper(filter));
        }
        else if (button === gender_button) {
            filters.forEach(filter => filter === filters[3] && fadeOutHelper(filter));
        }  
    }
};

// guarantee that filters with multiple possible lists only display the correct list 
const showOnlyOneSettingList = (selection, other1) => {
    toggleClassHelper(selection, 'hidden', 'visible');
    toggleClassHelper(other1, 'visible', 'hidden');
};

