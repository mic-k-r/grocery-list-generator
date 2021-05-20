import { Recipe } from './interfaces/recipe';

export const RECIPES: Recipe[] = [
    { 
        id: 1, 
        name: "Shrimp Scampi", 
        description: "This delicious recipe takes about 15 minutes to make and will make you feel like you're eating at a restaurant overlooking the Mediterranean. Lots of carbs and butter, but it's worth it.",
        ingredients: [
            "1 lb raw shrimp",
            "3 lemons",
            "1 bunch parsley",
            "1 lb linguini",
            "4 tbsp butter",
            "4 cloves garlic minced",
            "1/2 tsp salt",
            "1/2 tsp black pepper"
        ], 
        instructions: [
            "Bring a pot of water to boil. When the water is boiling, add the linguini and cook it 6 minutes or until al dente.",
            "While the pasta is cooking, heat a pan over medium heat and melt the butter. Add the shrimp and garlic. Cut the lemons in half and place facing down on the pan to caramelize. Cook the lemons, garlic, and shrimp until seared golden brown.",
            "When the pasta is cooked, add it to the pan and sautee with the lemons, shrimp, and garlic. If you need more butter, add more butter. Season with salt and pepper.",
            "Serve hot with chopped parsley and white wine if you're feeling it."
        ] 
    }, 
    { 
        id: 2, 
        name: "Instant Pot Punjabi Aloo Sabzi", 
        description: "Pressure cooked grean beans and potatoes that will teleport you to heaven. Make the Instant Pot cook dinner.",
        ingredients: [
            "2 tbsp oil of your choice",
            "1 lb green beans",
            "2 lbs potatoes cubed", 
            "1 onion diced", 
            "4 cloves garlic minced",
            "1 1/2 tbsp minced ginger", 
            "1/2 tsp black mustard seeds", 
            "1 tomato chopped",
            "1 tsp coriander powder", 
            "1 tsp salt", 
            "1 tsp paprika", 
            "1 tsp turmeric", 
            "1/2 tsp black pepper",
            "1/2 tsp cayenne pepper",
            "1/4 cup water", 
        ], 
        instructions: [
            "Put everything into your Instant Pot, give it a stir, and set to pressure cook for 25 minutes. Sit back and let the magic happen. Serve it over rice, with roti/chapati, yogurt, cilantro, or enjoy it as is."
        ] 
    },
    { 
        id: 3, 
        name: "Red Snapper with Italian Salsa Verde", 
        description: "An incredible, Mediterranean-inspired recipe. I like to imagine that this is what the ancient Romans ate for breakfast, but who knows. Also, I saw Curtis Stone cook this on TV.",
        ingredients: [
            "1 lb red snapper",
            "3 fennel bulbs chunked", 
            "2/3 cup olive oil",
            "4 lemons", 
            "1 onion sliced",
            "1 bunch fresh basil", 
            "1 bunch fresh parsley", 
            "3 sprigs fresh rosemary", 
            "2 tbsp chopped capers", 
            "3 scallions minced",
            "3 shallots minced", 
            "salt", 
            "black pepper"
        ], 
        instructions: [
            "Heat 3 tbsp of olive oil in a large frying pan. Pan fry the snapper over medium heat until the skin gets crispy and the fish is flaky.",
            "While the fish is cooking, chop the fresh herbs and set aside.",
            "When the fish is cooked, set it aside on a plate. Cut the lemons in half and place face down on the pan to caramelize. Sautee the fennel bulbs in the pan as well, along with the garlic and onion. Cook until the edges are brown.",
            "While the vegetables are cooking, make the salsa verde. Combine the herbs, salt, pepper, and the rest of the olive oil into a bowl. Squeeze some of the caramelized lemons over it.",
            "Serve the fish, vegetables, and lemons on a plate with the salsa verde."
        ] 
    } 
];