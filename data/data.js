const names = {
    
    contemporary: {
        common: {
            male: [
                'Liam', 'Noah', 'William', 'James', 'Logan', 'Benjamin', 'Mason', 'Elija', 'Oliver', 'Jacob',
                'Lucas', 'Alexander', 'Ethan', 'Daniel', 'Henry', 'Jackson', 'Aiden', 'Owen', 'Wyatt', 'Dylan'
            ],
            female: [
                'Emma', 'Olivia', 'Ava', 'Isabella', 'Sophia', 'Mia', 'Charlotte', 'Amelia', 'Evelyn', 'Madison',
                'Harper', 'Emily', 'Ella', 'Victoria', 'Chloe', 'Nora', 'Lily', 'Hannah', 'Zoe', 'Elizabeth'  
            ],
            unisex: [
                'Sam', 'Alex', 'Spencer', 'Phoenix', 'Avery', 'Dallas', 'Morgan', 'Quinn', 'Parker', 'Payton',
                'Charlie', 'Riley', 'Sawyer', 'Blake', 'Hayden', 'River', 'Finley', 'Denver', 'Dakota', 'Hollis'
            ]
        },
        unique: {
            male: [
                'Ajax', 'Benoit', 'Cillian', 'Daemyn', 'Gates', 'Kaz', 'Link', 'Malone', 'Nero', 'Penn',
                'Olson', 'Ranger', 'Roan', 'Teague', 'Valerian', 'Xanthus', 'Wolf', 'Jaegar', 'Finnian', 'Kiernan'
            ],
            female: [
                'Aeryn', 'Cambree', 'Danya', 'Evania', 'Genna', 'Isaura', 'Jordana', 'Kalista', 'Leighanna', 'Manon',
                'Melora', 'Nyx', 'Odelia', 'Ranae', 'Rhoswen', 'Silvana', 'Thora', 'Valora', 'Zahrah', 'Zephyra'
            ],
            unisex: [
                'Auren', 'Bronx', 'Calypso', 'Danelea', 'Keani', 'Locke', 'Madigan', 'Neo', 'October', 'Pax', 
                'Rain', 'Sailor', 'Silver', 'Troian', 'Vail', 'Wynn', 'Zephyr', 'Kenadie', 'Havana', 'Cheyne'
            ]
        }
    },
    /* ---------------------------------------------------------------------------------------------------------------------------- */
    fantasy: {
        human: [],
        elf: {
            male: [
                'Baelen', 'Onvyr', 'Oryn', 'Naeryndam', 'Uldreiyn', 'Reysalor', 'Qildor', 'Galadriel', 'Riluaneth', 'Vesryn',
                'Mythanthar', 'Rivvikyn', 'Cymbiir', 'Finthir', 'Aranuil', 'Connak', 'Kelkalyn', 'Erunonidan', 'Tathdel', 'Lasslail'
            ],
            female: [
                'Siofra', 'Lathia', 'Elidyr', 'Elora', 'Morwen', 'Briareth', 'Gweyr', 'Ilrune', 'Keya', 'Phantyni',
                'Saeya', 'Viansola',  'Alerathla', 'Maiela', 'Reinys', 'Ilyrana', 'Nalia', 'Elaria', 'Talindra', 'Gaelira'
            ],
            unisex: [
                'Aerendyl', 'Amrynn', 'Silvyr', 'Tarathiel',  'Eowyn', 'Daenys', 'Faelyn', 'Irithiel', 'Shyael', 'Taenaran',  
                'Aloiene', 'Nimanor', 'Ciyradyl', 'Seiveril', 'Eirae', 'Celethir', 'Myrin', 'Laedireil', 'Evanara', 'Maiele' 
            ]
        },
        angel: {
            male: [
                'Zakzakiel', 'Ophaniel', 'Mendrion', 'Xaphan', 'Jeremiel', 'Amnayelth', 'Ecanus', 'Mikhal', 'Nathanael', 'Aphaeleon',
                'Sammael', 'Rasiel', 'Erathaol', 'Caphriel', 'Conah', 'Morieshal', 'Briathos', 'Akriel', 'Tarshishim', 'Sabrathan'
            ],
            female: [
                'Ashliel', 'Adelphi', 'Breenelle', 'Lavina', 'Irin', 'Aeshma', 'Ephemera', 'Oriphiel', 'Lailah', 'Vohamanah',
                'Pronoia', 'Zarall', 'Mahanaim', 'Sraosha', 'Neriah', 'Pahaliah', 'Anahita', 'Tabbris', 'Oriash', 'Semyaza'
            ],
            unisex: [
                'Seraph', 'Zophiel', 'Araqiel', 'Mydaiel', 'Adellum', 'Raduriel', 'Diniel', 'Empyrean', 'Ithuriel', 'Madan',
                'Amnayel', 'Xathanael', 'Omniel', 'Gadreel', 'Ophanim', 'Chasan', 'Ambriel', 'Aarin', 'Mihr', 'Dardariel'
               ]
        },
        demon: {
            male: [
                'Bazazath', 'Aamon', 'Armaros', 'Djjal',  'Draven', 'Gedeon', 'Sephtis', 'Than', 'Drystan', 'Nekane',
                'Volkan', 'Legion', 'Dagon', 'Azazel', 'Ambrogio', 'Ahriman', 'Pyry', 'Runihura', 'Hadeon', 'Dolion'
            ],
            female: [
                'Empusa', 'Kasdeya', 'Qarinah', 'Cozbi', 'Dubheasa', 'Enyo', 'Kali', 'Morana', 'Ahlai', 'Daeva',
                'Keres', 'Corleone', 'Mania', 'Naamah', 'Bacia', 'Sauda', 'Bellona', 'Deidamia', 'Tempest', 'Achlys'
            ],
            unisex: [
                'Jela', 'Corentin', 'Xaphan', 'Ravana', 'Adramelech', 'Batibat', 'Ciarda', 'Karau', 'Noire', 'Poe',
                'Pyro', 'Samhain', 'Storm', 'Thana', 'Paymon', 'Nyx', 'Merihim', 'Jilaiya', 'Israfel', 'Eblis'
            ]
        },
        mythological: {
            male: [
                'Neneus', 'Olios', 'Aeus', 'Xunas', 'Ranir', 'Useyr', 'Khyagi', 'Yrasil', 'Phohdros', 'Shilzotl',
                'Rhezdall', 'Siius', 'Liltyx', 'Vukysus', 'Uros', 'Reagi', 'Hordarr', 'Vazotl', 'Geros', 'Xases'
            ],
            female: [
                'Thaena', 'Idione', 'Uxtia', 'Nedana', 'Ovmera', 'Detris', 'Cyrone', 'Iphion', 'Ylena', 'Cira',
                'Reona', 'Qretia', 'Eraura', 'Nemera', 'Xeana', 'Megasis', 'Zalene', 'Edite', 'Vephion', 'Zartuna'
            ],
            unisex: [
                'Vysyn', 'Derphin', 'Ormis', 'Bemtune', 'Eone', 'Ephion', 'Urneas', 'Moasis', 'Imtrix', 'Phenton',
                'Utia', 'Onesis', 'Atyx', 'Eses', 'Xisus', 'Suaris', 'Elaris', 'Atia', 'Dimis', 'Meren'
            ]
        },
        shifter: {
            male: [ 
                 'Remus', 'Lucian', 'Jaxon', 'Blayne', 'Aidryan', 'Brenn', 'Cayden', 'Kiran', 'Killian', 'Quinlan',
                'Maddock', 'Aidyn', 'Conaire', 'Tobias', 'Roman', 'Keveon', 'Griffen', 'Kinnon', 'Dyllon', 'Colm'
            ],
            female: [ 
                'Raina', 'Brielle', 'Ciara', 'Keanna', 'Eliana', 'Jaima', 'Zia', 'Cadha', 'Morwenna', 'Adyna',
                'Eileen', 'Harper', 'Maeve', 'Gwyn', 'Meaghan', 'Riannon', 'Nairna', 'Isibeal', 'Aurora', 'Ceridwen'
            ],
            unisex: [ 
                'Falcon', 'Zion', 'Cameron', 'Sol', 'Kai', 'Omari', 'Rowan', 'Beau', 'Breen', 'Remi',
                'Kerriel', 'Newlyn', 'Shea', 'Bryn', 'Hunter', 'Fane', 'Haley', 'Paiton', 'Emlyn', 'Robin'
            ],
        }
    },
    historical: {
        ancientGreece: {
            male: [],
            female: [],
            unisex: []
        },
        ancientRome: {
            male: [],
            female: [],
            unisex: []
        },
        ancientEgypt: {
            male: [],
            female: [],
            unisex: []
        },
        vikingEra: {
            male: [],
            female: [],
            unisex: []
        },
        elizabethanEra: {
            male: [],
            female: [],
            unisex: []
        },
        victorianEra: {
            male: [],
            female: [],
            unisex: []
        },
    },



    scifi: {
        human: [],
        humanoid: [],
        nonHumanoid: []
    }
}
