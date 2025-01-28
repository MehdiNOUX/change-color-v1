const btn = document.getElementById('btn')
const color = ["yellow", "blue", "red", "black", "pink"]
let count = 0;
btn.addEventListener('click', () => {
    count++;
    btn.textContent = `START : ${count}`
    document.body.style.backgroundColor = color[count % color.length]
})
