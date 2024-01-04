const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

mongoose.connect('mongodb://database:27017/appdb', { useNewUrlParser: true, useUnifiedTopology: true });

const NumberSchema = new mongoose.Schema({
    value: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value',
        },
    },
});

const NumberModel = mongoose.model('Number', NumberSchema);

app.use(express.json());

app.post('/add', async (req, res) => {
    const { number1Id, number2Id } = req.body;

    try {
        const number1 = await NumberModel.findById(number1Id);
        const number2 = await NumberModel.findById(number2Id);

        if (!number1 || !number2) {
            return res.status(400).json({ error: 'Invalid number IDs' });
        }

        const result = number1.value + number2.value;
        res.json({ result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Add Service listening on port ${PORT}`);
});
