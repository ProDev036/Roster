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
//Uncomment the line elow to get view the months array.
//console.log(months_array)

//Defining Empty array and utilizing nested loop to get nested array of dutiees, later replasing nnummbers,

let duty1= new Array(total_months);
let reference1=1;
let retraning=0;
for(let i=0;i<=total_months-1;i++){
    if(retraning==i){
        duty1[i]='Retraning';
        retraning=retraning+6;
    }
    else{
        duty1[i]=new Array(months_array[i]);
        for(let j=0;j<=months_array[i]-1;j++){
            duty1[i][j]=reference1;
            reference1++;
            if(reference1==26){reference1=1;}
        }
    }
}

console.log(duty1);

//Converting the numbers to strings.

//1,2,3,14,15 for N
//4,5,16,17,18 for E
//7,8,9,10,11 for M
//6,12,13,19,20,21,22,23,24,25 for R

//using array.map feature, didn't work, trying for loop


// let final_duty1=duty1.map(item =>{ 
//     if(item===1 || item===2 || item===3 || item===14 || item===15){
//         return 'N';
//     }
//     else if(item===4 || item===5 || item===16 || item===17 || item===18){
//         return 'E';
//     }
//     else if (item===7 || item===8 || item===9 || item===10 || item===11){
//         return 'M';
//     }
//     else if (item===6 || item===12 || item===13 || item===19 || item===20 || item===21 || item===22 || item===23 || item==24 || item===25){
//         return 'R';
//     }
//     return item;
// }

// )

let final_duty1= duty1;

for(let i=0;i<=total_months-1;i++){
  
        for(let j=0;j<=months_array[i]-1;j++){
            if(final_duty1[i][j]==1 || final_duty1[i][j]==2 || final_duty1[i][j]==3 || final_duty1[i][j]==14 || final_duty1[i][j]==15){
                        final_duty1[i][j]= 'N';
                    }
                    else if(final_duty1[i][j]==4 || final_duty1[i][j]==5 || final_duty1[i][j]==16 || final_duty1[i][j]==17 || final_duty1[i][j]==18){
                       final_duty1[i][j]= 'E';
                    }
                    else if (final_duty1[i][j]==7 || final_duty1[i][j]==8 || final_duty1[i][j]==9 || final_duty1[i][j]==10 || final_duty1[i][j]==11){
                        final_duty1[i][j]= 'M';
                    }
                    else if (final_duty1[i][j]==6 || final_duty1[i][j]==12 || final_duty1[i][j]==13 || final_duty1[i][j]==19 || final_duty1[i][j]==20 || final_duty1[i][j]==21 || final_duty1[i][j]==22 || final_duty1[i][j]==23 || final_duty1[i][j]==24 || final_duty1[i][j]==25){
                        final_duty1[i][j]= 'R';
                    }
        }
    }

    // function roster(months_array)