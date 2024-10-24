document.getElementById('check').addEventListener('click', function() {
    let sub1 = parseInt(document.getElementById('sub1').value);
    let sub2 = parseInt(document.getElementById('sub2').value);
    let sub3 = parseInt(document.getElementById('sub3').value);
    let result = document.getElementById('result');
    
    
    if (isNaN(sub1) || isNaN(sub2) || isNaN(sub3)) {
        result.innerText = "Please enter valid marks.";
        return;
    }
    
    let total = sub1 + sub2 + sub3;

    if (total >= 0 && total <= 50) {
        result.innerText = "Your grade is: Fail";
    } else if (total > 50 && total <= 100) {
        result.innerText = "Your grade is:Pass";
    } else if (total > 100 && total <= 150) {
        result.innerText = "Your grade is:First class";
    } else {
        result.innerText = "Your grade is:Invalid total";
    }
});
