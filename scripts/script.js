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

$(".js_numbers-health").click(function() {
    let parent = $(this).parent()[0];
    let select = $(parent).children('select')[0];
    let input = $(parent).children('input');

    if ($(input).is(':checked')) {
        $('.js_numbers-health').prop('checked', false);
        $(input).prop('checked', true);
        $('.js_health-select').prop('disabled', true);
        $(input).prop('disabled', false);
        $(select).prop('disabled', false)
    } else {
        $(select).prop('disabled', true)
    }
});

$(".js_numbers-speed").click(function() {
    let parent = $(this).parent()[0];
    let select = $(parent).children('select')[0];
    let input = $(parent).children('input');

    if ($(input).is(':checked')) {
        $('.js_numbers-speed').prop('checked', false);
        $(input).prop('checked', true);
        $('.js_speed-select').prop('disabled', true);
        $(input).prop('disabled', false);
        $(select).prop('disabled', false)
    } else {
        $(select).prop('disabled', true)
    }
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

$('.js_select').on('change', function() {
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
    let reroll = $(".js_reroll").is(':checked');

    if (armor) {
        array = array.filter(champion => champion.armor != 0);
    }
    if (drain) {
        array = array.filter(champion => champion.has_drain);
    }
    if (counter) {
        array = array.filter(champion => champion.has_counter);
    }
    if (defeat) {
        array = array.filter(champion => champion.has_defeat_icon);
    }
    if (exclamation) {
        array = array.filter(champion => champion.has_exclamation_point);
    }
    if (reroll) {
        array = array.filter(champion => champion.can_reroll);
    }

    let action = $(".js_action").is(':checked');
    let armorToken = $(".js_armor-token").is(':checked');
    let dodge = $(".js_dodge").is(':checked');
    let poison = $(".js_poison").is(':checked');
    let power = $(".js_power").is(':checked');

    if (action) {
        array = array.filter(champion => champion.gives_action_token);
    }
    if (armorToken) {
        array = array.filter(champion => champion.gives_armor_token);
    }
    if (dodge) {
        array = array.filter(champion => champion.gives_dodge_token);
    }
    if (poison) {
        array = array.filter(champion => champion.has_poison);
    }
    if (power) {
        array = array.filter(champion => champion.gives_power_token);
    }

    let special = $(".js_special").is(':checked');
    let ultimate = $(".js_ultimate").is(':checked');
    let bench = $(".js_bench").is(':checked');
    let startOfGame = $(".js_start-game").is(':checked');
    let startOfFight = $(".js_start-fight").is(':checked');

    if (special) {
        array = array.filter(champion => champion.special_ability_name);
    }
    if (ultimate) {
        array = array.filter(champion => champion.has_ultimate_form);
    }
    if (bench) {
        array = array.filter(champion => champion.bench_power);
    }
    if (startOfGame) {
        array = array.filter(champion => champion.start_of_game);
    }
    if (startOfFight) {
        array = array.filter(champion => champion.start_of_fight);
    }
    
    let upgradeCards = $(".js_upgrade").is(':checked');
    let benchInteract = $(".js_bench-interact").is(':checked');

    if (upgradeCards) {
        array = array.filter(champion => champion.interacts_with_upgrade_cards);
    }

    if (benchInteract) {
        array = array.filter(champion => champion.interacts_with_bench || champion.returns_to_bench);
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
        array = array.filter(champion => champion.artist == "Llythium");
    }
    if (desiati) {
        array = array.filter(champion => champion.artist == "Emanuele Desiati");
    }
    if (saura) {
        array = array.filter(champion => champion.artist == "Yona Saura");
    }
    if (vallee) {
        array = array.filter(champion => champion.artist == "Nicolas Vallee");
    }
    if (cuenca) {
        array = array.filter(champion => champion.artist == "Xavier Cuenca");
    }
    if (votta) {
        array = array.filter(champion => champion.artist == "Gabriele Votta");
    }
    if (kerntke) {
        array = array.filter(champion => champion.artist == "Jann Kerntke");
    }
    if (martynets) {
        array = array.filter(champion => champion.artist == "Denis Martynets");
    }

    let healthAtLeast = $('.js_health-at-least').is(':checked');
    let healthAtMost = $('.js_health-at-most').is(':checked');
    let healthExactly = $('.js_health-exactly').is(':checked');
    let healthParent;
    let healthSelect;
    let healthNumber;

    if (healthAtLeast) {
        healthParent = $('.js_health-at-least').parent();
    } else if (healthAtMost) {
        healthParent = $('.js_health-at-most').parent();
    } else if (healthExactly) {
        healthParent = $('.js_health-exactly').parent();
    }

    healthSelect = $(healthParent).children('select');
    healthNumber = parseInt($(healthSelect).val());

    if (healthAtLeast) {
        array = array.filter(champion => champion.health >= healthNumber);
    } else if (healthAtMost) {
        array = array.filter(champion => champion.health <= healthNumber);
    } else if (healthExactly) {
        array = array.filter(champion => champion.health == healthNumber);
    }

    let speedAtLeast = $('.js_speed-at-least').is(':checked');
    let speedAtMost = $('.js_speed-at-most').is(':checked');
    let speedExactly = $('.js_speed-exactly').is(':checked');
    let speedParent;
    let speedSelect;
    let speedNumber;

    if (speedAtLeast) {
        speedParent = $('.js_speed-at-least').parent();
    } else if (speedAtMost) {
        speedParent = $('.js_speed-at-most').parent();
    } else if (speedExactly) {
        speedParent = $('.js_speed-exactly').parent();
    }

    speedSelect = $(speedParent).children('select');
    speedNumber = parseInt($(speedSelect).val());

    if (speedAtLeast) {
        array = array.filter(champion => champion.speed >= speedNumber);
    } else if (speedAtMost) {
        array = array.filter(champion => champion.speed <= speedNumber);
    } else if (speedExactly) {
        array = array.filter(champion => champion.speed == speedNumber);
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

