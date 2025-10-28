function calfamily() {
            // Get input values
            let number1 = parseFloat(document.getElementById('num1').value);
            let number2 = parseFloat(document.getElementById('num2').value);
            let number3 = parseFloat(document.getElementById('num3').value);
            const fuel_type= document.getElementById("drop").value;

            const factor = {"petrol":2.31 , "diesel":2.68 , "cng":2.16};



            let lpg=(2.95*14.2*number1*12)/1000;
            let energy=(0.82*number2*12)/1000;
            const real=factor[fuel_type];
            let fuel=(number3*12*real)/1000;
            
            
            let sum = lpg+energy+fuel;


            // Store the result using localStorage
            localStorage.setItem("familyresult", sum);
            // Redirect to the result page
            window.location.href = "familyresult.html";
            return false; // Prevent form submission
            }