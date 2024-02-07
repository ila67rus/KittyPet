class Cat {
    constructor(food) {
        this.food = food;
    }

    feed() {
        this.food += 10;
        if (this.food >= 100) {
            this.food = 100
        }
        document.querySelector('.food').textContent = cat.food;
    }

    checkState() {
        if (cat.food > 50) {
            document.querySelector('.pet_img').src = 'good.webp';
        } else {
            document.querySelector('.pet_img').src = 'bad.png';
        }
        document.querySelector('.food').textContent = cat.food;
    }
}

const cat = new Cat(100);

document.querySelector('.feed').addEventListener('click', function () {
    cat.feed()
})

let intervalId = setInterval(() => {

    cat.food -= Math.floor(Math.random() * (5 - 1) + 1)
    if (cat.food <= 0) {
        cat.food = 0;
        clearInterval(intervalId)
    }
    cat.checkState()
}, 3000);

