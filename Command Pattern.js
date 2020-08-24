class Calculator{
    constructor(){
        this.value = 0
        this.history = []
    }

    executeCommand(command){
        this.value = command.execute(this.value)
        this.history.push(command) 
    }

    undo(){
        const command = this.history.pop(
        this.value = command.undo(this.value)
        )
    }
}

class AddCommand{
    constructor(valueToAdd){
        this.valueToAdd = valueToAdd
    }

    execute(currentValue){
        return currentValue + this.valueToAdd
    }

    undo(currentValue){
        return currentValue - this.valueToAdd
    }
}

class DivideCommand{
    constructor(valueToDivide){
        this.valueToDivide = valueToDivide
    }

    execute(currentValue){
        return currentValue / this.valueToDivide
    }

    undo(currentValue){
        return currentValue * this.valueToDivide
    }
}

class AddThenDivideCommand{
    constructor(valueToAdd, valueToDivide){
        this.addCommand = new AddCommand(valueToAdd)
        this.divideCommand = new DivideCommand(valueToDivide)
    }

    execute(currentValue){
        const newValue = this.addCommand.execute(currentValue)
        return this.divideCommand.execute(newValue)
    }
    
    undo(currentValue){
        const newValue = this.divideCommand.undo(currentValue)
        return this.addCommand.undo(newValue)
    }
}

const calculator = new Calculator()
calculator.executeCommand(new AddCommand(10))
console.log(calculator.value)
calculator.unde()