import {createStore} from 'redux';

const initState={
    uname:'',
    password:'',
    user: null
}
const reducer=(state=initState,action)=>{
    console.log('act', action)
    if(action.type==='submit'){
        return {
            uname:action.payload.uname,
            password:action.payload.password
        }
    } else if (action.type === 'user') {
        const {token, ...user} = action.payload;
        return {
            user: user,
            token
        };
    }
    return {
        uname:state.email,
        password:state.password
    }
}

const store=createStore(reducer);

export default store;