/****************************************************************************
 * basicSelection.js
 * November 2024
 *****************************************************************************/

/* global updatePrice */

const nameSpan = document.getElementById('name-span');

const gunTypeButtons = document.getElementsByClassName('gun-type-button');
const gunMakeButtons = document.getElementsByClassName('gun-make-button');

const gunPriceTexts = document.getElementsByClassName('gun-price-text');

// Make information card elements
const makeNameText = document.getElementById('make-name-text');
const designEthosText = document.getElementById('design-ethos-text');
const historyText = document.getElementById('history-text');
const makeTraitNameText = document.getElementById('make-trait-name-text');
const makeTraitText = document.getElementById('make-trait-text');
const mainMakeInfo = document.getElementById('main-make-info');
const makeTraitInfo = document.getElementById('make-trait-info');

const supportedMakes = [
    // Revolver, Holdout Pistol, Cavalry Pistol, Rifle, Carbine, Shotgun, Hunting Rifle
    [true, true, true, true, true, true, true], // Ashforge
    [true, false, true, true, true, false, false], // Gaxit
    [true, true, false, false, false, true, true], // Holdinger
    [false, false, false, true, true, false, true], // Leander-Sheriden
    [false, false, false, true, true, false, true], // Irvine
    [true, true, false, false, false, false, false], // Quicksilver
    [true, false, true, true, false, false, false], // Kammanen
    [true, false, true, false, false, true, false], // Valenzio
    [false, false, false, true, false, true, false], // Bursat
    [true, true, false, false, false, true, false], // Falluq
    [true, false, true, false, true, false, false], // Valmoran
    [true, true, true, true, true, true, true], // Carron
    [false, false, false, true, false, false, false], // Tesiphon
    [true, true, true, false, false, false, false], // Olympia
    [true, true, false, false, true, false, false], // Salconin Bespoke
    [true, false, false, false, false, true, true] // Ironcoil
];

const gunPrices = [450, 200, 500, 900, 1000, 800, 750];

