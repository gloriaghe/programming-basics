const month = prompt("inserisci il mese di nascita");
const day = prompt("inserisci il giorno di nascita");

if( month == "dicembre" && day >= 22 || month == "gennaio" && day <= 19 ){
    alert("Sei del segno del Capricorno");
} else if( month == "gennaio" && day >= 20 || month == "febbraio" && day <= 18 ){
    alert("Sei del segno del Acquario");
} else if( month == "febbraio" && day >= 19 || month == "marzo" && day <= 20 ){
    alert("Sei del segno dei Pesci");
} else if( month == "marzo" && day >= 21 || month == "aprile" && day <= 19 ){
    alert("Sei del segno dell'Ariete");
} else if( month == "aprile" && day >= 20 || month == "maggio" && day <= 20 ){
    alert("Sei del segno del Toro");
} else if( month == "maggio" && day >= 21 || month == "giugno" && day <= 20 ){
    alert("Sei del segno dei Gemelli");
} else if( month == "giugno" && day >= 21 || month == "luglio" && day <= 22 ){
    alert("Sei del segno del Cancro");
} else if( month == "luglio" && day >= 23 || month == "agosto" && day <= 22 ){
    alert("Sei del segno del Leone");
} else if( month == "agosto" && day >= 23 || month == "settembre" && day <= 22 ){
    alert("Sei del segno della Vergine");
} else if( month == "settembre" && day >= 23 || month == "ottobre" && day <= 22 ){
    alert("Sei del segno della Bilancia");
} else if( month == "ottobre" && day >= 23 || month == "novembre" && day <= 21 ){
    alert("Sei del segno dello Scorpione");
} else if( month == "novembre" && day >= 22 || month == "dicembre" && day <= 21 ){
    alert("Sei del segno del Saggitario");
} else 
    alert("I dati inseriti sono errati");
