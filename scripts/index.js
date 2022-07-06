//fichier Javascript gérant la page d'accueil
let filteredRecipes = [...recipes];
//let ingredients = recipes.ingredients;
let littleIngredients = [];
let littleAppareils = [];
let littleUstensils = [];


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

function extractIngredients()
{
 // réagit chaque fois que la liste des recettes a changé (donc le filtrage par les tags a changé)
 //littleIngredients = // extrait les ingrédients des recettes filtrées (filteredRecipes) 

    littleIngredients = [];

    for (let i=0 ; i<filteredRecipes.length; i++) {
        for ( let j=0; j<filteredRecipes[i].ingredients.length; j++) {
            if (littleIngredients.indexOf(filteredRecipes[i].ingredients[j].ingredient)<0) 
            {
                littleIngredients.push(filteredRecipes[i].ingredients[j].ingredient);
            }
        }
    }
}

function extractUstensils()
{
 // réagit chaque fois que la liste des recettes a changé (donc le filtrage par les tags a changé)
 //littleIngredients = // extrait les ingrédients des recettes filtrées (filteredRecipes) 

    littleUstensils = [];

    for (let i=0 ; i<filteredRecipes.length; i++) {
        for ( let j=0; j<filteredRecipes[i].ustensils.length; j++) {
            if (littleUstensils.indexOf(filteredRecipes[i].ustensils[j])<0) 
            {
                littleUstensils.push(filteredRecipes[i].ustensils[j]);
            }
        }
    }
}

function extractAppareils()
{
 // réagit chaque fois que la liste des recettes a changé (donc le filtrage par les tags a changé)
 //littleIngredients = // extrait les ingrédients des recettes filtrées (filteredRecipes) 

    littleAppareils = [];

    for (let i=0 ; i<filteredRecipes.length; i++) {
        if (littleAppareils.indexOf(filteredRecipes[i].appliance)<0) 
        {
            littleAppareils.push(filteredRecipes[i].appliance);
        }
    }
}

function filterRecipes()
{
 // réagit à chaque fois qu'on ajoute ou supprime un tag


 let Tags_Container= document.getElementById("Tags_Container");

 
 filteredRecipes = [...recipes]; 
    /*function filterByTags(){
        filteredRecipes = recipes.filter(item => item.name.toLowerCase().includes(Tags_Container)); 
        displayRecipes();
    }*/

    /*console.log(Tags_Container);

    if (Tags_Container.children.length == 0) { 
        filteredRecipes = [...recipes];// les recettes d'origine, filtrées par tous les tags courants. / une copie de l'array d'origine recipes

    } else {
        //filteredRecipes = [...recipes]
        console.log("coucou");
        const filters = [,];

        filteredRecipes = recipes.filter((recipe) => {
            const tags = [recipe.ingredients, recipe.ustensils, recipe.appliance];
            return filters.every(f => tags.includes(f));
        });
        console.log(filteredRecipes)
    }*/

 extractUstensils();
 extractIngredients();
 extractAppareils();
 // et les ustensiles et les appliences

}

function afficherIngredients(ingredients)
{
 // afficher les ingrédients qui sont dans (ingredients)
    
    const little_ingredients_container = document.getElementById("little_ingredients_container");
    little_ingredients_container.innerHTML = "";


    ingredients.forEach((ingredient) => { 
        little_ingredients_container.appendChild(getIngredientCard(ingredient));
    })


}


function afficherUstensils(ustensils)
{
 // afficher les ingrédients qui sont dans (ingredients)

    const little_ustensiles_container = document.getElementById("little_ustensiles_container");
    little_ustensiles_container.innerHTML = "";


    ustensils.forEach((ustensil) => { 
        little_ustensiles_container.appendChild(getUstensilCard(ustensil));
    })

}

function afficherAppareils(appliance)
{
 // afficher les ingrédients qui sont dans (ingredients)

    const little_appareils_container = document.getElementById("little_appareils_container");
    little_appareils_container.innerHTML = "";


    appliance.forEach((appliance) => { 
        little_appareils_container.appendChild(getAppareilCard(appliance));
    })

}


/*
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
*/


function loadSearch() {
    const dataSearched = document.getElementById("rechercher").value.toLowerCase();
    if(dataSearched.length >= 3) {

        /*function filterAll(){*/
         // un tag est un objet {type: "ingredient", text: "coco"}

         

        
    } else {

        /*function filterAll() {*/
        filteredRecipes = [...recipes];
        displayRecipes();



    }
}











// FONCTIONS de côté en attendant la création des tags

function onIngredientFilterChange()
{
 // quand l'utilisateur saisit un filtre (ajoute ou supprime des caractères)
//let littleIngredientsList = // on filtre littleIngredients par la saisie dans le input

    let recherche_ingredients = document.getElementById("recherche_ingredients").value.toLowerCase();
    let littleIngredientsList = [];
    if(recherche_ingredients.length >= 3) 
    {
        for (let i=0; i<littleIngredients.length; i++) 
        {
            if (littleIngredients[i].toLowerCase().includes(recherche_ingredients)) 
            {
                littleIngredientsList.push(littleIngredients[i]);
            } 
        }
        afficherIngredients(littleIngredientsList);
    }

}




function onUstensilFilterChange()
{
 // quand l'utilisateur saisit un filtre (ajoute ou supprime des caractères)
//let littleIngredientsList = // on filtre littleIngredients par la saisie dans le input

    let recherche_ustensiles = document.getElementById("recherche_ustensiles").value.toLowerCase();
    let littleUstensilsList = [];
    if(recherche_ustensiles.length >= 3) 
    {
        for (let i=0; i<littleUstensils.length; i++) 
        {
            if (littleUstensils[i].toLowerCase().includes(recherche_ustensiles)) 
            {
                littleUstensilsList.push(littleUstensils[i]);
            } 
        }
        afficherUstensils(littleUstensilsList);
    } 

}