const makeInformation = [
    {
        name: 'Ashforge',
        designEthos: 'General all purpose guns',
        history: 'Ashforge Clan Arsenal: The Ashforge Clan run the large city foundries of the Moon Peak Mountains. Rising to promenince for arming the country during the war for independance they have become a household name and to this day hold the majority of government contracts.',
        makeTrait: {
            name: 'Spare Parts',
            description: 'This weapon can be repaired for 50% of the cost.'
        }
    },
    {
        name: 'Gaxit',
        designEthos: 'Maximises the utility of different bullets.',
        history: 'Gaxit Artillery-and-Time Pieces: The Gnomexico based Gaxit was founded by a small group of highly inventive gnomes to make pocketwatches and other time keeping devices. They presented a bid to the Gnomexican government, in a move which historians are certain must have been a joke, with the Gaxit Spring Pistol; but have since grown to the point where Gaxit firearms are found across the continent.',
        makeTrait: {
            name: 'Clockwork Magazine',
            description: 'You can freely select which bullet loaded is fired as part of an attack.'
        }
    },
    {
        name: 'Holdinger',
        designEthos: 'Provides increased reliability.',
        history: 'Strongvein Clan Forges: The Strongvein Clan govern the great city of Snowpeak and the surrounding Coldiron mountains. Their guns are designed to weather all elements in a bid to compete with Ashforge\'s grip on Athean army contracts, an attempt only confounded by their slower manufacturing times.',
        makeTrait: {
            name: 'Old Reliable',
            description: 'Gain +2 to hit with all attacks made with this weapon if you have misfired with another weapon this combat.'
        }
    },
    {
        name: 'Leander-Sherriden',
        designEthos: 'Increase the number of shots fired.',
        history: 'Leander-Sherriden Repeating Arms Company: Great things were expected from the merger of the Athean based Sherriden and the and Uprelan based Leander and the The Trans-Arlaghian company certainly delivers. The two expert gunsmiths have produced guns that can sing in the hands of a skilled marksman.',
        makeTrait: {
            name: 'Bullet In the Chamber',
            description: 'You can make a single attack as part of a reload action.'
        }
    },
    {
        name: 'Irvine',
        designEthos: 'Precise and carefully placed firepower.',
        history: 'Irvine Naval Ordinance principly produces large naval guns. However, while small arms are a secondary concern at sea, demand for hard wearing and dependable weapons has caused an expansion in the storied company\'s inventory.',
        makeTrait: {
            name: 'Chaser Gun',
            description: 'On a misfire with this weapon, if the shot should have hit, it still does.'
        }
    },
    {
        name: 'Quicksilver',
        designEthos: 'Make use of two guns to control combat.',
        history: 'Quicksilver Sidearms Enterprise: Weaponry from the master elven gunsmiths has only recently become available as increased trade possibilities and collecters value is driving an import market.',
        makeTrait: {
            name: 'Elegant Craftsmanship',
            description: 'This weapon is light and gains +1 to hit each time you attack an enemy you have not attacked this round. Quicksilver weapons can be bought in pairs, reduce the model cost by 25% when purchased in this way.'
        }
    },
    {
        name: 'Kammanen',
        designEthos: 'Make a gun for all ranges.',
        history: 'Kammaren Armory: When the battery at Kammaren exchanged fire with the Mordvinian army for four straight months, solutions were needed to make up for waning powder supplies .The result is Kammaren Armory\'s lasting reputation for guns which are suitable for all occasions.',
        makeTrait: {
            name: 'Knife to a Gun Fight',
            description: 'Increase the melee damage die by one increment for this weapon. (Damage becomes Piercing or Slashing at weapon creation). Attacks made with this weapon have +1 to hit while it is out of ammo.'
        }
    },
    {
        name: 'Valenzio',
        designEthos: 'Making an impression.',
        history: 'Valenzio Sporting Arms: Famed for their elaborate and expensive decorative elements a Valenzio gun is seen as a status symbol more than a weapon of war. While some are used for the orignal intent, competetive dueling, it is believed that many more are proudly mounted on walls.',
        makeTrait: {
            name: 'Regal Bearing',
            description: 'Services with a cost of less than or equal to 2gp (for example an Inn stay of Comfortable quality) are given freely where possible to the owner of one of these weapons so long as the weapon is on display.'
        }
    },
    {
        name: 'Bursat',
        designEthos: 'Fighting from cover and prepared positions.',
        history: 'Bursat Trench Engineering first came to international attention during the Trantine Unification Wars, the rugged terrain of the conflict having lead to the construction of a collossal network of earthwork fortifications, Bursat planners masterminded new advances in weaponry and their application which were pivotal in breaking the stalemate.',
        makeTrait: {
            name: 'Defilade Aggressor',
            description: 'This weapon has a +1 bonus to hit when attacking enemies who are counted as being in cover from you.'
        }
    },
    {
        name: 'Faljuq',
        designEthos: 'Powerful shooting in exchange for rate of fire.',
        history: 'The Faljuq National Siege Works at Etrugol are ancient, producing weapons of war for centuaries. Given the Faljuqman reputation for massive scale gunpowder manufacture, it comes as no surprise that the first small arms they have yet produced favour a wide bore and heavy shot.',
        makeTrait: {
            name: 'Bombard Heritage',
            description: 'This weapon uses ammunition of one higher caliber than usual for its model; however, it also has half the usual capacity (Round down).'
        }
    },
    {
        name: 'Valmoran',
        designEthos: 'Deal greater harm from weapons that also injure their user.',
        history: 'Valmoran\'s discovery of re-usable runes was heralded as one of the most important advances in a generation, at least until it became clear the harsh toll their use took upon those who employ them. Nonetheless, Valmoran Blighted Armaments continue to produce weapons to be wielded by the prepared, foolish and desperate.',
        makeTrait: {
            name: 'Accursed Sigils',
            description: 'Attacks made with this weapon deal 1 additional necrotic damage, however while the weapon is on your person your maximum healthpoints are reduced by 5. Each other Valmoran Masterwork trait on this weapon applies these effects again.'
        }
    },
    {
        name: 'Carron',
        designEthos: 'Multiple barrelled weapons which are a combination of features of each base model.',
        history: 'Carron Volleyguns are of strange but well tested design, with multiple barrels in place of complex internal magazine space. Mostly employed by game hunters, they provide a source of firepower which is reliable in it\'s simplicity, albeit a little slow to reload.',
        makeTrait: {
            name: 'Combination Weapons',
            description: 'Combination Weapons: Any two weapon models (including the same kind twice) are combined, paying the price of both. When you make an attack with this weapon you may fire all barrels as part of the attack. An attack made this way is made with disadvantage (this cannot be removed in any way) and all component weapons must be in range. Additionally when fired this way the weapon can only misfire or critical hit when all dice roll 1 or 20 respectively. Combination Weapons inherit all weapon keywords, have -1 capacity on each component weapon (to minimum of 1) and may only be reloaded outside of combat.'
        }
    },
    {
        name: 'Tesiphon',
        designEthos: 'Weird West alchemical weapons.',
        history: 'Tesiphon Galvanic Enigneering are a leading light in the materials sciences, with many major advances of the last decade to their name. The Tesiphon Laboratories are mistrusted by many serious gunfighers, however that does not diminish the enthusiasm of their adventurous clients.',
        makeTrait: {
            name: 'Overdesigned',
            description: 'This weapon has five times the durability of a normal weapon of it\'s type, and doesn\'t take durability damage from misfires. However, it instead loses 1 durability every time it is fired.'
        }
    },
    {
        name: 'Olympia',
        designEthos: 'Speedshooting dueling specialists.',
        history: 'The Olympia Dueling Society was formed by some of the most capable gunfighters in the new world. Using their hard won experience Olympia Society firearms are purpose built for immediate and deadly accuracy.',
        makeTrait: {
            name: 'Slimline Special',
            description: 'After you roll initiative, you can draw the weapon and gain either: a +2 bonus to initiative applied to the roll or a +5 damage bonus to the first attack you make in this combat.'
        }
    },
    {
        name: 'Salcorin Bespoke',
        designEthos: 'Swap guns to combo effects.',
        history: 'Salcorin Bespoke Gunworks: No two guns leave the workshops of the Salcorin Bespoke exactly alike. All gunsmiths at the company are encouraged to place their own signature elements on each gun they produce and no gun is sold if the individual smith is unhappy with the way it fires.',
        makeTrait: {
            name: 'Knock \'em Down',
            description: 'This weapon can be holstered and drawn for free. Activate this gun\'s Kicker effect when you hit with an attack after you have already hit with an attack using a different gun this round. This weapon can only trigger either it\'s regular effect or Kicker once per round. This weapon can only have one Salcorin Masterwork Trait.'
        }
    },
    {
        name: 'Ironcoil',
        designEthos: 'Takes risks to inflict more damage.',
        history: 'Ironcoil Cannon Foundry: Founded by a Dragonkin family seeking increasingly specilised weaponry to hunt increasingly big game the Ironcoil name has become synonymous with weapon related mishaps. Rumor has it that the company has been won in many a foolish wager over the years.',
        makeTrait: {
            name: 'One up the Sleeve',
            description: 'Once per round you can choose to reroll any damage dice rolled as part of an attack.'
        }
    }
];

