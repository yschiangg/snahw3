var database = firebase.database();


function ToTop() {
    scroll(0, 0);
}

function FontChangeS() {
    document.getElementById("change").style.fontSize = "small";
}

function FontChangeM() {
    document.getElementById("change").style.fontSize = "medium";
}

function FontChangeL() {
    document.getElementById("change").style.fontSize = "large";
}



function processFormData() {
    var name_element = document.getElementById('name').value;
    var feedback_element = document.getElementById('feedback').value;
    console.log(feedback_element);
    writeUser(name_element, feedback_element);
    document.getElementById('name').value="";
    document.getElementById('feedback').value="";
    alert("謝謝填寫！");
}

function writeUser(name_element, feedback_element) {
    firebase.database().ref('users/' + name_element).set({
        name: name_element,
        feedback: feedback_element
    })
}


