const expect = require('chai').expect;
const Mortgage = require('../../src/js/lib/Mortgage');

// Monthly Payment function: correct inputs
describe('Mortgage Calculator', () => {
  let mortgage = null;

  beforeEach(() => {
    mortgage = new Mortgage(100000, 3.5, 30, 12);
  });

  it('should have a monthly payment function', () => {
    expect(mortgage.monthlyPayment).to.exist;
  });

  it('should calculate monthly payment correctly', () => {
    expect(mortgage.monthlyPayment()).to.equal('449.04');
  });
});

// Monthly Payment function: negative inputs
describe('Mortgage Calculator', () => {
  let mortgage = null;
  beforeEach(() => {
      mortgage = new Mortgage(-100000, 3.5, 30, 12);
  });

  it('should not calculate monthly payment when principal is negative', () => {
      expect(mortgage.monthlyPayment()).to.equal(null);
  });
});

describe('Mortgage Calculator', () => {
  let mortgage = null;
  beforeEach(() => {
      mortgage = new Mortgage(100000, -3.5, 30, 12);
  });

  it('should not calculate monthly payment when interest is negative', () => {
      expect(mortgage.monthlyPayment()).to.equal(null);
  }); 
});

