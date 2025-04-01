export function placeChampions(array) {
    $(array).each(function( index, champion) {
        let name = champion.name.toLowerCase();
        name = name.replace(/ /g,"_");
        $(".champions").append(`
            <img loading="lazy" class="champions__champion" src="./img/champions/champion_${name}.png" alt="${champion.name}">
        `)
    });
}