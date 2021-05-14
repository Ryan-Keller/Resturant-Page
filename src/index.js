
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


let createTabDiv = () => {
    let tabDiv = document.createElement('button')
    tabDiv.classList.add('tabDiv')
    tabDiv.innerText = "hola"
    return tabDiv
}
buttonBoxDiv.appendChild(createTabDiv())



theDiv.appendChild(divBackground())

theDiv.appendChild(supBitchesDiv())

theDiv.appendChild(sidesPicExsist())
