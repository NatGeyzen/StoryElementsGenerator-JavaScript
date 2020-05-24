

const openList = (wrapper, button, selections) => {

    wrapper.classList.remove('options-collapsed');
    wrapper.classList.add('options-full');

    if (button.classList.contains('placeholder')) {
        button.classList.remove('placeholder');
    } else if (button.classList.contains('complete')) {
        button.classList.remove('complete');
    }
    button.classList.add('selection');

    selections.classList.remove('hidden');
    selections.classList.add('visible');

    const disabledFilters = Array.from(document.getElementsByClassName('js--no-highlight'));
    disabledFilters.forEach(filter => {
        // filter.classList.remove('no-highlight');
        // filter.classList.add('transparent');
    })
}
    // else if (button.classList.contains('selection')) {
    //     button.classList.remove('selection')
    //     button.classList.add('selected');
    // }

const closeList = (wrapper, button, selections) => {
    wrapper.classList.remove('options-full');
    wrapper.classList.add('options-collapsed');
    button.classList.remove('selection')
    button.classList.add('complete');
    selections.classList.remove('visible');
    selections.classList.add('hidden');
}

const returnSelectedValue = (eventTarget, value) => {
    
    const time = [];
    if (eventTarget.id === 'past' || eventTarget.id === 'present' || eventTarget.id === 'future') {
        time.push(eventTarget.id);
        if (time.includes('past')) {
            value.textContent = 'the past';
        } else if (time.includes('present')) {
            value.textContent = 'the present(-ish)';
        } else if (time.includes('future')) {
            value.textContent = 'the future';
        }
        closeList(timeWrapper, timeValue, timeOptionsWrapper);

    }
    return [time];
}
const timeWrapper = document.getElementById('time');
const timeValue = document.getElementById('time-value');
const timeOptionsWrapper = document.getElementById('time-selections');
const timeOptions = Array.from(document.getElementsByClassName('js--time'));

// timeValue.addEventListener('click', () => openList(timeWrapper, timeValue, timeOptionsWrapper));
timeOptions.forEach(option => option.addEventListener('click', (e) =>  returnSelectedValue(e.target, timeValue)));