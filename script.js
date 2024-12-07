// const account1={
//     owner:'Moin Pasha',
//     movements :[200,450,-400,3000,-650,-130,70,1300],
//     intersetRate:1.2,
//     pin:1111
// }
// const account2={
//     owner:'Moin Pasha',
//     movements :[200,450,-400,3000,-650,-130,70,1300],
//     intersetRate:1.2,
//     pin:1111
// }
// const account3={
//     owner:'Moin Pasha',
//     movements :[200,450,-400,3000,-650,-130,70,1300],
//     intersetRate:1.2,
//     pin:1111
// }
// const account=[account1,account2,account3];

// account.find(acc=>acc.owner==='Moin Pasha')

// const movements =[200,450,-400,3000,-650,-130,70,1300];
// // movements.sort()

// console.log(movements)

// const dogs=[
//     {weight : 22, curFood :350, owners:["Alice",'Bob']},
//     {weight :8, curFood :200, owners:['Matilda']},
//     {weight : 13,curFood:275,owners:['Sarah']},
//     {weight:32,curFood:340,owners:["Micheal"]}
// ];
// // 1
// dogs.forEach((val)=>{
// const temp=val.weight**0.75*28;
// val['recommendedFood']=temp;
// })

// console.log(dogs);

// //2
// // const str=dogs.find((val)=>val.owners.includes('Sarah'));


// // str.curFood>str.recommendedFood? console.log("Its eats a lot"):console.log("Its eats a little");

// const eatsToMuch=dogs.filter(val=>val.curFood>val.recommendedFood).flatMap(value=>value.owners);
// // const eatsToLess=dogs.filter(val=>val.curFood<recommendedFood);

// console.log(eatsToMuch);


// const eatsToLess=dogs.filter(val=>val.curFood<val.recommendedFood).flatMap(value=>value.owners);

// console.log(eatsToLess)





// console.log(`${eatsToMuch.join(" and ")}'s eats too much`);
// console.log(`${eatsToLess.join(" and ")}'s eats too little`);



// console.log(dogs.some(val=>val.curFood===val.recommendedFood));


// const sortDogs=dogs.sort((a,b)=>a.recommendedFood-b.recommendedFood);
// console.log(sortDogs)

// const num1=24_56;
// console.log(num1);

// const num2=2_456;
// console.log(num2);

// const PI=3.24_55;
// console.log(PI)

// const n=new Date();
// console.log(n);

// const future =new Date(2037,10,19,15,23);
// console.log(+future)

// const diff=(date1,date2)=> (date2-date1)/(1000*60*60*24);

// console.log(diff(new Date(2037,10,19),new Date(2037,10,24)))


// console.log(future.getDate())
// console.log("Waiting for set timeout function")
// setTimeout(()=>console.log("Hi Moin"),3000);

// console.log("Exceute successfully")
// console.log("waiting..");
// const future=new Date();

// const timer=function(x){
    
//     if(+(new Date())!== x){
    
//         setTimeout(()=>{
//             console.log(new Date().getSeconds());
//             timer(x);
//         },1000);
    
//     }
    
// }

