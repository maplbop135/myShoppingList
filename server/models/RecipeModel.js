import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema({
    RCP_NM: String,
    RCP_SEQ: Number,
    HASH_TAG: [String],
    RCP_PARTS_DTLS: String,
    ATT_FILE_NO_MAIN: String,
    ATT_FILE_NO_MK: String,
    RCP_PAT2: String,
    RCP_WAY2: String,
    RCP_NA_TIP: String,
    INFO_NA: Number,
    INFO_WGT: Number,
    INFO_PRO: Number,
    INFO_FAT: Number,
    INFO_CAR: Number,
    INFO_ENG: Number,
    creator: {
        type: String,
        default: "ADMIN"
    },
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    },
    MANUAL01: String,
    MANUAL02: String,
    MANUAL03: String,
    MANUAL04: String,
    MANUAL05: String,
    MANUAL06: String,
    MANUAL07: String,
    MANUAL08: String,
    MANUAL09: String,
    MANUAL10: String,
    MANUAL11: String,
    MANUAL12: String,
    MANUAL13: String,
    MANUAL14: String,
    MANUAL15: String,
    MANUAL16: String,
    MANUAL17: String,
    MANUAL18: String,
    MANUAL19: String,
    MANUAL20: String,
    MANUAL_IMG01: String,
    MANUAL_IMG02: String,
    MANUAL_IMG03: String,
    MANUAL_IMG04: String,
    MANUAL_IMG05: String,
    MANUAL_IMG06: String,
    MANUAL_IMG07: String,
    MANUAL_IMG08: String,
    MANUAL_IMG09: String,
    MANUAL_IMG10: String,
    MANUAL_IMG11: String,
    MANUAL_IMG12: String,
    MANUAL_IMG13: String,
    MANUAL_IMG14: String,
    MANUAL_IMG15: String,
    MANUAL_IMG16: String,
    MANUAL_IMG17: String,
    MANUAL_IMG18: String,
    MANUAL_IMG19: String,
    MANUAL_IMG20: String,
});

const RecipeModel = mongoose.model('RecipeModel', recipeSchema, 'recipes');

export default RecipeModel;