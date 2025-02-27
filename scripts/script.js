const supabaseURL = 'https://jjdtikulxocedonohrpf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZHRpa3VseG9jZWRvbm9ocnBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0OTI1NjEsImV4cCI6MjA1NjA2ODU2MX0.7H56TLX1hFXqCJBgDHRU5Evj7gPtdXYUugtyPBfZQuI';
const supabaseData = window.supabase.createClient(supabaseURL, supabaseKey);
const { data, error } = await supabaseData.from('champions').select()
.order('name', { ascending: true });
const champions = data;
console.log(champions);

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
}

hasArmor();
function hasArmor() {
    let championsWithArmor = champions.filter(champion => champion.armor != 0);
    console.log("--- HAS ARMOR ---");
    $(championsWithArmor).each(function( index, champion) {
        console.log(champion.name);
    });
}

