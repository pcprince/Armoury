/****************************************************************************
 * masterworkSelection.js
 * November 2024
 *****************************************************************************/

/* global getSelectedGunMakeName, getMasterworksByMaker, getStandardisedPartsMasterworks, setMasterworkTotalPrice */

const selectMasterworksButton = document.getElementById('select-masterworks-button');

const basicSelectionDiv = document.getElementById('basic-selection-div');
const masterworkSelectionDiv = document.getElementById('masterwork-selection-div');

const masterworkContainer = document.getElementById('masterwork-container');
const masterworkSelectionContainer = document.getElementById('masterwork-selection-container');
const standardisedPartsContainer = document.getElementById('standardised-parts-container');

let possibleMasterworks = [];
let masterworkSelection = [];

class Masterwork {

    constructor (priceMultiplier = 1.0, positionIncrement = 0) {

        this.priceMultiplier = parseFloat(priceMultiplier);
        this.positionIncrement = parseInt(positionIncrement, 10);

    }

}

const CHEAPER_CUSTOMISATION = new Masterwork(1, -1);
const STANDARDISED_PARTS = new Masterwork(1, 2);
const GENERIC_MASTERWORK = new Masterwork(1, 1);

function calculateMasterworkCost (masterworkList) {

    let totalCost = 0;
    let effectivePosition = 0;

    for (let i = 0; i < masterworkList.length; i++) {

        const masterwork = masterworkList[i].name === 'Cheaper Customisation' ? CHEAPER_CUSTOMISATION : (masterworkList[i].name === 'Standardised Parts' ? STANDARDISED_PARTS : GENERIC_MASTERWORK);

        totalCost += 1000 * Math.pow(2, effectivePosition) * masterwork.priceMultiplier;
        effectivePosition += masterwork.positionIncrement;

    }

    return totalCost;

}

function updateMasterworkCost () {

    const masterworkCost = calculateMasterworkCost(masterworkSelection);

    setMasterworkTotalPrice(masterworkCost);

}

function resetMasterworkSelection () {

    masterworkSelection = [];

    updateSelectedMasterworkDisplay();

    updateMasterworkCost();

    disableStandardisedParts();

}

function fillRowWithPlaceholders (row, count) {

    for (let i = 0; i < count; i++) {

        const placeholder = document.createElement('div');
        placeholder.className = 'col';
        row.appendChild(placeholder);

    }

}

function updateSelectedMasterworkDisplay () {

    masterworkSelectionContainer.innerHTML = '';

    const currentRow = document.createElement('div');
    currentRow.className = 'row g-3';

    for (let i = 0; i < masterworkSelection.length; i++) {

        if (i % 7 === 0) {

            masterworkSelectionContainer.appendChild(currentRow);

        }

        const col = document.createElement('div');
        col.className = 'col';

        // Build card

        const card = buildCard(masterworkSelection[i], true);
        const removeButton = card.querySelector('.remove-button');
        removeButton.disabled = i !== masterworkSelection.length - 1;

        col.appendChild(card);

        currentRow.appendChild(col);

        // Add functionality to add button

        removeButton.addEventListener('click', () => {

            removeLatestMasterwork();

        });

    }

    fillRowWithPlaceholders(currentRow, currentRow ? 7 - currentRow.children.length : 7);

}

function addMasterwork (m) {

    console.log('Adding:', m);

    masterworkSelection.push(m);

    updateSelectedMasterworkDisplay();

    updateMasterworkCost();

}

function removeLatestMasterwork () {

    const m = masterworkSelection.pop();

    console.log('Removing:', m);

    updateSelectedMasterworkDisplay();

    updateMasterworkCost();

    updatePrices();

    if (m.name === 'Standardised Parts') {

        disableStandardisedParts();

    }

    if (masterworkSelection[masterworkSelection.length - 1].name === 'Standardised Parts') {

        enableStandardisedParts();

    }

}

function updatePrices () {

    const priceElements = masterworkContainer.getElementsByClassName('price');

    const currentMasterworkCost = calculateMasterworkCost(masterworkSelection);

    for (let i = 0; i < priceElements.length; i++) {

        const newMasterworkSelection = [...masterworkSelection, possibleMasterworks[i]];
        const newMasterworkCost = calculateMasterworkCost(newMasterworkSelection);
        const price = newMasterworkCost - currentMasterworkCost;

        priceElements[i].innerHTML = price + 'g';

    }

}

