
import songDB from '../../js/game-db.js'

const songDb = new songDB();
var el = document.getElementById('add-game-btn');
if(el){
  el.addEventListener('click', addSong, false);
}
// document.getElementById('add-game-btn"').addEventListener('click', addSong);
function addSong() {
  const title = document.getElementById("game-title").value;
  const gamgenre = document.getElementById("game-genre").value;
const mandatoryField=document.getElementById("mandatoryField");

  //const hasfinishedgame = document.getElementById("has-finished-game").checked;
  console.log(title);
  console.log(gamgenre);
  //console.log(hasfinishedgame);

  if(title ==='' ||gamgenre ==='')
  {
    mandatoryField.style.display ='block'
console.log("error")
  }
  else
  {
    mandatoryField.style.display ='none'
    console.log("ENTERED")
    songDb
    .add(title, gamgenre)
    .then((event) => {
      console.log("add sucess");
      document.getElementById("game-add-success").style.display = 'block'
    })
    .catch((errorMessage) => {
       
      document.getElementById(" game-add-failed").style.display = 'block'

      console.log("catch", errorMessage);
    });
  }
  
}
