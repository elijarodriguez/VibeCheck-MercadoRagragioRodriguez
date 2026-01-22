// Simple VibeCheck Frontend
const API_BASE = "http://localhost:3000";
const out = document.getElementById("out");
const smashCount = document.getElementById("smashCount");
const serverStatus = document.getElementById("serverStatus");

// Compact format responses
function formatResponse(type, data) {
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    switch(type) {
        case 'fortune':
            return `
                <div class="response-card fortune">
                    <div class="response-header">
                        <div class="response-icon fortune">
                            <i class="fas fa-star"></i>
                        </div>
                        <div>
                            <h3 class="response-title">Fortune</h3>
                            <p class="response-subtitle">Spiritual guidance</p>
                        </div>
                    </div>
                    <div class="response-content">${data.fortune}</div>
                    <div class="response-meta">
                        <span class="response-meta-item"><i class="far fa-clock"></i> ${timestamp}</span>
                    </div>
                </div>
            `;
            
        case 'joke':
            return `
                <div class="response-card joke">
                    <div class="response-header">
                        <div class="response-icon joke">
                            <i class="fas fa-laugh-beam"></i>
                        </div>
                        <div>
                            <h3 class="response-title">Dev Joke</h3>
                            <p class="response-subtitle">For your sanity</p>
                        </div>
                    </div>
                    <div class="response-content">${data.joke}</div>
                    <div class="response-meta">
                        <span class="response-meta-item"><i class="far fa-clock"></i> ${timestamp}</span>
                    </div>
                </div>
            `;
            
        case 'vibe':
            return `
                <div class="response-card vibe">
                    <div class="response-header">
                        <div class="response-icon vibe">
                            <i class="fas fa-heart"></i>
                        </div>
                        <div>
                            <h3 class="response-title">${data.mood.charAt(0).toUpperCase() + data.mood.slice(1)} Vibe</h3>
                            <p class="response-subtitle">Mood check</p>
                        </div>
                    </div>
                    <div class="vibe-response">
                        <div class="vibe-emoji">${data.emoji}</div>
                        <div class="vibe-message">${data.message}</div>
                    </div>
                    <div class="response-meta">
                        <span class="response-meta-item"><i class="far fa-clock"></i> ${timestamp}</span>
                    </div>
                </div>
            `;
            
        case 'smash':
            return `
                <div class="response-card smash">
                    <div class="response-header">
                        <div class="response-icon smash">
                            <i class="fas fa-bomb"></i>
                        </div>
                        <div>
                            <h3 class="response-title">Smash Counter</h3>
                            <p class="response-subtitle">Stress relief</p>
                        </div>
                    </div>
                    <div class="response-content" style="text-align: center; padding: 10px;">
                        <div style="font-size: 1.4rem; font-weight: bold; color: #FF6B6B; margin: 5px 0;">
                            ${data.smashes} SMASHES
                        </div>
                        <div style="color: #666; font-size: 0.9rem;">
                            ${data.message || "Keep going!"}
                        </div>
                    </div>
                    <div class="response-meta">
                        <span class="response-meta-item"><i class="far fa-clock"></i> ${timestamp}</span>
                        <span class="response-meta-item"><i class="fas fa-fire"></i> ${data.smashes * 10} pts</span>
                    </div>
                </div>
            `;
            
        case 'secret':
            const isUnlocked = data.message && data.message.includes("unlocked");
            return `
                <div class="response-card secret">
                    <div class="response-header">
                        <div class="response-icon secret">
                            <i class="fas fa-key"></i>
                        </div>
                        <div>
                            <h3 class="response-title">${isUnlocked ? "Secret Unlocked!" : "Access Denied"}</h3>
                            <p class="response-subtitle">${isUnlocked ? "Achievement" : "Try again"}</p>
                        </div>
                    </div>
                    <div class="response-content" style="text-align: center; padding: 10px;">
                        <div style="font-size: ${isUnlocked ? '1.8rem' : '1.4rem'}; margin: 5px 0;">
                            ${isUnlocked ? "🎉" : "🔒"}
                        </div>
                        <div style="color: #666; font-size: 0.95rem;">
                            ${data.message || "Invalid code"}
                        </div>
                    </div>
                    <div class="response-meta">
                        <span class="response-meta-item"><i class="far fa-clock"></i> ${timestamp}</span>
                    </div>
                </div>
            `;
            
        default:
            return `
                <div class="response-card">
                    <div class="response-header">
                        <i class="fas fa-info-circle"></i>
                        <h3 class="response-title">Response</h3>
                    </div>
                    <div class="response-content">
                        <pre style="font-size: 0.85rem; margin: 0;">${JSON.stringify(data, null, 2)}</pre>
                    </div>
                </div>
            `;
    }
}

