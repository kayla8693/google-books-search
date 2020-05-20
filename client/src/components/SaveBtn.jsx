import React from "react";
import SubmitBtn from "./Button";

function SaveBtn({ children }) {
    return (
        <SubmitBtn
        type="primary"
        className="input-lg"
        // onClick={}
        >
            Save Book
            {children}
        </SubmitBtn>
    );
}

export default SaveBtn;
