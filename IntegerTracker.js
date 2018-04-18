/*
track(int) - Receives an integer for tracking.

get_max() - Returns the max (int) of all integers seen so far.

get_min() - Returns the min (int) of all integers seen so far.

get_mean() - Returns the mean (float) of all integers seen so far.

get_mode() - Returns the mode (most frequent) (int) of all integers seen so far.
 */



module.exports = class integerTracker {

    constructor() {
        this.integers = [];
        this.count = 0;
        this.total = 0;
        this.max = null;
        this.min = null;
        this.mean = null;
        this.mode = null;
        this.mapTrackedInts = new Map();
    }

    track(int) {
        this.count += 1;
        this.integers.push(int);
        this.total += int;

        if (this.count === 1) {
            this.max = int;
            this.min = int;
            this.mean = int;
            this.mode = int;
            this.mapTrackedInts.set(int, 1);
        } else {
            this.max = Math.max(int, this.max);
            this.min = Math.min(int, this.min);
            this.mean = this.total.toFixed(2) / this.count;
            if (this.mapTrackedInts.has(int)) {
                const count = this.mapTrackedInts.get(int) + 1;
                if(count > this.mapTrackedInts.get(this.mode)) this.mode = int;
                this.mapTrackedInts.set(int, count);
            } else {
                this.mapTrackedInts.set(int, 1);
            }
        }

    }

    get_max() {
        return this.max;
    }

    get_min() {
        return this.min;
    }

    get_mean() {
        return this.mean;
    }

    get_mode() {
        return this.mode;
    }

}

