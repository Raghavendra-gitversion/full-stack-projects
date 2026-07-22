const input = document.getElementById("pokemonName");
const button = document.getElementById("getPokemon");
const home = document.getElementById("home");
const image = document.getElementById("pokemonImage");
const card = document.getElementById("card")
const Name = document.getElementById("name")
const Hp = document.getElementById("hp")
const Attack = document.getElementById("attack")
const Defense = document.getElementById("defense")
const Sp_atk = document.getElementById("sp.atk")
const Sp_def = document.getElementById("sp.def")
const Speed = document.getElementById("speed")



button.disabled = true;

input.addEventListener("input", function () {
    button.disabled = input.value.trim() === "";
});

button.addEventListener("click", getData);

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && !button.disabled) {
        getData();
    }
});

async function getData() {

    const pokemonName = input.value.trim().toLowerCase();

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not find the pokemon");
        }

        const data = await response.json();

        const pokemonSprite = data.sprites.other["official-artwork"].front_default;

        const name = data.name;
        const stats = data.stats;

        /* getting stats from response */
        const hp=stats[0].base_stat;
        const attack=stats[1].base_stat;
        const defense=stats[2].base_stat;
        const sp_atk=stats[3].base_stat;
        const sp_def=stats[4].base_stat;
        const speed=stats[5].base_stat;

        home.style.display = "none";

        image.src = pokemonSprite;

        card.style.display = "flex";

        /* returning stats to display */
        Name.textContent = name;
        Hp.textContent = hp;
        Attack.textContent = attack;
        Defense.textContent = defense;
        Sp_atk.textContent = sp_atk;
        Sp_def.textContent = sp_def;
        Speed.textContent = speed;

        console.log(data);

        input.value = "";
        button.disabled = true;

    } catch (error) {
        console.error(error);
    }
}