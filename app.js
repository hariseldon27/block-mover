// function returnsTetrisBoard() {

//     const row1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // Each cell in the array (indexes 0-9) should contain either 1 (truthy) or 0 (falsy)
//     const row2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // 1 if the cell is being occupied by part of the tetris piece, 0 if not
//     const row3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//     const row4 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//     const row5 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//     const row6 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//     const row7 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//     const row8 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//     const row9 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // this was a pain in the a** to write
//     const row10 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
//     const row11 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//     const row12 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//     const row13 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//     const row14 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//     const row15 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
//     const row16 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] // what if each cell held an object, so that it could store more information? 
//                                                 // What kind of information? Color? About block shape?

//     const fullBoard = [
//         row1,
//         row2,
//         row3,
//         row4,
//         row5,
//         row6,
//         row7,
//         row8,
//         row9,
//         row10,
//         row11,
//         row12,
//         row13,
//         row14,
//         row15,
//         row16
//     ] // this also sucked to write

//     console.log(fullBoard)
//     console.table(fullBoard)

//     return fullBoard; 
// }

const row1 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0]

function moveLeft() {
    //this will shift the array one digit 
    const piece = row1.shift()
        //debugger
    row1.push(piece)    
    console.log(row1)
    return row1
}

function moveRight() {
    //this will unshift the array one digit
    const piece = row1.pop()
    row1.unshift(piece)
    console.log(row1)
    return row1
}

//lets fill in a table on the html
function buildMatrix() {
    // const boardDiv = document.getElementById('board')
    // const row = document.getElementById('row1')
    // const table = boardDiv
    // const tr = document.createElement('tr')
    // const td = document.createElement('td')
    
    for (let i = 0; i < 10; i++) {
        let cell = document.getElementById(`cell${i}`)
        cell.textContent = row1[i]
        //debugger        
    }

    // the below works, but i think it can be in one loop 
    // document.getElementById('cell0').textContent = row1[0]
    // document.getElementById('cell1').textContent = row1[0]
    // document.getElementById('cell2').textContent = row1[0]
    // document.getElementById('cell3').classList.toggle(row1[3])
    // document.getElementById('cell4').classList.toggle(row1[4])
    // document.getElementById('cell5').classList.toggle(row1[5])
    // document.getElementById('cell6').classList.toggle(row1[6])
    // document.getElementById('cell7').classList.toggle(row1[7])
    // document.getElementById('cell8').classList.toggle(row1[8])
    // document.getElementById('cell9').classList.toggle(row1[9])

    //if row.childNodes[]
    //debugger

}
function boardPiece(){
    document.getElementById()
}
buildMatrix()

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveLeft()
      buildMatrix();
    } else if (e.key === "ArrowRight") {
          moveRight()
          buildMatrix();
    } else if (e.key === "ArrowUp") {
          //moveUp();
    } else if (e.key === "ArrowDown") {
          //oveDown();
    } 
    }
  );