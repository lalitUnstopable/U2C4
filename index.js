// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",myfun)

var matches=JSON.parse(localStorage.getItem("schedule")) || []

function myfun(){
  event.preventDefault()

var matchobj={
  number:masaiForm.matchNum.value,
  team1:masaiForm.teamA.value,
  team2:masaiForm.teamB.value,
  date:masaiForm.date.value,
  venue:masaiForm.venue.value
}
matches.push(matchobj)
console.log(matches)
localStorage.setItem("schedule",JSON.stringify(matches))
window.location.href="matches.html"
}




