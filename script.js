const names = getSavedNames()


let myForm = document.querySelector("#test-form")
myForm.addEventListener("submit", function(event){
    event.preventDefault()

    names.push({
        id: uuidv4(),
        firstName: event.target.elements.firstName.value
    })

    event.target.elements.firstName.value = ""

    saveNames(names)
})