/**
 * @param { Object{} } data
 * @param { String } variable
 */

// Databasedeki arrayin içine kolayca istediğin şeyi pullama.
module.exports = async function EzPull(data, variable, item){
    if (!data || !variable || !item) return console.log(new Error("Argümanları doğru giriniz. Örn = KolayPull(data, Isimler, çıkartılacak şey)"))
    try {
        data[variable] = data[variable].filter(x => x !== item)
        await data.save()
    } catch (err) { console.log(err) }
}