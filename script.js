const imagesArray = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg'];

function generator(imagesArray) {
    let generator = imagesArray[Math.floor(Math.random() * imagesArray.length)];
    const container = document.getElementById('container');
    container.innerHTML = `<img src='./images/${generator}'>`
}

const btn = document.getElementById('random');
btn.addEventListener("click", function(){
    generator(imagesArray)
})

