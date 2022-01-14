import { useState } from "react";
import { MoreHorizontal } from "react-feather";
import Dropdown from "../Dropdown/Dropdown";

import './Header.css';

function Header(props) {
    const [show, setShowDropdown] = useState(false);

    return ( 
        <div className="app_nav row">
            <div className="col-11">
                <h2>Messaging / <span>Affinity Map</span></h2>
            </div>

            <div className="col-1 pp"
                onClick={() => setShowDropdown(true)}>
                 <MoreHorizontal/>
                {show && <Dropdown
                    class="board_dropdown hh"
                    onClose={() => setShowDropdown(false)}
                    >
                    <p onClick={() => props.setVal('standard')}>Standard</p>
                    <p onClick={() => props.setVal('sorted')}>Sorted</p>
                    <p onClick={() => props.setVal('grouped')}>Grouped</p>
                </Dropdown>}
            </div>
      </div>
     );
}

export default Header;