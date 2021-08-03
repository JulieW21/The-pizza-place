let foods = [];
        const calculate = (ev)=>{
            ev.preventDefault();  //to stop the form submitting
            let food = {
                size: document.getElementById('pizzaSize').value,
                crust: document.getElementById('crust').value,
                toppings: document.getElementById('toppings').value,
                amount: document.getElementById('number').value,
                delivery: document.getElementById('delivery').value,
                location: document.getElementById('location').value
            }
            window.alert("your pizza will be delivered to " +  food.location )
            foods.push(food);
            let reg =  /\d/g;

            let totals = parseInt(food.size.match(reg).join([]))+parseInt(food.crust.match(reg).join([]))+parseInt(food.toppings.match(reg).join([]));

            console.log(totals)
            document.getElementById("totals").innerHTML = totals;
            document.forms[0].reset(); // to clear the form for the next entries
            //document.querySelector('form').reset();

            //for display purposes only
            document.getElementById("size").innerHTML = food.size;
            document.getElementById("crust").innerHTML = food.crust;
            document.getElementById("toppings").innerHTML = food.toppings;
            document.getElementById("amount").innerHTML = food.amount;
            document.getElementById("delivery").innerHTML = food.delivery;


            //saving to localStorage
            localStorage.setItem('MyMovieList', JSON.stringify(foods) );
        }
        document.addEventListener('DOMContentLoaded', ()=>{
            document.getElementById('btn').addEventListener('click', calculate);
        });
