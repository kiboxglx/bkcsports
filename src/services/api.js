/**
 * Mock API service for form submissions.
 * In a real application, this would make HTTP requests to a backend.
 */

export const submitBudget = async (data) => {
    console.log("Preparing to submit budget data...", data);

    // Simulate network delay
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate success (90% chance)
            if (Math.random() > 0.1) {
                console.log("Budget submitted successfully:", data);
                resolve({ success: true, message: "Orçamento enviado com sucesso!" });
            } else {
                console.error("Submission failed (simulated network error)");
                reject(new Error("Erro ao enviar o formulário. Tente novamente."));
            }
        }, 1500);
    });
};
