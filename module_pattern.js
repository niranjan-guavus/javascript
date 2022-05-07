/**
 * in the module function create a javascript object and define all 
 * the private function and return the function pointer to outside. 
 * so the other function can use it.
 * 
 */


const module = (() => {

  function privateMethod() {
    //do somethings
    console.log('call private');
  }

  return {
    publicMethod: privateMethod
  }

})();
