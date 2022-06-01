import { openDB } from 'idb';

let dbObj = null;

const dbPromise = async () =>
  await openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log(db, dbObj)
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jateTable', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
      console.log(db, dbObj)
    },
    blocked(e) {
      console.log("Blocked",e)
    },
    blocking(e) {
      console.log("Blocking",e)
    },
    terminated(e) {
      console.log("Terminated",e)
    },
  })
  .then(db=>{
    dbObj=db;
  });


// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  if(dbObj){
    const transaction = dbObj.transaction("jateTable","readwrite");
    // const tableContent = transaction.objectStore("jateTable");
    transaction.store.put({id:1, value: content}).then(e=>{
      console.log("put promise", e);
    });
  }
  else{
      console.log("cannot put");
  }
}

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async (editorRef, header) => {
  if(dbObj){
    const transaction = dbObj.transaction("jateTable","readonly").then(e=>{
      console.log("transaction promise",e);
    });
    transaction.store.get(1).then(e=>{
      console.log("get promise", e, e.value);
    });
  }
  else{
    const localData = localStorage.getItem('content');
    editorRef.setValue(localData||header);
    console.log("get else")
    // console.log("get", dbObj, editorRef, header, localData);
  }

}

dbPromise();
