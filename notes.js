const fs = require('fs')

// const addNote = (title, body) => {

//     const notes = loadNotes()
    
//     notes.push({
//         title:title,
//         body:body
//     })
//     saveNotes(notes)
// }

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateTitles = notes.filter((note) => {
        return note.title === title
    })
    console.log(duplicateTitles)
    if (duplicateTitles.length === 0) {
         notes.push({
            title:title,
            body: body
         })
        saveNotes(notes)
        console.log('saved Successfully')
    }
    else {
        console.log('Error DUPLICATE Title')
    }
  
}


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json').toString()
        return JSON.parse(dataBuffer)
    }
    catch (e) {
        return []
    }
}

const saveNotes = (notes) => {
    const saveData = JSON.stringify(notes)
    fs.writeFileSync('notes.json',saveData)
}

const removeNote = (title) => {
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => {
        return note.title !== title
    })
    console.log(notesToKeep)
    saveNotes(notesToKeep)
    console.log('Removed')
}

const readNote = (title) => {
    const notes = loadNotes()

    const note = notes.find((note) => {
        return note.title === title
    })
    
    //console.log(note)
    if (note) {
        console.log(note.body)
    } else {
        console.log('Not Found')
    }
}

const listNote = () => {
    const notes = loadNotes()

    notes.forEach((note) => {
        console.log(note.body)
    })

}


module.exports = {
    addNote,
    removeNote,
    readNote,
    listNote
}