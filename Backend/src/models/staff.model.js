import mongoose from "mongoose";

const Staff = new mongoose.Schema({
            name: {
                    type: String,
                    required: [true, "Please provide a name"],
                    trim: true,
                    maxlength: [20, "Name cannot be more than 20 characters"],
            },
            email: { type: String, required: true, unique: true },
            password: { type: String, required: true },
            file: {
                    type: String,
                    required: [true, "Please provide a file"],
            },
            specializations: { type: String,},
    },
    {collection: "staff-data"}
)

const StaffModel = new mongoose.model("StaffData", Staff)

export default StaffModel