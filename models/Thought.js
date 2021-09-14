const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ThoughtSchema = new Schema(
    thoughtText {
        Type: String,
        required: true,
        // 1-280 characters
    }

    createdAt {
        
    }
)