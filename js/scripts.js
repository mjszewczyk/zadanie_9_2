var femaleNames = ['Asia', 'Basia', 'Kasia', 'Michasia'];
var maleNames = ['Jaś', 'Staś', 'Krzyś', 'Ryś'];

var allNames = femaleNames.concat(maleNames);
alert('Wszystkie imiona: ' + allNames.join(' $& '));

var newName = prompt('Podaj imię');
if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
} else {
    alert('Imię, które wpisałeś już występuje: ' + newName);
} 

// zadanie dodatkowe

var nameToRemove = prompt('Podaj imię do usunięcia z listy');
var names = allNames.filter(function(name){
    return name != nameToRemove;
});
alert('Lista po usunięciu: ' + names.join(' # ')); 

