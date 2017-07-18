
function Pokemon(name,type,hp,atk,def,lg){
    this.name = name;
    this.type = type;
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.lg = lg;
}
var PokemonRoster= [
    new Pokemon("Pikachu","electirc",35,55,40,false),
    new Pokemon("Bulbasaur","grass",45,49,49, false),
    new Pokemon("Charmander","fire",39,52,43, false),
    new Pokemon("Raichu","electirc",60,90,55,false),
    new Pokemon("Mewtwo","physic",106,110,90,true),
    new Pokemon("Empoleon","water",84,86,88,true),

]

function print(roster){ 
    for(var i=0;i<roster.length;i++){ 
            console.log(roster[i]);
            
    }

}

print(PokemonRoster);


function PokemonAttacked(roster) {
    for (var i=0;) i<roster.length; i++){
        roster[i].hp = roster[i].hp - 10;{
    
    printRoster(roster);






    
