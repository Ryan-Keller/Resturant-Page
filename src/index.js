
import { fromPairs } from 'lodash'
import {divBackground, textTagMainDish} from './maindish'
import {supBitchesDiv, sidesPicExsist, textTagDesserts} from './sides'

let theDiv = document.getElementById('content')

let buttonBox = ()=>{
    let buttonBox = document.createElement('div')
    buttonBox.id = 'buttonBox'
    return buttonBox
}
theDiv.appendChild(buttonBox())

let buttonBoxDiv = document.getElementById('buttonBox')

let ranInstanceOfDivBackground = divBackground()
let ranInstanceofSidePicExsist = sidesPicExsist()
let ranInstanceOfTextTagMainDish = textTagMainDish()
let ranInstanceOfTextTagDesserts = textTagDesserts()

let createTabButtonMianDishes = () => {

    let button = document.createElement('button')
    button.classList.add('tabDivButton')
    button.innerText = "Main Dishes"
    button.addEventListener(('click'), (e) => {
        theDiv.appendChild(ranInstanceOfTextTagMainDish)
        theDiv.removeChild(ranInstanceOfTextTagDesserts)
        theDiv.appendChild(ranInstanceofSidePicExsist)
        theDiv.removeChild(ranInstanceOfDivBackground)
    })
    return button
}

let createTabButtonDessert = () => {

    let button = document.createElement('button')
    button.classList.add('tabDivButton')
    button.innerText = "Desserts"
    button.addEventListener(('click'), (e) => {
        theDiv.appendChild(ranInstanceOfTextTagDesserts)
        theDiv.removeChild(ranInstanceOfTextTagMainDish)
        theDiv.appendChild(ranInstanceOfDivBackground)
        theDiv.removeChild(ranInstanceofSidePicExsist)
    })
    return button
}

buttonBoxDiv.appendChild(createTabButtonMianDishes())
buttonBoxDiv.appendChild(createTabButtonDessert())





theDiv.appendChild(supBitchesDiv())
