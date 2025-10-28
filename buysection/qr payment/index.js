
let price = document.getElementById("value").value;

function pay(){

            
            var predefinedLink = "upi://pay?pa=9313317721@ptsbi&pn=NAME&mc=1234&tid=9876543210&tr=ORDER123&tn=Tri-Netra&am=" + total.toString(); // Change this to your desired link
            new QRCode(document.getElementById("qrcode"), {
                text: predefinedLink,
                width: 200,
                height: 200
            });
        };