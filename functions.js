/**********************************************
    Funkce načítající data z localSorage;
    Ošetřit, pokud data v localStorage nejsou
***********************************************/
const getSavedNames = function(){
    const myNames = localStorage.getItem("names")

    if(myNames !== null){
        return JSON.parse(myNames)
    } else {
        return []
    }
}


/**********************************************
    Funkce pro použití při odeslání formuláře;
    Ukládá do localStoragr jméno z formuláře
***********************************************/
const saveNames = function(oneName){
    localStorage.setItem("names", JSON.stringify(oneName))
}


/***********************************************************************
    Generování HTML struktury, kterou umístíme do stránky po kliknutí na tlačítko "Vypiš"
    + použijeme ji také pro vypsíná nových informací z localStorage, když nějaké jméno vymažeme pomocí tlačítka "Vymazat jméno"
************************************************************************/
const generateHTMLstructure = function(oneName){
    const newDiv = document.createElement("div")
    const newSpan = document.createElement("span")
    const button = document.createElement("button")

    // Nastavení mazacího tlačítka
    button.textContent = "Vymazat jméno"
    newDiv.appendChild(button)

    newSpan.textContent = oneName.firstName
    newDiv.appendChild(newSpan)

    return newDiv
}