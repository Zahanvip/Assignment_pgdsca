document.getElementById('changeColor').addEventListener('click', function() {
    let colorName = document.getElementById('colorInput').value;
    let colorInput = document.getElementById('colorInput');

    colorInput.style.backgroundColor = colorName;

    document.getElementById('colorInput').value = '';
});
