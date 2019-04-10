function findMurder(string, suspects) {
    let res = new RegExp('^' + string.replace(/\~/g, '.'), 'i');
    let found = suspects.filter(x => res.test(x));
    return found ? found.join(',') : '';
}

const names = ['Anastasia', 'C Powel', 'Wilfrid Stevens', 'Peter Brien', 'J Steeve', 'Arthur Clarke', 'Bernard Deltheil',
    'R Steell', 'Peter Gone', 'Peter Reeves', 'Roland Scorsini', 'Bernard Povit', 'Peter Reedgrave', 'Raymond Stevenson',
    'E Kustur', 'P McDon', 'Paul Dive', 'F Flanaghan', 'C Saborn', 'John Freeland', 'Jr Part', 'Pete Highman',
    'Arthur Paternos', 'P Reed', 'W Mount', 'Paulo Divino', 'Sophia Loren', 'W Mount', 'Peter Pan', 'Anna Stevens',
    'Laurence Pantow', 'Peter Crush', 'Ray Charles', 'William Saurin', 'Donald Drinkaw', 'F Fulgur', 'Ray Chandler'
];

//Old tests
console.log(findMurder('~~T~~r~pa~e~No', names));
console.log(findMurder('~oLA~D~sc~Rs~Ni', names));
console.log(findMurder('~~~~~~~~NE', names));
console.log(findMurder('w~MOu~T', names));
console.log(findMurder('~~~~r', names));

// New tests 
testsuspects=['Bernard Deltheil','R Steell','Peter Gone','Peter Reeves','Roland Scorsini']
console.log(findMurder('p~t~r', testsuspects))