import "./styles.css";
console.log("It's alive!!");

const imgArr = document.querySelectorAll("img");
console.log(imgArr);

let imgNum = 0;
const next = document.querySelector(".next");

// on button click, cycle to next image using imgNum as index for imgArr
next.addEventListener("click", () => {
  console.log(imgArr.length);
  if (imgNum === imgArr.length - 1) {
    imgNum = -1;
    console.log(imgNum);
  }
  imgNum++;
  imgArr[imgNum].scrollIntoView();
});

// on button click, cycle through imgs backwards

const prev = document.querySelector(".previous");

prev.addEventListener("click", () => {
  console.log(imgArr.length);
  if (imgNum === 0) {
    imgNum = 3;
    console.log(imgNum);
  }
  console.log(imgNum);
  imgNum--;
  imgArr[imgNum].scrollIntoView();
});
