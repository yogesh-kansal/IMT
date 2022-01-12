import React, { useState } from "react";
import { MoreHorizontal } from "react-feather";

import Card from "../Card/Card";
import Dropdown from "../Dropdown/Dropdown";
import Editable from "../Editabled/Editable";

import "./Board.css";

function Board(props) {
  const [showDropdown, setShowDropdown] = useState(false);

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
            <div className="col-6 mb-3">
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
