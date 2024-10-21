async function getImage(){
    const pokemonName = document.getElementById("input").value.toLowerCase();
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const display = document.getElementById("display");
    // console.log(document.getElementById("input").value);

    const response = await fetch(URL);

    if(!response.ok){
        display.src="notFound.png";
        console.error(response.error);
    }

    else{
        const data = await response.json();
        console.log(data.sprites.front_default);
        display.src=`${data.sprites.front_default}`;
        document.getElementById("input").value = "";
    }

}

getImage();

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    getImage();
});