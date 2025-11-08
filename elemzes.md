A program egy egyszerű szervert hoz létre Node.js segítségével
Az Express nevű csomag felel azért, hogy a szerver kéréseket tudjon fogadni és válaszokat küldeni
A cors és a body-parser részek segítenek abban, hogy a szerver más programokkal is tudjon kommunikálni, és az adatok JSON formátumban legyenek
A kód csatlakozik egy kozutak nevű adatbázishoz, amelyben a régiók adatai találhatók
Az app.get("/") csak ellenőrzésre szolgál, ha működik a szerver, akkor visszaírja, hogy „Fut a backend!”
A másik fontos rész, az app.get("/regiok"), lekéri az összes adatot a regiok táblából, és elküldi a választ a kliensnek
Így a program célja, hogy összekapcsolja az adatbázist a felhasználói felülettel, és megmutassa az adatokat egyszerűen interneten keresztül