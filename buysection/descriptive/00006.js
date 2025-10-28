function detail(){
    window.location.href="http://localhost:8000";
};


function pay(){

            document.getElementById("show").style.display = "block";
            var predefinedLink = "upi://pay?pa=9313317721@ptsbi&pn=NAME&mc=1234&tid=9876543210&tr=ORDER123&tn=Tri-Netra&am=299"; // Change this to your desired link
            new QRCode(document.getElementById("qrcode"), {
                text: predefinedLink,
                width: 200,
                height: 200
            });
        };


        function home(){
    window.location.href="/home/index.html";
}

function netra(){
    window.location.href="/8.Virtual Assistant/index.html";

}

function ad(){
    window.location.href="/add waste/hello.html";
}