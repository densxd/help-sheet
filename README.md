# help-sheet-package

Kendim için işlerimi kolaylaştırmak adına yaptığım bir modül.

İleriki zamanlar'da bir çok şeyler eklenecek tabi kullanmak isterseniz.

# Güncellemeler

Türkçe küfür regex desteği eklendi.
3 Adet regex kontrol ettirme vardır Invite/Link/Küfür sonucunu Boolean verir.

# Örnek kullanımlar
```js
const { Find, ObjFind, EzPush, EzPull, Shuffle, Sleep, RandomNumber, RandomChar, CheckReg } = require('help-sheet')

CheckReg("orospu", "küfür") sonuc > true
CheckReg("discord.gg/", "invite") sonuc > true
CheckReg("https://github.com/densxd", "link") sonuc > true


const mongoose = require('mongoose');

let data = MongoDatanız
EzPush(data, data.<Object>, item); // Kolayca belirttiğiniz datayı pushlar
EzPull(data, data.<Object>, item); // Kolayca belirttiğiniz datayı çeker


let Arr = ["Data","Var","Delete"];
let Obj = [{"ID":"1", "Name": "Dens"}];
// (Find) Üçlü Arraya kadar destkliyor. (ObjFind) İkili arraya kadar destekliyor.
Find(Arr, "Data") // Data bulunmaz ise Belirttiğiniz Arrayi Döndürür geri.
ObjFind(Obj, "Name") // Data bulunmaz ise Belirttiğiniz Objecti Döndürür geri.


RandomChar(max, opsiyon) 
// max yerine maximum istediğiniz random karakter opsiyon yerine true koyarsanız random karakterlerde büyük harfler olur.

RandomNumber(min, max) // İstediğiniz kadar random sayı üretir min max'a göre.

Shuffle(array) // Arrayinizi karıştırır
Sleep(ms) // Timeout
```

Githubum: https://github.com/densxd
Package Github: https://github.com/densxd/help-sheet
