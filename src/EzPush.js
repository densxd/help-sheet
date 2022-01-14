/**
 * @param { Object{} } data
 * @param { Array[] } variable
 */

// Databasedeki arrayin içine kolayca istediğin şeyi pushlama.
module.exports = async function EzPush(data, variable, item) {
    if (!data || !variable || !item) return console.log(new Error("Argümanları doğru giriniz. Örn = KolayPush(data, Isimler, pushlanacak şey)"))
    try {
        variable.push(item)
        await data.save()
    } catch (err) { console.log(err) }
}
