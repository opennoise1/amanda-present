const QuestionPages: { [key: number] : [number, string[]] } = {
    // Question number: [Wikipedia Page ID, [Title Options]]
    1: [1485962, ["The Mask", "Mask",]],
    2: [537416, ["Ace Ventura: When Nature Calls", "Ace Ventura 2", "Ace Ventura 2: When Nature Calls", "Ace Ventura When Nature Calls"]],
    3: [1042287, ["Campari"]],
    4: [27929, ["Scrabble"]],
    5: [83688, ["Beyoncé", "Beyonce Knowles"]],
    6: [22847481, ["Seminole Hard Rock Hotel & Casino Hollywood", "The Guitar Hotel", "Guitar Hotel", "Seminole Hard Rock Hotel"]],
    7: [649382, ["Pareidolia"]],
    8: [47150958, ["Imperator Furiosa", "Furiosa"]],
    9: [4848143, ["New York Yankees", "NY Yankees", "Yankees"]],
    10: [13075446, ["HEALTH"]],
}

const QuestionPagesDayTwo: { [key: number] : [number, string[]] } = {
    1: [398837, ["Darren Hayes", "Hayes"]],
    2: [148858, ["Kakigori"]],
    3: [72908535, ["Rick Glassman", "Glassnman"]],
    4: [82754308, ["Rachel Kaly", "Kaly"]],
    5: [55624408, ["Always Ascending"]],
    6: [52371022, ["Weyes Blood"]],
    7: [42250917, ["Tauba Auerbach", "Auerbach"]],
    8: [20448, ["Museum of Jurassic Technology", "The Museum of Jurassic Technology"]],
    9: [1281638, ["Ways of Seeing"]],
    10: [180432, ["Hollywood Forever Cemetery", "Hollywood Forever"]],
}

const QuestionPagesDayThree: { [key: number] : [number, string[]] } = {
    1: [17486994, ["The Mole", "Mole"]],
    2: [66445438, ["Brad Mondo", "Mondo"]],
    3: [4911224, ["CityPlace", "The Square", "Rosemary Square"]],
    4: [2139688, ["Dobermann", "Doberman Pinscher"]],
    5: [1120742, ["Artichoke"]],
    6: [5865828, ["Pieces of the People We Love", "POTPWL"]],
    7: [48549205, ["The Great Pottery Throw Down", "Great Pottery Throw Down"]],
    8: [347781, ["Parsons School of Design", "The Parsons School of Design", "Parsons"]],
    9: [621798, ["Jah Wobble"]],
    10: [699466, ["Habbo", "Habbo Hotel"]]
}

const QuestionPagesDayFour: { [key: number] : [number, string[]] } = {
    1: [3383634, ["Dreyfoos School of the Arts", "Alexander W. Dreyfoos School of the Arts", "Dreyfoos", "DSOA", "D.S.O.A."]],
    2: [10565411, ["Foals"]],
    3: [432006, ["Bloomberg L.P.", "Bloomberg", "Bloomberg LP"]],
    4: [2859384, ["Flat white"]],
    5: [1521644, ["Lumines: Puzzle Fusion", "Lumines"]],
    6: [44187499, ["90 Day Fiancé", "Ninety Day Fiancé"]],
    7: [1794603, ["Tim Heidecker", "Heidecker", "Timothy Heidecker", "Timothy Richard Heidecker"]],
    8: [5947616, ["Astoria Park"]],
    9: [6901706, ["YoungArts", "National YoungArts Foundation", "National Foundation for Advancement in the Arts", "NFAA", "N.F.A.A."]],
    10: [544694, ["Publix", "Publix Super Markets, Inc.", "Publix Super Markets"]],
}

const QuestionPagesErin: { [key: number] : [number, string[]] } = {
    1: [101631, ["Yukio Mishima", "Mishima"]],
    2: [343408, ["The Artistocats", "Aristocats"]],
    3: [71357738, ["NewJeans"]],
    4: [25276055, ["Ariana Grande", "Ariana", "Grande"]],
    5: [454754, ["Stanley Tucci", "Tucci", "Stanley Tucci Jr."]],
    6: [496020, ["Arrested Development"]],
    7: [4501, ["Black Death", "The Black Death", "The Plague"]],
    8: [18571859, ["Hachi: A Dog's Tale", "Hachi", "A Dog's Tale"]],
    9: [2965870, ["Canelé", "Cannelé", "Canele"]],
    10: [1690149, ["Sephora", "Sephora SA"]],
}

const QuestionPagesIris: { [key: number] : [number, string[]] } = {
    1: [48109, ["Miffy"]],
    2: [17209001, ["Troye Sivan", "Troye", "Sivan", "Troy Sivan", "Troye Sivan Mellet"]],
    3: [4221870, ["Conan O'Brien", "Conan"]],
    4: [5134, ["Chess"]],
    5: [650592, ["Otis Worldwide", "Otis Worldwide Corporation", "Otis", "OTIS", "Otis Elevator Company"]],
    6: [1573080, ["Bob Iger", "Iger", "Robert Iger", "Robert Alan Iger"]],
    7: [14734, ["Iron", "Fe"]],
    8: [1380297, ["James Turrell"]],
    9: [22015, ["Neopets"]],
    10: [18667376, ["Bananagrams"]],
}

const allQuestions = [QuestionPages, QuestionPagesDayTwo, QuestionPagesDayThree,
  QuestionPagesDayFour, QuestionPagesErin, QuestionPagesIris,
]

export default allQuestions;
