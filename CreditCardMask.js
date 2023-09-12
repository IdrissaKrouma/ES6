const creditCardMask = numero => {
    let output = ""
    for(index in numero){
        output += (index < numero.length-4)? "#" : numero[index]
    }
    return output
}
console.log(creditCardMask("64607935616"));