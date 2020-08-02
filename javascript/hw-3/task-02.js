"use strict";
const countProps = function(obj) {
    const values = Object.values(obj);
    
    return values.length;
  };
  
  console.log(countProps({}));
  
  console.log(countProps({ name: 'Mango', age: 2 }));

  console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));