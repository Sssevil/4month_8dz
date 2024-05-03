import React, {createContext, useContext, useState} from 'react';


const ModalContext = createContext({})

export function useModalContext (){
    return useContext(ModalContext)
}

function ModalProvider({children}) {
    const [modal, setModal]=useState(false)

    function openModal (){
        setModal(true)
    }

    function closeModal(){
        setModal(false)
    }

    const value = {
        modal, openModal, closeModal
    }

    return (
        <ModalContext.Provider value={value}>
            {children}
        </ModalContext.Provider>
    );
}

export default ModalProvider;