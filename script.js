const skills = [
    "Legal Career Consultant",
    "CV/Resume and Cover Letter Specialist",
    "LinkedIn Profile Optimizer",
    "Interview Coach",
    "Networking Strategist",
    "Webinar Coordinator/Facilitator",
    "Personal Branding & Online Presence Developer",
    "Salary Negotiation Coach",
    "Legal Industry Events Coordinator",
    "Legal Expert (Document Review)" // Add or remove skills as needed
];

const auditForm = document.getElementById("audit-form");
const resultsDiv = document.getElementById("results");
const resultText = document.getElementById("result-text");

// Build the form dynamically
skills.forEach(skill => {
    const label = document.createElement("label");
    label.textContent = skill;
    const input = document.createElement("input");
    input.type = "number";
    input.min = "1";
    input.max = "5";
    input.value = "1"; // Default value
    auditForm.appendChild(label);
    auditForm.appendChild(input);
});


function submitAudit() {
    const responses = [];
    const inputs = auditForm.querySelectorAll("input[type='number']");

    inputs.forEach((input, index) => {
        responses.push({ skill: skills[index], rating: parseInt(input.value) });
    });

    resultText.textContent = JSON.stringify(responses, null, 2); // Display formatted JSON

    // You could enhance this to send the data to a server if you have one.
    // For complete anonymity without a server, the user has to copy the text.
}
