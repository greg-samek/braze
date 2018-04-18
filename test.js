const integerTracker = require('./integerTracker');

const ints = new integerTracker();

ints.track(1);
ints.track(0);
console.log(assert(ints.get_max(), 1));
console.log(assert(ints.get_min(), 0));
console.log(assert(ints.get_mean(), 0.5));
console.log(assert(ints.get_mode(), 1));
ints.track(3);
ints.track(1);
console.log(assert(ints.get_max(), 3));
console.log(assert(ints.get_min(), 0));
console.log(assert(ints.get_mean(), 1.25));
console.log(assert(ints.get_mode(), 1));




// Helper function for tests.

function assert(value1, value2) {
    return value1 === value2;
}