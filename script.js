var canvas = new fabric.Canvas('canvas');

document.getElementById('textInput').addEventListener('keyup', function() {
    updateText();
});

document.getElementById('colorSelect').addEventListener('change', function() {
    updateText();
});

document.getElementById('fontSelect').addEventListener('change', function() {
    updateText();
});

document.getElementById('sizeSelect').addEventListener('change', function() {
    updateText();
});

function updateText() {
    var text = document.getElementById('textInput').value;
    var color = document.getElementById('colorSelect').value;
    var font = document.getElementById('fontSelect').value;
    var size = parseInt(document.getElementById('sizeSelect').value);

    canvas.clear();
    var textObj = new fabric.Text(text, {
        left: 100,
        top: 200,
        fill: color,
        fontFamily: font,
        fontSize: size
    });
    canvas.add(textObj);
    canvas.renderAll();
}