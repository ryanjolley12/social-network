const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const Thought = model('Thought', ThoughtSchema);

const ReplySchema = new Schema(
    {
      // set custom id to avoid confusion with parent comment _id
      replyId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      replyBody: {
        type: String,
        required: true
      },
      writtenBy: {
        type: String,
        required: true,
        trim: true
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
      }
    },
    {
      toJSON: {
        getters: true
      }
    }
  );
  

const ThoughtSchema = new Schema(
    {
    thoughtText {
        Type: String,
        required: true,
        // 1-280 characters
    },

    createdAt {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },

    userName {
        type: String,
        required: true,
    },

    // use ReplySchema to validate data for a reply
    reactions [ReplySchema]
},
{
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
}
);

module.exports = Thought;