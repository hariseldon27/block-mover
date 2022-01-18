function rowBuilder(width) {
 //this creates rows based on input of X width   
 for (let i = 0; i < width; i++){
    row.push([])
 }
}

function matrixBuilder(height){
matrix.push(row)
}

function dynamicMatrix(width, height) {
    //takes width and height and passes them to the row and matrix builder
    const matrix = []
    const row = []
    matrixBuilder(height)
    rowBuilder(width)
}