function buildCard (masterwork, selected) {

    const card = document.createElement('div');
    card.className = 'card h-100';

    const cardHeader = document.createElement('h5');
    cardHeader.className = 'card-header';
    cardHeader.textContent = masterwork.name;

    // TODO: If masterwork has '+X' in the name, append (+number)

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const descriptionText = document.createElement('p');
    descriptionText.className = 'card-text';

    descriptionText.innerHTML = '<i>' + masterwork.maker + '</i>';
    descriptionText.innerHTML += '<br>';
    descriptionText.innerHTML += masterwork.description;

    cardBody.appendChild(descriptionText);

    if (masterwork.maker === 'Salcorin Bespoke') {

        const kickerText = document.createElement('p');
        kickerText.className = 'card-text';
        kickerText.textContent = masterwork.kicker;

        cardBody.appendChild(kickerText);

    }

    const cardFooter = document.createElement('div');

    if (selected) {

        cardFooter.className = 'card-footer d-flex justify-content-end';

        const removeButton = document.createElement('button');
        removeButton.className = 'btn btn-danger btn-sm remove-button';
        removeButton.textContent = 'Remove';

        cardFooter.appendChild(removeButton);

    } else {

        cardFooter.className = 'card-footer d-flex justify-content-between align-items-center';

        const price = document.createElement('span');
        price.className = 'text-muted price';
        price.textContent = '0g';

        const addButton = document.createElement('button');
        addButton.className = 'btn btn-success btn-sm add-button';
        addButton.textContent = 'Add';

        cardFooter.appendChild(price);
        cardFooter.appendChild(addButton);

    }

    // Build card

    card.appendChild(cardHeader);

    card.appendChild(cardBody);

    card.appendChild(cardFooter);

    return card;

}

function enableStandardisedParts () {

    // Disable general masterworks and masterworks for current gun

    const addButtons = masterworkContainer.getElementsByClassName('add-button');
    const prices = masterworkContainer.getElementsByClassName('price');

    for (let i = 0; i < addButtons.length; i++) {

        addButtons[i].disabled = true;
        prices[i].innerText = '-';

    }

    // Populate standardised parts card list

    standardisedPartsContainer.style.display = '';
    standardisedPartsContainer.innerHTML = '';

    const line = document.createElement('hr');
    standardisedPartsContainer.appendChild(line);

    const standardisedMasterworks = getStandardisedPartsMasterworks();

    // TODO: Add search bar

    let currentRow = null;

    for (let i = 0; i < standardisedMasterworks.length; i++) {

        if (i % 7 === 0) {

            currentRow = document.createElement('div');
            currentRow.className = 'row g-3';

            if (i === 0) {

                currentRow.style.marginTop = '0px';

            }

            standardisedPartsContainer.appendChild(currentRow);

        }

        const col = document.createElement('div');
        col.className = 'col';

        const card = buildCard(standardisedMasterworks[i], false);
        const addButton = card.querySelector('.add-button');

        col.appendChild(card);

        currentRow.appendChild(col);

        // Add functionality to add button

        addButton.addEventListener('click', () => {

            addMasterwork(standardisedMasterworks[i]);

            disableStandardisedParts();

            updatePrices();

        });

    }

    // Update prices for standardised parts masterworks

    const priceElements = standardisedPartsContainer.getElementsByClassName('price');

    const currentMasterworkCost = calculateMasterworkCost(masterworkSelection);

    for (let i = 0; i < priceElements.length; i++) {

        const newMasterworkSelection = [...masterworkSelection, standardisedMasterworks[i]];
        const newMasterworkCost = calculateMasterworkCost(newMasterworkSelection);
        const price = newMasterworkCost - currentMasterworkCost;

        priceElements[i].innerHTML = price + 'g';

    }

}

function disableStandardisedParts () {

    // Disable general masterworks and masterworks for current gun

    const addButtons = masterworkContainer.getElementsByClassName('add-button');

    for (let i = 0; i < addButtons.length; i++) {

        addButtons[i].disabled = false;

    }

    // Hide UI

    standardisedPartsContainer.style.display = 'none';

    // Reset price UI

    updatePrices();

}

selectMasterworksButton.addEventListener('click', () => {

    masterworkSelection = [];

    basicSelectionDiv.style.display = 'none';
    masterworkSelectionDiv.style.display = '';

    // Populate masterworks

    masterworkContainer.innerHTML = '';

    const generalMasterworks = getMasterworksByMaker('General');

    const gunMake = getSelectedGunMakeName();
    const limitedMasterworks = getMasterworksByMaker(gunMake);

    possibleMasterworks = [...generalMasterworks, ...limitedMasterworks];

    let currentRow = null;

    for (let i = 0; i < possibleMasterworks.length; i++) {

        if (i % 7 === 0) {

            currentRow = document.createElement('div');
            currentRow.className = 'row g-3';
            masterworkContainer.appendChild(currentRow);

        }

        const col = document.createElement('div');
        col.className = 'col';

        const card = buildCard(possibleMasterworks[i], false);
        const addButton = card.querySelector('.add-button');

        col.appendChild(card);

        currentRow.appendChild(col);

        // Add functionality to add button

        addButton.addEventListener('click', () => {

            addMasterwork(possibleMasterworks[i]);

            if (possibleMasterworks[i].name !== 'Accurate +X' && possibleMasterworks[i].name !== 'Specialisation +X') {

                addButton.disabled = true;

            }

            updatePrices();

            if (possibleMasterworks[i].name === 'Standardised Parts') {

                enableStandardisedParts();

            }

        });

    }

    updatePrices();

});