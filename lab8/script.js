let recipes = JSON.parse(localStorage.getItem("recipes")) || [];

// Add Recipe
document.getElementById("recipeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value.trim();
  const ingredients = document.getElementById("ingredients").value.trim();
  const instructions = document.getElementById("instructions").value.trim();
  const imageInput = document.getElementById("image");
  let imageUrl = "";

  if (!title || !ingredients || !instructions) {
    alert("Please fill all fields!");
    return;
  }

  // Image handling
  if (imageInput.files && imageInput.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      imageUrl = e.target.result;
      addRecipe(title, ingredients, instructions, imageUrl);
    };
    reader.readAsDataURL(imageInput.files[0]);
  } else {
    addRecipe(title, ingredients, instructions, imageUrl);
  }

  // Reset form
  document.getElementById("recipeForm").reset();
});

function addRecipe(title, ingredients, instructions, imageUrl) {
  recipes.push({ title, ingredients, instructions, imageUrl });
  saveAndRender();
}

// Display Recipes
function renderRecipes(filter = "") {
  const list = document.getElementById("recipeList");
  list.innerHTML = "";

  const filtered = recipes.filter(r =>
    r.title.toLowerCase().includes(filter.toLowerCase())
  );

  filtered.forEach((recipe, index) => {
    const card = document.createElement("div");
    card.className = "recipe-card";

    card.innerHTML = `
      ${recipe.imageUrl ? `<img src="${recipe.imageUrl}" alt="Recipe Image">` : ""}
      <h3>${recipe.title}</h3>
      <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
      <p><strong>Instructions:</strong> ${recipe.instructions}</p>
      <div class="actions">
        <button onclick="editRecipe(${index})">✏️ Edit</button>
        <button onclick="deleteRecipe(${index})">🗑️ Delete</button>
      </div>
    `;

    list.appendChild(card);
  });
}

// Edit Recipe
function editRecipe(index) {
  const recipe = recipes[index];
  const newTitle = prompt("Edit Title:", recipe.title);
  const newIngredients = prompt("Edit Ingredients:", recipe.ingredients);
  const newInstructions = prompt("Edit Instructions:", recipe.instructions);

  if (newTitle && newIngredients && newInstructions) {
    recipes[index] = {
      ...recipe,
      title: newTitle,
      ingredients: newIngredients,
      instructions: newInstructions,
    };
    saveAndRender();
  }
}

// Delete Recipe
function deleteRecipe(index) {
  if (confirm("Are you sure you want to delete this recipe?")) {
    recipes.splice(index, 1);
    saveAndRender();
  }
}

// Save to LocalStorage and Refresh
function saveAndRender() {
  localStorage.setItem("recipes", JSON.stringify(recipes));
  renderRecipes();
}

// Search Functionality
document.getElementById("search").addEventListener("input", function (e) {
  renderRecipes(e.target.value);
});

// Initial Render
renderRecipes();
