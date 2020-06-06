const ancient_greek_names = {
    male: [
        'Aegeus', 'Callias', 'Dareios', 'Epiktetos', 'Galenos', 'Herakleios', 'Isocrates', 'Kosmas', 'Leonidas', 'Myron',
        'Neophythos', 'Olympos', 'Pericles', 'Stephanos', 'Timaios', 'Xanthos', 'Zephyros', 'Achilles', 'Hercules', 'Alxios',
        'Androcles', 'Aristotle', 'Cassandar', 'Chariton', 'Democritus', 'Dion', 'Dionysius', 'Euclid', 'Evaristus', 'Hermes',
        'Homeros', 'Kallistos', 'Kyros', 'Lycus', 'Melanthios', 'Nikandros', 'Pantaleon', 'Nereus', 'Origenes', 'Phaedrus',
        'Orpheus', 'Perseus', 'Xenon', 'Theron', 'Theodosios', 'Thales', 'Sophocles', 'Socrates', 'Pythagoras', 'Plato',
    ],
    female: [
        'Agape', 'Ambrosia', 'Artemisia', 'Berenice', 'Chrysanthe', 'Corinna', 'Demetria', 'Euphrasia', 'Gaiana', 'Helena', 
        'Irene', 'Kallisto', 'Kassandra', 'Lysandra', 'Melissa', 'Myrto', 'Nymphodora', 'Olympias', 'Phoibe', 'Roxana', 
        'Photina', 'Theokleia', 'Ptolemais', 'Eunike', 'Isodora', 'Nike', 'Sappho', 'Xanthippe', 'Xenia', 'Sophia', 
        'Myrrhine', 'Hypatia', 'Tryphosa', 'Heroidias', 'Glaphyra', 'Metrodora', 'Rhode', 'Theodora', 'Zoe', 'Thais', 
        'Kallistrate', 'Eutychia', 'Xanthe', 'Lysistrata', 'Elpis', 'Ligeia', 'Pelagia', 'Syntyche', 'Zenobia', 'Timothea', 
    ]
};

const ancient_roman_names = {
    male: [
        'Aetius', 'Albus', 'Antonius', 'Augustus', 'Brutus', 'Blasius', 'Caesar', 'Caius', 'Cicero', 'Cornelius',
        'Decimus', 'Domitius', 'Egnatius', 'Felix', 'Flavianus', 'Gaius', 'Glaucia', 'Horatius', 'Julius', 'Iovita',
        'Faustus', 'Tullus', 'Titus', 'Severinus', 'Salvius', 'Quintilius', 'Paulinus', 'Nero', 'Marcellus', 'Laurentinus',
        'Gnaeus', 'Crispus', 'Valentinus', 'Silvanus', 'Saturninus', 'Quintius', 'Petronius', 'Nerva', 'Marcus', 'Lucanus',
        'Jovian', 'Drusus', 'Vitus', 'Terentius', 'Seneca', 'Regulus', 'Pontius', 'Octavius', 'Maximilianus', 'Lucius',
    ],
    female: [
        'Aemilia', 'Camilla', 'Hadriana', 'Marcia', 'Rufina', 'Valentina', 'Augusta', 'Flavia', 'Lucia', 'Nona',
        'Aquila', 'Cassia', 'Julia', 'Martina', 'Maximiliana', 'Quintina', 'Valeriana', 'Caesonia', 'Galla', 'Ovidia',
        'Aurelia', 'Domitia', 'Laelia', 'Octavia', 'Saturnina', 'Verginia', 'Claudia', 'Germana', 'Paulina', 'Sabina',
        'Balbina', 'Fabiana', 'Liviana', 'Petronia', 'Tatiana', 'Agrippa', 'Drusilla', 'Hilaria', 'Severina', 'Vita',
        'Caelia', 'Floriana', 'Lucilla', 'Priscilla', 'Tullia', 'Alba', 'Fabiola', 'Herminia', 'Junia', 'Laurentina',
    ]
};

