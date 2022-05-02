// write js code here corresponding to matches.html
var matches=JSON.parse(localStorage.getItem("schedule"))

displaydata(matches)

function handleFilter(){
    var selected=document.getElementById("filterVenue").value;
    console.log(selected);
    var filterList=matches.filter(function (el){
    return el.venue==selected;

    });
    console.log(filterList)
    displaydata(filterList)
}

var matches=JSON.parse(localStorage.getItem("favourites")) || []

function displaydata(data){

   // document.querySelector("tbody").innerHTML=""
   data.forEach(function(el){

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
       td6.innerText="Add as Favourites ";
       td6.style.color="blue";
       td6.style.cursor="pointer";
       td6.addEventListener("click",function (){
           favfun(el);
       })
       tr.append(td1,td2,td3,td4,td5,td6);

       document.querySelector("tbody").append(tr);
   });
}

function favfun(el){
    console.log(el);
    matches.push(el);
    //console.log(matches)
    localStorage.setItem("favourites",JSON.stringify(matches));

}


