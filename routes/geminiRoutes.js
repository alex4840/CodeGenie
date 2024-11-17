const express = require("express");
const {
  OptimizationController,languageController, SyntaxController, timeComplexityController,
} = require("../controllers/geminiController");

const router = express.Router();

//route

router.post("/SyntaxCorr", SyntaxController);
router.post("/timecomplexity", timeComplexityController);
router.post("/Optimization", OptimizationController);
router.post("/LanguageConvertor", languageController);




module.exports = router;