const ancient_egyptian_names = {
    male: [
        'Amenemhet', 'Hakor', 'Nebmakhet', 'Wenamon', 'Sen-nefer', 'Patenemheb', 'Irsu', 'Ibebi', 'Huy', 'Hardedef',
        'Anen', 'Khamet', 'Sarenpet', 'Nekure', 'Userhat', 'Nibamon', 'Ankhkhaf', 'Banefre', 'Djedefhor', 'Hepzefa',
        'Amosis', 'Merenre', 'Ptahshepses', 'Thethi', 'Rekhmire', 'Kenamon', 'Anubis', 'Khafra', 'Menkaura', 'Narmer',
        'Imhotep', 'Merkha', 'Re\'emkuy', 'Tchanun', 'Rahotep', 'Badru', 'Chatuluka', 'Khentimentiu', 'Psamtic', 'Senusnet',
        'Djedefre', 'Nebamun', 'Zezemonekh', 'Simontu', 'Ramose', 'Horemheb', 'Horus', 'Ramses', 'Sobk', 'Tehuti'
    ],
    female: [
        'Ahmes', 'Gararai', 'Anippe', 'Bahiti', 'Maat', 'Heqet', 'Tetisheri', 'Menhet', 'Ahmose ', 'Baketamon',
        'Ahura', 'Nefertari', 'Hehet', 'Nephthys', 'Naunet', 'Meskhenet', 'Dedyet', 'Kentetenka', 'Henutsekhemu', 'Khenthap',
        'Ariuru', 'Bintanath', 'Sekhet', 'Chione', 'Nefertiti', 'Merneith', 'Merit', 'Nebetah', 'Nitocris', 'Nofret',
        'Ankhsen', 'Betrest', 'Renenet', 'Isis', 'Acenath', 'Raia', 'Ptahneferu', 'Satiah', 'Tentamun', 'Werenro',
        'Bast', 'Hatshepsut', 'Dakhamunzu', 'Keket', 'Amunet', 'Sitamun', 'Sherhiryotes', 'Renesres', 'Nubemweskhet', 'Nakhtneith'
    ]
};

const viking_names = {
    male: [
        'SAXI', 'ǪLVIR', 'MISTIVIR', 'IÓAN', 'HEGVALDR', 'GINNAR', 'ERECK', 'DIÚRVÉR', 'BIARNHEÐINN', 'ALEINN',
        'SIGRÍKR', 'OVDEN', 'NÆFI', 'KIARTAN', 'HILDINGR', 'GRAMR', 'FÁFNIR', 'DÁINN', 'BIFLINDI', 'ALFRIGG',
        'TARR', 'PÉTR', 'NIKULAS', 'KOFRI', 'HǪÐR', 'GYLFI', 'FJALARR', 'DRAGMÁLL', 'BLÁINN', 'ÁNARR',
        'ULFARR', 'RAGGI', 'NÝR', 'LEIFI', 'HREINN', 'HAMAR', 'FRØYBIǪRN', 'DURINN', 'BǪLVERKR', 'BÆGLIR',
        'VANDILL', 'RØKIA', 'OLLAUFF', 'LIÓTR', 'IARL', 'HARIWOLFAR', 'GAGARR', 'EILÍFR', 'BYX', 'BELWAR'
    ],
    female: [
        'DÝRFINNA', 'YRSA', 'TÓRA', 'SKǪGUL', 'ÓTAMA', 'MÁR', 'IRPA', 'HÆRA', 'ELÍNA', 'ÆSA',
        'EYJA', 'ÁGÁTA', 'UNNA', 'STEINA', 'RAGNVǪR', 'MARGRÉTA', 'JÓRA', 'HALLGRÍMA', 'FREYDÍS', 'ASTRITH',
        'FJǪLVǪR', 'AURBOÐA', 'VALKA', 'SVALA', 'RANKA', 'MÝRÚN', 'KALDA', 'HERDÍS', 'FINNA', 'BORGA',
        'GÆIRVǪR', 'BEKKHILDR', 'VÉDÍS', 'SYN', 'SEFA', 'NÁL', 'LÍFA', 'HYNDLA', 'GLYRNA', 'BRÍGIÐA',
        'HETHA', 'BRANA', 'VÓR', 'TANNGNIÐR', 'SALGERÐR', 'ODINE', 'MÆVA', 'INGIBORG', 'GLYRNA', 'EISTLA'
    ]
};

