fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
.then(response => response.json())
.then(allpokemons => {

    var pokemons = [];

    allpokemons.results.map((item)=>{
        fetch(item.url)
        .then(response => response.json())
        .then(pokemonSingle => {

            fetch(pokemonSingle.abilities[0].ability.url)
            .then(response => response.json())
            .then(abilitiOne => {

                let habilidade = ""
                abilitiOne.effect_entries.map(item =>{
                    if (item.language.name == "en"){
                        habilidade = item.effect
                    }
                })
                pokemons.push({
                    nome:item.name,
                    imagem:pokemonSingle.sprites.other.home.front_default, 
                    XP:pokemonSingle.base_experience,
                    Habilidade:habilidade
                });
                if(pokemons.length == 20){
                    console.log(pokemons);
                }
            })
        })
    })
})