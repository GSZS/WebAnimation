interface DocumentObj {
  class?: string;
  id?: string;
}

/* 创建对应选择器的DOM对象 */
const createDOMObj = (DOMList: Array<DocumentObj>) => {
  let storeDOMArray = [];
  DOMList.map((DOMObj) => {
    Object.keys(DOMObj).map((type) => {
      switch (type) {
        case "class":
          storeDOMArray.push(document.querySelector(`.${DOMObj[type]}`));
          break;
        case "id":
          storeDOMArray.push(document.querySelector(`#${DOMObj[type]}`));
          break;
      }
    });
  });
  return storeDOMArray;
};

const DOMObjList = createDOMObj([{ id: "rect" }]);

DOMObjList[0].animate(
  {
    transform: ["rotateX(0deg)", "rotateX(180deg)"],
  },
  {
    id: "",
    iterations: Infinity,
    easing: "ease-in-out",
    direction: "alternate",
    duration: 1500,
  }
);
