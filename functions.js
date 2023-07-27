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

