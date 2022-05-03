//fichier Javascript gérant la page d'accueil


//récupérer les données des recettes recipes
async function getRecipes() {
        
    return (
        [...recipes]
    );
}

//afficher les recettes recipes
async function displayRecipes(recipes) {
    const recettes_accueil = document.getElementById("recettes_accueil");
    console.log(recipes);

    recipes.forEach((recipe) => {

        const recipeModel = recipeFactory(recipe);
        const recipeCard = recipeModel.getRecipeCard();
        recettes_accueil.appendChild(recipeCard);
	
    });

}


async function init() {
    const recipes = await getRecipes();
    displayRecipes(recipes);
}
init();

//cette fonction permet de rendre actives les fonctions évoquées à l'intérieur de celle-ci
/*window.onload = async function() {
    crear_select();
};*/



function open_select1(){

    document.getElementById("select_ingredients").style.transform = "rotate(180deg)";

} // fin function open_select

function open_select2(){

    document.getElementById("select_appareils").style.transform = "rotate(180deg)";

} // fin function open_select

function open_select3(){

    document.getElementById("select_ustensiles").style.transform = "rotate(180deg)";

} // fin function open_select