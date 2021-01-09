var comp = document.getElementById('comp');
var gard = document.getElementById('gard');
var acc = document.getElementById('acc');
var span = document.getElementById('third');
var subCotain1 = document.getElementById('subContain1');
var subContain2 = document.getElementById('subContain2');
var subContain3 = document.getElementById('subContain3');

comp.onclick = function reveal(){
    comp.style.backgroundColor="rgb(103, 202, 5)";
    comp.style.color="white";
    gard.style.backgroundColor="white";
    gard.style.color="grey";
    acc.style.backgroundColor="white";
    acc.style.color="grey";
    span.innerHTML="COMPOST";
    subContain1.style.display="block";
    subContain2.style.display="none";
    subContain3.style.display="none";
}
gard.onclick = function reveal2(){
    gard.style.backgroundColor="rgb(103, 202, 5)";
    gard.style.color="white";
    comp.style.backgroundColor="white";
    comp.style.color="grey";
    acc.style.backgroundColor="white";
    acc.style.color="grey";
    span.innerHTML="GARDEN";
    subContain1.style.display="none";
    subContain2.style.display="block";
    subContain3.style.display="none";
}
acc.onclick = function reveal3(){
    acc.style.backgroundColor="rgb(103, 202, 5)";
    acc.style.color="white";
    comp.style.backgroundColor="white";
    comp.style.color="grey";
    gard.style.backgroundColor="white";
    gard.style.color="grey";
    span.innerHTML="ACCESSORIES";
    subContain1.style.display="none";
    subContain2.style.display="none";
    subContain3.style.display="block";
}

//switch shopping items


