const calcExtensions = (array) => {

    // Regex Pattern for Extension Extraction
    let pattern = /\.[0-9a-z]+$/i;

    let newArray = array.map(t =>
        t.match(pattern)[0]
    );

    // Count number of matching for a single extension
    let counts = {};
    newArray.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });

    // Get biggest number per extension
    let biggestValue = 0;
    for (const key in counts) {
        if (counts[key] > biggestValue) {
            biggestValue = counts[key];
        }
    }

    // Get Extensions with the biggest numbers
    let resultArray = [];
    for (const key in counts){
        if(counts[key] == biggestValue) resultArray.push(key);
    }

    resultArray.sort()

    return resultArray;
}

array = ['crazy.pr', 'black-and-white.als', 'illegal.wav', 'exultant.mp3', 'exotic.jar', 'capricious.pt', 'abundant.ala', 'eatable.zbrush', 'careful.py',
    'godly.css', 'clever.txt', 'dusty.maya', 'awesome.zbrush', 'discreet.jar', 'creepy.h', 'fair.pt', 'descriptive.mp3', 'boundless.ala', 'berserk.xml',
    'hungry.exe', 'awful.exe']

console.log(calcExtensions(array));