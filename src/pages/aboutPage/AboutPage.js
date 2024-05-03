import React from 'react';
import ModalWindow from "../../components/ModalWindow";
import {useModalContext} from "../../context/ModalProvider";

function AboutPage() {

    const {modal} = useModalContext()

    if (!modal){
        return <h1>About Page</h1>
    } else {
        return (
            <div>
                <h1>About Page</h1>
                <ModalWindow/>
            </div>
        )
    }
}

export default AboutPage;