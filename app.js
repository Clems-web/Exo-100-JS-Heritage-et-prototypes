function Vehicule(Sacouleur, Sesroues, Samarque) {
    this.couleur = Sacouleur;
    this.roues = Sesroues;
    this.marque = Samarque;

    this.demarrer = function () {
        console.log("La voiture démarre");
    };
    this.arreter = function () {
        console.log("La voiture s'arrête");
    }
}
console.log(Vehicule.prototype);

let velo = new Vehicule("rouge", 2, "Btween");
velo.rayonRoues = "20cm";
velo.typePeintures = "metallique";
velo.monter = function () {
    console.log("Je monte sur mon vélo");
};
console.log(velo);

let voiture = new Vehicule("bleu", 4, "Dacia");
voiture.assurance = "Axa";
voiture.proprietaire = "Moi";
voiture.passerAuCarWash = function () {
    console.log("Je vais laver la voiture");
};

console.log(voiture);