const victorian_names = {
    male: [
        'John', 'William', 'James', 'George', 'Charles', 'Frank', 'Joseph', 'Henry', 'Robert', 'Thomas',
        'Edward', 'Harry', 'Walter', 'Arthur', 'Fred', 'Albert', 'Samuel', 'Clarence', 'Louis', 'David',
        'Joe', 'Charlie', 'Richard', 'Ernest', 'Roy', 'Will', 'Andrew', 'Jesse', 'Oscar', 'Willie',
        'Daniel', 'Benjamin', 'Carl', 'Sam', 'Alfred', 'Earl', 'Peter', 'Elmer', 'Frederick', 'Howard',
        'Lewis', 'Ralph', 'Herbert', 'Paul', 'Lee', 'Tom', 'Herman', 'Martin', 'Jacob', 'Michael'

    ],
    female: [
        'Mary', 'Anna', 'Emma', 'Elizabeth', 'Margaret', 'Minnie', 'Ida', 'Bertha', 'Clara', 'Alice',
        'Annie', 'Florence', 'Bessie', 'Grace', 'Ethel', 'Sarah', 'Ella', 'Martha', 'Nellie', 'Mabel',
        'Laura', 'Carrie', 'Cora', 'Helen', 'Maude', 'Lillian', 'Gertrude', 'Rose', 'Edna', 'Pearl',
        'Edith', 'Jennie', 'Hattie', 'Mattie', 'Eva', 'Julia', 'Myrtle', 'Louise', 'Lillie', 'Jessie',
        'Frances', 'Catherine', 'Lula', 'Lena', 'Marie', 'Ada', 'Josephine', 'Fannie', 'Lucy', 'Dora'
    ]
};

const current_names = {
    male: [
        'Liam', 'Noah', 'William', 'James', 'Logan', 'Benjamin', 'Mason', 'Elija', 'Oliver', 'Jacob',
        'Lucas', 'Alexander', 'Ethan', 'Daniel', 'Henry', 'Jackson', 'Aiden', 'Owen', 'Wyatt', 'Dylan',
        'Ajax', 'Benoit', 'Cillian', 'Daemyn', 'Gates', 'Kaz', 'Link', 'Malone', 'Nero', 'Penn',
        'Olson', 'Ranger', 'Roan', 'Teague', 'Valerian', 'Xanthus', 'Wolf', 'Jaegar', 'Finnian', 'Kiernan',
        'Sebastian', 'Matthew', 'Samuel', 'David', 'Carter', 'Grayson', 'Isaac', 'Julian', 'Joshua', 'Asher'

    ],
    female: [
        'Emma', 'Olivia', 'Ava', 'Isabella', 'Sophia', 'Mia', 'Charlotte', 'Amelia', 'Evelyn', 'Madison',
        'Harper', 'Emily', 'Ella', 'Victoria', 'Chloe', 'Nora', 'Lily', 'Hannah', 'Zoe', 'Elizabeth',
        'Aeryn', 'Cambree', 'Danya', 'Evania', 'Genna', 'Isaura', 'Jordana', 'Kalista', 'Leighanna', 'Manon',
        'Melora', 'Nyx', 'Odelia', 'Ranae', 'Rhoswen', 'Silvana', 'Thora', 'Valora', 'Zahrah', 'Zephyra',
        'Abigail', 'Mila', 'Aria', 'Scarlett', 'Grace', 'Zoey', 'Aubrey', 'Hazel', 'Savannah', 'Maya'

    ],
    unisex: [
        'Sam', 'Alex', 'Spencer', 'Phoenix', 'Avery', 'Dallas', 'Morgan', 'Quinn', 'Parker', 'Payton',
        'Charlie', 'Riley', 'Sawyer', 'Blake', 'Hayden', 'River', 'Finley', 'Denver', 'Dakota', 'Hollis',
        'Auren', 'Bronx', 'Calypso', 'Danelea', 'Keani', 'Locke', 'Madigan', 'Neo', 'October', 'Pax', 
        'Rain', 'Sailor', 'Silver', 'Troian', 'Vail', 'Wynn', 'Zephyr', 'Kenadie', 'Havana', 'Cheyne',
        'Alexis', 'Eden', 'Emmerson', 'Jordan', 'Karter', 'London', 'Peyton', 'Rowan', 'Taylor', 'Elliott'
    ]
};

