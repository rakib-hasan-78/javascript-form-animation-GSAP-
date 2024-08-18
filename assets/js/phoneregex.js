const phoneValidation = (phone) => {
    const phoneRegex = new RegExp(/^(?:\+?88)?01[3-9]\d{8}$/);
    const numberCheck = phoneRegex.test(phone);
    return{
        isValid: numberCheck,
        errors: ['Not A Valid Number']
    }
}

export default phoneValidation;