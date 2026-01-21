export function loadMenuPage() {
    const content = document.querySelector(".content");
    content.innerHTML = "";

    const food = document.createElement("section");
    food.className = "food";

    for (let i = 0; i < 8; i++) {
        const foodItem = document.createElement("div");
        foodItem.className = "foodItem";
        food.appendChild(foodItem);
    }

    content.appendChild(food);
}