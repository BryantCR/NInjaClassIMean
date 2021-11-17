
let Ninja = {

    Name:'Akali',
    Health: 100,
    Speed: 3,
    Strength: 3,

    sayName: function(){
            console.log(this.Name);
        },

    showStats: function(){
            console.log(this.Name, this.Health, this.Speed, this.Strength);
        },

    drinkSake: function(){
            this.Health = this.Health + 10;
            console.log(this.Health);
        }

}

/*function sayName (){
    console.log(Ninja.Name);
}
sayName();*/

Ninja.sayName();
Ninja.showStats();
Ninja.drinkSake();
Ninja.showStats();

//console.log(Ninja.sayName());
//console.log(Ninja.showStats());
//console.log(Ninja.drinkSake());
//console.log(Ninja.showStats());
