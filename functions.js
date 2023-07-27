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