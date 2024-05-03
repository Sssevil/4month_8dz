import React, {useRef} from 'react';


function UsersPage() {

    const name = useRef(null)
    const username =useRef(null)
    const email=useRef(null)

    const createUser =()=>{
        const user ={
            name:name.current.value,
            username:username.current.value,
            email:email.current.value
        }

        console.log(user)
    }
    return (
        <div style={{marginTop:'50px'}}>
            <input type="text" placeholder="name" ref={name}/>
            <input type="text" placeholder="username" ref={username}/>
            <input type="text" placeholder="email" ref={email}/>
            <button onClick={createUser}>send</button>
        </div>
    );
}

export default UsersPage;