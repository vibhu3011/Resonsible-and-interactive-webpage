fetch('data.json')
   .then(res =>{
    return res.json();
   })
   .then(data =>{
    console.log(data);
   });