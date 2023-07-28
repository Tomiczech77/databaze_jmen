/********************************************************************
    Načtení data z localStorage do proměnné names;
    pokud je localStorage prázdný, tak do names se uloží prázdné pole
*********************************************************************/
const names = getSavedNames()

/********************************************************************
    Odeslání formuláře a uložení do localStorage pomocí proměnné names
*********************************************************************/
let myForm = document.querySelector("#test-form")
let myCheckbox = document.querySelector(".my-checkbox")

myForm.addEventListener("submit", function(event){
    event.preventDefault()

    names.push({
        id: uuidv4(),
        firstName: event.target.elements.firstName.value,
        adult: myCheckbox.checked
    })

    event.target.elements.firstName.value = ""
    myCheckbox.checked = false;

    saveNames(names)
})

/*******************************
    Vypisování zpět do stránky
********************************/
let buttonToList = document.querySelector(".to-list")
buttonToList.addEventListener("click", function(event){
    document.querySelector(".list-names").innerHTML = ""
    
    let namesFromStorageJSON = JSON.parse(localStorage.getItem("names"))
    
    namesFromStorageJSON.forEach(function(name){
        const oneNameHTML = generateHTMLstructure(name)
        document.querySelector(".list-names").appendChild(oneNameHTML)
    })
})