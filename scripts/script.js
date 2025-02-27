const supabaseURL = 'https://jjdtikulxocedonohrpf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZHRpa3VseG9jZWRvbm9ocnBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0OTI1NjEsImV4cCI6MjA1NjA2ODU2MX0.7H56TLX1hFXqCJBgDHRU5Evj7gPtdXYUugtyPBfZQuI';
const supabaseData = window.supabase.createClient(supabaseURL, supabaseKey);
const { data, error } = await supabaseData.from('champions').select()
.order('name', { ascending: true });
const champions = data;
// console.log(champions);

placeChampions(champions);
function placeChampions(array) {
    $(array).each(function( index, champion) {
        let name = champion.name.toLowerCase();
        name = name.replace(/ /g,"_");
        $(".champions").append(`
            <img class="champions__champion" src="../img/champion_${name}.png">
        `)
    });
}

$(".js_order").click(function() {
    $('.js_order').prop('checked', false);
    $(this).prop('checked', true);
});

$(".js_order-type").click(function() {
    $('.js_order-type').prop('checked', false);
    $(this).prop('checked', true);
});

$('.js_criteria').click(function() {
    $(".champions").empty();
    getOrder();
});

function getOrder() {
    let name = $(".js_name").is(':checked');
    let health = $(".js_health").is(':checked');
    let speed = $(".js_speed").is(':checked');
    let totalDamage = $(".js_total-damage").is(':checked');
    let singleDamage = $(".js_single-damage").is(':checked');
    let highToLow = $(".js_htl").is(':checked');

    if (name) {
        orderByName(highToLow);
    }
    if (health) {
        orderByHealth(highToLow);
    }
    if (speed) {
        orderBySpeed(highToLow);
    }
    if (totalDamage) {
        orderByTotalDamage(highToLow);
    }
    if (singleDamage) {
        orderBySingleDamage(highToLow);
    }
}

// orderByTotalDamage();
function orderByTotalDamage(highToLow) {
    $(champions).each(function( index, champion) {
        champion.totalAttack = champion.attack1 + champion.attack2 + champion.attack3 + champion.attack4;
    });

    console.log("--- ORDER BY TOTAL DAMAGE ---");

    let championsByTotalDamage = [];

    if (highToLow) {
        championsByTotalDamage = champions.sort((a, b) => b.totalAttack - a.totalAttack);
    } else {
        championsByTotalDamage = champions.sort((a, b) => a.totalAttack - b.totalAttack);
    }
    
    $(championsByTotalDamage).each(function( index, champion ) {
        console.log(champion.name, champion.totalAttack);
    });

    placeChampions(championsByTotalDamage);
}

// orderBySingleDamage();
function orderBySingleDamage(highToLow) {
    $(champions).each(function( index, champion) {
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
        if (champion.name == "Neo-Leonidas") {
            console.log("NEOOO: " + champion.highestAttack);
        }
    });

    console.log("--- ORDER BY HIGHEST ATTACK ---");

    let championsByHighestAttack = [];

    if (highToLow) {
        championsByHighestAttack = champions.sort((a, b) => b.highestAttack - a.highestAttack);
    } else  {
        championsByHighestAttack = champions.sort((a, b) => a.highestAttack - b.highestAttack);
    }

    $(championsByHighestAttack).each(function( index, champion) {
        console.log(champion.name, champion.highestAttack);
    });

    placeChampions(championsByHighestAttack);
}

// orderByName();
function orderByName(highToLow) {
    console.log("--- ORDER BY NAME ---");

    let championsByName = [];

    if (highToLow) {
        championsByName = champions.sort(function(a, b) {
            return a === b ? 0 : a.name < b.name ? -1 : 1;
        });
    } else {
        championsByName = champions.sort(function(a, b) {
            return a === b ? 0 : b.name < a.name ? -1 : 1;
        });
    }
    
    $(championsByName).each(function( index, champion ) {
        console.log(champion.name);
    });

    placeChampions(championsByName);
}

// orderByHealth();
function orderByHealth(highToLow) {
    console.log("--- ORDER BY Health ---");

    let championsByHealth = [];

    if (highToLow) {
        championsByHealth = champions.sort((a, b) => b.health - a.health);
    } else {
        championsByHealth = champions.sort((a, b) => a.health - b.health);
    }
    
    $(championsByHealth).each(function( index, champion ) {
        console.log(champion.name, champion.health);
    });

    placeChampions(championsByHealth);
}

// orderBySpeed();
function orderBySpeed(highToLow) {
    console.log("--- ORDER BY SPEED ---");

    let championsBySpeed = [];

    if (highToLow) {
        championsBySpeed = champions.sort((a, b) => b.speed - a.speed);
    } else {
        championsBySpeed = champions.sort((a, b) => a.speed - b.speed);
    }
    
    $(championsBySpeed).each(function( index, champion ) {
        console.log(champion.name, champion.speed);
    });

    placeChampions(championsBySpeed);
}

// hasArmor();
function hasArmor() {
    let championsWithArmor = champions.filter(champion => champion.armor != 0);
    console.log("--- HAS ARMOR ---");
    $(championsWithArmor).each(function( index, champion) {
        console.log(champion.name);
    });

    placeChampions(championsWithArmor);
}

// interactsWithUpgradeCards();
function interactsWithUpgradeCards() {
    let championsWithUpgradeCards = champions.filter(champion => champion.interacts_with_upgrade_cards);
    console.log("--- UPGRADE CARDS ---");
    $(championsWithUpgradeCards).each(function( index, champion) {
        console.log(champion.name);
    });

    placeChampions(championsWithUpgradeCards);
}

// hasDrain();
function hasDrain() {
    let championsWithDrain = champions.filter(champion => champion.has_drain);
    console.log("--- HAS DRAIN ---");
    $(championsWithDrain).each(function( index, champion) {
        console.log(champion.name);
    });

    placeChampions(championsWithDrain);
}

// canCounter();
function canCounter() {
    let championsWithCounter = champions.filter(champion => champion.has_counter);
    console.log("--- CAN COUNTER ---");
    $(championsWithCounter).each(function( index, champion) {
        console.log(champion.name);
    });

    placeChampions(championsWithCounter);
}

// hasBenchPower();
function hasBenchPower() {
    let championsWithBenchPower = champions.filter(champion => champion.bench_power);
    console.log("--- HAS BENCH POWER ---");
    $(championsWithBenchPower).each(function( index, champion) {
        console.log(champion.name + ": " + champion.bench_power);
    });

    placeChampions(championsWithBenchPower);
}

// hasUltimateForm();
function hasUltimateForm() {
    let championsWithUltimateForm = champions.filter(champion => champion.has_ultimate_form);
    console.log("--- HAS ULTIMATE FORM ---");
    $(championsWithUltimateForm).each(function( index, champion) {
        console.log(champion.name);
    });

    placeChampions(championsWithUltimateForm);
}

