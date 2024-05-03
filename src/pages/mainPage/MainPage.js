import React from 'react';
import {useModalContext} from "../../context/ModalProvider";

function MainPage() {

    const {openModal, closeModal} = useModalContext()

    return (
        <div>
            <h1>Main Page</h1>
            <button onClick={openModal}>Open Modal</button>
            <button onClick={closeModal}>Close Modal</button>
        </div>
    );
}

export default MainPage;