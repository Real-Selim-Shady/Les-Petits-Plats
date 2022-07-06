//fichier Javascript gérant la page d'accueil
let filteredRecipes = [...recipes];
let ingredients = recipes.ingredients;


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

function displayLittleIngredients() {


    const little_ingredients_container = document.getElementById("little_ingredients_container");
    little_ingredients_container.innerHTML = "";

    const ingredients = [];

    

    filteredRecipes.forEach((recipe) => {
        recipe.ingredients.forEach((ingredient) => {
            if (ingredients.indexOf(ingredient.ingredient)<0) {
                ingredients.push(ingredient.ingredient);
            };
        })	
    });

    console.log(ingredients);

    ingredients.forEach((ingredient) => {
        little_ingredients_container.appendChild(getIngredientTag(ingredient));
    })





}

function displayLittleUstensiles() {
    const little_ustensiles_container = document.getElementById("little_ustensiles_container");
    little_ustensiles_container.innerHTML = "";

    const ustensils = [];


    //essayer de faire fonctionner ça avec une boucle for sur la version pas optimisée
    filteredRecipes.forEach((recipe) => {
        recipe.ustensils.forEach((ustensil) => {
            if (ustensils.indexOf(ustensil)<0) {
                ustensils.push(ustensil);
            };

        })	
    });

    ustensils.forEach((ustensil) => {
        little_ustensiles_container.appendChild(getUstensilTag(ustensil));
    })

    
    //little_ustensiles_container.appendChild(getUstensilTag(ustensil1));



}

function displayLittleAppareils() {
    const little_appareils_container = document.getElementById("little_appareils_container");
    little_appareils_container.innerHTML = "";

    const appareils = [];

    filteredRecipes.forEach((recipe) => {

        if (appareils.indexOf(recipe.appliance)<0){
        appareils.push(recipe.appliance);};
    });

    appareils.forEach((appareil) => {
        little_appareils_container.appendChild(getAppareilTag(appareil));
    })



}

function loadSearch() {
    const dataSearched = document.getElementById("rechercher").value.toLowerCase();
    if(dataSearched.length >= 3) {

        /*function filterAll(){*/
         filteredRecipes = [...recipes];
        
         filteredRecipes = filterBySearch(); // filter filteredRecipes with search word
         function filterBySearch(){
            filteredRecipes = recipes.filter(item => item.name.toLowerCase().includes(dataSearched)); // à mettre dans filterall -> à supprimer
            displayRecipes();
        }
        
         // un tag est un objet {type: "ingredient", text: "coco"}

        
    } else {

        /*function filterAll() {*/
        filteredRecipes = [...recipes];
        displayRecipes();



    }
}











// FONCTIONS de côté en attendant la création des tags

function filterByIngredient(){

    const ingredientSearched = document.getElementById("recherche_ingredients").value.toLowerCase();
    if(ingredientSearched.length >= 3) {

        filteredRecipes = 

        recipes.filter((recipe) => 

            (recipe.ingredients.filter
                ( ingredient => 
                
                ingredient.ingredient.toLowerCase().includes(ingredientSearched)
                
                )

            ).length >0
        );


        displayLittleIngredients();
    }else {
        filteredRecipes = [...recipes]; 
        displayLittleIngredients();

    }
}

function filterByUstensil(){
    const ustensilSearched = document.getElementById("recherche_ustensiles").value.toLowerCase();


    if(ustensilSearched.length >= 3) {


        filteredRecipes = 

        recipes.filter((recipe) => 
            (recipe.ustensils.filter
                ( ustensils => 
                
                ustensils.toLowerCase().includes(ustensilSearched)

                )

            ).length >0
        );

        displayLittleUstensiles();
    }

       else {
        //filteredRecipes = [...recipes]; 
        filteredRecipes = [...recipes]; 
        displayLittleUstensiles();

};}



function filterByAppareil(){
    const appareilSearched = document.getElementById("recherche_appareils").value.toLowerCase();
    if(appareilSearched.length >= 3) {
        filteredRecipes = recipes.filter(item => item.appliance.toLowerCase().includes(appareilSearched));
        displayLittleAppareils();
    }else {
        filteredRecipes = [...recipes]; 
        displayLittleAppareils();
    }
}




//cette fonction permet de rendre actives les fonctions évoquées à l'intérieur de celle-ci
window.onload = function() {
    const recipes = getRecipes();
    displayRecipes(recipes);
    displayLittleIngredients(recipes);
    displayLittleUstensiles(recipes);
    displayLittleAppareils(recipes);
    ajouterIngredientTag(recipes);
    ajouterUstensilTag(recipes);
    ajouterAppareilTag(recipes);
};

















//fonctions servant à faire tourner les fleches pour le moment
function open_select1(){

    const little_ingredients_container = document.getElementById("little_ingredients_container");

    switch (little_ingredients_container.style.display) {
        case "none" :
            little_ingredients_container.style.display="grid";
            document.getElementById("select_ingredients").style.transform = "rotate(180deg)";
            console.log("case 1 enclenché");
        break;
        case "grid" :
            little_ingredients_container.style.display="none";
            document.getElementById("recherche_ustensiles").value="";
            document.getElementById("select_ingredients").style.transform = "rotate(0deg)";
            console.log("case 2 enclenché");
        break;
        default:
            console.log("default");

    }

} 

