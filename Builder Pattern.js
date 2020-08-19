class Address{
    constructor(zip, street){
        this.zip =zip
        this.street = street
    }
}

class User {
    constructor(name, {age, phone = '122456789', address} = {}){
        this.name = name
        this.age=age
        this.phone = phone
        this.address = address
    }
}

let user = new User('Bob', {age:10, phone: '1111' ,address: new Address('1', 'Main')})
/*
class UserBuilder{
    constructor(name){
        this.user = new User(name)
    }

    setAge(age){
        this.user.age = phone
        return this
    }

    setPhone(phone){
        this.user.phone = phone
        return this
    }

    setAddress(address){
        this.user.address = address
        return this
    }

    build(){
        return this.user
    }
}

let user = new UserBuilder('Bob').setAge(10).build()
*/
console.log(user)
