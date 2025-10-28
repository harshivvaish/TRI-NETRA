function calcar() {
            // Get input values
            let number1 = parseFloat(document.getElementById('num1').value);
            let number2 = parseFloat(document.getElementById('num2').value);
            let number3 = parseFloat(document.getElementById('num3').value);

            const fuel_type = document.getElementById("drop").value;

            const factor = {"petrol":2.31 , "diesel":2.68 , "cng":2.16};

            let fuelconsumed=(number1*number2)/number3;
            let fuelfootprint=fuelconsumed*factor[fuel_type];
            
            let sum = fuelfootprint;

            // Store the result using localStorage
            localStorage.setItem("result", sum);
            // Redirect to the result page
            window.location.href = "carresult.html";
            return false; // Prevent form submission
            }
