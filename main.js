// function reload(){
//     location.reload();
// }
// function submit(){
//     let fn = document.getElementById("fname").value;
//     let ln = document.getElementById("lname").value;
//     let em = document.getElementById("email").value;
//     let ph = document.getElementById("phone").value;
//     let pass = document.getElementById("pass").value;
//     let cpass = document.getElementById("cpass").value;

//     let totalname = fn + " " + ln;
//     let Password = pass;

//     let object = {
//         name: totalname,
//         email: em,
//         Phone: ph,
//         Password: Password
//     }

//     if(fn == "" && ln == "" && em == "" && ph == "" && pass == "" && cpass == ""){
//         let containr = document.getElementById("container");
//         containr.classList.add("error_animation");
//         function reload(){
//             location.reload();
//         }
//         setInterval(reload, 500);
//     }
//     else if(fn == "" || fn == null){
//         let fastname = document.getElementById("fname")
//         fastname.classList.add("error_animation");
//         function Fremove(){
//             fastname.classList.remove("error_animation");
//         }
//         setInterval(Fremove, 1000);
//     }
//     else if(ln == "" || ln == null){
//         let lastname = document.getElementById("lname");
//         lastname.classList.add("error_animation");
//         function Lremove(){
//             lastname.classList.remove("error_animation");
//         }
//         setInterval(Lremove, 1000);
//     }
//     else if(em == "" || em == null){
//         let email = document.getElementById("email");
//         email.classList.add("error_animation");
//         function Eremove(){
//             email.classList.remove("error_animation");
//         }
//         setInterval(Eremove, 1000);
//     }
//     else if(ph == "" || ph == null){
//         let phone = document.getElementById("phone");
//         phone.classList.add("error_animation");
//         function Phremove(){
//             phone.classList.remove("error_animation");
//         }
//         setInterval(Phremove, 1000);
//     }
//     else if(pass == "" || pass == null){
//         let password = document.getElementById("pass");
//         password.classList.add("error_animation");
//         function Premove(){
//             password.classList.remove("error_animation");
//         }
//         setInterval(Premove, 1000);
//     } 
//     else if(cpass == "" || cpass == null){
//         let cpassword = document.getElementById("cpass");
//         cpassword.classList.add("error_animation");
//         function Cremove(){
//             cpassword.classList.remove("error_animation");
//         }
//         setInterval(Cremove, 1000);
//     } 
//     else{
//         console.log(object);
//         let mass = document.getElementById("massage");
//         mass.classList.add("b");
//     }
// }

let seconde = 0;
let min = 0;
let h = 0;

function load(){
    let met = document.getElementById("m_1");
    let Min = document.getElementById("m");
    let H = document.getElementById("h");
    seconde++;
    met.innerText = seconde;
    if(seconde >= 59){
        seconde = 0;
        min++;
        Min.innerText = min;
        if(min == 60 || min == 120 || min == 180 || min == 240 || min == 300 || min == 360
             || min == 420 || min == 480 || min == 540 || min == 600 || min == 660 || 
             min == 720 || min == 780){
            h++;
            H.innerText = h;
        }
    }
    if(h == 13){
        h = 1;
    }
}

// load();
setInterval(load, 0);