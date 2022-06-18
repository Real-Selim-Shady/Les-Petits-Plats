//fichier Javascript gérant la page d'accueil
let filteredRecipes = [...recipes];
let tags = [];
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

    //essayer de faire fonctionner ça avec une boucle for sur la version pas optimisée
    filteredRecipes.forEach((recipe) => {
        recipe.ingredients.forEach((ingredient) => {
            if (ingredients.indexOf(ingredient.ingredient)<0) {
                ingredients.push(ingredient.ingredient);
            };
        })	
    });

    ingredients.forEach((ingredient) => {
        little_ingredients_container.appendChild(getUstensilTag(ingredient));
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

}

function displayLittleAppareils() {
    const little_appareils_container = document.getElementById("little_appareils_container");
    little_appareils_container.innerHTML = "";

    //essayer de faire fonctionner ça avec une boucle for sur la version pas optimisée
    /*filteredRecipes.forEach((recipe) => {

        const recipeModel = recipeFactory(recipe);
        const recipeTag = recipeModel.getAppareilsTags();
        little_appareils_container.appendChild(recipeTag);

	
    });*/

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
        
         /*for(let i=0; i < tags.length; i++)
         {
          switch(tags[i].type)
          {
           case "ingredient":
           {
            filteredRecipes = filterByIngredient(tags[i]); //filter filteredRecipes with this ingredient
            break;
           }
           case "ustensils":
           {
            filteredRecipes = filterByUstensil(tags[i]);
            break;
           }
           case "appareils":
           {
            filteredRecipes = filterByAppareil(tags[i]);
            break;
           }
         }
        
         displayFilteredRecipes();
        
        }
        }*/


        
    } else {

        /*function filterAll() {*/
        filteredRecipes = [...recipes];

        //filteredRecipes = filterBySearch(); // filter filteredRecipes with search word
        

        // un tag est un objet {type: "ingredient", text: "coco"}

        /*for(let i=0; i < tags.length; i++)
        {
        switch(tags[i].type)
        {
        case "ingredient":
        {
            filteredRecipes = filterByIngredient(tags[i]); //filter filteredRecipes with this ingredient
            break;
        }
        case "ustensils":
        {
            filteredRecipes = filterByUstensil(tags[i]);
            break;
        }
        case "appareils":
        {
            filteredRecipes = filterByAppareil(tags[i]);
            break;
        }
        }*/

        displayRecipes();

        /*}}*/

    }
}



// FONCTIONS de côté en attendant la création des tags
/*function filterByIngredient(){

    const ingredientSearched = document.getElementById("recherche_ingredients").value.toLowerCase();
    if(ingredientSearched.length >= 3) {

        filteredRecipes = 

        recipes.filter((recipe) => {
        return (
            (recipe.ingredients.filter
                ( ingredient => 
                
                ingredient.ingredient.toLowerCase().includes(ingredientSearched)

                )

            ).length >0)
        });


        displayRecipes();
    }else {
        filteredRecipes = [...recipes]; 
        displayRecipes();

    }
}*/

/*function filterByUstensil(){
    const ustensilSearched = document.getElementById("recherche_ustensiles").value.toLowerCase();
    if(ustensilSearched.length >= 3) {


        filteredRecipes = recipes.filter((item) => {
            return (item.ustensils.includes(ustensilSearched));
        });

        filteredRecipes = 

        recipes.filter((recipe) => {
        return (
            (recipe.ustensils.filter
                ( ustensils => 
                
                ustensils.toLowerCase().includes(ustensilSearched)

                )

            ).length >0)
        });

        displayRecipes();
    }else {
        filteredRecipes = [...recipes]; 
        displayRecipes();

    }
}*/

/*function filterByAppareil(){
    const appareilSearched = document.getElementById("recherche_appareils").value.toLowerCase();
    if(appareilSearched.length >= 3) {
        filteredRecipes = recipes.filter(item => item.appliance.toLowerCase().includes(appareilSearched));
        displayRecipes();
    }else {
        filteredRecipes = [...recipes]; 
        displayRecipes();
    }
}*/

