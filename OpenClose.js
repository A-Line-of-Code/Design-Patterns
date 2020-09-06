/*
function printQuiz(questions){
    questions.forEach(question => {
        console.log(question.description)
        switch(question.type){
            case 'boolean':
                console.log('1. True')
                console.log('2. False')
                break
            case 'multipleChoice':
                question.options.forEach((option, index) => {
                    console.log(`${index + 1}. ${option}`)
                })
                break
            case 'text':
                console.log('Answer:____________')
                break
        }
        console.log('')
    })
}

const questions =[
    {
        type: 'boolean',
        description: 'This video is useful.'
    },
    {
        type: 'multipleChoice',
        description: 'What is your favorite language?',
        options: ['CSS','HTML','JS','Python']
    },
    {
        type:'text',
        description: 'Describe your favorite JS feature.'
    }
]
printQuiz(questions)
*/


class BooleanQuestion{
    constructor(description){
     this.description = description;
    }

    printQuestionChoices(){
        console.log('1. True')
        console.log('2. False')
    }
}

class multipleChoiceQuestions{
    constructor(description, options){
        this.description = description
        this.options = options
    }
    
    printQuestionChoices(){
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`)
        })
    }
}

function printQuiz(questions){
 questions.forEach(question => {
     console.log(question.description)
     question.printQuestionChoices()
     console.log('')
 })
}

const questions = [
    new BooleanQuestion('This video is useful.'),
    new multipleChoiceQuestions(
        'What is your favorite language?', ['CSS','HTML','JS','Python']
    )
]

printQuiz(questions)