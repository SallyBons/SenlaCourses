'use strict';

class HallOfFame {

    constructor(numberOfPlayers = 5, arrayOfPlayers = null) {

        let newArrayLenght = numberOfPlayers;

        this.listOfPlayers = Array(newArrayLenght).fill('');

        // Handle with the imcomming player array if exists and fill the array with new players        
        if (arrayOfPlayers) {

            for (const element of arrayOfPlayers) {

                if (this.listOfPlayers.includes('') != -1) {

                    let index = this.listOfPlayers.indexOf('');
                    delete this.listOfPlayers[index];
                    this.listOfPlayers[index] = element;

                } else {
                    this.listOfPlayers.push(element);
                }

            }
        }
    }

    get list() {

        let resultArray = []

        resultArray = this.listOfPlayers.sort(function (a, b) {

            // Custom sorting
            if (a[1] == b[1]) {
                // What to do if scores are identical
                if (a[0] < b[0]) return -1;
                if (a[0] > b[0]) return 1;
            }
            if (a[1] > b[1]) return -1;
            if (a[1] < b[1]) return 1;

        })

        // Formated output
        resultArray = resultArray.map(x => {
            if (x !== '') {
                return x = `${x[0]}: ${x[1]}`
            } else return ''
        })

        return resultArray;

    }

    add(player) {

        // Check if there are any empty spaces in the players array, if there are such -> add new player to the array
        if (this.listOfPlayers.indexOf('') != -1) {

            const index = this.listOfPlayers.indexOf('');
            delete this.listOfPlayers[index];
            this.listOfPlayers[index] = player;

        }

        return this;

    }

}

// Additional tests
const x = new HallOfFame(3, [[ 'Bob', 88 ], [ 'Eva', 66 ], [ 'Ada', 44 ] ]);
x.add([ 'Clo', 10 ]);
console.log(x.list);

//Additional test #2
const y = new HallOfFame(3, [[ 'Bob', 88 ], [ 'Kim', 88 ], [ 'Zoe', 88 ] ]);
y.add([ 'Clo', 10 ]).add([ 'Ada', 44 ]);
console.log(y.list);