const elf_names = {
    male: [
        'Baelen', 'Onvyr', 'Oryn', 'Naeryndam', 'Uldreiyn', 'Reysalor', 'Qildor', 'Galadriel', 'Riluaneth', 'Vesryn',
        'Mythanthar', 'Rivvikyn', 'Cymbiir', 'Finthir', 'Aranuil', 'Connak', 'Kelkalyn', 'Erunonidan', 'Tathdel', 'Lasslail', 
        'Phaendar', 'Aywin', 'Falael', 'Jonik', 'Voronwe', 'Rohan', 'Iston', 'Gildor', 'Earendil', 'Bailey', 
        'Ardreth', 'Gaelin', 'Inialos', 'Brybalar', 'Sundamar', 'Triandal', 'Zhuirentel', 'Virjeon', 'Eladithas', 'Lysanthir', 
        'Gaeleath', 'Camus', 'Saelihn', 'Haryk', 'Imizael', 'Kuornos', 'Molostroi', 'Neldor', 'Othorion', 'Raegel'
    ],
    female: [
        'Siofra', 'Lathia', 'Elidyr', 'Elora', 'Morwen', 'Briareth', 'Myrynda', 'Ilrune', 'Keya', 'Phantyni',
        'Saeya', 'Viansola',  'Alerathla', 'Maiela', 'Reinys', 'Ilyrana', 'Nalia', 'Elaria', 'Talindra', 'Gaelira',
        'Alluin', 'Omylia', 'Vena', 'Rina', 'Nessa', 'Luthien', 'Aerin', 'Aredhel', 'Alfreda', 'Elbereth', 
        'Elpharae', 'Tarasynora', 'Cauladra', 'Hacathra', 'Merlara', 'Ialantha', 'Halaena', 'Ghilanna', 'Fraeya', 'Alenia', 
        'Seldanna', 'Tehlarissa', 'Kaylessa', 'Veara', 'Soliania', 'Renestrae', 'Quamara', 'Nelaeryn', 'Laerdya', 'Keara'
    ],
    unisex: [
        'Aerendyl', 'Amrynn', 'Silvyr', 'Tarathiel',  'Eowyn', 'Daenys', 'Faelyn', 'Irithiel', 'Shyael', 'Taenaran',  
        'Aloiene', 'Nimanor', 'Ciyradyl', 'Seiveril', 'Eirae', 'Celethir', 'Myrin', 'Laedireil', 'Evanara', 'Maiele',
        'Ellisar', 'Soora', 'Nym', 'Gweyr', 'Kaede', 'Holcene', 'Paeris', 'Melian', 'Idril', 'Calen', 
        'Kailu', 'Emmyth', 'Caeda', 'Elnaril', 'Myrdin', 'Meriel', 'Aubron', 'Aithlin', 'Tyrael', 'Ryo', 
        'Naevys', 'Sylmare', 'Farryn', 'Lyari', 'Kendel', 'Anlyth', 'Malonne', 'Alosrin', 'Lierin', 'Ashryn' 
    ]
};

const angel_names = {
    male: [
        'Zakzakiel', 'Ophaniel', 'Mendrion', 'Xaphan', 'Jeremiel', 'Amnayelth', 'Ecanus', 'Mikhal', 'Nathanael', 'Aphaeleon',
        'Sammael', 'Rasiel', 'Erathaol', 'Caphriel', 'Conah', 'Morieshal', 'Briathos', 'Akriel', 'Tarshishim', 'Sabrathan',
        'Yusilthial', 'Onridal', 'Aneon', 'Malak', 'Amael', 'Uthion', 'Aestael', 'Pamphion', 'Uriel', 'Cael',
        'Ruphusrual', 'Imphral', 'Cenlion', 'Vanlon', 'Kemuel', 'Naaririel', 'Melkyal', 'Grigori', 'Yehudiah', 'Pravuil',
        'Tagas', 'Adonael', 'Abrariel', 'Mitatron', 'Israfil', 'Appoloin', 'Xathanael', 'Semalion', 'Onoel', 'Abraxos' 
    ],
    female: [
        'Ashliel', 'Adelphi', 'Breenelle', 'Lavina', 'Irin', 'Aeshma', 'Ephemera', 'Oriphiel', 'Lailah', 'Vohamanah',
        'Pronoia', 'Zarall', 'Mahanaim', 'Sraosha', 'Neriah', 'Pahaliah', 'Anahita', 'Tabbris', 'Oriash', 'Semyaza',
        'Andromeda', 'Inasyah', 'Maion', 'Venyis', 'Cesaelle', 'Simphis', 'Cemeson', 'Vanina', 'Michaela', 'Anahera', 
        'Hanniah', 'Nemamiah', 'Eshreal', 'Asaph', 'Hecca', 'Feota', 'Naomi', 'Phounebiel', 'Rafaela', 'Dara', 
        'Nihrurdis', 'Maimrith', 'Fimoenne', 'Phaelnaelle', 'Pesagniyah', 'Exousia', 'Sybil', 'Esme', 'Siofra', 'Malika'
    ],
    unisex: [
        'Seraph', 'Zophiel', 'Araqiel', 'Mydaiel', 'Adellum', 'Raduriel', 'Diniel', 'Empyrean', 'Ithuriel', 'Madan',
        'Amnayel', 'Peniel', 'Omniel', 'Gadreel', 'Ophanim', 'Chasan', 'Ambriel', 'Aarin', 'Mihr', 'Dardariel',
        'Jamaerah', 'Tartys', 'Hayyel', 'Douma', 'Anahel', 'Lahabiel', 'Rehael', 'Rahatiel', 'Vaethith', 'Yael', 
        'Anauel', 'Azazel', 'Izrail', 'Ubaviel', 'Mumiel', 'Rahmiel', 'Hadriel', 'Boamiel', 'Sabrael', 'Asteraoth', 
        'Nanael', 'Zaphiel', 'Eiael', 'Salathiel', 'Dabriel', 'Cadriel', 'Germael', 'Morael', 'Cerviel', 'Rachiel' 
    ]
};

