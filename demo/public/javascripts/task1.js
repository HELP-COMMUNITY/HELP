Array.from(document.getElementsByClassName("del1_button")).forEach(i=>{
    i.onclick = function(){
        let ind = this.getAttribute("data-id");
        window.location.href = '/basic_usertable/del/'+ind;
    }
})

document.getElementById("add1_button").onclick = function(){
    window.location.href='/basic_usertable/addpage';
}


Array.from(document.getElementsByClassName("upd1_button")).forEach(i=>{
    i.onclick = function(){
        let ind = this.getAttribute("data-id"); 
        window.location.href = '/basic_usertable/updateindex/'+ind;
    }
})

document.getElementById('nextpage').onclick = function(){
    window.location.href="/basic_usertable/nextpage";
};
document.getElementById('lastpage').onclick = function(){
    window.location.href="/basic_usertable/lastpage";
};