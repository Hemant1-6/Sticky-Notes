var listOfNotes = document.getElementById('newNote')
listOfNotes.addEventListener('click', actionPerformed)

var arr = document.getElementsByClassName('textNote')

console.log(listOfNotes.innerHTML)
listOfNotes.innerHTML = localStorage.getItem('stickyNotes')

for (var i = 0; i < arr.length; i++) {
    arr[i].addEventListener('input', saveStickyNotes)
}


document.getElementById('addNotes').addEventListener('click',
    function () {
       
        var newSpan = document.createElement('span')
        var newTextArea = document.createElement('textarea')
        var deleteButton = document.createElement('button')

        newTextArea.placeholder = "Don't Hurry! First make a Note here."
        deleteButton.innerHTML = "Delete Note"
        newSpan.append(newTextArea)
        newSpan.append(deleteButton)
        deleteButton.classList.add('deleteNote')
        newTextArea.classList.add('textNote')
        listOfNotes.append(newSpan)

        save()
    })


function actionPerformed() {
    if (event.target.tagName == 'BUTTON')
        if (window.confirm('Are You Sure') == true)
            event.target.parentElement.remove()

    save()
}

function saveStickyNotes() {
    this.innerHTML = this.value
    save()
}

function save() {
    // console.log(listOfNotes.innerHTML)
    localStorage.setItem('stickyNotes', listOfNotes.innerHTML)
}