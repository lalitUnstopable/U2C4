// write js code here corresponding to favourites.html
var matches=JSON.parse(localStorage.getItem("favourites")) || []
displaydata(matches)

function displaydata(data){

    
    data.forEach(function(el,index){
 
        var tr=document.createElement("tr");
 
        var td1=document.createElement("td");
        td1.innerText=el.number
 
        var td2=document.createElement("td");
        td2.innerText=el.team1;
 
        var td3=document.createElement("td");
        td3.innerText=el.team2;
 
        var td4=document.createElement("td");
        td4.innerText=el.date;
 
        var td5=document.createElement("td");
        td5.innerText=el.venue;
 
        var td6=document.createElement("td");
        td6.innerText="Delete";
        td6.style.color="red";
        td6.style.cursor="pointer";
        td6.setAttribute("class","deleteText")
        td6.addEventListener("click",function (){
            deleteItem(el,index);
        })
        tr.append(td1,td2,td3,td4,td5,td6)
 
        document.querySelector("tbody").append(tr)
    });
 
 
 function deleteItem(el,index){
     matches.splice(index,1)
     localStorage.setItem("favourites",JSON.stringify(matches));
     window.location.reload();
     //console.log(matches)
 }
}