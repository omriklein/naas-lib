const reasons = require('./reasons.json');

/**
 * Return a random "No" reason.
 * @returns {string} A random rejection reason.
 */
module.exports = function getNo() {
    const index = Math.floor(Math.random() * reasons.length);
    const reason = reasons[index];
    return reason;
}
