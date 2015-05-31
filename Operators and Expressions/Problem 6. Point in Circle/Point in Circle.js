/*Write an expression that checks if given point P(x, y) is within a circle K(O, 5) */
function isInsideCircle(x,y,cx,cy,r){
    return (x-cx)*(x-cx)+(y-cy)*(y-cy)<r*r;
}
var circleX=0;
var cirleY=0;
var radius=5;

console.log(isInsideCircle(100,-39,circleX,cirleY,radius));
console.log(isInsideCircle(2,2.655,circleX,cirleY,radius));