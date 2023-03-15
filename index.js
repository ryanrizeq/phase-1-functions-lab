// Code your solution in this file!
const hq = 42;
const blockToFt = 264;

function distanceFromHqInBlocks(street) {
    return Math.abs(street - 42);
}

function distanceFromHqInFeet(street) {
    return Math.abs((street - 42) * blockToFt);
}

function distanceTravelledInFeet(start, end) {
    return Math.abs((start - end) * blockToFt);
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return 0.02 * (distance - 400);
    } else if (distance > 2000 && distance <= 2500) {
        return 25.00;
    } else {
        return 'cannot travel that far';
    }
}