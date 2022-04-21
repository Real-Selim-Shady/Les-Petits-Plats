
//fichier Javascript qui exploite les données JSON pour les injecter par méthode factory

let recipe = [];

function recipeFactory(recipe) {
    let { id, name, servings, ingredients, ingredient, quantity, unit, time, description, appliance, ustensils } = recipe;

    //méthode factory injectant les informations des recettes sur la page d"accueil
    function getRecipeCard() {


        const article = document.createElement( "article" );
        article.className = "carte";

        const topSpace = document.createElement("div");
        topSpace.className = "topSpace";
        article.appendChild(topSpace);

        const bottomSpace = document.createElement("div");
        bottomSpace.className = "bottomSpace";
        article.appendChild(bottomSpace);

        const titleAndTimer = document.createElement("div");
        titleAndTimer.className = "titleAndTimer";
        bottomSpace.appendChild(titleAndTimer);

        const title = document.createElement("p");
        title.className = "title";
        title.textContent = name;
        title.ariaLabel = name;
        titleAndTimer.appendChild(title);

        const timer = document.createElement("p");
        timer.className = "timer";
        timer.textContent = time+" min";
        timer.ariaLabel = time;
        titleAndTimer.appendChild(timer);

        const ingredientsAndTuto = document.createElement("div");
        ingredientsAndTuto.className = "ingredientsAndTuto";
        bottomSpace.appendChild(ingredientsAndTuto);

        const ingredients1 = document.createElement("div");
        ingredients1.className = "ingredients";
        ingredients1.textContent = ingredients;
        ingredients1.ariaLabel = ingredients;
        ingredientsAndTuto.appendChild(ingredients1);

        const ingredient1 = document.createElement("div");
        ingredient1.className = "ingredient";
        ingredient1.textContent = ingredient;
        ingredient1.ariaLabel = ingredient;
        ingredients1.appendChild(ingredient1);

        const tuto = document.createElement("div");
        tuto.className = "tuto";
        tuto.textContent = description;
        tuto.ariaLabel = description;
        ingredientsAndTuto.appendChild(tuto);


        return (article);
    }

    return { getRecipeCard };

}

//fonction permettant de fermer la modale de gallerie d"image
function closeMediaModal () {

    let modal = document.getElementById("myModal");
    modal.style.display = "none";

}
