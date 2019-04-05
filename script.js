function findMin() {
    let sequence = document.getElementById('arrayElements').value.toString();
    if (sequence.length ===0){
        alert("Please enter sequence")
    } else {
        let array = sequence.split(",");
        let count = 0;
        let min = Number(array[0]);
        let position =[];
        for (let i = 0; i<=array.length;i++){
            if (array[i]<=min){
                min = Number(array[i]);
            }
        }
        for (let i=0;i<array.length;i++) {
            if (min === Number(array[i])) {
                count++;
                position.push(i + 1);
            }
        }
        if (count === array.length)  document.getElementById('result').innerHTML = 'Your sequence is the same';
        else if (count ===1) {
                document.getElementById('result').innerHTML = 'Min is ' + min;
                document.getElementById('position').innerHTML = 'At the ' + position[0] + ' of the sequence'
        } else if (count>1){
        document.getElementById('result').innerHTML = 'The min in your sequence is ' + min + ' with ' + position.length + ' numbers';
        document.getElementById('position').innerHTML = 'Those are at ' + position.join(',') + ' of the sequence'
        }
    }
}
function listen() {
    document.addEventListener('keydown', checkKey);
}
function checkKey(e) {
    let keyCode = (event.key);
    let sequence = document.getElementById('arrayElements').value.toString();
    if (keyCode!== ',' && keyCode !== '-' && keyCode !== '.' && keyCode !== '1' && keyCode !== '2' && keyCode !== '3' && keyCode !== '4' && keyCode !== '5' && keyCode !== '6' && keyCode !== '7' && keyCode !== '8' && keyCode !== '9') {
        e.preventDefault()
    }
    if (keyCode ===','&& sequence=== '') e.preventDefault();
}