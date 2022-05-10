//fichier Javascript gérant la page d'accueil
let filteredRecipes = [...recipes];
let tags = [];
//chaque tag sera un objet {type:"", text:""}

//récupérer les données des recettes recipes
function getRecipes() {
        
    return (
        [...recipes]
    );
}

//afficher les recettes recipes
function displayRecipes() {
    const recettes_accueil = document.getElementById("recettes_accueil");
    recettes_accueil.innerHTML = "";

    //essayer de faire fonctionner ça avec une boucle for sur la version pas optimisée
    filteredRecipes.forEach((recipe) => {

        const recipeModel = recipeFactory(recipe);
        const recipeCard = recipeModel.getRecipeCard();
        recettes_accueil.appendChild(recipeCard);
	
    });


}

function loadSearch() {
    const dataSearched = document.getElementById("rechercher").value.toLowerCase();
    if(dataSearched.length >= 3) {



        filteredRecipes = recipes.filter(item => item.name.toLowerCase().includes(dataSearched)); // à mettre dans filterall -> à supprimer
        //filterAll(){}
        displayRecipes();




    } else {
        //if (filteredRecipes.length != recipes.length) {    --> if à garder pour la version optimisée
        filteredRecipes = [...recipes]; //déjà mis dans filterall -> à supprimer
        //filterAll(){}
        displayRecipes();
        //} --> fin de l'accolade du if à garder pour la version optimisée

    }

}


/*async function init() {
    await loadSearch();
}
init();*/



//cette fonction permet de rendre actives les fonctions évoquées à l'intérieur de celle-ci
window.onload = function() {
    const recipes = getRecipes();
    displayRecipes(recipes);
};



//fonctions servant à faire tourner les fleches pour le moment
function open_select1(){

    document.getElementById("select_ingredients").style.transform = "rotate(180deg)";

} // fin function open_select

function open_select2(){

    document.getElementById("select_appareils").style.transform = "rotate(180deg)";

} // fin function open_select

function open_select3(){

    document.getElementById("select_ustensiles").style.transform = "rotate(180deg)";

} // fin function open_select