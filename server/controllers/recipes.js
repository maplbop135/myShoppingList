import RecipeModel from '../models/RecipeModel.js';
import mongoose from 'mongoose';

export const getRecipes = async (req, res) => {
    try {
        const recipes = await RecipeModel.find();

        res.status(200).json(recipes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createRecipe = async (req, res) => {
    const recipe = req.body;

    const newRecipe = new RecipeModel(recipe);

    try {
        await newRecipe.save();

        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateRecipe = async (req, res) => {
    const { id: _id } = req.params;
    const recipe = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatedRecipe = await RecipeModel.findByIdAndUpdate(_id, { ...recipe, _id }, { new: true });

    res.json(updatedRecipe);
}

export const deleteRecipe = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    await RecipeModel.findByIdAndRemove(id);

    res.json({ message: 'Recipe deleted successfully' });
}

export const likeRecipe = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    const recipe = await RecipeModel.findById(id);
    const updateRecipe = await RecipeModel.findByIdAndUpdate(id, { likeCount: recipe.likeCount + 1 }, {new: true});

    res.json(updateRecipe);
}