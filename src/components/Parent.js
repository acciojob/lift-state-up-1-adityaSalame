import React, {useState} from 'react';
import Child from './Child';
import Modal from './Modal';

function Parent(){
    const [showModal, setShowModal]= useState(false);

    const toggleModal= ()=>{
        setShowModal(!showModal);

    }
    return(
        <div className='parent'>
            <h1>Parent Component</h1>
            <Child showModal={showModal} toggleModal={toggleModal}/>
            {showModal && <Modal/>}
        </div>
    )
}

export default Parent;