function calcul() {
  //dans la variable shoeSize je récupére la valeur du premier champ idem pour yearOfBirth.
  var shoeSize = document.getElementById('shoeSize').value;
  var yearOfBirth = document.getElementById('yearOfBirth').value;
  //si les champ sont remplie et si l'utilisateur a bien remplie avec des chiffre
  if (shoeSize && yearOfBirth && !isNaN(shoeSize) && !isNaN(yearOfBirth) ){
    //je retourne le resultat de mon calcul ci desous
    return (shoeSize * 2 + 5) * 50 - yearOfBirth + 1766;
  }
}
//je vérifie si l'utilisateur appuie sur le bouton validé si c'est le cas j'apelle ma fonction calcul
document.getElementById('submit').onclick = function(){alert(calcul())}
