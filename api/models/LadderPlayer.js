var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator')
var Schema = mongoose.Schema;
var ladderPlayerModel = {
    email: {
        type: String,
        required: true,
        unique: true,
    },
    isVerified: {
        type: Boolean,
        required: true,
        default: false,
    },
    password: {
        type: String,
        required: true,
        unique: false,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    ratingScore: {
        type: Number,
        required: false,
        default: 1500,
    },
    wins: {
        type: Number,
        required: false,
        default: 0,
    },
    losses: {
        type: Number,
        required: false,
        default: 0,
    },
    currentStreak: {
        type: Number,
        required: false,
        default: 0,
    },
    matchHistory: [
        {
            traceID: String,
            matchDate: Date,
            map: String,
            matchP1: String,
            matchP1Name: String,
            matchP2: String,
            matchP2Name: String,
            P1Score: Number,
            P2Score: Number,
            matchWinner: String,
            matchWinnerName: String,
            confirmed: Boolean,
            disputed: Boolean,
            userIsSubmitter: Boolean,
        },
    ],
    gemHuntRecords: [
        {
            map: String,
            score: Number,
        },
    ],
    matchCount: {
        type: Number,
        required: false,
        default: 0,
    },
    disputes: [
        {
            traceID: String,
        }
    ],
    createdAt: {
        type: Date
    }
};

const ladderPlayerSchema = new Schema(ladderPlayerModel)
ladderPlayerSchema.plugin(uniqueValidator);
const ladderPlayer = mongoose.model("ladderPlayer", ladderPlayerSchema);
module.exports = ladderPlayer;