const demon_names = {
    male: [
        'Bazazath', 'Aamon', 'Armaros', 'Djjal',  'Draven', 'Gedeon', 'Sephtis', 'Than', 'Drystan', 'Nekane',
        'Volkan', 'Legion', 'Dagon', 'Azazel', 'Ambrogio', 'Ahriman', 'Pyry', 'Runihura', 'Hadeon', 'Dolion',
        'Kuronon', 'Nyrrahn', 'Trazixan', 'Dynnex', 'Dzoavits', 'Blade', 'Abaddon', 'Forcas', 'Agares', 'Abraxos', 
        'Ryzath', 'Najriad', 'Fyznil', 'Garanolan', 'Zohneth', 'Aeryxir', 'Praxelon', 'Fharrenar', 'Carilixis', 'Mazaxis', 
        'Danokhi', 'Cidrucu', 'Dhamnimi', 'Redeknu', 'Somres', 'Bheknac', 'Kylnear', 'Dracon', 'Zohnyx', 'Voxrenar'
    ],
    female: [
        'Empusa', 'Kasdeya', 'Qarinah', 'Cozbi', 'Dubheasa', 'Enyo', 'Kali', 'Morana', 'Ahlai', 'Daeva',
        'Keres', 'Corleone', 'Mania', 'Naamah', 'Bacia', 'Sauda', 'Bellona', 'Deidamia', 'Tempest', 'Achlys',
        'Xennell', 'Ariesnixi', 'Kelyera', 'Zarintila', 'Drenvia', 'Urilaela', 'Ryraya', 'Zaehlea', 'Nimune', 'Lamashtu', 
        'Phaelyn', 'Canthiu', 'Shaaxxega', 'Siabbel', 'Sluxxial', 'Hyriana', 'Akyu', 'Khevivix', 'Telax', 'Vylnila', 
        'Kandria', 'Envahi', 'Ibucsa', 'Cenuphno', 'Pheharra', 'Cyvredh', 'Gwendydd', 'Velorina', 'Vespera', 'Kalonice'
    ],
    unisex: [
        'Jela', 'Corentin', 'Xaphan', 'Ravana', 'Adramelech', 'Batibat', 'Ciarda', 'Karau', 'Noire', 'Poe',
        'Pyro', 'Samhain', 'Storm', 'Thana', 'Paymon', 'Nyx', 'Merihim', 'Jilaiya', 'Israfel', 'Eblis',
        'Fezesh', 'Zuwugrin', 'Timundus', 'Adal', 'Alochra', 'Rian', 'Nemres', 'Nobophna', 'Cerana', 'Tartys', 
        'Imshih', 'Resdras', 'Jilaiya', 'Ravana', 'Rozeth', 'Aphrodi', 'Kinuiss', 'Maraned', 'Lemevlo', 'Lavegras', 
        'Thadna', 'Sothra', 'Anzara', 'Lorru', 'Xyo', 'Dhidansa', 'Demumva', 'Calebo', 'Ynaranin', 'Dazulnus'
    ]
};
// ----------------------------
// COMPLETED ABOVE 
//-------------------------------




// ------------------------------- 
// TO COMPLETE BELOW 
// -------------------------------



