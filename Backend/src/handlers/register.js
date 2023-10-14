import { guideSubhashini, guideRevathy, guideGladance, guideJeyanthi, guideGeetha, guideSundaraVelRani, guideRajasekar, guideKamtchi, guideRamalakshmi, guideJenitha, guideSathyaraj, guideSageengrana, guideSivaSakthi, guideRaviKarthik, guideRubyAngel} from "../models/register.model.js";

// Register a new Project
export const registerProject = async (req, res) => {
    try {
        const { guide, member1, regno1, phno1, email1, title, member2, regno2, phno2, email2, } = req.body;

        const createProject = (GuideModel, guideName) => {
            GuideModel.countDocuments({}, (err, count) => {
                if (err) {
                    return res.status(500).json({ error: 'Internal server error' });
                }
                if (count < 3) {
                    const project = new GuideModel({
                        guide: guideName,
                        member1,
                        regno1,
                        phno1,
                        email1,
                        title,
                        member2,
                        regno2,
                        phno2,
                        email2,
                        R0PPT: "",
                        R0M1RF: "",
                        R0M2RF: "",
                        R1PPT: "",
                        R1M1RF: "",
                        R1M2RF: "",
                        R2PPT: "",
                        R2M1RF: "",
                        R2M2RF: "",
                        R3PPT: "",
                        R3M1RF: "",
                        R3M2RF: "",
                        MRM1PPT: "",
                        MRM1RF: "",
                        MRM2RF: "",
                        FRM1PPT: "",
                        FRM1RF: "",
                        FRM2RF: "",
                        MRM1REP: "",
                        MRM2REP: "",
                        FRM1REP: "",
                        FRM2REP: "",
                    });

                    project.save()
                        .then(() => res.json({ message: `Project added successfully for ${guideName}` }))
                        .catch(err => res.status(500).json({ error: 'Already exists' }));
                } else {
                    return res.json({ message: `Maximum 3 documents reached for ${guideName}` });
                }
            });
        };

        if (guide === 'Dr.R.Subhashini') {
            createProject(guideSubhashini, 'Dr.R.Subhashini');
        } else if (guide === 'Dr.S.Revathy') {
            createProject(guideRevathy, 'Dr.S.Revathy');
        } else if (guide === 'Dr.P.Jeyanthi') {
            createProject(guideJeyanthi, 'Dr.P.Jeyanthi')
        } else if (guide === 'Dr.L.Mary Gladence') {
            createProject(guideGladance, 'Dr.L.Mary Gladence')
        } else if (guide === 'Ms.C.Geetha') {
            createProject(guideGeetha, 'Ms.C.Geetha')
        } else if (guide === 'Ms.D.Ramalakshmi') {
            createProject(guideRamalakshmi, 'Ms.D.Ramalakshmi')
        } else if (guide === 'Ms.J.Merlin Mary Jenitha') {
            createProject(guideJenitha, 'Ms.J.Merlin Mary Jenitha')
        } else if (guide === 'Dr.Rajasekar') {
            createProject(guideRajasekar, 'Dr.Rajasekar')
        } else if (guide === 'Dr.K.Sundaravel Rani') {
            createProject(guideSundaraVelRani, 'Dr.K.Sundaravel Rani')
        } else if (guide === 'Dr.A.Sathiyaraj') {
            createProject(guideSathyaraj, 'Dr.A.Sathiyaraj')
        } else if (guide === 'Dr.Kamtchi K S') {
            createProject(guideKamtchi, 'Dr.Kamtchi K S')
        } else if (guide === 'Dr.D.Adhimuga Sivasakthi') {
            createProject(guideSivaSakthi, 'Dr.D.Adhimuga Sivasakthi')
        } else if (guide === 'Ms. T G Ruby Angel') {
            createProject(guideRubyAngel, 'Ms. T G Ruby Angel')
        } else if (guide === 'Ms.Sageengrana') {
            createProject(guideSageengrana, 'Ms.Sageengrana')
        } else if (guide === 'Mr.R.Ravi Karthick') {
            createProject(guideRaviKarthik, 'Mr.R.Ravi Karthick')
        }
    } catch (err) {
        console.error(err);
    }
};


export const uploadFiles = async (req, res) => {
    try {
        
    } catch (err) {
        console.log(err)
    }
}

// to get all registeration 

export const getAllProjects = async (req, res) => {
    try {
      const user = await RegisterModel.find();
      res.json(user);
    } catch (err) {
      console.error(err);
    }
  };

// to get a single register

export const getSingleProject = async (req, res) => {
    try {
      const user = await RegisterModel.findById(req.params.id);
      res.json(user);
    } catch (err) {
      console.error(err);
    }
  };

//   to get particular register with guide name

export const getGuideProject = async (req, res) => {
    try {
      const user = await RegisterModel.find({guide: req.body.guide});
      res.json(user);
    } catch (err) {
      console.error(err);
    }
  };