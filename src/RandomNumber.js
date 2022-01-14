// İstediğiniz kadar random sayı oluşturma.
module.exports = function RandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}