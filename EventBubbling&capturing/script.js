document.querySelector("#grandparent").addEventListener(
  "click",
  () => {
    console.log("GrandParent Clicked");
  },
  true, //bubbling
);

document.querySelector("#parent").addEventListener(
  "click",
  () => {
    console.log("Parent Clicked");
  },
  false, // capturing
);

document.querySelector("#child").addEventListener(
  "click",
  () => {
    console.log("child Clicked");
  },
  true, // bubbling
);
