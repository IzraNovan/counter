var count = 0;

function tambah() {
    count++;
    document.getElementById('angka').innerHTML = count;
}

function kurang() {
    count--;
    document.getElementById('angka').innerHTML = count;
}

function reset() {
    count = 0;
    document.getElementById('angka').innerHTML = count;
}