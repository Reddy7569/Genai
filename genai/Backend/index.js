// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const genAI = new GoogleGenerativeAI("AIzaSyAsn33qc1IzxQiQMVgzISju8swF1szMTy0");
// const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// const run = async () => {
//   const prompt = "cat names";

//   try {
//     const result = await model.generateContent(prompt);
//     console.log(result.response.candidates[0].content.parts);  
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };
// run();  
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const port = 3001;


const genAI = new GoogleGenerativeAI("AIzaSyAsn33qc1IzxQiQMVgzISju8swF1szMTy0");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

app.use(cors());  


app.get("/generate-content", async (req, res) => {
  const prompt =  req.query.prompt||"cat names";  

  try {
    
    const result = await model.generateContent(prompt);

    
    console.log(result);  

    
    const generatedText = result.response.candidates[0].content.parts;

    console.log(generatedText)
    res.json({ generatedText });

  } catch (error) {
    
    console.error("Error generating content:", error);

    
    res.status(500).json({ error: `Something went wrong while generating content: ${error.message}`, stack: error.stack });
  }
});

// Start the backend server
app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});



