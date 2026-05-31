const form = document.querySelector("form");

function calculateBMI(height, weight) {
  let heightSqaure = height * height;
  return weight / heightSqaure;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();


  const uw = document.querySelector("#uw")
  const nw = document.querySelector("#nw")
  const ow = document.querySelector("#ow")


  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#output");


  if(height === "" || height <=0 || isNaN(height)){
    result.innerHTML = `please a valid height ${height}`
  }
  else if(weight === "" || weight <=0 || isNaN(weight)){
    result.innerHTML = `please a valid weight ${weight}`
  }
  else{
    let heightSqaure = height * height;
    let bmi = (weight/((height*height)/10000)).toFixed(2)
    result.innerHTML = bmi
    if(bmi <= 18.8){
        uw.style.backgroundColor = "yellow"
    }
    else if(bmi >= 18.8 && bmi <= 24.9){
        nw.style.backgroundColor = "yellow"
    }
    else{
        ow.style.backgroundColor = "yellow"
    } 
  }

  
  
});
