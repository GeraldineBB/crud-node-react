import React from "react";
import { UserContext } from "../../contexts/User";

const Contextbutton = () => {

    const [state, dispatch] = React.useContext(UserContext);

    return (

        <button onClick={() => dispatch({ type: "toggle_button" })}>
            {state.active ? 'on' : 'off'}
        </button>

    )

}

export default Contextbutton; 