
const toTop = document.getElementById('toTop');
window.onscroll = function() {scrollFunction()};

const scrollFunction = () => {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        toTop.style.display = "block";
    } 
    else{
        toTop.style.display = "none";
    }    
}
