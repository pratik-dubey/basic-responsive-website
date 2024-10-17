const clock = document.querySelector('#clock')

setInterval(function() {
    const data = new Date
    clock.innerHTML = date.toLocaleTimeString()
} ,1000)