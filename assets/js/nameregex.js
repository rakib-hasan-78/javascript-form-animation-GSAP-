const nameRegex = (name) => {

     const nameRegex = new RegExp("^[A-Za-z\\s]+$");
     const nameTest = nameRegex.test(name);
     const nameLength = !(name.length<=2);
     const nameType = isNaN(name);

    return{
        isValid: nameTest && nameLength && nameType,
        errors: [`Invalid Name Provided`]
    } 
}

export default nameRegex;