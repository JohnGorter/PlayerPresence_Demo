

let login = new Promise((res, rej)=>{
    setTimeout(()=>{
        console.log("starting..");
        res(); 
    }, 3000); 
});


console.log("a");

async function test() {
    await login
    let email = await getprofile();
    await getemail()
    await sendemail(email)

    console.log("success!");
}


test(); 
      
function sendemail(email) {
    // get profile
    return new Promise((res, rej) => setTimeout(()=>{ console.log("send email to " + email); res();   }, 3000)); 
}

function getemail() {
    // get profile
    return new Promise((res, rej) => setTimeout(()=>{ console.log("getting email"); res();   }, 3000)); 
}

function getprofile() {
    // get profile
    return new Promise((res, rej) => setTimeout(()=>{ console.log("getting profile"); res("john.gorter@gmail.com");   }, 3000)); 
}

console.log("b");

