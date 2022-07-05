// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
// import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js";
// import { getFirestore, collection, addDoc }from 'https://www.gstatic.com/firebasejs/9.8.4/firebase-firestore.js';

export default class songDB {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyDCjfeYAIcnbprGOrdlLUR0ZKuLxlvLnA8",
      authDomain: "mypwa-84159.firebaseapp.com",
      projectId: "mypwa-84159",
      storageBucket: "mypwa-84159.appspot.com",
      messagingSenderId: "620209193359",
      appId: "1:620209193359:web:abcd3454af4f4268358bfa",
    };

    const app = initializeApp(firebaseConfig);
    console.log("appp", app);
    this.db = getFirestore(app);
    console.log("db", this.db);
//     const dbCollection = collection(this.db, "users");
// addDoc(dbCollection, {
// first: "Ada",
// last: "Lovelace",
// born: 1815
// })
  }

  add(title, gamgenre) {
   
    const dbCollection = collection(this.db, "songs");
    return addDoc(dbCollection, {
      title: title,
      gamgenre: gamgenre,
     count: 0
    });
    // .then((docRef)=>{
    //   console.log("success",docRef)
    // })
    // .catch((error)=>{
    //   console.log("error",error)
    // });
  }
  getAll() {
    return new Promise((resolve, reject) => {
      getDocs(collection(this.db, "songs"))
        .then((querySnapshot) => {
          const results = [];
          console.log(querySnapshot);
          querySnapshot.forEach((doc) => {
            const data = doc.data();
            console.log(doc.id, data);
            results.push({
              id: doc.id,
              title: data.title,
              gamgenre: data.gamgenre,
              count :data.count
              //hasfinishedgame: data.hasfinishedgame,
            });
          });
          resolve(results);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  update(song, countIncreased) {
    return new Promise((resolve, reject) => {
      const dobDoc = doc(this.db, "songs", song.id);
console.log("entered");
      updateDoc(dobDoc, 
        {count: countIncreased })
        .then(() => {
         song.count = countIncreased;
          resolve(song);
        })
        .catch((error) => {
          reject(error);
        });
      });
  }
  delete(song) {
    const dbDoc = doc(this.db, "songs", song.id);
    return deleteDoc(dbDoc);
  }
}

// export default class songDB {
//   constructor() {

//     const request = window.indexedDB.open("SongDB", 1);
//     request.onerror = (event) => {
//       console.log("pen errir", event.target.target.error.message);
//     };
//     request.onsuccess = (event) => {
//       console.log("open sucess", event);
//       this.db = event.target.result;
//     };
//     request.onupgradeneeded = (event) => {
//       // Save the IDBDatabase interface
//       const db = event.target.result;

//       // Create an objectStore for this database
//       const objectStore = db.createObjectStore("songs", { keyPath: "id" });
//       objectStore.createIndex("title", "title", { unique: true });
//     };
//   }
//   add(title, gamgenre, hasfinishedgame) {
//     return new Promise((resolve, reject) => {
//       const transaction = this.db.transaction(["songs"], "readwrite");
//       const Store = transaction.objectStore("songs");
//       const request = Store.add({
//         id: Date.now(),
//         title: title,
//         gamgenre: gamgenre,
//         hasfinishedgame: hasfinishedgame,
//       });
//       request.onerror = (event) => {
//         reject(event.target.error.message);
//       };
//       request.onsuccess = (event) => {
//         resolve(event);
//         //this.db = event.target.result;
//       };
//     });
//   }

//   getAll() {
//     console.log("get alll genre");
//     return new Promise((resolve, reject) => {
//       const request = this.db
//         .transaction(["songs"], "readwrite")
//         .objectStore("songs")
//         .getAll();
//       request.onerror = (event) => {
//         console.log("get all errir", event.target.error.message);
//         reject(event.target.error.message);
//       };
//       request.onsuccess = (event) => {
//         console.log("get all sucess", event);
//         resolve(event.target.result);
//         // this.db = event.target.result;
//       };
//     });
//   }
//   get(genre) {
//     console.log("get genre", genre);
//   }
//   update(song, updateHasFinished) {
//     song.hasfinishedgame = updateHasFinished
//     console.log("update");
//     return new Promise((resolve, reject) => {
//       const request = this.db
//       .transaction(["songs"], "readwrite")
//       .objectStore("songs")
//       .put(song);
//       request.onerror = (event) => {
//         console.log("update eror", event.target.error.message);
//         reject(event.target.error.message);
//       };
//       request.onsuccess = (event) => {
//         console.log("updatesucess", event);
//         resolve(song);
//         // this.db = event.target.result;
//       };
//     });

//   }
//   delete(song){
//     console.log("delete");
//     return new Promise((resolve, reject) => {
//       const request = this.db
//       .transaction(["songs"], "readwrite")
//       .objectStore("songs")
//       .delete(song.id);
//       request.onerror = (event) => {
//         console.log("update eror", event.target.error.message);
//         reject(event.target.error.message);
//       };
//       request.onsuccess = (event) => {
//         console.log("updatesucess", event);
//         resolve();
//         // this.db = event.target.result;
//       };
//     });

//   }
// }
