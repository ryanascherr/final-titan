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
            <img loading="lazy" class="champions__champion" src="./img/champions/champion_${name}.png" alt="${champion.name}">
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

$(".js_artist").click(function() {
    let isNowChecked = $(this).is(':checked');
    $('.js_artist').prop('checked', false);
    if (isNowChecked) {
        $(this).prop('checked', true);
    }
});

$('.js_criteria').click(function() {
    $(".champions").empty();
    let array = getFilters(champions);
    getOrder(array);
});

function getFilters(array) {
    let armor = $(".js_armor").is(':checked');
    let drain = $(".js_drain").is(':checked');
    let counter = $(".js_counter").is(':checked');
    let defeat = $(".js_defeat").is(':checked');
    let exclamation = $(".js_exclamation").is(':checked');

    if (armor) {
        array = array.filter(creature => creature.armor != 0);
    }
    if (drain) {
        array = array.filter(creature => creature.has_drain);
    }
    if (counter) {
        array = array.filter(creature => creature.has_counter);
    }
    if (defeat) {
        array = array.filter(creature => creature.has_defeat_icon);
    }
    if (exclamation) {
        array = array.filter(creature => creature.has_exclamation_point);
    }

    let action = $(".js_action").is(':checked');
    let armorToken = $(".js_armor-token").is(':checked');
    let dodge = $(".js_dodge").is(':checked');
    let poison = $(".js_poison").is(':checked');
    let power = $(".js_power").is(':checked');

    if (action) {
        array = array.filter(creature => creature.gives_action_token);
    }
    if (armorToken) {
        array = array.filter(creature => creature.gives_armor_token);
    }
    if (dodge) {
        array = array.filter(creature => creature.gives_dodge_token);
    }
    if (poison) {
        array = array.filter(creature => creature.has_poison);
    }
    if (power) {
        array = array.filter(creature => creature.gives_power_token);
    }

    let special = $(".js_special").is(':checked');
    let ultimate = $(".js_ultimate").is(':checked');
    let bench = $(".js_bench").is(':checked');

    if (special) {
        array = array.filter(creature => creature.special_ability_name);
    }
    if (ultimate) {
        array = array.filter(creature => creature.has_ultimate_form);
    }
    if (bench) {
        array = array.filter(creature => creature.bench_power);
    }

    let llythium = $(".js_llythium").is(':checked');
    let desiati = $(".js_desiati").is(':checked');
    let saura = $(".js_saura").is(':checked');
    let vallee = $(".js_vallee").is(':checked');
    let cuenca = $(".js_cuenca").is(':checked');
    let votta = $(".js_votta").is(':checked');
    let kerntke = $(".js_kerntke").is(':checked');
    let martynets = $(".js_martynets").is(':checked');

    if (llythium) {
        array = array.filter(creature => creature.artist == "Llythium");
    }
    if (desiati) {
        array = array.filter(creature => creature.artist == "Emanuele Desiati");
    }
    if (saura) {
        array = array.filter(creature => creature.artist == "Yona Saura");
    }
    if (vallee) {
        array = array.filter(creature => creature.artist == "Nicolas Vallee");
    }
    if (cuenca) {
        array = array.filter(creature => creature.artist == "Xavier Cuenca");
    }
    if (votta) {
        array = array.filter(creature => creature.artist == "Gabriele Votta");
    }
    if (kerntke) {
        array = array.filter(creature => creature.artist == "Jann Kerntke");
    }
    if (martynets) {
        array = array.filter(creature => creature.artist == "Denis Martynets");
    }

    return array;
}

function getOrder(array) {
    let name = $(".js_name").is(':checked');
    let health = $(".js_health").is(':checked');
    let speed = $(".js_speed").is(':checked');
    let totalDamage = $(".js_total-damage").is(':checked');
    let singleDamage = $(".js_single-damage").is(':checked');
    let highToLow = $(".js_htl").is(':checked');

    if (name) {
        orderByName(array, highToLow);
    }
    if (health) {
        orderByHealth(array, highToLow);
    }
    if (speed) {
        orderBySpeed(array, highToLow);
    }
    if (totalDamage) {
        orderByTotalDamage(array, highToLow);
    }
    if (singleDamage) {
        orderBySingleDamage(array, highToLow);
    }
}

// orderByTotalDamage();
function orderByTotalDamage(array, highToLow) {
    $(array).each(function( index, champion) {
        champion.totalAttack = champion.attack1 + champion.attack2 + champion.attack3 + champion.attack4;
    });

    console.log("--- ORDER BY TOTAL DAMAGE ---");

    let championsByTotalDamage = [];

    if (highToLow) {
        championsByTotalDamage = array.sort((a, b) => b.totalAttack - a.totalAttack);
    } else {
        championsByTotalDamage = array.sort((a, b) => a.totalAttack - b.totalAttack);
    }
    
    $(championsByTotalDamage).each(function( index, champion ) {
        console.log(champion.name, champion.totalAttack);
    });

    placeChampions(championsByTotalDamage);
}

// orderBySingleDamage();
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
        if (champion.name == "Neo-Leonidas") {
            console.log("NEOOO: " + champion.highestAttack);
        }
    });

    console.log("--- ORDER BY HIGHEST ATTACK ---");

    let championsByHighestAttack = [];

    if (highToLow) {
        championsByHighestAttack = array.sort((a, b) => b.highestAttack - a.highestAttack);
    } else  {
        championsByHighestAttack = array.sort((a, b) => a.highestAttack - b.highestAttack);
    }

    $(championsByHighestAttack).each(function( index, champion) {
        console.log(champion.name, champion.highestAttack);
    });

    placeChampions(championsByHighestAttack);
}

// orderByName();
function orderByName(array, highToLow) {
    console.log("--- ORDER BY NAME ---");

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
    
    $(championsByName).each(function( index, champion ) {
        console.log(champion.name);
    });

    placeChampions(championsByName);
}

// orderByHealth();
function orderByHealth(array, highToLow) {
    console.log("--- ORDER BY Health ---");

    let championsByHealth = [];

    if (highToLow) {
        championsByHealth = array.sort((a, b) => b.health - a.health);
    } else {
        championsByHealth = array.sort((a, b) => a.health - b.health);
    }
    
    $(championsByHealth).each(function( index, champion ) {
        console.log(champion.name, champion.health);
    });

    placeChampions(championsByHealth);
}

// orderBySpeed();
function orderBySpeed(array, highToLow) {
    console.log("--- ORDER BY SPEED ---");

    let championsBySpeed = [];

    if (highToLow) {
        championsBySpeed = array.sort((a, b) => b.speed - a.speed);
    } else {
        championsBySpeed = array.sort((a, b) => a.speed - b.speed);
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

