export function getAndSetOrder(array) {
    let name = $(".js_name").is(':checked');
    let health = $(".js_health").is(':checked');
    let speed = $(".js_speed").is(':checked');
    let totalDamage = $(".js_total-damage").is(':checked');
    let singleDamage = $(".js_single-damage").is(':checked');
    let highToLow = $(".js_htl").is(':checked');

    if (name) {
        array = orderByName(array, highToLow);
    }
    if (health) {
        array = orderByHealth(array, highToLow);
    }
    if (speed) {
        array = orderBySpeed(array, highToLow);
    }
    if (totalDamage) {
        array = orderByTotalDamage(array, highToLow);
    }
    if (singleDamage) {
        array = orderBySingleDamage(array, highToLow);
    }

    return array;
}

function orderByTotalDamage(array, highToLow) {
    $(array).each(function( index, champion) {
        champion.totalAttack = champion.attack1 + champion.attack2 + champion.attack3 + champion.attack4;
    });

    let championsByTotalDamage = [];

    if (highToLow) {
        championsByTotalDamage = array.sort((a, b) => b.totalAttack - a.totalAttack);
    } else {
        championsByTotalDamage = array.sort((a, b) => a.totalAttack - b.totalAttack);
    }

    return championsByTotalDamage;
}

function orderBySingleDamage(array, highToLow) {
    $(array).each(function( index, champion) {
        let highestAttack = champion.attack1;
        if (champion.attack2 >= champion.attack1) {
            highestAttack = champion.attack2;
        }
        if (champion.attack3 >= champion.attack2) {
            highestAttack = champion.attack3;
        }
        if (champion.attack4 >= champion.attack3) {
            highestAttack = champion.attack4;
        }

        champion.highestAttack = highestAttack;
    });

    let championsByHighestAttack = [];

    if (highToLow) {
        championsByHighestAttack = array.sort((a, b) => b.highestAttack - a.highestAttack);
    } else  {
        championsByHighestAttack = array.sort((a, b) => a.highestAttack - b.highestAttack);
    }

    return championsByHighestAttack;
}

function orderByName(array, highToLow) {
    let championsByName = [];

    if (highToLow) {
        championsByName = array.sort(function(a, b) {
            return a === b ? 0 : a.name < b.name ? -1 : 1;
        });
    } else {
        championsByName = array.sort(function(a, b) {
            return a === b ? 0 : b.name < a.name ? -1 : 1;
        });
    }

    return championsByName;
}

function orderByHealth(array, highToLow) {
    let championsByHealth = [];

    if (highToLow) {
        championsByHealth = array.sort((a, b) => b.health - a.health);
    } else {
        championsByHealth = array.sort((a, b) => a.health - b.health);
    }

    return championsByHealth;

}

function orderBySpeed(array, highToLow) {
    let championsBySpeed = [];

    if (highToLow) {
        championsBySpeed = array.sort((a, b) => b.speed - a.speed);
    } else {
        championsBySpeed = array.sort((a, b) => a.speed - b.speed);
    }

    return championsBySpeed;
}