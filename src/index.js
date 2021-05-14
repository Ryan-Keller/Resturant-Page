
import { fromPairs } from 'lodash'
import divBackground from './maindish'
import {supBitchesDiv, sidesPicExsist} from './sides'

let theDiv = document.getElementById('content')

let buttonBox = ()=>{
    let buttonBox = document.createElement('div')
    buttonBox.id = 'buttonBox'
    return buttonBox
}
theDiv.appendChild(buttonBox())

let buttonBoxDiv = document.getElementById('buttonBox')


let createTabButtonMianDishes = () => {
    let button = document.createElement('button')
    button.classList.add('tabDivButton')
    button.innerText = "Main Dishes"
    button.addEventListener(('click'), (e) => {
        theDiv.appendChild(sidesPicExsist())
    })
    return button
}

let createTabButtonDessert = () => {
    let button = document.createElement('button')
    button.classList.add('tabDivButton')
    button.innerText = "Desserts"
    button.addEventListener(('click'), (e) => {
        theDiv.appendChild(divBackground())
    })
    return button
}

buttonBoxDiv.appendChild(createTabButtonMianDishes())
buttonBoxDiv.appendChild(createTabButtonDessert())





theDiv.appendChild(supBitchesDiv())
