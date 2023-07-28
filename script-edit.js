let nameID = location.hash.substring(1)
let names = getSavedNames()

// Vytažení objektu
let searchedName = names.find(function(oneObject){
    return oneObject.id === nameID
})

// Když id nelze najít, přesměruje nás to automaticky na stránku index.html
if(searchedName === undefined){
    location.assign("index.html")
}

// Vypíše se nám jméno do inputu
document.querySelector("#edited-name").value = searchedName.firstName

// Můžeme změnit jméno v input a změnit ho u celého objektu
let changingForm = document.querySelector("#changing-form").addEventListener("submit", function(event){
    event.preventDefault()

    searchedName.firstName = event.target.elements.changingName.value

    saveNames(names)
})