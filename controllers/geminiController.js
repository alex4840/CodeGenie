const dotenv = require('dotenv');
dotenv.config();
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Time Complexity Controller
exports.timeComplexityController = async (req, res) => {
  try {
    const { code } = req.body;

    // Initialize Generative AI instance and model inside the function
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Provide only the time complexity and space complexity of the following code without explanation or description. Output it on separate lines in the format:
    Your code time complexity is: [time complexity]
    Your space complexity is: [space complexity]
    
    Code:\n${code}`;
    
    const result = await model.generateContent(prompt);
    const response = result.response.text();
    
    if (response) {
      return res.status(200).json(response.trim());
    }
  } catch (error) {
    console.error(error);
    return res.status(404).json({
      message: error.message,
    });
  }
};

// Optimization Controller
exports.OptimizationController = async (req, res) => {
  try {
    const { text } = req.body;

    // Initialize Generative AI instance and model inside the function
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Analyze the given input code\n${text}\n and provide the most optimized version of the code in the language of given input code. Below the optimized code, mention the input code's time complexity and the optimized version's time complexity:
    no need of explaination and i want the response format in the given format below:
    Optimized Code : 
    Your code time complexity:
    Optimized time complexity:`;
    
    const result = await model.generateContent(prompt);
    const response = result.response.text();
    
    if (response) {
      return res.status(200).json(response.trim());
    }
  } catch (error) {
    console.error(error);
    return res.status(404).json({
      message: error.message,
    });
  }
};
exports.SyntaxController = async (req, res) => {
    try {
      const { text } = req.body;
  
      // Initialize Generative AI instance and model inside the function
      const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
      const prompt = `Analyze the following input code:\n${text}\n
        Check if the code is syntactically correct. 
        If the code is syntactically correct, output: 
        "Your code is syntactically correct."

        If the code has syntax errors, provide the corrected code without any explanation.
        The response format should strictly be as follows:

        Corrected Code:
        <Corrected Code Here>`;

      const result = await model.generateContent(prompt);
      const response = result.response.text();
      
      if (response) {
        return res.status(200).json(response.trim());
      }
    } catch (error) {
      console.error(error);
      return res.status(404).json({
        message: error.message,
      });
    }
  };
  exports.languageController = async (req, res) => {
    try {
        const { text, language } = req.body; // Receive language dynamically
  
        // Initialize Generative AI instance and model inside the function
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
        const prompt = `Analyze the following input code:\n${text}\n
        1. Detect the programming language of the input code.
        2. Convert the detected language's code to the selected language: ${language}.
        3. Provide only the converted code without any explanation.
        The response format should strictly be as follows:

        Converted Code:
        <Converted Code Here>`;
  
        const result = await model.generateContent(prompt);
        const response = result.response.text();
        
        if (response) {
            return res.status(200).json(response.trim());
        }
    } catch (error) {
        console.error(error);
        return res.status(404).json({
            message: error.message,
        });
    }
};