const godlike_names = {
    male: [
        'Neneus', 'Olios', 'Aeus', 'Xunas', 'Ranir', 'Useyr', 'Khyagi', 'Yrasil', 'Phohdros', 'Shilzotl',
        'Rhezdall', 'Siius', 'Liltyx', 'Vukysus', 'Uros', 'Reagi', 'Hordarr', 'Vazotl', 'Geros', 'Xases',
        'Erdon', 'Iplios', 'Arion', 'Kaenar', 'Gidlios', 'Latyx', 'Sezotl', 'Otreus', 'Raldall', 'Xysaos', 
        'Adryan', 'Cree', 'Kapono', 'Zaire', 'Finlay', 'Atlas', 'Orson', 'Iphion', 'Pyphion', 'Vephion',
        'Xeon', 'Graeme', 'Sorren', 'Rhydian', 'Roman', 'Rye', 'Dax', 'Lorcan', 'Mordecai', 'Rehan'
    ],
    female: [
        'Thaena', 'Idione', 'Uxtia', 'Nedana', 'Ovmera', 'Cyrone', 'Ylena', 'Cira', 'Reona', 'Qretia',
        'Eraura', 'Nemera', 'Xeana', 'Megasis', 'Zalene', 'Edite', 'Zartuna', 'Lydarae', 'Dyxana', 'Loxtune',
        'Yraura', 'Hodione', 'Zumenta', 'Xyddea', 'Calista', 'Aubrielle', 'Esme', 'Aurora', 'Pyxtia', 'Iktune',
        'Idona', 'Ashanti', 'Valencia', 'Devika', 'Zenaida', 'Avalon', 'Siobhán', 'Euphrasia', 'Caitríona', 'Allegra', 
        'Willow', 'Nimah', 'Ulani', 'Trinity', 'Rayna', 'Oriana', 'Mireya', 'Aviana', 'Fay', 'Enya'
    ],
    unisex: [
        'Vysyn', 'Derphin', 'Ormis', 'Bemtune', 'Eone', 'Ephion', 'Urneas', 'Moasis', 'Imtrix', 'Phenton',
        'Utia', 'Onesis', 'Atyx', 'Eses', 'Xisus', 'Suaris', 'Elaris', 'Atia', 'Dimis', 'Meren',
        'Exaris', 'Qevnos', 'Zadmes', 'Gisyn', 'Rowen', 'Xael', 'Gillian', 'Harlow', 'Xytia', 'Eion', 
        'Nova', 'Echo', 'Endellion', 'Averill', 'Onyx', 'Nashtyn', 'Storm', 'Adone', 'Weylyn', 'Detris', 
        'Zoien', 'Rialdin', 'Lexdis', 'Orion', 'Misha', 'Grae', 'Dian', 'Zephyr', 'Tarian', 'Romilly'
    ]
}

const shifter_names = {
    male: [
        'Remus', 'Lucian', 'Jaxon', 'Blayne', 'Aidryan', 'Brenn', 'Cayden', 'Kiran', 'Killian', 'Quinlan',
        'Maddock', 'Aidyn', 'Conaire', 'Tobias', 'Roman', 'Keveon', 'Griffen', 'Kinnon', 'Dyllon', 'Colm',
        '', '', '', '', '', '', 'Blade', 'Ryzath', 'Fyznil', 'Fharrenar', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', ''
    ],
    female: [
        'Raina', 'Brielle', 'Ciara', 'Keanna', 'Eliana', 'Jaima', 'Zia', 'Cadha', 'Morwenna', 'Adyna',
        'Eileen', 'Harper', 'Maeve', 'Gwyn', 'Meaghan', 'Riannon', 'Nairna', 'Isibeal', 'Aurora', 'Ceridwen',
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', ''
    ],
    unisex: [
        'Falcon', 'Zion', 'Cameron', 'Sol', 'Kai', 'Omari', 'Rowan', 'Beau', 'Breen', 'Remi',
        'Kerriel', 'Newlyn', 'Shea', 'Bryn', 'Hunter', 'Fane', 'Haley', 'Paiton', 'Emlyn', 'Robin',
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
    ]
}




const humanoid_names = {
    male: [
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', ''
    ], 
    female: [
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', ''
    ],
    unisex: [
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', ''
    ]
}

const non_humanoid_names = {
    male: [
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', ''
    ], 
    female: [
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', ''
    ],
    unisex: [
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', ''
    ]
}

const AI_names = {
    male: [
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', ''
    ], 
    female: [
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', ''
    ],
    unisex: [
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', ''
    ]
}

const zombie_names = {
    male: [
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', ''
    ], 
    female: [
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', ''
    ],
    unisex: [
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', '', 
        '', '', '', '', '', '', '', '', '', ''
    ]
}