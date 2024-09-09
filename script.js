//first definining terms required for days calculation
// will add user input for total months later.
let months_array=[], n_month=0, total_months=2;
let sample_months_array=[31,28,31,30,31,30,31,31,30,31,30,31];
//for loop for days and months calulation.

for(let i=0; i<=total_months-1;i++){
    months_array.push(sample_months_array[n_month]);
    n_month++;
    if(n_month==12){n_month=0;}
}
//incooporating leap year 

if(total_months>=38){
    for(i=37;i<=total_months-1;i=i+48){
        months_array[i]=29;
    }
}

console.log(months_array)

//Defining Empty array and utilizing nested loop to get nested array of dutiees, later replasing nnummbers,

let duty1= new Array(total_months);
reference1=1;

for(let i=0;i<=total_months-1;i++){
    duty1[i]=new Array(months_array[i]);
    for(let j=0;j<=months_array[i]-1;j++){
        duty1[i][j]=reference1;
        reference1++;
    }
}

console.log(duty1[0]);