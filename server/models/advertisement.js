const advertisementSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
    pixelWidth: {
        type: Number,
        required: true
    },
    pixelHeight: {
        type: Number,
        required: true
    },
    disclaimer: {
        type: String,
        required: true
    },
    termsAndConditions: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Advertisement = mongoose.model('Advertisement', advertisementSchema);
