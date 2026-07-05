🍔 Food Truck Menu – React Components


📌 Important Links

Live Website: https://food-truck-menu-nine.vercel.app/
F

📖 Project Overview


The Food Truck Menu project is a React-based frontend application designed to replace manual paper-based menu management systems used by food truck staff.

The system provides a fast, structured, and reliable digital interface to ensure smooth daily operations, even in low or unstable network conditions.


🎯 Agile User Stories (Happy Path)
As a user, I want to access the React Components interface easily to complete my tasks efficiently.
As a user, I want instant feedback on my actions without long loading delays.
As a manager, I want structured and consistent output data for reliable decision-making.


⚠️ Edge Case Handling (Unhappy Path)
Empty States
If no data is available, display:
“No data found” instead of a blank screen.
Bad Connectivity
Show a loading indicator during asynchronous operations.
Ensure UI does not freeze on slow networks (e.g., 3G conditions).
Invalid Inputs
Prevent form submission with missing or invalid data.
Highlight invalid fields in red for user correction.


🧠 Technical Implementation Notes
Built using React + Vite
Strictly uses:
useState
useEffect
Prop drilling
No Redux or React Router used
Clean, monochrome corporate UI design (no random colors)
Consistent spacing system (16px / 32px).


♿ Non-Functional Requirements
Accessibility (a11y)
Fully keyboard navigable
ARIA labels on all interactive elements
Target: 100% Lighthouse accessibility score.


📊 Telemetry Simulation

Every primary user action logs:

[Analytics] User interacted with React Components
🔐 Security
All user inputs are sanitized before storing in state
Protection against XSS injection
🧩 Definition of Done (DoD)
 Application runs without errors
 No ESLint warnings or unused imports
 All Happy Path flows working correctly
 All Edge cases handled properly
 No sensitive data or API keys hardcoded
 Fully accessible (keyboard + ARIA support).

 
👩‍💻 Author

Shruti Gupta
PDIT-SUM-5002
