let url = "https://catfact.ninja/fact";
let button = document.querySelector("button");
let para = document.querySelector("#fact");

async function getData() {
    try {
        let res = await axios.get(url);
        return res.data.fact
    }
    catch(error){
        return "Fact was not found";
    }
}

button.addEventListener("click", async() => {
   let result= await getData();
   para.innerText=result;
})