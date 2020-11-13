// JAVASCRIPT TO DISPLAY MAINTENANCE AND PET REQUEST FORMS (MODALS)

// Get Modals from Tenant-Dashboard Handlebars
const maintenanceModal = document.getElementById("maintenance-modal");
const petModal = document.getElementById("pet-modal");

// Display Maintenance Request Form (Modal)
const maintenanceBeginRequest = function() {
    maintenanceModal.style.display = "block";
};

// Display Update Pet Status Form (Modal)
const petBeginRequest = function() {
    petModal.style.display = "block";
};

// Close Modals
function closeModal() {
    maintenanceModal.style.display = "none";
    petModal.style.display = "none";
};


// Maintenance Modal Event Listener


// Pet Modal Event Listener
//document.querySelector("#pet-begin-request").addEventListener("click", petBeginRequest);
