document.getElementById('check').addEventListener('click', function() {
    let year = parseInt(document.getElementById('year').value);
    let result = document.getElementById('result');

    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        result.innerText = "It is a leap year" ;
    } else {
        result.innerText = "It is not a leap year";
    }
});
