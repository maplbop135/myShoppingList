import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';

export const getRecipes = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createRecipe = async (req, res) => {
    const recipe = req.body;

    const newRecipe = new PostMessage(recipe);

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

    const updatedRecipe = await PostMessage.findByIdAndUpdate(_id, { ...recipe, _id }, { new: true });

    res.json(updatedRecipe);
}

export const deleteRecipe = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: 'Recipe deleted successfully' });
}

export const likeRecipe = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with that id');

    const recipe = await PostMessage.findById(id);
    const updateRecipe = await PostMessage.findByIdAndUpdate(id, { likeCount: recipe.likeCount + 1 }, {new: true});

    res.json(updateRecipe);
}