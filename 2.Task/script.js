const weight= Number(prompt("Enter your weight"))
const height = Number(prompt("Enter your Height"))

const area = height/100

const total=(weight/(area*area))


if(total<18.5){
    alert("BMI = " + total + " (Underweight)")
}

else if(total>=18.5 && total<25){
    alert("BMI = " + total + " (Normal)")
}

else if(total>=25 && total<30){
    alert("BMI = " + total + " (Overweight)")
}

else if(total>=30){
    alert("BMI = " + total + " (Obese)")
}
