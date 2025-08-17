let count_el = document.getElementById("counts");
let count = 0;
function increment() {
    count += 1;
    count_el.innerText = count;
}

let rst_count = document.getElementById("counts");
function reset() {
    count = 0;
    rst_count.innerText = count;
}
