"use strict";
// je selectionne mes boutons, ma zone de texte, et je déclare mes variables.
let boutons = document.querySelectorAll('input[type="button"]');
let zone = document.querySelector('textarea');
let total = '', a, b, prev='', ope ='';

// je parcours le tableau de mes boutons
boutons.forEach(function(bouton){
	// sur chaque bouton je crée un évènement au clique
    bouton.addEventListener("click", function(){
		// je regarde si la valeur de mon bouton est inferieur à 1 et donc à un chiffre.
		if(this.value <10){
			// je met mon chiffre à la suite de mes nombres.
			total += this.value;
        }
		// sinon si c'est un point
		else if(this.value == "."){
			// si c'est un point, je regarde si je n'ai pas déjà utilisé un point ou si ce n'est pas le premier caractère.
			if(!total.includes('.') && total != ''){
				total += this.value;
			}
		}
		// sinon si c'est le bouton d'éffacement.
		else if(this.value == "c"){
			//je remet tout à zéro
			total = '';
			a = 0;
			b = 0;
			ope = '';
			prev = '';
		}
		// je regarde si c'est un égal
		else if(this.value == "="){
			// je transforme ma chaine de caractère en nombre et la range dans b
			b = parseFloat(total);
			// j'ajoute à mon historique mon nombre suivi d'un égal.
			prev += total + "=";
			// je vérifie quelle opération c'est et la produit entre a et b;
			switch(ope){
				case "+":
					total = a+b;
					break;
				case "-":
					total = a-b;
					break;
				case "/":
					total = a/b;
					break;
				case "*":
					total = a*b;
					break;
			}
			// j'ajoute mon total à mon historique suivi d'un saut à la ligne puis remet tout sauf l'historique à zéro.
			prev += total +'\n'
			total = '';
			ope = '';
			a = 0;
			b = 0;
			
		}
		//si ce n'est aucune des possibilités précédentes
		else{
			// je transforme ma chaine de caractère en nombre et la range dans a
			a = parseFloat(total);
			// je mets le signe de mon opération dans la variable ope.
			ope = this.value;
			// j'ajoute mon nombre ainsi que le signe d'opération à mon historique. Puis remet total à zéro.
			prev += total +ope;
			total = '';
		}

		// j'ajoute mon nombre à l'historique puis l'inclus dans mon textarea.
        zone.value= prev+total;
		// je scroll mon textarea vers le bas au cas où il commence à être trop rempli.
		zone.scrollTo(0, zone.scrollHeight);
    });
});

