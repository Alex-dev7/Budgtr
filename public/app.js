const tagButton = document.querySelector(".tagButton")
const tagsContainer = document.querySelector(".tagContainer")



tagButton.addEventListener("click", (e) => {
     e.preventDefault()

    const lineBreak = document.createElement('br')
    const newInput = document.createElement("input") 
    newInput.type = "text"
    newInput.name = "tags[]"
    newInput.placeholder = "tag"
    tagsContainer.append(newInput, lineBreak)
   

})