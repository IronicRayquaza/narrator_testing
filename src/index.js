// Narrator Testing Entry Point

// Ensure environment variables are loaded if using a .env file
// require('dotenv').config(); 

const apiKey = process.env.API_KEY || process.env.OPENAI_API_KEY;

if (!apiKey) {
  console.error("ReferenceError: 'apiKey' is not defined. Please ensure API_KEY is set in your environment variables.");
  process.exit(1);
}

/**
 * Main application logic for IronicRayquaza/narrator_testing
 */
async function runNarrator() {
  try {
    console.log("Starting Narrator service...");
    // Example usage of the apiKey
    console.log(`Authenticated successfully with key ending in: ${apiKey.slice(-4)}`);
    
    // Add your narration logic here
    
  } catch (error) {
    console.error("An error occurred during execution:", error);
    process.exit(1);
  }
}

runNarrator();