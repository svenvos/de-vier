const now = new Date();
const currentMonth = now.getMonth() + 1;
const currentDay = now.getDate();

export function isSeasonalPeriod() {
    
    if (currentMonth === 10 && currentDay >= 1) {
        return true;
    }
    
    if (currentMonth === 11) {
        return true;
    }
    
    if (currentMonth === 12 && currentDay <= 27) {
        return true;
    }
    
    return false;
}

export function is23thOfNovember() {
    if (currentMonth === 11 && currentDay >= 23) {
        return false;
    }

    return true;
}
