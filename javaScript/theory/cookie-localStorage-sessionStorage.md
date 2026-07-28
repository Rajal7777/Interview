1. Cookies

Cookies are the traditional storage method, designed primarily so servers can remember information about a user across HTTP requests (which are stateless by default).

Server Communication: Every time the browser requests a web page or API endpoint from the same domain, the cookies are automatically sent along in the HTTP Cookie header.

Security Control: Attributes like HttpOnly (prevents JavaScript access to protect against XSS) and Secure (ensures cookies are sent only over HTTPS) make them the ideal choice for storing session tokens and authentication credentials.

Storage Limit: Very tiny—typically 4 KB total per domain.

2. localStorage
Introduced in HTML5, localStorage provides a simple key-value store directly in the browser.

Persistence: Data stored in localStorage stays there indefinitely unless cleared by JavaScript (localStorage.clear()) or manually wiped by the user via browser settings.

Scope: Shared across all tabs and windows running the same origin (protocol://domain:port).

Use Cases: Dark mode preferences, user interface layouts, cached API data, or unsaved drafts you want restored if the user reopens the app tomorrow.

3. sessionStorage
sessionStorage operates identically to localStorage in terms of syntax and capacity, but with a much stricter lifespan and scope.

Tab-Specific: Data is isolated only to the specific tab or iframe where it was created. Opening the same page in a new tab creates a fresh sessionStorage instance.

Lifetime: The data is completely destroyed as soon as that specific tab or browser window is closed.

Use Cases: Storing multi-step wizard form progress, tracking active filters for a search session, or storing temporary page data you don't want bleeding into other open tabs.

//CODE EXAMPLE
// --- Cookies ---
document.cookie = "username=Alex; max-age=3600; path=/"; // Sets a cookie expiring in 1 hour

// --- localStorage ---
localStorage.setItem('theme', 'dark'); // Save
const theme = localStorage.getItem('theme'); // Retrieve
localStorage.removeItem('theme'); // Delete

// --- sessionStorage ---
sessionStorage.setItem('step', '2'); // Save for this tab
const step = sessionStorage.getItem('step'); // Retrieve
sessionStorage.clear(); // Clear all session data for this tab

//cookies
use when the server needs to read the data(login tokens)

//localStorage
use for long-term client side setting which is available across all tabs.

//sessionStorage
//for short-term data tied strictly to a single tab.