// Simple VibeCheck Frontend
const API_BASE = "http://localhost:3000";
const out = document.getElementById("out");

function show(obj) {
  out.textContent = typeof obj === "string" ? obj : JSON.stringify(obj, null, 2);
}

// Wait for page to load
document.addEventListener("DOMContentLoaded", function() {
  console.log("Page loaded, setting up buttons...");
  
  // Fortune button
  document.getElementById("btnFortune").addEventListener("click", async () => {
    const data = await fetch(`${API_BASE}/api/fortune`).then(r => r.json());
    show(data);
  });
  
  // Joke button
  document.getElementById("btnJoke").addEventListener("click", async () => {
    const data = await fetch(`${API_BASE}/api/joke`).then(r => r.json());
    show(data);
  });
  
  // Mood buttons
  document.querySelectorAll(".btnMood").forEach(btn => {
    btn.addEventListener("click", async () => {
      const mood = btn.dataset.mood;
      const data = await fetch(`${API_BASE}/api/vibe?mood=${mood}`).then(r => r.json());
      show(data);
    });
  });
  
  // SMASH button
  document.getElementById("btnSmash").addEventListener("click", async () => {
    const res = await fetch(`${API_BASE}/api/smash`, { method: "POST" });
    const data = await res.json();
    show({ message: "SMASH! 💥", ...data });
  });
  
  // RESET button - FIXED VERSION
  document.getElementById("btnReset").addEventListener("click", async () => {
    console.log("Reset button clicked!");
    
    try {
      const response = await fetch(`${API_BASE}/api/smash/reset`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        }
      });
      
      console.log("Response status:", response.status);
      
      const data = await response.json();
      console.log("Reset successful:", data);
      
      show(data);
      
    } catch (error) {
      console.error("Reset error:", error);
      show({ error: error.message });
    }
  });
  
  // Secret button
  document.getElementById("btnSecret").addEventListener("click", async () => {
    const data = await fetch(`${API_BASE}/api/secret?code=411L`).then(r => r.json());
    show(data);
  });
  
  console.log("All buttons set up!");
});