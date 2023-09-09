export default function validateForm(data) {

    // Email regex validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const today = new Date();
    // Validate function

    let isValid = true;
    let errors = {};

    // Company symbol validation
    if (!data.company_symbol || data.company_symbol.length < 2 || data.company_symbol.length > 4 || /[^a-zA-Z]/.test(data.company_symbol)) {
        isValid = false;
        errors.company_symbol = 'Company symbol should be 2 to 4 ASCII alphabets only.';
    }

    // Email validation
    if (!emailRegex.test(data.email)) {
        isValid = false;
        errors.email = 'Invalid email address.';
    }

    // Start date validation
    if (data.start_date > today || data.start_date > data.end_date) {
        isValid = false;
        errors.start_date = 'Start date should be before or equal to today and not after the end date.';
    }

    // End date validation
    if (data.end_date < data.start_date || data.end_date > today) {
        isValid = false;
        errors.end_date = 'End date should be after or equal to the start date and not after today.';
    }


    return [isValid, errors];


}
