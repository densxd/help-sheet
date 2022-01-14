// İnvite/Link/küfür regex kontrolcü boolean cevap verir.
const Vrbs = require('./Vrs/longVrbs.json')
module.exports = function CheckReg(content, option) {
    let inviteRegex = /(https:\/\/)?(www\.)?(discord\.gg|discord\.me|discordapp\.com\/invite|discord\.com\/invite)\/([a-z0-9-.]+)?/i;
    let linkRegex = /(http[s]?:\/\/)(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/gi;
    let swearRegex = Vrbs.swears
    if (option && option == 'invite' || option == 'davet') return inviteRegex.test(content);
    else if (option && option == 'link') return linkRegex.test(content);
    else if (option && option == 'küfür' || option == 'swear') { if ((swearRegex).some(x => new RegExp("(\\b)+(" + x + ")+(\\b)", "gui").test(content))) return true;else return false}
}
