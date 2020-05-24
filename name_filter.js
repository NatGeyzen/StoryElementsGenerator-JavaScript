const name_filter_1 = document.getElementById('name-filter-1');
const time_button = document.getElementById('time-value');
const time_options = Array.from(document.getElementsByClassName('js--time'));

const time_selection = [];

const toggleClass = (element, oldClass, newClass) => {
    element.classList.remove(oldClass);
    element.classList.add(newClass);
};

const openList = (filter, button, selection) => {
    toggleClass(filter, 'list-closed', 'list-open');
    if (button.classList.contains('placeholder')) {
        toggleClass(button, 'placeholder', 'selection');
    } else if (button.classList.contains('complete')) {
        toggleClass(button, 'complete', 'selection');
        selection.pop();
    }
};

const closeList = (filter, button) => {
    toggleClass(filter, 'list-open', 'list-closed');
    toggleClass(button, 'selection', 'complete');
}

const returnValue = (eventTarget, button, filter) => {

    if (eventTarget === time_options[0] || eventTarget === time_options[1] || eventTarget === time_options[2]) {
        time_selection.push(eventTarget.id);
        if (time_selection.includes('past')) {
            button.textContent = 'the past';
        } else if (time_selection.includes('present')) {
            button.textContent = 'the present(-ish)';
        } else if (time_selection.includes('future')) {
            button.textContent = 'the future';
        }
        const nextFilter = Array.from(document.getElementsByClassName('no-highlight')).slice(0, 3);
        nextFilter.forEach(element => toggleClass(element, 'no-highlight', 'highlight'));
    }

    closeList(filter, button);
    return [time_selection];
}

time_button.addEventListener('click', () => openList(name_filter_1, time_button, time_selection)); 
time_options.forEach(option => option.addEventListener('click', (e) => returnValue(e.target, time_button, name_filter_1)));


// const openList = (wrapper, button, selections) => {


//     selections.classList.remove('hidden');
//     selections.classList.add('visible');

//     const disabledFilters = Array.from(document.getElementsByClassName('js--no-highlight'));
//     disabledFilters.forEach(filter => {
//         // filter.classList.remove('no-highlight');
//         // filter.classList.add('transparent');
//     })
// }
//     // else if (button.classList.contains('selection')) {
//     //     button.classList.remove('selection')
//     //     button.classList.add('selected');
//     // }

// const closeList = (wrapper, button, selections) => {
//     wrapper.classList.remove('full');
//     wrapper.classList.add('collapsed');
//     button.classList.remove('selection')
//     button.classList.add('complete');
//     selections.classList.remove('visible');
//     selections.classList.add('hidden');
// }

// const returnSelectedValue = (eventTarget, value) => {
    
//     const time = [];
//     if (eventTarget.id === 'past' || eventTarget.id === 'present' || eventTarget.id === 'future') {
//         time.push(eventTarget.id);
//         if (time.includes('past')) {
//             value.textContent = 'the past';
//         } else if (time.includes('present')) {
//             value.textContent = 'the present(-ish)';
//         } else if (time.includes('future')) {
//             value.textContent = 'the future';
//         }
//         closeList(timeWrapper, timeValue, timeOptionsWrapper);

//     }
//     return [time];
// }
// const timeWrapper = document.getElementById('time');
// const timeValue = document.getElementById('time-value');
// const timeOptionsWrapper = document.getElementById('time-selections');
// const timeOptions = Array.from(document.getElementsByClassName('js--time'));

// timeValue.addEventListener('click', () => openList(timeWrapper, timeValue, timeOptionsWrapper));
// timeOptions.forEach(option => option.addEventListener('click', (e) =>  returnSelectedValue(e.target, timeValue)));