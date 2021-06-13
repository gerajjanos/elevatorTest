//------------------------Two lift objects are required for the program (atleast in my opinion)----------------------------//


var movingLift= "";    //for testing purposes only
var currentLevel = ""; //represents the current level of the lift before the call happens
var liftA = {
    currentFloor: 0,
    calledFrom: 0,
    direction: "up",
    moving: false
};

var liftB = {
    currentFloor: 6,
    calledFrom: 0,
    direction: "down",
    moving: false
};

//--------------------- Call one of the lifts upon pressing the caller button on one of the Levels-------------------------//
//--------------Also it has to decide wich of the elevators is closer to the target level of the building------------------//
//--------If they are at the same distance, the one on the lower level of the building is going to pick up the person------//

function callElevator(buttonId) {
    if(Math.abs(liftA.currentFloor - buttonId) < Math.abs(liftB.currentFloor - buttonId)){
        currentLevel= liftA.currentFloor;
        liftA.currentFloor = buttonId;
        liftA.calledFrom = buttonId;
        liftA.moving = true;
        console.log("liftA");                   //for testing purposes only
        console.log(liftA.currentFloor);        //for testing purposes only
        movingLift = liftA;                     //for testing purposes only
        console.log(currentLevel);              //for testing purposes only
        console.log(movingLift);                //for testing purposes only
        direction(liftA, buttonId);
        floorLightsControll(liftA); 
        resetMovement(liftA);
    } else {
        if (Math.abs(liftB.currentFloor - buttonId) < Math.abs(liftA.currentFloor - buttonId)){
            currentLevel= liftB.currentFloor;
            liftB.currentFloor = buttonId;
            liftB.calledFrom = buttonId;
            liftB.moving = true;
            console.log("liftB");                   //for testing purposes only
            console.log(liftB.currentFloor);        //for testing purposes only
            movingLift = liftB;                     //for testing purposes only
            console.log(currentLevel);              //for testing purposes only
            console.log(movingLift);                //for testing purposes only
            direction(liftB, buttonId);
            floorLightsControll(liftB); 
            resetMovement(liftB);
        } else {
            if (Math.abs(liftB.currentFloor - buttonId) == Math.abs(liftA.currentFloor - buttonId)){
                if(liftA.currentFloor < liftB.currentFloor){
                    currentLevel= liftA.currentFloor;
                    liftA.currentFloor = buttonId;
                    liftA.calledFrom = buttonId;
                    liftA.moving = true;
                    console.log("liftA");               //for testing purposes only
                    console.log(liftA.currentFloor);    //for testing purposes only
                    movingLift = liftA;                 //for testing purposes only
                    console.log(currentLevel);          //for testing purposes only
                    console.log(movingLift);            //for testing purposes only
                    direction(liftA, buttonId);
                    floorLightsControll(liftA);
                    resetMovement(liftA);
                } else {
                    currentLevel= liftA.currentFloor;
                    liftB.currentFloor = buttonId;
                    liftB.calledFrom = buttonId;
                    liftB.moving = true;
                    console.log("liftB");               //for testing purposes only
                    console.log(liftB.currentFloor);    //for testing purposes only
                    movingLift = liftB;                 //for testing purposes only
                    console.log(currentLevel);          //for testing purposes only
                    console.log(movingLift);            //for testing purposes only
                    direction(liftB, buttonId);
                    floorLightsControll(liftB);
                    resetMovement(liftB);
                }
            }
        }       
    }
}
//-------------The next function determines the movement direction of the elevator in move--------------------//

function direction(lift, button){
    if (lift.moving && currentLevel < button ){
        lift.direction = "up";
    } else {
        if(lift.moving && currentLevel > button){
            lift.direction = "down";
        } else{
            console.log ("The lift is on the same floor! The doors are opening!");
        }
    }
}

//---------------------------This function controlls all the lights on each floor-------------------//
//-------------------------The lights are represented as pointing up/down triangles-----------------//
//----------------------The buttons are represented as the round numbers on each floor--------------//
//----------------Unfortunately it works only with the bottom (F) levels indicator light -----------//
//-------------------I couldn't figure out YET a way to make it work on all levels------------------//
function floorLightsControll(lift){
          for(var i=0; i < 7; i++){
            if (lift== liftA && lift.moving && lift.direction == "up"){
           var triangle = document.getElementById("triangleUPA"+i);
           setTimeout(function(){triangle.setAttribute("class", "triangle-up");} ,3000);
           triangle.setAttribute("class", "triangle-up-active");
           
          } else {
            if (lift== liftA && lift.moving && lift.direction == "down"){
           var triangle = document.getElementById("triangleDOWNA"+i);
           setTimeout(function(){triangle.setAttribute("class", "triangle-down");} ,3000);
           triangle.setAttribute("class", "triangle-down-active");
           
          } else {
            if (lift== liftB && lift.moving && lift.direction == "up"){
           var triangle = document.getElementById("triangleUPB"+i);
           setTimeout(function(){triangle.setAttribute("class", "triangle-up");} ,3000);
           triangle.setAttribute("class", "triangle-up-active");
           
          } else {
              var triangle = document.getElementById("triangleDOWNB"+i);
              setTimeout(function(){triangle.setAttribute("class", "triangle-down");} ,3000);
           triangle.setAttribute("class", "triangle-down-active");
           
        }
        }
        }
    }   

}

//------The "resetMovement" function is Alerting us whenever the elevator reaches the callers level------------//
//-----------------------It also resets the lift.moving state of the elevator objects--------------------------//

function resetMovement(lift){
    if(lift.moving && lift.currentFloor == lift.calledFrom){
        lift.moving = false;
        console.log("The destination has been reached!");
    }
}

//-----------------------------------------About the following function----------------------------------------------//
//-----The following function is meant to add a red "Glow" effect to the elevator's inner control panel buttons------//
//----After 3 seconds the glow class will be changed back to "normal" which is the liftButton class just in chase----//
// ------------------------------somebody wants to press all the buttons again.--------------------------------------//

//----------------------Since you specified: for simplicity only one level can be selected at once-------------------//

function reply_click(clickedId)
{
    var button = document.getElementById(clickedId);
    button.setAttribute("class", "glow");
    setTimeout(function(clickedId){button.setAttribute("class", "liftButton");}, 3000);
}





