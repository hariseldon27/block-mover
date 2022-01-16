# block-mover
simple grid movement based on array 

this is a test file to try and see how we can make a sort of
dot-matrix to use in the West-is-best Tetris game.

We want to create a 10x16 grid that will be mapped to an array, 
the array holds either true or false
if true, grid is black
if false, grid is white
bind the array true/false to key presses
to move right and left we are going to shift/unshift the array
to move up and down we are going to map new items to the next row being printed
----note here - eventually, this will want to read top-down as that----
----is the movement of the pieces in tetris
