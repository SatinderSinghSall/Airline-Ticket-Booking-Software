//JavaScript code below.

document.addEventListener("DOMContentLoaded", function ()
{
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("modalImage");
  
  var teamMembers = document.querySelectorAll(".team-member img");
  teamMembers.forEach(function (member)
  {
    member.onclick = function ()
    {
      modal.style.display = "block";
      modalImg.src = this.src;
    };
  });
  
  var span = document.getElementsByClassName("close")[0];
  
  span.onclick = function ()
  {
    modal.style.display = "none";
  };
  
  window.onclick = function (event)
  {
    if (event.target == modal)
    {
      modal.style.display = "none";
    }
  };
});