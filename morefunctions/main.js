const updateDOM = (input) => {
    const divEl = document.querySelector('#output')
    const p = document.createElement('p')
    p.textContent = input
    divEl.appendChild(p)
}

const travel = (distance, rate, time = 1.5) => distance/rate * time 

updateDOM(travel(60, 2, 10))

