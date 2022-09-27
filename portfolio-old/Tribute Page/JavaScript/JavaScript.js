// ================== OPENING FULL TABLE 1 ==================
var fullTable = document.getElementById('t1div');
fullTable.addEventListener('click', () =>{
    document.querySelector('#t1div').classList.toggle('full-table');
    // ---------RESTRICTING OVERFLOW-----------
    var overflow = document.querySelector('body');
    overflow.classList.toggle('overflow');
    
    // ---------ADDING CLOSING X-----------
    var closeTable = document.getElementById('t1closer') ;
    closeTable.classList.toggle('close-table');
})
// ============= ===============  ==============

// ================== OPENING FULL TABLE 2  ==================
var fullTable = document.getElementById('t2div');
fullTable.addEventListener('click', () =>{
    document.querySelector('#t2div').classList.toggle('full-table');
    // ---------RESTRICTING OVERFLOW-----------
    var overflow = document.querySelector('body');
    overflow.classList.toggle('overflow');
    
    // ---------ADDING CLOSING X-----------
    var closeTable = document.getElementById('t2closer') ;
    closeTable.classList.toggle('close-table');
})
// ============= ===============  ==============

// ================== OPENING FULL TABLE 3  ==================
var fullTable = document.getElementById('t3div');
fullTable.addEventListener('click', () =>{
    document.querySelector('#t3div').classList.toggle('full-table');
    // ---------RESTRICTING OVERFLOW-----------
    var overflow = document.querySelector('body');
    overflow.classList.toggle('overflow');
    
    // ---------ADDING CLOSING X-----------
    var closeTable = document.getElementById('t3closer') ;
    closeTable.classList.toggle('close-table');
})
// ============= ===============  ==============

// ================== OPENING FULL TABLE 4  ==================
var fullTable = document.getElementById('t4div');
fullTable.addEventListener('click', () =>{
    document.querySelector('#t4div').classList.toggle('full-table');
    // ---------RESTRICTING OVERFLOW-----------
    var overflow = document.querySelector('body');
    overflow.classList.toggle('overflow');
    
    // ---------ADDING CLOSING X-----------
    var closeTable = document.getElementById('t4closer') ;
    closeTable.classList.toggle('close-table');
})
// ============= ===============  ==============

// ================== OPENING FULL TABLE 5  ==================
var fullTable = document.getElementById('t5div');
fullTable.addEventListener('click', () =>{
    document.querySelector('#t5div').classList.toggle('full-table');
    // ---------RESTRICTING OVERFLOW-----------
    var overflow = document.querySelector('body');
    overflow.classList.toggle('overflow');
    
    // ---------ADDING CLOSING X-----------
    var closeTable = document.getElementById('t5closer') ;
    closeTable.classList.toggle('close-table');
})
// ============= ===============  ==============

// ================== OPENING FULL IMAGE  ==================
var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
function openFullImg(pic){
    fullImgBox.style.display = "flex";
    fullImg.src = pic;
    var overflow = document.querySelector('body');
    overflow.classList.toggle('overflow');
}
// ============= ===============  ==============

// ================== CLOSING FULL IMAGE  ==================
var closeFullImg = document.getElementById('close-img');
closeFullImg.addEventListener('click', function () {
    fullImgBox.style.display = "none";
    var overflow = document.querySelector('body');
    overflow.classList.toggle('overflow');
})
// ============= ===============  ==============


