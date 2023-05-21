import React, {useContext} from "react";
import Icon from "./Icon";
import * as fxn from '../functions';
import { DropContext } from "../App";

export default function Sidebar() {
  var {content,setContent} = useContext(DropContext);

  var handleOnDrag = (e,name) =>{
    e.dataTransfer.setData("buttonType", name);
  }

  var handleDragOver = (e) =>{
    e.preventDefault();
  }
  
  var handleOnDrop = (e) =>{
    const contentObj = e.dataTransfer.getData("revercButtonType");
    //console.log(contentObj);
    var arr = [...content];
    
    arr.splice(arr.indexOf(contentObj),1);
    setContent(arr);
  }

  return (
    <div className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200"  onDrop={handleOnDrop} onDragOver={handleDragOver}>

      <div className="font-bold text-yellow-500"> {"Events"} </div>
      <div draggable onDragStart={(e) => handleOnDrag(e, "When space key pressed")} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When space key pressed"}
      </div>
      <div draggable onDragStart={(e) => handleOnDrag(e, "When clicked")} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"When clicked"}
      </div>

      <div className="font-bold text-blue-500"> {"Motion"} </div>
      <div draggable onDragStart={(e) => handleOnDrag(e, "Move 10 steps")} onClick={fxn.moveSteps} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Move 10 steps"}
      </div>
      <div draggable onDragStart={(e) => handleOnDrag(e, "Turn 15 degree clockwise")}  onClick={fxn.turn15Degclock} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Turn 15 degrees clockwise"}
      </div>
      <div draggable onDragStart={(e) => handleOnDrag(e, "Turn 15 degree Anti-clockwise")}  onClick={fxn.turn15DegAnticlock} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Turn 15 degrees Anti-clockwise"}
      </div>
      <div draggable onDragStart={(e) => handleOnDrag(e, "Point in direction 90")}  onClick={fxn.pointIn90} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"point in direction 90"}
      </div>
      <div draggable onDragStart={(e) => handleOnDrag(e, "Go to random position")}  onClick={fxn.randomPosition} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Go to random position"}
      </div>

      <div className="font-bold text-purple-500"> {"Looks"} </div>
      <div draggable onDragStart={(e) => handleOnDrag(e, "Change size by -5")}  onClick={fxn.changeSize} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"change size by -5"}
      </div>
      <div draggable onDragStart={(e) => handleOnDrag(e, "Set size to 100%")}  onClick={fxn.setOriginalSize} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Set size to 100%"}
      </div>
      <div draggable onDragStart={(e) => handleOnDrag(e, "Show")}  onClick={fxn.show} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Show"}
      </div>
      <div draggable onDragStart={(e) => handleOnDrag(e, "Hide")}  onClick={fxn.hide} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Hide"}
      </div>

      <div className="font-bold text-green-500"> {"Contol"} </div>
      <div draggable onDragStart={(e) => handleOnDrag(e, "Wait 2 seconds")} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Wait 2 seconds"}
      </div>
      <div draggable onDragStart={(e) => handleOnDrag(e, "Repeat")} className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer">
        {"Repeat"}
      </div>


    </div>
  );
}
