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
[ ] Extract instruction into its own method
    [x] move constants to class level
    [x] checkForLeftTurn
    [x] performLeftTurn
    [x] checkForRightTurn
    [x] performRightTurn
    [x] checkForMove
    [x] executeMove



    


