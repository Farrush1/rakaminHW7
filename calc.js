function squareArea (side){
    return side * side;
}

function squarePerimeter(side){
    return 4 * side;
}

function rectangularArea (lenght, width){
    return lenght * width;
}

function rectangularPerimeter (lenght,width){
    return 2 * (lenght * width);
}

module.exports = {
    squareArea, 
    squarePerimeter, 
    rectangularArea, 
    rectangularPerimeter
};