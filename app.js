// const fs = require('fs')
// fs.writeFileSync('notes.txt','Hello')

// console.log(fs.readFileSync('notes.txt').toString())

// fs.appendFileSync('notes.txt','Amira')

//___________________________________________________________

// const x = require('./data')

// console.log(x)
// console.log(x.name)
// console.log(x.l)
// console.log(x.sum(5,5))

//_____________________________________________________________


// const validator = require('validator')
// console.log(validator.isEmail('Amira@gmail.com'))

// const chalk =require('chalk')
// const msg = chalk.green.bold('Sucess')
// console.log(msg)


//_____________________________________________________________
// console.log(process.argv)
// console.log(command)

// const command = process.argv[2]
// console.log(command)

// if (command === 'add') {
//     console.log('add item')
// }
// else if (command === ' delete') {
//     console.log('remove item')
// }

//_____________________________________________________________

// const yargs = require('yargs')

// yargs.command({
//     command: 'add',
//     describe: 'Add notes',
//     builder: {
//         title: {
//             describe: 'this is title of note to be added',
//             type: 'string',
//             demandOption:true
//         },
//         body: {
//             describe: 'this is body of note to be added',
//             type: 'string',
//             demandOption:true
//         }
//     },
//     handler: () => {
//         console.log('Add notes')
//     }
// })
// yargs.command({
//     command: 'delete',
//     describe: 'Delete notes',
//     builder: {
//         title: {
//             describe: 'this is title of note to be deleted',
//             type: 'string',
//             demandOption:true
//         }
//     },
//     handler: () => {
//         console.log('Delete notes')
//     }
// })
// yargs.command({
//     command: 'list',
//     describe: 'list notes',
//     handler: () => {
//         console.log('list notes')
//     }
// })
// yargs.command({
//     command: 'read',
//     describe: 'read notes',
//     builder: {
//         title: {
//             describe: 'this is title of note to be read',
//             type: 'string',
//             demandOption:true
//         }
//     },
//     handler: () => {
//         console.log('read notes')
//     }
// })

// console.log(yargs.argv)
// yargs.parse()

//_____________________________________________________________


const yargs = require('yargs')
const notes = require('./notes')

yargs.command({
    command: 'add',
    describe: 'Add notes',
    builder: {
        title: {
            describe: 'this is title of note to be added',
            type: 'string',
            demandOption:true
        },
        body: {
            describe: 'this is body of note to be added',
            type: 'string',
            demandOption:true
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
       
    }
})

yargs.command({
    command: 'delete',
    describe: 'Delete notes',
    builder: {
        title: {
            describe: 'this is title of note to be deleted',
            type: 'string',
            demandOption:true
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'read',
    describe: 'read notes',
    builder: {
        title: {
            describe: 'this is title of note to be read',
            type: 'string',
            demandOption:true
        }
    },
    handler: (argv) => {
        notes.readNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: () => {
        notes.listNote()
    }
})

yargs.parse()




