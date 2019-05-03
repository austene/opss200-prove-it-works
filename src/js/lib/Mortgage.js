module.exports = class Mortgage {
  constructor(principal, interest, term, period) {
    this.principal = principal;
    this.interest = interest;
    this.term = term;
    this.period = period;
  }

  monthlyPayment() {
    if (this.principal <= 0) {
      return null;
    } else if (this.interest <= 0) {
      return null;
    }
    const monthlyInterestRate = (this.interest / 100) / this.period
    const numberOfPayments = this.term * this.period
    const compoundedInterestRate = Math.pow((1 + monthlyInterestRate), numberOfPayments)
    const interestQuotient = (monthlyInterestRate * compoundedInterestRate) / ( (Math.pow((1 + monthlyInterestRate), numberOfPayments)) - 1)
    const monthlyPayment = (this.principal * interestQuotient).toFixed(2);
    return monthlyPayment;
  }
};
