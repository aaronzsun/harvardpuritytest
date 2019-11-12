var score;

function calculateScore(){
    var score = 0;
    for(i = 1; i <= 90; i++){
        if(i > 0 && i <= 30){
            if(document.getElementById(i).checked == true){
                score += 1;
            }
        }
        if(i > 30 && i <= 60){
            if(document.getElementById(i).checked == true){
                score += 2;
            }
        }
        if(i > 60 && i <= 90){
            if(document.getElementById(i).checked == true){
                score += 3;
            }
        }
    }
    score = 100 - Math.round(score * (100/180));
    document.location.href = "results.html";
    localStorage.setItem("scoreStorage", score);
}

function results(){
    document.getElementById("scoreDisplay").innerHTML = localStorage.getItem("scoreStorage");
}


function resetBoxes(){
    var i;
    for(i = 1; i <= 90; i++){
        document.getElementById(i).checked = false;
    }
}