const account1 = {
    owner: 'Moin Pasha',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Anjali Bhivgade',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Ayush Jain',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Akram Pasha',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };



// const user_id='mp';
// const passcode=1111;
const account =[account1,account2,account3,account4];


const login=document.querySelector(".login__input--user");
const password=document.querySelector(".login__input--pin");

let login_button=document.querySelector(".login__btn");

const movement=document.querySelector(".movements");

const welcome=document.querySelector(".welcome");

const balance=document.querySelector(".balance__value");

const in_balance=document.querySelector(".summary__value--in");
const out_balance=document.querySelector(".summary__value--out");
const btn_transfer=document.querySelector(".form__btn--transfer");
let input_to=document.querySelector(".form__input--to");
let input_Amount=document.querySelector(".form__input--amount");
const btn_loan=document.querySelector(".form__btn--loan");
let loan_amount=document.querySelector(".form__input--loan-amount");
const logoff=document.querySelector(".logoff");
let actual_time=document.querySelector(".timer");

let close_user=document.querySelector(".form__input--user");

let close_pin=document.querySelector(".form__input--pin");
const btn_close=document.querySelector(".form__btn--close");

const btn_sort=document.querySelector(".btn--sort");

let time_runner=1000;


const create_username=function(acc){
    acc.forEach((val)=>{
        const u1=val.owner.split(' ').map((maps)=>maps[0]).join("").toLowerCase();
        val.username=u1;
    })
}
let current_account=function(accs){
    return accs.find((acc)=>(acc.username===login.value)&&(Number(password.value)===acc.pin))
};

let timer_id;
let set_timer=function(given_time){
    timer_id=setInterval(()=>{
        if(given_time<=0){
            clearInterval(set_timer);
            welcome.textContent="Log in to get started";
    
           document.querySelector(".app").style.opacity=0;

        }
        else
        {given_time--;
        let min = Math.floor(given_time / 60).toString().padStart(2, "0");

        let sec=(given_time%60).toString().padStart(2,"0");
        actual_time.textContent=`${min}:${sec}`}
        
    },1000)
}

let UpdateUI=function(){
    console.log(current);
    movement.innerHTML=" ";
    let balanceIn=0;
    let balanceOut=0;
    current_balance=0;
    
    current.movements.forEach((amount)=>{
        const html=`<div class="movements__row">
          <div class="movements__type movements__type--${amount>0?'deposit':'withdrawal'}">${amount>0?'deposit':'withdrawal'}</div>
          <div class="movements__date">1 days ago</div>
          <div class="movements__value"><span>&#8377;</span>${Math.abs(amount)}</div>
        </div>`;
        movement.insertAdjacentHTML("afterbegin",html);
       current_balance+=amount;
       amount>0?balanceIn+=amount:balanceOut+=amount;
       
        
    });
    balance.innerHTML=`<p class="balance__value"><span>&#8377;</span>${current_balance}</p>`;
    in_balance.innerHTML=`<p class="summary__value summary__value--in"><span>&#8377;</span>${balanceIn}</p>`;
    out_balance.innerHTML=`<p class="summary__value summary__value--out"><span>&#8377;</span>${Math.abs(balanceOut)}</p>`;
    
    login.value="";
    password.value="";
    
    


    

}

let current;
let current_index;
let current_balance=0;


login_button.addEventListener("click",function(e){
    e.preventDefault();
    console.log("Welcome")
    current=current_account(account);
    if(current){
        document.querySelector(".app").style.opacity=1;
        welcome.textContent=`Welcome back, ${current.owner}`;

        UpdateUI();
        clearInterval(timer_id);
        time_runner=100;
        set_timer(time_runner);

        
    }
    
   

   
});
create_username(account);


let other_account=function(accs){
    return accs.find((acc)=>(acc.username===input_to.value))
};

btn_transfer.addEventListener("click",(e)=>{
    
    e.preventDefault();
    
    console.log("Tranfer button pressed");
    console.log(current_balance);
    
    const input_amount=Number(input_Amount.value);
    console.log(input_amount);
    console.log(input_to.value);
     if(input_amount>0 && input_amount<current_balance && input_to.value!==current.username){
       const valid=other_account(account);

       valid.movements.push(input_amount);

       current.movements.push(-input_amount);

       UpdateUI();
      input_Amount.value='';
      input_to.value='';

        

     }
});

btn_loan.addEventListener("click",(e)=>{
  e.preventDefault();
  
  if(Number(loan_amount.value)<=5000){
    current.movements.push(Number(loan_amount.value));
    setTimeout(()=>UpdateUI(),2000);
  }
  loan_amount.value='';

})

logoff.addEventListener("click",(e)=>{
    e.preventDefault();
    welcome.textContent="Log in to get started";
    
    document.querySelector(".app").style.opacity=0;
});

btn_close.addEventListener("click",()=>{
    if(close_user.value===current.username && Number(close_pin.value)===current.pin){

        const indexValue=current.username;
        account.splice(indexValue,1);
        welcome.textContent="Log in to get started";
    
        document.querySelector(".app").style.opacity=0;
    }
})

let temp_movement;
let sort=false;

btn_sort.addEventListener("click",()=>{
    movement.innerHTML=" ";
   if(!sort){temp_movement=current.movements;
    temp_movement.sort((a,b)=>a-b);
    temp_movement.forEach((amount)=>{
        const html=`<div class="movements__row">
          <div class="movements__type movements__type--${amount>0?'deposit':'withdrawal'}">${amount>0?'deposit':'withdrawal'}</div>
          <div class="movements__date">1 days ago</div>
          <div class="movements__value"><span>&#8377;</span>${Math.abs(amount)}</div>
        </div>`;
        movement.insertAdjacentHTML("afterbegin",html);
        sort=!sort;
       
        
    });
}
else{
    current.movements.forEach((amount)=>{
        const html=`<div class="movements__row">
          <div class="movements__type movements__type--${amount>0?'deposit':'withdrawal'}">${amount>0?'deposit':'withdrawal'}</div>
          <div class="movements__date">1 days ago</div>
          <div class="movements__value"><span>&#8377;</span>${Math.abs(amount)}</div>
        </div>`;
        movement.insertAdjacentHTML("afterbegin",html);
        sort=!sort;
       
        
    });
    sort=!sort;

}
})


















