function saturdayFun(activity = "roller-skate"){
    return (`This Saturday, I want to ${activity}!`)
}


function mondayWork(activity = "go to the office"){
    return (`This Monday, I will ${activity}.`)
}
mondayWork("work from home");

function wrapAdjective(word = "*"){
    return function(anotherWord){
            return `You are ${word}${anotherWord}${word}!`; 
    }
}

