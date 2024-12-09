function calculateYearsToRetirement(currentSavings, annualContribution, annualReturnRate, returementGoal) {
    let yearsToRetirment = 0;

    do {
        const investmentReturns = currentSavings * (annualReturnRate / 100);

        currentSavings += annualContribution + investmentReturns;

        yearsToRetirment++;
    } while (currentSavings < returementGoal);

    return yearsToRetirment;
}

// In $ or %
const currentSavings = 50000;
const annualContribution = 10000;
const annualReturnRate = 7;
const returementGoal = 1000000;

const yearsToRetirment = calculateYearsToRetirement(currentSavings, annualContribution, annualReturnRate, returementGoal)
console.log(`Years until retirement: ${yearsToRetirment}`);