let selectedGunTypeIndex = -1;
let selectedGunMakeIndex = -1;

function getSelectedGunMakeIndex () {

    return selectedGunMakeIndex;

}

function getSelectedGunTypeIndex () {

    return selectedGunTypeIndex;

}

function resetBasicSelection () {

    selectedGunMakeIndex = -1;
    selectedGunTypeIndex = -1;

    // Reset make information card

    updateMakeInformationCard();

    // Disable masterwork button as gun type needs to be chosen

    document.getElementById('select-masterworks-button').disabled = true;

    // Update price display

    updatePrice(0);

    // Update basic name

    updateGunName();

    // Update buttons

    for (let i = 0; i < gunMakeButtons.length; i++) {

        const gunMakeButton = gunMakeButtons[i];

        gunMakeButton.classList.remove('btn-success');
        gunMakeButton.classList.add('btn-primary');

    }

    for (let j = 0; j < gunTypeButtons.length; j++) {

        const gunTypeButton = gunTypeButtons[j];

        gunTypeButton.disabled = true;

        gunTypeButton.classList.remove('btn-success');
        gunTypeButton.classList.remove('btn-primary');
        gunTypeButton.classList.add('btn-secondary');

    }

}

function updateGunName () {

    nameSpan.innerText = (selectedGunTypeIndex === -1 || selectedGunMakeIndex === -1) ? 'New Gun' : gunMakeButtons[selectedGunMakeIndex].innerText + ' ' + gunTypeButtons[selectedGunTypeIndex].innerText;

}

