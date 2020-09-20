/* 创建对应选择器的DOM对象 */
var createDOMObj = function (DOMList) {
    var storeDOMArray = [];
    DOMList.map(function (DOMObj) {
        Object.keys(DOMObj).map(function (type) {
            switch (type) {
                case "class":
                    storeDOMArray.push(document.querySelector("." + DOMObj[type]));
                    break;
                case "id":
                    storeDOMArray.push(document.querySelector("#" + DOMObj[type]));
                    break;
            }
        });
    });
    return storeDOMArray;
};
var DOMObjList = createDOMObj([{ id: "rect" }]);
DOMObjList[0].animate({
    transform: ["rotateX(0deg)", "rotateX(180deg)"]
}, {
    id: "",
    iterations: Infinity,
    easing: "ease-in-out",
    direction: "alternate",
    duration: 1500
});
