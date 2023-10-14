import mongoose from "mongoose";

const RegisterProject = new mongoose.Schema({
            member1: {type: String, required: true},
            regno1: {type: String, required: true},
            phno1: {type: String, required: true, maxLength: 10},
            email1: { type: String, required: true, unique: true },
            guide: {type: String, required: true},
            title: {type: String, required: true},
            member2: {type: String, required: true},
            regno2: {type: String, required: true},
            phno2: {type: String, required: true, maxLength: 10},
            email2: { type: String, required: true, unique: true },
            // R0 - Zeroth Review, M1 - Team Member 1 , M2 - Team Member 2
            R0PPT: { type: String },
            R0PPTStatus: {type: String, enum: ["pending","uploaded","approved","rejected"], default: "pending",},

            // RF - Review Form, M1 - Team Member 1 , M2 - Team Member 2
            R0M1RF: { type: String},
            R0M2RF: { type: String },
            R0RFStatus: { type: String, enum: ["pending","uploaded","approved","rejected"], default: "pending"},

            // R1 - First Review, M1 - Team Member 1 , M2 - Team Member 2
            R1PPT: { type: String},
            R1PPTStatus: { type: String, enum: ["pending","uploaded","approved","rejected"], default: "pending"},

            // RF - Review Form, M1 - Team Member 1 , M2 - Team Member 2
            R1M1RF: { type: String},
            R1M2RF: { type: String},
            R1RFStatus: { type: String, enum: ["pending","uploaded","approved","rejected"], default: "pending"},

            // R2 - Second Review, M1 - Team Member 1 , M2 - Team Member 2
            R2PPT: { type: String},
            R2PPTStatus: { type: String, enum: ["pending","uploaded","approved","rejected"], default: "pending"},

            // RF - Review Form, M1 - Team Member 1 , M2 - Team Member 2
            R2M1RF: { type: String},
            R2M2RF: { type: String},
            R2RFStatus: { type: String, enum: ["pending","uploaded","approved","rejected"], default: "pending"},


            // R3 - Third Review, M1 - Team Member 1 , M2 - Team Member 2
            R3PPT: { type: String },
            R3PPTStatus: { type: String, enum: ["pending","uploaded","approved","rejected"], default: "pending"},

            // RF - Review Form, M1 - Team Member 1 , M2 - Team Member 2
            R3M1RF: { type: String},
            R3M2RF: { type: String },
            R3RFStatus: { type: String, enum: ["pending","uploaded","approved","rejected"], default: "pending"},


            // MR - Model Review, M1 - Team Member 1 , M2 - Team Member 2
            MRM1PPT: { type: String },
            MRPPTStatus: { type: String, enum: ["pending","uploaded","approved","rejected"], default: "pending"},

            // RF - Review Form, M1 - Team Member 1 , M2 - Team Member 2
            MRM1RF: { type: String },
            MRM2RF: { type: String },
            MRRFStatus: { type: String, enum: ["pending","uploaded","approved","rejected"], default: "pending"},

            // FR - First Review, M1 - Team Member 1 , M2 - Team Member 2
            FRM1PPT: { type: String},
            FRPPTStatus: { type: String, enum: ["pending","uploaded","approved","rejected"], default: "pending"},

            // RF - Review Form, M1 - Team Member 1 , M2 - Team Member 2
            FRM1RF: { type: String},
            FRM2RF: { type: String},
            FRRFStatus: { type: String, enum: ["pending","uploaded","approved","rejected"], default: "pending"},

            // MR - Model Review, M1 - Team Member 1 , M2 - Team Member 2 REP: Report
            MRM1REP: { type: String},
            MRM2REP: { type: String},
            MRREPStatus: { type: String, enum: ["pending","uploaded","approved","rejected"], default: "pending"},

            // FR - Final Review, M1 - Team Member 1 , M2 - Team Member 2 REP: Report
            FRM1REP: { type: String},
            FRM2REP: { type: String},
            FRREPStatus: { type: String, enum: ["pending","uploaded","approved","rejected"], default: "pending"},
    },
)

export const guideSubhashini = new mongoose.model("Guide-Subhashini", RegisterProject)
export const guideRevathy = new mongoose.model("Guide-Revathy", RegisterProject)
export const guideGladance = new mongoose.model("Guide-Gladance", RegisterProject)
export const guideJeyanthi = new mongoose.model("Guide-Jeyanthi", RegisterProject)
export const guideGeetha = new mongoose.model("Guide-Geetha", RegisterProject)
export const guideSundaraVelRani = new mongoose.model("Guide-SundaraVelRani", RegisterProject)
export const guideRajasekar = new mongoose.model("Guide-Rajasekar", RegisterProject)
export const guideKamtchi = new mongoose.model("Guide-Kamtchi", RegisterProject)
export const guideRamalakshmi = new mongoose.model("Guide-Ramalakshmi", RegisterProject)
export const guideJenitha = new mongoose.model("Guide-Jenitha", RegisterProject)
export const guideSathyaraj = new mongoose.model("Guide-Sathyaraj", RegisterProject)
export const guideSageengrana = new mongoose.model("Guide-Sageengrana", RegisterProject)
export const guideSivaSakthi = new mongoose.model("Guide-SivaSathi", RegisterProject)
export const guideRaviKarthik = new mongoose.model("Guide-RaviKarthik", RegisterProject)
export const guideRubyAngel = new mongoose.model("Guide-RubyAngel", RegisterProject)
