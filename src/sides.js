let supBitchesDiv = ()=>{
    const element = document.createElement('div')
    element.innerHTML = 'sup bitches'
    return element
}

let sidesPicExsist = ()=>{
    const pic = document.createElement('img')
    pic.src = "https://i.kym-cdn.com/photos/images/facebook/001/278/233/c0f"
    const textTag = document.createElement('div')
    textTag.innerHTML = 'Desserts'
    return pic
}

let textTagDesserts = ()=>{
    const text = document.createElement('div')
    text.innerHTML = "Desserts"
    return text
}

export {supBitchesDiv, sidesPicExsist, textTagDesserts}
