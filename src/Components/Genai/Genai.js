import {React,useState} from 'react'
import'./Genai.css'
function Genai() {
    const [prompt, setPrompt] = useState("cat names");
      const [generatedText, setGeneratedText] = useState("");
      const [loading, setLoading] = useState(false);
    
      const handleGenerateContent = async () => {
        setLoading(true);
        try {
          const response = await fetch(`http://localhost:3001/generate-content?prompt=${prompt}`);
          
          if (response.ok) {
            const data = await response.json();
            if (data.generatedText && data.generatedText[0] && data.generatedText[0].text) {
              const textContent = data.generatedText[0].text;
              setGeneratedText(textContent);  
            } else {
              setGeneratedText("No content generated.");
            }
          } else {
            console.error("Error generating content");
            setGeneratedText("Error generating content.");
          }
        } catch (error) {
          console.error("Error:", error);
          setGeneratedText("Error generating content.");
        } finally {
          setLoading(false);
        }
      };
      const renderLines = generatedText.split("\n").map((line, index) => (
        <p className='out' key={index}>{line}</p>  
      ));
  return (
    <div className="App">
      <div className="gn_container">
        <h1 className="gn_heading">Generate Content</h1>
        <input
          className="gn_input"
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter prompt"
        />
        <button className="gn_btn" onClick={handleGenerateContent} disabled={loading}>
          {loading ? 'Generating...' : 'Generate'}
        </button>
      </div>

      <h2 className="gn_content">Generated Content:</h2>
      <div className="">{renderLines}</div> 
    </div>
  )
}

export default Genai