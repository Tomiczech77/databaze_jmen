const names = getSavedNames()


let myForm = document.querySelector("#test-form")
myForm.addEventListener("submit", function(event){
    event.preventDefault()

    names.push({
        id: "",
        firstName: event.target.elements.firstName.value
    })
})