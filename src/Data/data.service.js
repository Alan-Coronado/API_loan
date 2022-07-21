

const processData =(dataDTO)=> {
    const {amount, term, interest} = dataDTO;
    let a = parseFloat(amount);
    let t = parseInt(term);
    let i = parseFloat(interest);
    let month = (t * 12);
    let rate = (i / 1200);
    var monthly_payment = ((a*((rate*(Math.pow((1+rate),month)))/((Math.pow((1+rate),month))-1))).toFixed(2));
    let month_interest;
    let month_payment;
    let payment;
    let capital= a;
    const DTO = [];

    for(let j=1; j<=month; j++){
        if(j == month){
            month_interest = ((capital*rate).toFixed(2));
            payment = ((capital*(1 + rate)).toFixed(2));
            month_payment = ((payment - month_interest).toFixed(2));
            capital = ((capital - month_payment));
        } else {
            payment = monthly_payment;
            month_interest = ((capital*rate).toFixed(2));
            month_payment = ((monthly_payment - month_interest).toFixed(2));
            capital = ((capital - month_payment).toFixed(2));
        }
        let item = {
            month : j,
            paymenth : payment,
            interest : month_interest,
            amortization : month_payment,
            capital : capital
        };
        DTO.push(item);
    };
    
    return(DTO);
}

module.exports = {
    processData
}