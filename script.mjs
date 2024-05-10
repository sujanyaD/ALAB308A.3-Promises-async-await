import { central, db1, db2, db3, vault } from "./databases.mjs";

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3,
  };
  Promise.resolve(vault(id))
    .then((x) => {
      console.log(x);
    })
    .catch((err) => {
      console.error(err);
    });
  const p = Promise.resolve(central(id))
  p.then((y) => {
    console.log(y);
      const z = Promise.resolve(dbs[y](id))
      .then((a)=>{
        console.log(a);
      });
  })
 


  
}

getUserData(1);












