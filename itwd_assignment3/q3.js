document.getElementById('check').addEventListener('click', function() {
    let num = parseInt(document.getElementById('year').value);
    let result = document.getElementById('result');

    if (num %2==0  &&  num>0) {
        result.innerText = "It is a positive even number" ;
    } else if(num %2!=0  &&  num>0) {
        result.innerText = "It is a positive odd number ";
    }
    else if(num %2==0  &&  num<0) {
        result.innerText = "It is a negative even number ";
    }
    else if(num %2!=0  &&  num<0) {
        result.innerText = "It is a negative odd number ";
    }
});
