'use strict';

class HallOfFame {

    constructor(numberOfPlayers = 5, arrayOfPlayers = null) {

        let newArrayLenght = numberOfPlayers;

        // Handle situaton if incomming array of players has bigger length that imcomming length parameter
        // If we avoid doing so, we will get -1 index for additional element we .push() into players array
        if (arrayOfPlayers && arrayOfPlayers.length > numberOfPlayers) {
            newArrayLenght = arrayOfPlayers.length;
        }

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

        } else {
            console.log(`No more space in the array. We can't add ${player[0]}`);
        }

        return this;

    }

}

// Custom test
const testCumstomSort = new HallOfFame(3, [['Sam', 10], ["Sad", 10], ["Jesica", 1], ["Micheal", 5]]);
console.log(testCumstomSort.list);
testCumstomSort.add(["Monica", 17]);
console.log(testCumstomSort.list);

// Your Test
const top = new HallOfFame(); // размер 5 по умолчанию
top.add(["A", 4]).add(["E", 3]).add(["I", 1])
console.log(top.list) // --> ["A: 4","E: 3","I: 1","",""] //  <-- 2 "пустых игрока" в конце списка
top.add(["S", 5]).add(["T", 7])
console.log(top.list) // --> ["T: 7","S: 5","A: 4","E: 3","I: 1"]