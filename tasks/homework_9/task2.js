'use strict'
let getStatistic = (incomingString) => {

    // Detect empty string and return ''
    if(incomingString.replace(/^\s+|\s+$/g, '').length === 0) return '';

    let elements = incomingString.split(',');

    elements = elements.map(el => {
        const values = el.split('|');
        return Number(values[0]) * 3600 + Number(values[1]) * 60 + Number(values[2]);
    })

    let range = elements.reduce((min, val) => Math.max(min, val), elements[0]) - elements.reduce((min, val) => Math.min(min, val), elements[0]);
    range = toReqestedFormat(range);

    let average = Math.floor(elements.reduce((accum, curr) => accum + curr) / elements.length);
    average = toReqestedFormat(average);

    let median = NaN;
    elements = elements.sort((a, b) => a - b );

    if (elements.length % 2 === 0) {
        const secondEl = elements[Math.floor(elements.length / 2)];
        const firstEl = elements[Math.floor(elements.length / 2) - 1];
        median = Math.floor((firstEl + secondEl) / 2);
    } else {
        median = elements[Math.floor(elements.length / 2)];
    }
    median = toReqestedFormat(median)

    return `Range: ${range} Average: ${average} Median: ${median}`;
}

let toReqestedFormat = (numberOfSeconds) => {
    let hours = String(Math.floor(numberOfSeconds / 3600));
    hours.length === 1 ? hours = '0' + hours : hours;
    let minutes = String(Math.floor((numberOfSeconds % 3600) / 60));
    minutes.length === 1 ? minutes = '0' + minutes : minutes;
    let seconds = String(Math.floor(numberOfSeconds % 60));
    seconds.length === 1 ? seconds = '0' + seconds : minutes;

    return `${hours}|${minutes}|${seconds}`
}

// Primary tests
console.log(getStatistic('12|17|20, 10|16|16, 1|22|00, 2|32|34, 10|26|37, 13|19|34, 2|32|34, 12|17|20, 02|17|20'));
console.log(getStatistic('1|32|34, 2|22|00, 2|17|17, 1|17|48, 02|17|20, 1|47|16, 00|22|34, 00|22|34, 1|47|16, 9|22|34, 2|17|17, 2|22|00, 00|17|20, 00|22|34, 10|26|37, 1|47|16, 11|22|00'));
console.log(getStatistic('9|22|34, 2|17|17, 12|17|48, 1|15|59, 10|16|16'));
console.log(getStatistic('00|19|34, 02|17|20, 2|47|16'));

// Secondary tests 
console.log(getStatistic('  '));
console.log(getStatistic('00|19|34, 02|17|20, 05|20|18, 03|07|18'));