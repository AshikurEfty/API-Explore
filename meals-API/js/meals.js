const loadMeals = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}
const displayMeals = (meals) => {
    const mealsContainer = document.getElementById('meals-container');
    meals.forEach(meal => {
        const mealsDiv = document.createElement('div');
        mealsDiv.classList.add('meals-design');
        mealsDiv.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="">
        <div class="card-body">
        <h3>Food Item:${meal.strMeal} </h3>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
    `;
    mealsContainer.appendChild(mealsDiv);
    });
}


loadMeals();