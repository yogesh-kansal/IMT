import Editable from "../Editabled/Editable";

function Header(props) {
    return ( 
        <div className="app_nav row">
            <div className="col-9">
                <h2>Messaging / <span>Affinity Map</span></h2>
            </div>

            <div className="app_boards_last col-3">
                <Editable
                displayClass="app_boards_add-board"
                editClass="app_boards_add-board_edit"
                placeholder="Enter Board Name"
                text="Add Board"
                buttonText="Add Board"
                onSubmit={props.addboardHandler}
                />
            </div>
      </div>
     );
}

export default Header;