function updateMakeInformationCard () {

    if (selectedGunMakeIndex === -1) {

        makeNameText.innerText = 'Select a gun make';
        designEthosText.innerText = '';
        historyText.innerText = '';
        makeTraitNameText.innerText = '';
        makeTraitText.innerText = '';

        mainMakeInfo.style.display = 'none';
        makeTraitInfo.style.display = 'none';

        return;

    }

    mainMakeInfo.style.display = '';
    makeTraitInfo.style.display = '';

    const makeDetails = makeInformation[selectedGunMakeIndex];

    makeNameText.innerText = makeDetails.name;
    designEthosText.innerText = makeDetails.designEthos;
    historyText.innerText = makeDetails.history;

    makeTraitNameText.innerHTML = '<b>Make trait:</b> ' + makeDetails.makeTrait.name;
    makeTraitText.innerText = makeDetails.makeTrait.description;

}

function isGunMakeSupported (make, type) {

    if (make === -1 || type === -1) {

        return false;

    }

    return supportedMakes[make][type];

}

for (let i = 0; i < gunMakeButtons.length; i++) {

    gunMakeButtons[i].addEventListener('click', () => {

        // If you click the already selected make, deselect it

        selectedGunMakeIndex = i === selectedGunMakeIndex ? -1 : i;
        selectedGunTypeIndex = -1;

        // Update card displaying make information

        updateMakeInformationCard();

        // Disable masterwork button as gun type needs to be chosen

        document.getElementById('select-masterworks-button').disabled = true;

        // Update price display

        updatePrice(0);

        // Update basic name

        updateGunName();

        // Colour selected gun make green

        for (let j = 0; j < gunMakeButtons.length; j++) {

            const gunMakeButton = gunMakeButtons[j];

            if (j === selectedGunMakeIndex) {

                gunMakeButton.classList.remove('btn-primary');
                gunMakeButton.classList.add('btn-success');

            } else {

                gunMakeButton.classList.remove('btn-success');
                gunMakeButton.classList.add('btn-primary');

            }

        }

        // Enable supported gun types

        for (let j = 0; j < gunTypeButtons.length; j++) {

            const gunTypeButton = gunTypeButtons[j];

            gunTypeButton.classList.remove('btn-success');

            if (isGunMakeSupported(selectedGunMakeIndex, j)) {

                gunTypeButton.disabled = false;
                gunTypeButton.classList.remove('btn-secondary');
                gunTypeButton.classList.add('btn-primary');

            } else {

                gunTypeButton.disabled = true;
                gunTypeButton.classList.remove('btn-primary');
                gunTypeButton.classList.add('btn-secondary');

            }

        }

    });

}

// Add listeners to gun type buttons

for (let i = 0; i < gunTypeButtons.length; i++) {

    gunTypeButtons[i].addEventListener('click', () => {

        selectedGunTypeIndex = selectedGunTypeIndex === i ? -1 : i;

        // Enable select masterworks button

        document.getElementById('select-masterworks-button').disabled = selectedGunTypeIndex === -1;

        // Update basic name

        updateGunName();

        // Animate price display

        updatePrice(selectedGunTypeIndex === -1 ? 0 : gunPrices[i]);

        // Colour selected gun type green

        for (let i = 0; i < gunTypeButtons.length; i++) {

            const gunTypeButton = gunTypeButtons[i];

            if (i === selectedGunTypeIndex) {

                gunTypeButton.classList.remove('btn-primary');
                gunTypeButton.classList.add('btn-success');

            } else {

                gunTypeButton.classList.remove('btn-success');
                gunTypeButton.classList.add('btn-primary');

            }

        }

    });

}

for (let i = 0; i < gunPriceTexts.length; i++) {

    gunPriceTexts[i].innerText = gunPrices[i];

}

resetBasicSelection();
