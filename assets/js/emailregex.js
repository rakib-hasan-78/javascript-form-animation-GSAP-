
const emailRegex = (email) => {

    const mailRegex = new RegExp(/^[\w-]+(\.[\w-]+)*@((yahoo|gmail|icloud|hotmail|outlook)\.com)$/i);
    const checkFormat = mailRegex.test(email);
    const atSymbol = email.indexOf('@');
    const symbolPosition = !(atSymbol<3);
    const dot = email.lastIndexOf('.');
    const dotPosition = !(dot<=atSymbol + 2);
    const emailLogic = !(dot===email.length-1);

    return{
        isValid : checkFormat && symbolPosition && dotPosition && emailLogic,
        errors: [`invalid mail attempted! provide yahoo, gmail, outlook, hotmail, icloud mail`]
    } 
}

export default emailRegex;