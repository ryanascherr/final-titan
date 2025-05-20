import { placeChampions } from "./placeChampions.js";
import { manageInputs } from "./inputCommand.js";
import { getAndSetFilters } from "./getAndSetFilters.js";
import { getAndSetOrder } from "./getAndSetOrder.js";
import { openModal, closeModal } from "./modalControl.js";

const supabaseURL = 'https://jjdtikulxocedonohrpf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpqZHRpa3VseG9jZWRvbm9ocnBmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0OTI1NjEsImV4cCI6MjA1NjA2ODU2MX0.7H56TLX1hFXqCJBgDHRU5Evj7gPtdXYUugtyPBfZQuI';
const supabaseData = window.supabase.createClient(supabaseURL, supabaseKey);
const { data, error } = await supabaseData.from('champions').select()
.order('name', { ascending: true });
const champions = data;

placeChampions(champions);

$(".js_criteria").click(function() {
    manageInputs(this);
})

$('.js_criteria').click(function() {
    prepareForCardPlacement();
});

$('.js_select').on('change', function() {
    prepareForCardPlacement();
});

function prepareForCardPlacement() {
    $(".champions").empty();
    let array = champions;
    array = getAndSetFilters(array);
    array = getAndSetOrder(array);
    placeChampions(array);
}

$('body').on('click', '.champions__champion', function () {
    let src = $(this).attr('src');
    openModal(src);
});

$('body').on('click', '.modal', function () {
    closeModal();
});

$('html').keyup(function(e){
    if(e.keyCode == 8 && $(".modal").hasClass("open")){
        closeModal();
    }
});