function open_select1_2(){

    const little_ingredients_container = document.getElementById("little_ingredients_container");

    if (little_ingredients_container.style.display="none") {
    little_ingredients_container.style.display="grid";
    document.getElementById("select_ingredients").style.transform = "rotate(180deg)";}
    
} 

function open_select2(){

    
    const little_appareils_container = document.getElementById("little_appareils_container");

    if (little_appareils_container.style.display=="none") {
    document.getElementById("select_appareils").style.transform = "rotate(180deg)";
    little_appareils_container.style.display="grid";}
    else {
        little_appareils_container.style.display="none";
        document.getElementById("recherche_appareils").textContent="";
        document.getElementById("select_appareils").style.transform = "rotate(0deg)";
    }
    


}

function open_select2_2(){

    
    const little_appareils_container = document.getElementById("little_appareils_container");

    if (little_appareils_container.style.display="none") {
    document.getElementById("select_appareils").style.transform = "rotate(180deg)";
    little_appareils_container.style.display="grid";}

}

function open_select3(){



    const little_ustensiles_container = document.getElementById("little_ustensiles_container");


    if (little_ustensiles_container.style.display=="none") {
    document.getElementById("select_ustensiles").style.transform = "rotate(180deg)";
    little_ustensiles_container.style.display="grid";}
    else {
        little_ustensiles_container.style.display="none";
        document.getElementById("recherche_ustensiles").textContent="";
        document.getElementById("select_ustensiles").style.transform = "rotate(0deg)";
    }



}

function open_select3_2(){



    const little_ustensiles_container = document.getElementById("little_ustensiles_container");


    if (little_ustensiles_container.style.display="none") {
    document.getElementById("select_ustensiles").style.transform = "rotate(180deg)";
    little_ustensiles_container.style.display="grid";}

}


function ajouterIngredientTag(ingredient)
{
 // l'utilisateur a cliqué sur un ingrédient dans la liste.
 // on ajoute le tag de cet ingrédient à la liste des tags (éventuellement déjà existants)
 // on ferme la liste des ingrédients

 let elements = document.getElementsByClassName("ingredient");
 let Tags_Container= document.getElementById("Tags_Container");
 let chosen_ingredient = "";

  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function choseIngredient(event) {
        /* Do your stuffs here */
        console.log(event.srcElement.innerText);
        chosen_ingredient = event.srcElement;

        chosen_ingredient.className = "ingredient_tag";
        croixSuppressionTag= "  Croix de fermeture";
        chosen_ingredient.textContent = chosen_ingredient.innerText + croixSuppressionTag;

        //Tags_Container.innerText = chosen_ingredient;

        Tags_Container.appendChild(chosen_ingredient);

 
    });
  }
 //filterRecipes();
}

function ajouterUstensilTag(ustensil)
{
 // l'utilisateur a cliqué sur un ustensil dans la liste.
 // on ajoute le tag de cet ustensil à la liste des tags (éventuellement déjà existants)
 // on ferme la liste des ustensils

 let elements = document.getElementsByClassName("ustensil");
 let Tags_Container= document.getElementById("Tags_Container");
 let chosen_ustensil = "";

  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function choseUstensil(event) {
        /* Do your stuffs here */
        console.log(event.srcElement.innerText);
        chosen_ustensil = event.srcElement;

        chosen_ustensil.className = "ustensil_tag";
        croixSuppressionTag= "  Croix de fermeture";
        chosen_ustensil.textContent = chosen_ustensil.innerText + croixSuppressionTag;

        //Tags_Container.innerText = chosen_ustensil;

        Tags_Container.appendChild(chosen_ustensil);



 
    });
  }
 //filterRecipes();
}

function ajouterAppareilTag(appareil)
{
 // l'utilisateur a cliqué sur un appareil dans la liste.
 // on ajoute le tag de cet appareil à la liste des tags (éventuellement déjà existants)
 // on ferme la liste des appareils

 let elements = document.getElementsByClassName("appareil");
 let Tags_Container= document.getElementById("Tags_Container");
 let chosen_appareil = "";

  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function choseAppareil(event) {
        /* Do your stuffs here */
        console.log(event.srcElement.innerText);
        chosen_appareil = event.srcElement;

        chosen_appareil.className = "appareil_tag";
        croixSuppressionTag= "  Croix de fermeture";
        chosen_appareil.textContent = chosen_appareil.innerText + croixSuppressionTag;

        //Tags_Container.innerText = chosen_appareil;
        Tags_Container.appendChild(chosen_appareil);

        let appareil_tag = document.getElementsByClassName("appareil_tag");

        for (let i = 0; i < appareil_tag.length; i++) {
            appareil_tag[i].addEventListener("click", function appareilTag(event2) {

                

            }
 
    });
  }
 //filterRecipes();
}