function filterByIngredient(){

    const ingredientSearched = document.getElementById("recherche_ingredients").value.toLowerCase();
    if(ingredientSearched.length >= 3) {

        filteredRecipes = 

        recipes.filter((recipe) => {
        return (
            (recipe.ingredients.filter
                ( ingredient => 
                
                ingredient.ingredient.toLowerCase().includes(ingredientSearched)

                )

            ).length >0)
        });


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

        recipes.filter((recipe) => {
        return (
            (recipe.ustensils.filter
                ( ustensils => 
                
                ustensils.toLowerCase().includes(ustensilSearched)

                )

            ).length >0)
        });

        displayLittleUstensiles();
    }else {
        filteredRecipes = [...recipes]; 
        displayLittleUstensiles();

    }

    /*


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
    })*/
}

/*
function filterByUstensil(){
    const ustensilSearched = document.getElementById("recherche_ustensiles").value.toLowerCase();

    if(ustensilSearched.length >= 3) {


        filteredRecipes = recipes.filter((item) => {
            return (item.ustensils.includes(ustensilSearched));
        });

        filteredRecipes = 

        recipes.filter((recipe) => {
        return (
            (recipe.ustensils.filter
                ( ustensils => 
                
                ustensils.toLowerCase().includes(ustensilSearched)

                )

            ).length >0)
        });

        displayLittleUstensiles();
    }else {
        filteredRecipes = [...recipes]; 
        displayLittleUstensiles();

    }
}
*/

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
};



//fonctions servant à faire tourner les fleches pour le moment
function open_select1(){

    const little_ingredients_container = document.getElementById("little_ingredients_container");

    /*if (little_ingredients_container.style.display="none") {
    little_ingredients_container.style.display="grid";
    document.getElementById("select_ingredients").style.transform = "rotate(180deg)";}
    else {
        little_ingredients_container.style.display="none";
        document.getElementById("recherche_ustensiles").textContent="";
        document.getElementById("select_ingredients").style.transform = "rotate(180deg)";
        console.log("click ingredient");
    }*/

    switch (little_ingredients_container.style.display="none") {
        case "none" :
            little_ingredients_container.style.display="grid";
            document.getElementById("select_ingredients").style.transform = "rotate(180deg)";
            console.log("case 1 enclenché");
        break;
        case "grid" :
            little_ingredients_container.style.display="none";
            document.getElementById("recherche_ustensiles").textContent="";
            document.getElementById("select_ingredients").style.transform = "rotate(180deg)";
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

    if (little_appareils_container.style.display="none") {
    document.getElementById("select_appareils").style.transform = "rotate(180deg)";
    little_appareils_container.style.display="grid";}
    else {
        little_appareils_container.style.display="none";
        document.getElementById("recherche_ustensiles").textContent="";
        document.getElementById("select_appareils").style.transform = "rotate(180deg)";
    }

    //if (little_appareils_container.style.display="grid") {
    //little_appareils_container.style.display="none";}
    


}

function open_select2_2(){

    
    const little_appareils_container = document.getElementById("little_appareils_container");

    if (little_appareils_container.style.display="none") {
    document.getElementById("select_appareils").style.transform = "rotate(180deg)";
    little_appareils_container.style.display="grid";}

}

function open_select3(){



    const little_ustensiles_container = document.getElementById("little_ustensiles_container");


    if (little_ustensiles_container.style.display="none") {
    document.getElementById("select_ustensiles").style.transform = "rotate(180deg)";
    little_ustensiles_container.style.display="grid";}
    else {
        little_ustensiles_container.style.display="none";
        document.getElementById("recherche_ustensiles").textContent="";
        document.getElementById("select_ustensiles").style.transform = "rotate(180deg)";
    }



}

function open_select3_2(){



    const little_ustensiles_container = document.getElementById("little_ustensiles_container");


    if (little_ustensiles_container.style.display="none") {
    document.getElementById("select_ustensiles").style.transform = "rotate(180deg)";
    little_ustensiles_container.style.display="grid";}

}