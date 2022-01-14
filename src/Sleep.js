// Promise ile sleep.
module.exports = function Sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}