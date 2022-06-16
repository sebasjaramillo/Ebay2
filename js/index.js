const inicio=document.getElementById("h");
const nike=document.getElementById("nike");
const ini=document.querySelector(".container");
const pr2=document.querySelector(".container2");


function home(){
    ini.style.visibility="visible";
    pr2.style.visibility="hidden";
}
function producto2(){
    pr2.style.visibility="visible";
    ini.style.visibility="hidden";
    
}

inicio.addEventListener('click',home);
nike.addEventListener('click',producto2);

document.addEventListener('DOMContentLoaded',()=>{
    fetchData()
})

const fetchData = async()=>{
    try{
        const res=await fetch('api.json')
        const data=await res.json()
        console.log(data)
    } catch(error) {
        console.log(error)
    }
}
const pintarCards=data=>{
    data.forEach(producto=>{
        console.log(producto)
    })
}