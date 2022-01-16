module.exports = Promise.prototype.Delete = function (time) {
    if (this) this.then(message => {
        if (message.deletable)
            setTimeout(() => message.delete(), time)
    });
};