// Show response with beautiful formatting
function showResponse(type, data) {
    const responseHTML = formatResponse(type, data);
    out.innerHTML = responseHTML;
    out.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Show error
function showError(message) {
    out.innerHTML = `
        <div class="response-card error">
            <div class="response-header">
                <div class="response-icon" style="background: #EF476F;">
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
                <div>
                    <h3 class="response-title">Error</h3>
                    <p class="response-subtitle">Something went wrong</p>
                </div>
            </div>
            <div class="response-content">
                ${message}
            </div>
            <div class="response-meta">
                <span class="response-meta-item">
                    <i class="far fa-clock"></i> ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
            </div>
        </div>
    `;
}

// Check server status
async function checkServerStatus() {
    try {
        const response = await fetch(`${API_BASE}/api/ping`);
        if (response.ok) {
            serverStatus.innerHTML = '<i class="fas fa-check-circle"></i> API: Online';
            serverStatus.style.color = "#06D6A0";
        }
    } catch (error) {
        serverStatus.innerHTML = '<i class="fas fa-exclamation-circle"></i> API: Offline';
        serverStatus.style.color = "#EF476F";
    }
}

// Update smash counter
async function updateSmashCounter() {
    try {
        const response = await fetch(`${API_BASE}/api/smashes`);
        const data = await response.json();
        smashCount.textContent = data.smashes;
    } catch (error) {
        console.error("Failed to update smash counter:", error);
    }
}

// Button event listeners
document.addEventListener("DOMContentLoaded", function() {
    console.log("VibeCheck frontend loaded! ✨");
    
    // Check server status on load
    checkServerStatus();
    updateSmashCounter();
    
    // Check every 30 seconds
    setInterval(checkServerStatus, 30000);
    
    // Fortune button
    document.getElementById("btnFortune").addEventListener("click", async () => {
        out.innerHTML = '<div class="empty-state"><i class="fas fa-crystal-ball fa-spin"></i><h3>Getting fortune...</h3></div>';
        try {
            const response = await fetch(`${API_BASE}/api/fortune`);
            const data = await response.json();
            showResponse('fortune', data);
        } catch (error) {
            showError("Couldn't read your fortune. Try again!");
        }
    });
    
    // Joke button
    document.getElementById("btnJoke").addEventListener("click", async () => {
        out.innerHTML = '<div class="empty-state"><i class="fas fa-laugh-beam"></i><h3>Fetching joke...</h3></div>';
        try {
            const response = await fetch(`${API_BASE}/api/joke`);
            const data = await response.json();
            showResponse('joke', data);
        } catch (error) {
            showError("The joke's on us! Couldn't fetch a joke.");
        }
    });
    
    // Mood buttons
    document.querySelectorAll(".btnMood").forEach(btn => {
        btn.addEventListener("click", async () => {
            const mood = btn.dataset.mood;
            const emoji = mood === 'happy' ? '😄' : mood === 'tired' ? '🥱' : '😵‍💫';
            out.innerHTML = `<div class="empty-state"><div style="font-size: 1.8rem;">${emoji}</div><h3>Checking ${mood} vibe...</h3></div>`;
            
            try {
                const response = await fetch(`${API_BASE}/api/vibe?mood=${mood}`);
                const data = await response.json();
                showResponse('vibe', data);
            } catch (error) {
                showError("Couldn't check your vibe. Try again!");
            }
        });
    });
    
    // SMASH button
    document.getElementById("btnSmash").addEventListener("click", async () => {
        out.innerHTML = '<div class="empty-state"><i class="fas fa-bomb fa-bounce"></i><h3>Smashing...</h3></div>';
        try {
            const response = await fetch(`${API_BASE}/api/smash`, { method: "POST" });
            const data = await response.json();
            showResponse('smash', data);
            updateSmashCounter();
        } catch (error) {
            showError("Couldn't smash. Try again!");
        }
    });
    
    // RESET button
    document.getElementById("btnReset").addEventListener("click", async () => {
        out.innerHTML = '<div class="empty-state"><i class="fas fa-redo fa-spin"></i><h3>Resetting...</h3></div>';
        try {
            const response = await fetch(`${API_BASE}/api/smash/reset`, {
                method: "POST",
                headers: { "Content-Type": "application/json" }
            });
            const data = await response.json();
            showResponse('smash', { ...data, message: "Counter reset to zero! 🎯" });
            updateSmashCounter();
        } catch (error) {
            showError("Couldn't reset counter. Try again!");
        }
    });
    
    // Secret button
    document.getElementById("btnSecret").addEventListener("click", async () => {
        out.innerHTML = '<div class="empty-state"><i class="fas fa-key"></i><h3>Unlocking...</h3></div>';
        try {
            const response = await fetch(`${API_BASE}/api/secret?code=411L`);
            const data = await response.json();
            showResponse('secret', data);
        } catch (error) {
            showError("Couldn't unlock the secret. Make sure you have the right code!");
        }
    });
});
