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
    const newLink = document.createElement("a")
    const button = document.createElement("button")

    // Nastavení mazacího tlačítka
    button.textContent = "Vymazat jméno"
    newDiv.appendChild(button)

    button.addEventListener("click", function(event){
        removeNames(names, oneName.id)
        saveNames(names)
        toListAgain()
    })

    newLink.textContent = oneName.firstName
    if(oneName.adult === true){
        newLink.classList.add("adult")
    } else {
        newLink.classList.add("no-adult")
    }

    newLink.setAttribute("href", `edit.html#${oneName.id}`)

    newDiv.appendChild(newLink)

    return newDiv
}


/***********************************************************************
    Podle ID najdeme index daného jména a pomocí splice jo odstraníme
************************************************************************/
const removeNames = function(ourNames, id){
    const index = ourNames.findIndex(function(nameWantToCheck){
        return nameWantToCheck.id === id
    })

    if(index > -1){
        ourNames.splice(index, 1)
    }
}

/***********************************************************************
    Pokud smažeme nějaké jméno z localStorage, tak tato funkce zapezpečí opětovné vypsání localStorage (tedy vypsání bez smazaného jména)
************************************************************************/
const toListAgain = function(){
    document.querySelector(".list-names").innerHTML = ""

    let newData = getSavedNames()
    
    newData.forEach(function(oneName){
        const newContent = generateHTMLstructure(oneName)
        document.querySelector(".list-names").appendChild(newContent)
    })
}