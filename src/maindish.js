
let divBackground = ()=>{
    const picZeldaFood = document.createElement('img')
    picZeldaFood.src = "https://i.ytimg.com/vi/CYutF8qr7AY/hqdefault.jpg"
    return  picZeldaFood
}

let textTagMainDish = ()=>{
    const mainDishText = document.createElement('div')
    mainDishText.innerHTML = 'Main Dish'
    return mainDishText
}

export  {divBackground, textTagMainDish}
