import React, {useState, useContext} from "react";
import * as fxn from '../functions';
import { DropContext } from "../App";

//export var dropContext = createContext();

var nameFxn = {
  "Move 10 steps" : fxn.moveSteps,
  "Turn 15 degree clockwise" : fxn.turn15Degclock,
  "Turn 15 degree Anti-clockwise" : fxn.turn15DegAnticlock,
  "Point in direction 90" : fxn.pointIn90,
  "Go to random position" : fxn.randomPosition,
  "Change size by -5": fxn.changeSize,
  "Set size to 100%": fxn.setOriginalSize,
  "Show": fxn.show,
  "Hide": fxn.hide,
}

export default function MidArea() {
  //var [content, setContent] = useState([]);
  var {content,setContent} = useContext(DropContext);

  document.addEventListener('keyup', (event) => {
    var code = event.code;
    // Alert the key name and key code on keydown
    if( code == 'Space' ){
      for(var i =0; i<content.length;i++){
        if(content[i] == "When space key pressed"){
          handleallClick();
        }
      }
    }
  }, false);

  var handleOnDrop = (e) =>{
    const contentObj = e.dataTransfer.getData("buttonType");
    setContent([...content, contentObj]);
  }

  var handleDragOver = (e) =>{
    e.preventDefault();
  }
  var queue = []
  var handleallClick = () =>{
      var repeat = 0;
      for(var j = 0; j<content.length; j++){
        if(content[j] == 'Repeat'){
          repeat++;
        }
      }
      for(var j = 0 ; j <= repeat; j++){
      var wait = 0;
      for(var i = 0; i<content.length; i++){
        if(content[i] == "Repeat" || content[i] == "When clicked" || content[i] == "When space key pressed"){
          continue;
        }
        else if(content[i] == "Wait 2 seconds"){
          wait = wait+2000;
        }
        else if(wait != 0){
          queue.push(i);
          setTimeout(()=>{ 
            var x = queue.shift();
            nameFxn[content[x]]() ;

          }, wait);
        }
        else{
          nameFxn[content[i]]();
        }
      }
    }
  }

  var handleOnDragStartInMid = (e,content) =>{
    e.dataTransfer.setData("revercButtonType", content);
  }

  return <div className="flex-1 h-full overflow-auto" onDrop={handleOnDrop} onDragOver={handleDragOver}  >
  <div className="mainContentArea" onClick={handleallClick}>
  {content.map((ele) =>{
    return <div key={ele} draggable onDragStart={(e) => handleOnDragStartInMid(e, ele)}  className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 text-sm cursor-pointer">
    {ele}
  </div>;
  })}
  </div>
  </div>;
}
