function call(number) {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${number}`)
        .then(response => response.json())
        .then(allpokemons => {
            var pokemons = [];
            allpokemons.results.map((item) => {
                fetch(item.url)
                    .then(response => response.json())
                    .then(pokemonSingle => {
                        pokemons.push({
                            nome: item.name,
                            imagem: pokemonSingle.sprites.other.home.front_default,
                            XP: pokemonSingle.base_experience,
                        });

                        if (pokemons.length == number) {
                            let box = document.getElementById("box");
                            box.innerHTML = ""; // Limpa o conteúdo anterior
                            pokemons.map(item => {
                                box.innerHTML += `<div class="card m-2" style="width: 18rem;">
                                                    <img class="card-img-top" src=${item.imagem} alt="Card image cap">
                                                    <div class="card-body bg-light">
                                                    <h5 class="card-title">${item.nome}</h5>
                                                    <p class="card-text">${item.XP}</p>
                                                    <button class="btn btn-primary">SAVE</button>
                                                    </div>
                                                </div>`;
                            });
                        }
                    });
            });
        });
}


function submitForm() {
    var quantity = document.getElementById("number").value;
    if (quantity != "") {
        console.log(quantity)
        call(quantity);
    } else {
        call(9);
    }
}

