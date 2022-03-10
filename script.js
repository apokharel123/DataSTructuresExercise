//1A.
//const jedi=[];
//1B.
const jedi=["Luke"];
// jedi.splice(0, 0, "Luke")
//1C.
jedi.push("Obi-Wan Kenobi");
//1D.
jedi.unshift("Yoda");
//1E.

//console.log(jedi.slice(1,2));
//1F
jedi.splice(2,2)
//const a= jedi.pop();
//console.log(jedi);
//console.log(a);

//1G.
jedi.splice(0,1);

//2A.
const sithLords=["Darth Vader","Darth Sidious","Darth Maul"]
//2B.
const imperialOfficers=["Grand Moff Tarkin","Orson Krennic"]
//2C
const starWarsVillians= sithLords.concat(imperialOfficers);
//2D

console.log(  starWarsVillians.slice(0,2));
//3A.
const droids={
astromech:"R2-D2",
protocol:"C-3PO",
assasin:"IG-88"
};

//3B
console.log(droids["astromech"]);
console.log(droids.astromech);

//3C.
console.log(droids.protocol);

//3D
droids["assasin"]="IG-11"
console.log(droids["assasin"]);
console.log(droids);

//dot method
droids.assasin="IG-11";
console.log(droids.assasin);
console.log(droids);

//BoNus
//4. 
console.log(starWarsVillians[0][6]);

//5
//console.log(sithLords[1]);
console.log(sithLords.slice(-2,-1));
//6A
const starWarsMovies=[
    {
    episodeOne:"The Phantom Menance",
    episodeTwo:"Attack of the Clones",
    episodeThree:"Revenge of the Sith"
}, 
{
  episodeFour:"A New Hope",
  episodeFive:"The Empire Strikes Back" ,
  episodeSix:"Return of the Jedi"
},
{
episodeSeven:"The Force Awakens",
episodeEight: "The Last Jedi",
episodeNine:"The Ride of Skywalker"
}];
console.log(starWarsMovies);

//6B
 starWarsMovies.splice(1, 0, "Rouge One"),starWarsMovies.splice(1,0, "Solo");
 console.log(starWarsMovies);



