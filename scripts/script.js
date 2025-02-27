const supabaseURL = 'https://jjdtikulxocedonohrpf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZHRpa3VseG9jZWRvbm9ocnBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0OTI1NjEsImV4cCI6MjA1NjA2ODU2MX0.7H56TLX1hFXqCJBgDHRU5Evj7gPtdXYUugtyPBfZQuI';
const supabaseData = window.supabase.createClient(supabaseURL, supabaseKey);
const { data, error } = await supabaseData.from('champions').select()
.order('name', { ascending: true });
const champions = data;
console.log(champions);

function placeChampions(array) {
    $(array).each(function( index, champion) {
        let name = champion.name.toLowerCase();
        name = name.replace(/ /g,"_");
        $("body").append(`
            <img src="../img/champion_${name}.png">
        `)
    });
}

// orderByTotalPower();
function orderByTotalPower() {
    $(champions).each(function( index, champion) {
        champion.totalAttack = champion.attack1 + champion.attack2 + champion.attack3 + champion.attack4;
    });

    console.log("--- ORDER BY POWER ---");
    
    let championsByPower = champions.sort((a, b) => b.totalAttack - a.totalAttack);
    $(championsByPower).each(function( index, champion ) {
        console.log(champion.name, champion.totalAttack);
    });

    placeChampions(championsByPower);
}

// orderBySinglePower();
function orderBySinglePower() {
    $(champions).each(function( index, champion) {
        let highestAttack = champion.attack1;
        highestAttack = champion.attack2 >= champion.attack1 ? champion.attack2 : champion.attack1;
        highestAttack = champion.attack3 >= champion.attack2 ? champion.attack3 : champion.attack2;
        highestAttack = champion.attack4 >= champion.attack3 ? champion.attack4 : champion.attack3;

        champion.highestAttack = highestAttack;
    });

    console.log("--- ORDER BY HIGHEST ATTACK ---");

    let championsByHighestAttack = champions.sort((a, b) => b.highestAttack - a.highestAttack);
    $(championsByHighestAttack).each(function( index, champion) {
        console.log(champion.name, champion.highestAttack);
    });

    placeChampions(championsByHighestAttack);
}

// orderBySpeed();
function orderBySpeed() {
    console.log("--- ORDER BY SPEED ---");
    
    let championsBySpeed = champions.sort((a, b) => b.speed - a.speed);
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

hasUltimateForm();
function hasUltimateForm() {
    let championsWithUltimateForm = champions.filter(champion => champion.has_ultimate_form);
    console.log("--- HAS ULTIMATE FORM ---");
    $(championsWithUltimateForm).each(function( index, champion) {
        console.log(champion.name);
    });

    placeChampions(championsWithUltimateForm);
}