function onAppareilFilterChange()
{
 // quand l'utilisateur saisit un filtre (ajoute ou supprime des caractères)
//let littleIngredientsList = // on filtre littleIngredients par la saisie dans le input

    let recherche_appareils = document.getElementById("recherche_appareils").value.toLowerCase();
    let littleAppareilsList = [];
    if(recherche_appareils.length >= 3) 
    {
        for (let i=0; i<littleAppareils.length; i++) 
        {
            if (littleAppareils[i].toLowerCase().includes(recherche_appareils)) 
            {
                littleAppareilsList.push(littleAppareils[i]);
            } 
        }
        afficherAppareils(littleAppareilsList);
    } 

}

/*
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
*/




//fonctions servant à faire tourner les fleches pour le moment
function open_select1(){

    const little_ingredients_container = document.getElementById("little_ingredients_container");

    switch (little_ingredients_container.style.display) {
        case "none" :
            little_ingredients_container.style.display="grid";
            document.getElementById("select_ingredients").style.transform = "rotate(180deg)";

        break;
        case "grid" :
            little_ingredients_container.style.display="none";
            document.getElementById("recherche_ustensiles").value="";
            document.getElementById("select_ingredients").style.transform = "rotate(0deg)";

        break;
        default:


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


function addIngredientTag(ingredient)
{ 
    
    chosen_ingredient = document.createElement("div");

    chosen_ingredient.className = "ingredient_tag";
    croixSuppressionTag= "  Croix de fermeture";
    chosen_ingredient.textContent = ingredient;


    Tags_Container.appendChild(chosen_ingredient);

    //let ingredient_tag = document.getElementsByClassName("ingredient_tag");


    chosen_ingredient.addEventListener("click", function (event2) 
    {
        unselected_ingredient = event2.srcElement;
        unselected_ingredient.style.display="none"; // il reste dans la liste il faut changer ça
    })

    filterRecipes();

}

function addUstensilTag(ustensil)
{
 // l'utilisateur a cliqué sur un ustensil dans la liste.
 // on ajoute le tag de cet ustensil à la liste des tags (éventuellement déjà existants)
 // on ferme la liste des ustensils
    chosen_ustensil = document.createElement("div");

    chosen_ustensil.className = "ustensil_tag";
    croixSuppressionTag= "  Croix de fermeture";
    chosen_ustensil.textContent = ustensil;


    Tags_Container.appendChild(chosen_ustensil);

    //let ustensil_tag = document.getElementsByClassName("ustensil_tag");


    chosen_ustensil.addEventListener("click", function (event2) 
    {
        unselected_ustensil = event2.srcElement;
        unselected_ustensil.style.display="none"; // il reste dans la liste il faut changer ça
    })

    filterRecipes();
}


function addAppareilTag(appliance)
{
 // l'utilisateur a cliqué sur un ustensil dans la liste.
 // on ajoute le tag de cet ustensil à la liste des tags (éventuellement déjà existants)
 // on ferme la liste des ustensils
    chosen_appareil = document.createElement("div");

    chosen_appareil.className = "appareil_tag";
    croixSuppressionTag= "  Croix de fermeture";
    chosen_appareil.textContent = appliance;


    Tags_Container.appendChild(chosen_appareil);

    //let ustensil_tag = document.getElementsByClassName("ustensil_tag");


    chosen_appareil.addEventListener("click", function (event2) 
    {
        unselected_appareil = event2.srcElement;
        unselected_appareil.style.display="none"; // il reste dans la liste il faut changer ça
    })

    filterRecipes();
}

/*
function ajouterAppareilTag(appareil)
{
 // l'utilisateur a cliqué sur un appareil dans la liste.
 // on ajoute le tag de cet appareil à la liste des tags 
 // on ferme la liste des appareils

 let elements = document.getElementsByClassName("appareil");
 let Tags_Container= document.getElementById("Tags_Container");
 let chosen_appareil = "";

  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", function choseAppareil(event) {

        console.log(event.srcElement.innerText);
        chosen_appareil = event.srcElement;

        chosen_appareil.className = "appareil_tag";
        croixSuppressionTag= "  Croix de fermeture";
        chosen_appareil.textContent = chosen_appareil.innerText;

        //Tags_Container.innerText = chosen_appareil;
        Tags_Container.appendChild(chosen_appareil);

        let appareil_tag = document.getElementsByClassName("appareil_tag");

        //refaire filtrer les appareils/ingredients/ustensils à partir des filteredRecipes

        for (let i = 0; i < appareil_tag.length; i++) {
            appareil_tag[i].addEventListener("click", function appareilTag(event2) {
                unselected_appareil = event2.srcElement;
                unselected_appareil.style.display="none";
            })};
 
    });
  }
 //filterRecipes();
}
*/

//cette fonction permet de rendre actives les fonctions évoquées à l'intérieur de celle-ci
window.onload = function() {
    const recipes = getRecipes();
    displayRecipes(recipes);
    extractIngredients();
    extractUstensils();
    extractAppareils();

    afficherIngredients(littleIngredients);
    afficherUstensils(littleUstensils);
    afficherAppareils(littleAppareils);

    //displayLittleAppareils(recipes);
    //ajouterIngredientTag(recipes);
    //ajouterUstensilTag(recipes);
    //ajouterAppareilTag(recipes);
};