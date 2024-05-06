const Round = require('../models/round');
const { createWorker } = require('tesseract.js');
const fs = require('fs');

const handleGetAllRounds = async (req, res) => {
    const result = await Tournament.find({});
    return res.json(result);
};

const handleAddResult = async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    console.log(req.file);
    
    try {
        // Create a Tesseract worker
        const worker = await createWorker();

        // Initialize the Tesseract worker
        await worker;
        await worker.load();
        await worker.loadLanguage('eng');
        await worker.initialize('eng');

        // Read the uploaded image file
        const imageBuffer = fs.readFileSync(req.file.path);

        // Use Tesseract to recognize text from the image
        const { data: { text } } = await worker.recognize(req.file.path);

        // Log the recognized text
        console.log(text);
        // Send the recognized text as the response
        res.send(text);
    } catch (error) {
        console.error('Error processing image:', error);
        res.status(500).send('Error processing image.');
    }
};

module.exports = {
    handleGetAllRounds,
    handleAddResult,
};
