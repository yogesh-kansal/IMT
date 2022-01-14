import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";

import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import Editable from "../Editabled/Editable";

import "./Board.css";

function Board(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  const dropNote = event => {
    console.log(event.pageX, event.pageY);
    event.target.style.left = `${event.pageX-500}px`;
    event.target.style.top = `${event.pageY-300}px`;
    event.target.style.position ='absolute'
  };

  if(props.type==='sorted') {
    return (
      <div className="row m-1 std">
        {
          props.board?.map((ele, id) => {
            console.log(ele)
            return (ele?.cards?.map((item, id) => (
              <div className="col-2 mb-2 mt-2"key= {id}>
                <Card
                  key={item.id}
                  card={item}
                  boardId={ele.id}
                  removeCard={props.removeCard}
                  dragEntered={() => {console.log('called')}}
                  dragEnded={() => {console.log('called')}}
                  updateCard={props.updateCard}
                />
              </div>
            )))

          })
        }
      </div>
    )
  }
  else if(props.type==='standard') {
    return (
      <div className="row m-1">
        {
          props.board?.map((ele, id) => {
            console.log(ele)
            return (ele?.cards?.map((item, id) => (
              <div className="col-2 mb-3 abc"key= {id}
                draggable
                onDragEnd={dropNote}>
                <Card
                  key={item.id}
                  card={item}
                  boardId={ele.id}
                  removeCard={props.removeCard}
                  dragEntered={() => {console.log('called')}}
                  dragEnded={() => {console.log('called')}}
                  updateCard={props.updateCard}
                />
              </div>
            )))

          })
        }
      </div>
    )

  }
  else
  return (
    <div className="board">
      <div className="board_header">
        <p className="board_header_title">
          {props.board?.title}
          <span>({props.board?.cards?.length || 0})</span>
        </p>
        <div
          className="board_header_title_more"
          onClick={() => setShowDropdown(true)}
        >
          <MoreHorizontal />
          {showDropdown && (
            <Dropdown
              class="board_dropdown"
              onClose={() => setShowDropdown(false)}
            >
              <p onClick={() => props.removeBoard()}>Delete Bucket</p>
            </Dropdown>
          )}
        </div>
      </div>
      <div className="board_cards custom-scroll">
        <Editable
            text="+ Add Highlight"
            placeholder="Enter Card Title"
            displayClass="board_add-card"
            editClass="board_add-card_edit"
            onSubmit={(value) => props.addCard(props.board?.id, value)}
          />
        <div className="row">
          {props.board?.cards?.map((item) => (
            <div className="col-6 mb-3" key={item.id}>
              <Card
                key={item.id}
                card={item}
                boardId={props.board.id}
                removeCard={props.removeCard}
                dragEntered={props.dragEntered}
                dragEnded={props.dragEnded}
                updateCard={props.updateCard}
              />
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}

export default Board;
