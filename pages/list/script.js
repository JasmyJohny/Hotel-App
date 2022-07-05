import songDB from "../../js/game-db.js";

const songDb = new songDB();
console.log("list page db");
var count = 1;
const output = document.getElementById("output");

document.getElementById("listitemBtn").addEventListener("click", listSongs);
function listSongs() {
  output.innerHTML = "";
  // const genre = document.getElementById("game-genre").value;
  // if (genre === "") {
    songDb
      .getAll()
      .then((results) => {
        console.log("results", results);
        results.forEach((result) => {
          appendSong(result);
        });
      })
      .catch((errorMessage) => {
        console.log("catch", errorMessage);
      });
  // } else {
  //   songDb.get(genre);
  // }
}
function appendSong(song) {
  console.log(song);

  const status = count + "Likes"
  const elemSong = document.createElement("div");
  elemSong.className = "game-item";
  output.append(elemSong);
  elemSong.innerHTML = `<span>${song.title}</span>
<h3>${song.gamgenre}</h3>
<div>
  <b>Likes:</b>
  ${song.count}
</div>
`;

 

  const elemRemove = document.createElement("button");
  elemRemove.style.backgroundColor = 'red'
  elemRemove.style.color ='white'
  elemRemove.style.borderColor='black'
  elemSong.append(elemRemove);
  elemRemove.innerText = "Remove";
  elemRemove.addEventListener("click", () => {
    songDb
      .delete(song)
      .then((song) => {
        console.log(" sucess");
        elemSong.remove();
      })
      .catch((errorMessage) => {
        console.log("error", errorMessage);
      });
  });
  const elemStatus = document.createElement("button");
  elemStatus.style.backgroundColor = 'blue'
  elemStatus.style.color ='white'
  elemStatus.style.borderColor='black'
  elemSong.append(elemStatus);
  elemStatus.innerText = "+1 Like";
  elemStatus.addEventListener("click", () => {
    //count = count +1;
    console.log("count", song.count + 1)
   song.count = song.count +1;
    songDb.update(song,song.count)
    .then((song) => {
      console.log("enter")
       // const status = count + "Likes"


 elemSong.innerHTML = `<span>${song.title}</span><h3>${song.gamgenre}</h3><div><b>Likes:</b>${song.count} "Likes"</div>`;
      })
      .catch((errorMessage) => {
        console.log("error", errorMessage);
      });
  });
}
