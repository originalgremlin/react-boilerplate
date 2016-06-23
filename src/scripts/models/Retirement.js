'use strict';

import Model from './Model';

class Retirement extends Model {
    constructor (
        currentAge = 30,
        retirementAge = 65,
        retirementIncome = 1e5,
        socialSecurityIncome = 0,
        currentSavings = 0,
        annualSavings = 1e4,
        inflationRate = 0.032,
        interestRate = 0.070
    ) {
        super();
        this.currentAge = currentAge;
        this.retirementAge = retirementAge;
        this.retirementIncome = retirementIncome;
        this.socialSecurityIncome = socialSecurityIncome;
        this.currentSavings = currentSavings;
        this.annualSavings = annualSavings;
        this.inflationRate = inflationRate;
        this.interestRate = interestRate;
    }

    get data () {
        let { currentAge, retirementAge, retirementIncome, socialSecurityIncome, currentSavings, annualSavings, inflationRate, interestRate } = this,
            { CURRENT_YEAR, SOCIAL_SECURITY_AGE, MAX_AGE } = Retirement,
            NUM_RESULTS = MAX_AGE - currentAge + 1,
            inflation = Array.from(new Array(NUM_RESULTS), (value, i) => Math.pow(1 + inflationRate, i)),
            year = new Array(NUM_RESULTS),
            age = new Array(NUM_RESULTS),
            total = new Array(NUM_RESULTS),
            interest = new Array(NUM_RESULTS),
            change = new Array(NUM_RESULTS);

        // base year
        year[0] = CURRENT_YEAR;
        age[0] = currentAge;
        total[0] = currentSavings;
        interest[0] = 0;
        change[0] = 0;

        // subsequent years
        for (let i = 1; i < NUM_RESULTS; i++) {
            year[i] = i + CURRENT_YEAR;
            age[i] = i + currentAge;
            // change from interest
            interest[i] = total[i - 1] * interestRate;
            total[i] = total[i - 1] * (1 + interestRate);
            // change from savings/withdrawals
            total[i] += inflation[i] * (age[i] <= retirementAge ? annualSavings : -retirementIncome);
            // change from social security
            total[i] += inflation[i] * (age[i] > SOCIAL_SECURITY_AGE ? socialSecurityIncome : 0);
            // change from combined sources
            change[i] = total[i] - total[i - 1];
        }

        // return inflation-adjusted values
        return {
            year: year,
            age: age,
            total: total.map((value, i) => value / inflation[i]),
            interest: interest.map((value, i) => value / inflation[i]),
            change: change.map((value, i) => value / inflation[i])
        };
    }
}

Retirement.CURRENT_YEAR = new Date().getUTCFullYear();
Retirement.SOCIAL_SECURITY_AGE = 62;
Retirement.MAX_AGE = 100;

export default Retirement;
