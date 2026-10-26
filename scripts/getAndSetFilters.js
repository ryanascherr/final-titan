export function getAndSetFilters(array) {
    array = getTokens(array);
    array = getIcons(array);
    array = getAbilities(array);
    array = getInteractions(array);
    array = getArtists(array);
    array = getSet(array);
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
    let blessed = $(".js_blessed").is(':checked');
    let cursed = $(".js_cursed").is(':checked');
    let fire = $(".js_fire").is(':checked');
    let minion = $(".js_minion").is(':checked');

    if (action) {
        array = array.filter(champion => champion.hasAction);
    }
    if (armorToken) {
        array = array.filter(champion => champion.hasArmor);
    }
    if (dodge) {
        array = array.filter(champion => champion.hasDodge);
    }
    if (poison) {
        array = array.filter(champion => champion.hasPoison);
    }
    if (power) {
        array = array.filter(champion => champion.hasPower);
    }
    if (blessed) {
        array = array.filter(champion => champion.hasBlessed);
    }
    if (cursed) {
        array = array.filter(champion => champion.hasCursed);
    }
    if (fire) {
        array = array.filter(champion => champion.hasFire);
    }
    if (minion) {
        array = array.filter(champion => champion.hasMinion);
    }

    return array;
}

function getIcons(array) {
    let armor = $(".js_armor").is(':checked');
    let drain = $(".js_drain").is(':checked');
    let cancel = $(".js_counter").is(':checked');
    let defeat = $(".js_defeat").is(':checked');
    let exclamation = $(".js_exclamation").is(':checked');
    let reroll = $(".js_reroll").is(':checked');

    if (armor) {
        array = array.filter(champion => champion.armor != 0 && champion.armor);
    }
    if (drain) {
        array = array.filter(champion => champion.hasDrain);
    }
    if (cancel) {
        array = array.filter(champion => champion.hasCancel);
    }
    if (defeat) {
        array = array.filter(champion => champion.hasKO);
    }
    if (exclamation) {
        array = array.filter(champion => champion.has_exclamation_point);
    }
    if (reroll) {
        array = array.filter(champion => champion.hasReroll);
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
        array = array.filter(champion => champion.hasSpecialAbility);
    }
    if (ultimate) {
        array = array.filter(champion => champion.hasUltimateForm);
    }
    if (bench) {
        array = array.filter(champion => champion.hasTeamPower);
    }
    if (startOfGame) {
        array = array.filter(champion => champion.hasStartOfGame);
    }
    if (startOfFight) {
        array = array.filter(champion => champion.hasStartOfFight);
    }

    return array;
}

function getInteractions(array) {
    let upgradeCards = $(".js_upgrade").is(':checked');
    let benchInteract = $(".js_bench-interact").is(':checked');
    let charge = $(".js_charge").is(':checked');

    if (upgradeCards) {
        array = array.filter(champion => champion.hasUpgradeCardInteraction);
    }
    if (benchInteract) {
        array = array.filter(champion => champion.hasBenchInteraction);
    }
    if (charge) {
        array = array.filter(champion => champion.hasChargeInteraction);
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
    let max = $(".js_max").is(':checked');
    let alessandro = $(".js_alessandro").is(':checked');
    let fanny = $(".js_fanny").is(':checked');
    let vincent = $(".js_vincent").is(':checked');
    let jose = $(".js_jose").is(':checked');
    let marie = $(".js_marie").is(':checked');
    let daniel = $(".js_daniel").is(':checked');

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
    if (max) {
        array = array.filter(champion => champion.artist == "Maximilian Gotthold");
    }
    if (alessandro) {
        array = array.filter(champion => champion.artist == "Alessandro Patria");
    }
    if (fanny) {
        array = array.filter(champion => champion.artist == "Fanny Pastor-Berlie");
    }
    if (vincent) {
        array = array.filter(champion => champion.artist == "Vincent Dutrait");
    }
    if (jose) {
        array = array.filter(champion => champion.artist == "Jose Garcia");
    }
    if (marie) {
        array = array.filter(champion => champion.artist == "Marie Bergeron");
    }
    if (daniel) {
        array = array.filter(champion => champion.artist == "Daniel Caballero");
    }

    return array;
}

function getSet(array) {
    let all = $(".js_standard").is(':checked');
    let standard = $(".js_standard").is(':checked');
    let advanced =$(".js_advanced").is(':checked');
    let godspark =$(".js_godspark").is(':checked');
    let mindbug =$(".js_mindbug").is(':checked');
    let promo =$(".js_promo").is(':checked');

    if (standard) {
        array = array.filter(champion => champion.set == "Standard");
    }
    if (advanced) {
        array = array.filter(champion => !champion.set);
    }
    if (godspark) {
        array = array.filter(champion => champion.set == "Godspark");
    }
    if (mindbug) {
        array = array.filter(champion => champion.set == "Mindbug");
    }
    if (promo) {
        array = array.filter(champion => champion.set == "Promo");
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