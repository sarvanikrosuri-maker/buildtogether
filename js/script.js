const projects=[
{
title:"AI Resume Analyzer",
skills:"Python, React",
team:"3"
},

{
title:"Blockchain Voting System",
skills:"Solidity, Node",
team:"4"
}
]

const container=document.getElementById("projectContainer")

if(container){

projects.forEach(project=>{

container.innerHTML+=`

<div class="feature">

<h3>${project.title}</h3>

<p>Skills: ${project.skills}</p>

<p>Team Size: ${project.team}</p>

<button onclick="apply()">Apply</button>

</div>

`

})

}

function apply(){

alert("Application Submitted!")

}