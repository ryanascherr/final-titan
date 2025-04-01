export function manageInputs(clickedInput) {
    if (clickedInput.classList.contains("js_order")) {
        manageOrderInputs(clickedInput);
    }
    if (clickedInput.classList.contains("js_order-type")) {
        manageOrderTypeInputs(clickedInput);
    }
    if (clickedInput.classList.contains("js_numbers-health")) {
        manageNumberInputs(clickedInput, "health");
    }
    if (clickedInput.classList.contains("js_numbers-speed")) {
        manageNumberInputs(clickedInput, "speed");
    }
    if (clickedInput.classList.contains("js_artist")) {
        manageArtistInputs(clickedInput);
    }
}

function manageOrderInputs(clickedInput) {
    $('.js_order').prop('checked', false);
    $(clickedInput).prop('checked', true);
}

function manageOrderTypeInputs(clickedInput) {
    $('.js_order-type').prop('checked', false);
    $(clickedInput).prop('checked', true);
}

function manageNumberInputs(clickedInput, attribute) {
    let parent = $(clickedInput).parent()[0];
    let select = $(parent).children('select')[0];
    let input = $(parent).children('input');

    if ($(input).is(':checked')) {
        $(`.js_numbers-${attribute}`).prop('checked', false);
        $(input).prop('checked', true);
        $(`.js_${attribute}-select`).prop('disabled', true);
        $(input).prop('disabled', false);
        $(select).prop('disabled', false)
    } else {
        $(select).prop('disabled', true)
    }
}

function manageArtistInputs(clickedInput) {
    let isNowChecked = $(clickedInput).is(':checked');
    $('.js_artist').prop('checked', false);
    if (isNowChecked) {
        $(clickedInput).prop('checked', true);
    }
}