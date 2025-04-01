export function getAndSetFilters(array) {
    array = getTokens(array);
    array = getIcons(array);
    array = getAbilities(array);
    array = getInteractions(array);
    array = getArtists(array);
    array = getHealth(array);
    array = getSpeed(array);

    return array;
}

function getTokens(array) {
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

    return array;
}

function getIcons(array) {
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

    return array;
}

function getAbilities(array) {
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

    return array;
}

function getInteractions(array) {
    let upgradeCards = $(".js_upgrade").is(':checked');
    let benchInteract = $(".js_bench-interact").is(':checked');

    if (upgradeCards) {
        array = array.filter(champion => champion.interacts_with_upgrade_cards);
    }
    if (benchInteract) {
        array = array.filter(champion => champion.interacts_with_bench || champion.returns_to_bench);
    }

    return array;
}

function getArtists(array) {
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

    return array;
}

function getHealth(array) {
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

    return array;
}

function getSpeed(array) {
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