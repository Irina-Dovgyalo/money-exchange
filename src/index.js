// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    let newObj = {};

    if (currency >= 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    };

    if (currency == 0 || currency < 0) {
        return {};
    };

    if (currency - 50 >= 0) {
        newObj['H'] = 0;
    }
    while (currency >= 50) {
        currency -= 50;
        newObj['H']++;
    };

    if (currency - 25 >= 0) {
        newObj['Q'] = 0;
    }
    while (currency >= 25) {
        currency -= 25;
        newObj['Q']++;
    };

    if (currency - 10 >= 0) {
        newObj['D'] = 0;
    }
    while (currency >= 10) {
        currency -= 10;
        newObj['D']++;
    };

    if (currency - 5 >= 0) {
        newObj['N'] = 0;
    }
    while (currency >= 5) {
        currency -= 5;
        newObj['N']++;
    };

    if (currency - 1 >= 0) {
        newObj['P'] = 0;
    }
    while (currency >=1) {
        currency -= 1;
        newObj['P']++;
    };

    return newObj;
}
