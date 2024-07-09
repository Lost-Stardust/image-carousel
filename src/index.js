import "./styles.css";
console.log("It's alive!!");

const imgArr = document.querySelectorAll("img");
console.log(imgArr);

let imgNum = 0;
const next = document.querySelector(".next");

// on button click, cycle to next image using imgNum as index for imgArr
// function that will run in interval

function nextImg() {
  console.log(imgArr.length);
  if (imgNum === imgArr.length - 1) {
    imgNum = -1;
    console.log(imgNum);
  }
  imgNum++;
  imgArr[imgNum].scrollIntoView();
  runCase();
}

setInterval(nextImg, 5000);

next.addEventListener("click", () => {
  nextImg();
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
  runCase();
});

// nav dots that link to corresponding image and show which slide is active

const dot1 = document.querySelector(".dot-one");
const dot2 = document.querySelector(".dot-two");
const dot3 = document.querySelector(".dot-three");

dot1.addEventListener("click", () => {
  imgNum = 0;
  imgArr[imgNum].scrollIntoView();
  runCase();
});
dot2.addEventListener("click", () => {
  imgNum = 1;
  imgArr[imgNum].scrollIntoView();
  runCase();
});
dot3.addEventListener("click", () => {
  imgNum = 2;
  imgArr[imgNum].scrollIntoView();
  runCase();
});

function runCase() {
  switch (imgNum) {
    case 0:
      dot1.style.backgroundColor = "black";
      dot2.style.backgroundColor = "white";
      dot3.style.backgroundColor = "white";
      break;

    case 1:
      dot2.style.backgroundColor = "black";
      dot1.style.backgroundColor = "white";
      dot3.style.backgroundColor = "white";
      break;

    case 2:
      dot3.style.backgroundColor = "black";
      dot1.style.backgroundColor = "white";
      dot2.style.backgroundColor = "white";
      break;

    default:
      console.log("something broke somewhere haha");
      break;
  }
}
runCase();
