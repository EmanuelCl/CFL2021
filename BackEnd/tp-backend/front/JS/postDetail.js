let userIdPost = document.getElementById("userIdPost").value;
let idPost = document.getElementById("idPost").value;
let titlePost = document.getElementById("title").value;
let bodyPost = document.getElementById("body").value;

let params = [];

function processParams() {
let paramstr = window.location.search.substr(1);
let paramarr = paramstr.split("&");
    for (let i = 0; i < paramarr.length; i++) {
        let tmparr = paramarr[i].split("=");
            params[tmparr[0]] = tmparr[1];
    }
}
load();
async function load(){
    let container = document.getElementById("app");
    try {
        processParams();
        let response = await fetch(`/pagina/${params["index"]}`);
        console.log(response)
        if (response.ok) {
            let t = await response.json();
            userIdPost.innerHTML = t["userId"];
            idPost.innerHTML = t["id"]
            titlePost.innerHTML = t["title"];
            bodyPost.innerHTML = t["body"];
    }
    else
        container.innerHTML = "<h1>Error - Failed URL!</h1>";
    }
    catch (response) {
        container.innerHTML = "<h1>Connection error</h1>";
    };
}


// userIdPost.innerHTML=params["userId"];
// idPost.innerHTML=params["id"];
// titlePost.innerHTML=params["title"];
// bodyPost.innerHTML=params["body"];