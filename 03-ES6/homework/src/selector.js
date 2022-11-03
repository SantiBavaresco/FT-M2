var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];
  // setear el argumento startEl = document.body; obviaria todo el if
  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
    //la funcion cb pasada
  if(matchFunc(startEl)) resultSet.push(startEl);
  else 
    for (let i = 0; i < startEl.children.length; i++) {
      let result = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
      //concatenando
      resultSet = [...resultSet, ...result];   
    }
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if(selector[0]=== "#") return "id";
  if(selector[0]=== ".") return "class";
  else 
    if(selector.includes(".")) return "tag.class";
  return "tag";
  //const str = document.querrySelector(selector);
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;

  if (selectorType === "id") { 
      matchFunction = function(sel){
        return "#" + sel.id === selector;
      };
  //return true;//matchFunction(selector,selectorType);
  } else if (selectorType === "class") {
      matchFunction = function(sel){
        for (let i = 0; i < sel.classList.length; i++) {
          if("." + sel.classList[i] === selector) return true;
          }
          return false;
      }
  } else if (selectorType === "tag.class") {
    matchFunction = function(sel){
      let [t, c] = selector.split("."); //[tag, class]
                  // TRUE                       //TRUE
      return matchFunctionMaker(t)(sel) && matchFunctionMaker("."+c)(sel);
    };
  } else if (selectorType === "tag") {
    matchFunction = function(sel){
      return sel.tagName === selector.toUpperCase();
    };
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
