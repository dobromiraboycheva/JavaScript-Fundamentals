/*Write a function to count the number of div elements on the web page*/
function countElements(type) {

    var count = document.getElementsByTagName(type).length ;
    document.getElementById('result').innerHTML = 'count: ' + count;
    document.getElementById('btnCount').style.display = 'none';
}