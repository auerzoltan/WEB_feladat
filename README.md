# Money Manager Applikáció készítése

<i>-Határidő: 2023. november 24. 23:59</i>
<h1>Utasítások</h1>
Adatbázis: 12A_moneymanager
Táblák: 
- users (ID, name, email, passwd)
- items (ID, userID, date, type, amount, tag)  (type: kiadás vagy bevétel, tag: tankolás, étkezés, ruházat, munkadíj, stb...)
- szorgalmi: catgs (ID, tagname)
- Kinézet - Egyedi (Bootstrap, css, html)
<h2>Funkciók:</h2>
felhasználó regisztráció (validációval)
felhasználó login/logout (validáció, sessionStorage)
menü (Belépés, Regisztráció, Adatfelvitel, Táblázat, Naptár, Grafikon (barchart), Egyenleg (linechart) ) Bejelentkezve: az egyenleg menü legyen aktív
<h2>Adatfelvitel:</h2> 
- dátum, bevétel vagy kiadás, összeg és a címke megadása, validáció!
- Táblázat (a felhasználó adatainak megjelenítése táblázatban)
- Naptár (a felhasználó adatainak megjelenítése egy fullcalendar-ban, kiadás: piros, bevétel zöld event)
- Grafikon (a felhasználó adatainak megjelenítése egy chartjs barchar-ban)
- Egyenleg (a felhasználó adatainak megjelenítése egy chartjs linechart-ban)
<h2>Prokejtmanagement:</h2>
- Jira + GitHub repo
<h2>Backend:</h2>
A lépésszámláló app backend-je
