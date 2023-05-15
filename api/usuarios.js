let headers = new Headers({"Content-Type": "application/json"});
let puerto = 4001;

const postUser = async(arg)=>{
    arg.id = (arg.id) ? arg.id : Date.now();
    let config = {
        method: "POST", 
        headers: headers, 
        body:JSON.stringify(arg)
    };
    return await ( await fetch(`http://localhost:${puerto}/usuarios`, config) ).json();
}
const getUserAll = async()=>{
    let config = {
        method: "GET", 
        headers: headers
    };
    return await ( await fetch(`http://localhost:${puerto}/usuarios`, config) ).json();
}
const delteUser = async(arg)=>{
    let config = {
        method: "DELETE", 
        headers: headers, 
    };
    return await ( await fetch(`http://localhost:${puerto}/usuarios/${arg.id}`, config) ).json();
}
export default{
    postUser,
    getUserAll,
    delteUser
}