# First 🍅
[x] remove dead code
[x] Readability: proper naming of variables
    p -> positionAndDirection
    s -> positionAndDirectionArray
    rs -> roverState
    dd -> direction
    cms -> roverMovementInstruction
    i -> instruction
    c -> instructionElement
    Not sure yet about xx and yy but for now serves its purpose
[x] Rename magic numbers to constants
    3 -> minimumAmountOfInputVariables
    L -> Left
    E -> East
    N -> North
    W- > West
    S -> South
    R -> Right
    M -> Move

# Second 🍅
[x] Remembered Alessandro comment not to rename public methods, so rolling that back
[x] Add back unused public method for the same reason
[x] Extract instruction into its own method
    [x] move constants to class level
    [x] checkForLeftTurn
    [x] performLeftTurn
    [x] checkForRightTurn
    [x] performRightTurn
    [x] checkForMove
    [x] executeMove

Third 🍅
[x] Rewrite if statement in go function to switch statement
[x] Extract is looking in each direction to own method
[x] Extract moving to own method
[x] Methods for updating direction
[x] Introduce switch statement instead of if chaining

Fourth 🍅
[x] Introduce position class
[x] Add a getter for position in roverState
[x] Add a setter so constructor can set position

Fifth 🍅
[x] Expand methods for moving to position class
[x] Expand methods for updating direction to position class
[x] Migrate to new methods

Sixth 🍅
[ ] Contract old method


