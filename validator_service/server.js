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

app.post('/validate', async (req, res) => {
    const { number } = req.body;

    try {
        console.log(`validate request received`);
        console.log(number);
        const validatedNumber = await NumberModel.create({ value: number });
        res.json({ valid: true, id: validatedNumber._id });
    } catch (error) {
        console.error(error);
        res.status(400).json({ valid: false, error: 'Invalid number format' });
    }
});

app.listen(PORT, () => {
    console.log(`Validator Service listening on port ${PORT}`);
});
