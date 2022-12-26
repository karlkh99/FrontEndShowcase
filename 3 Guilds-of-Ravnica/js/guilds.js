

console.log("hello world");

const openGuild = (evt, guild) =>{
  let tabcontent = document.getElementsByClassName("tabcontent")
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  let tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++){
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(guild).style.display = "block";
}