// return index number between 0 and array length 
const returnRandomIndex = (arrayLength) => {
    return Math.floor(Math.random() * arrayLength);
};

// return name from specified array at the specified index 
const returnNameAtRandomIndex = (namesList, num) => {
    return namesList[num];
};

// return 10 names, using two previous functions to generate index numbers and retrieve names
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

// return a list of names, based on chosen filters, using two previous functions
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
