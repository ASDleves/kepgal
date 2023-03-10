window.addEventListener("load", init);
var kepindex = 0
function init(){
    const article = document.querySelector("article")
    const kepList = ["capy.jpg","images.jfif","SUS.png"]
    for (let index = 0; index < kepList.length; index++) {
        
        article.innerHTML += `<div><img src="kepek/${kepList[index]}"></div>`;
        
    }
    const image = document.querySelectorAll("article div")
    const nagykep = document.getElementsByClassName("nagykep");
    const jobbgomb = document.getElementsByClassName("jobb");
    const KISKEPEK = document.querySelectorAll("article div img")
    for (let index = 0; index < kepList.length; index++) {
        image[index].addEventListener('click', () => {
            kepindex == index
            nagykep[0].src =`kepek/${kepList[index]}`;
            
        });
        
    }
        jobbgomb[0].addEventListener('click', () => {
        kepindex++
        if(kepindex>=kepList.length)
        {
            kepindex = 0;
        }
        nagykep[0].src = `kepek/${kepList[kepindex]}`;
        
    });
    for (let index = 0; index < kepList.length; index++) {
        KISKEPEK[index].addEventListener("click", function(){
            kiskepKattintas(index,kepList)
        })
        
    
};

}
function kiskepKattintas(index, kepList){
    console.log(event.target)
    const NAGYKEP=document.querySelectorAll("section div img")
    console.log(`kepek/${kepList[index]}`)
    NAGYKEP[0].src=`kepek/${kepList[index]}`;
}