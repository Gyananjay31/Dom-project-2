let outerDiv = document.getElementById("main");
// outerDiv.style.height = "300px";
// outerDiv.style.width = "300px";
// outerDiv.style.backgroundColor = "yellow";
outerDiv.classList.add("container");
outerDiv.style.cssText = "height : 500px  ; display:flex ; flex-wrap: wrap ; border-radius : 50px ; margin : 100px ; padding:20px";
outerDiv.addEventListener("click" , fun);


function fun(){
    outerDiv.style.backgroundColor = "rgb(16, 43, 110)";
    let innerDiv = document.createElement("div");
    innerDiv.style.cssText = "height:auto ; width:auto ; background-color : yellow ; display: flex ; padding:10px ; border-width: .5px ; border-color: black ; border-style:solid ; margin:5px ; border-radius : 10px"
    let name = prompt("Enter something");
    innerDiv.append(name);
    console.log(name);
    outerDiv.append(innerDiv);
}