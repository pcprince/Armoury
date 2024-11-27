/****************************************************************************
 * overview.js
 * openacousticdevices.info
 * November 2024
 *****************************************************************************/

/* global GUN_TYPE_SHOTGUN */
/* global getSelectedGunMakeName, getSelectedGunTypeName, getSelectedGunTypeIndex, getTypeInformation, getCaliberDice */

const overviewCardContainer = document.getElementById('overview-card-container');
const overviewNameText = document.getElementById('overview-name-text');
const overviewCaliberText = document.getElementById('overview-caliber-text');
const overviewRangeText = document.getElementById('overview-range-text');
const overviewMisfireText = document.getElementById('overview-misfire-text');
const overviewCapacityText = document.getElementById('overview-capacity-text');
const overviewDurabilityText = document.getElementById('overview-durability-text');
const overviewWeightText = document.getElementById('overview-weight-text');

const overviewAttackBonusText = document.getElementById('overview-attack-bonus-text');
const overviewDamageText = document.getElementById('overview-damage-text');
const overviewKeywordsText = document.getElementById('overview-keywords-text');

function showOverviewCard () {

    overviewCardContainer.style.display = '';

}

function hideOverviewCard () {

    overviewCardContainer.style.display = 'none';

}

function updateOverviewCard (masterworkSelection) {

    const overviewDetails = getTypeInformation(getSelectedGunTypeIndex());

    // Shotguns are weird

    if (getSelectedGunTypeIndex() === GUN_TYPE_SHOTGUN) {

        const caliberSplit = overviewDetails.caliber.split('(');
        let slugCaliber = parseInt(caliberSplit[0]);
        let shotCaliber = parseInt(caliberSplit[1]);

        const shortRangeSplit = overviewDetails.shortRange.split('(');
        let slugShortRange = parseInt(shortRangeSplit[0]);
        let shotShortRange = parseInt(shortRangeSplit[1]);

        const longRangeSplit = overviewDetails.longRange.split('(');
        let slugLongRange = parseInt(longRangeSplit[0]);
        let shotLongRange = parseInt(longRangeSplit[1]);

        let misfire = parseInt(overviewDetails.misfire);

        let bulletCapacity = parseInt(overviewDetails.bulletCapacity);

        let durability = parseInt(overviewDetails.durability);

        let attackBonus = 1;

        for (let i = 0; i < masterworkSelection.length; i++) {

            switch (masterworkSelection[i].name) {

            case 'Accurate +X':
                attackBonus++;
                break;

            case 'Durable':
                durability *= 2;
                break;

            case 'Extra Range':
                slugShortRange *= 1.25;
                slugShortRange = Math.ceil(slugShortRange / 5) * 5;

                shotShortRange *= 1.25;
                shotShortRange = Math.ceil(shotShortRange / 5) * 5;

                slugLongRange *= 1.25;
                slugLongRange = Math.ceil(slugLongRange / 5) * 5;

                shotLongRange *= 1.25;
                shotLongRange = Math.ceil(shotLongRange / 5) * 5;
                break;

            case 'Enlarged Clip':
                bulletCapacity = Math.ceil(bulletCapacity * 1.5);
                break;

            case 'Higher Caliber':
                slugCaliber++;
                shotCaliber++;
                break;

            case 'Naval Brass':
                misfire = Math.max(1, misfire - 1);
                break;

            }

        }

        // Add values to card

        overviewNameText.innerText = getSelectedGunMakeName() + ' ' + getSelectedGunTypeName();
        overviewCaliberText.innerText = slugCaliber + ' (' + shotCaliber + ')';
        overviewRangeText.innerText = slugShortRange + '/' + slugLongRange + ' (' + shotShortRange + '/' + shotLongRange + ')';
        overviewMisfireText.innerText = misfire;
        overviewCapacityText.innerText = bulletCapacity;
        overviewDurabilityText.innerText = durability;
        overviewWeightText.innerText = overviewDetails.weight;
        overviewKeywordsText.innerText = overviewDetails.keywords;

        overviewAttackBonusText.innerText = '+' + attackBonus;
        overviewDamageText.innerText = getCaliberDice(slugCaliber) + ' (' + getCaliberDice(shotCaliber) + ')';

    } else {

        let caliber = parseInt(overviewDetails.caliber);
        let attackBonus = 1;
        let durability = parseInt(overviewDetails.durability);
        let shortRange = parseInt(overviewDetails.shortRange);
        let longRange = parseInt(overviewDetails.longRange);
        let bulletCapacity = parseInt(overviewDetails.bulletCapacity);
        let misfire = parseInt(overviewDetails.misfire);

        for (let i = 0; i < masterworkSelection.length; i++) {

            switch (masterworkSelection[i].name) {

            case 'Accurate +X':
                attackBonus++;
                break;

            case 'Durable':
                durability *= 2;
                break;

            case 'Extra Range':
                shortRange *= 1.25;
                shortRange = Math.ceil(shortRange / 5) * 5;

                longRange *= 1.25;
                longRange = Math.ceil(longRange / 5) * 5;
                break;

            case 'Enlarged Clip':
                bulletCapacity = Math.ceil(bulletCapacity * 1.5);
                break;

            case 'Higher Caliber':
                caliber++;
                break;

            case 'Naval Brass':
                misfire = Math.max(1, misfire - 1);
                break;

            }

        }

        // Add values to card

        overviewNameText.innerText = getSelectedGunMakeName() + ' ' + getSelectedGunTypeName();
        overviewCaliberText.innerText = caliber;
        overviewRangeText.innerText = shortRange + '/' + longRange;
        overviewMisfireText.innerText = misfire;
        overviewCapacityText.innerText = bulletCapacity;
        overviewDurabilityText.innerText = durability;
        overviewWeightText.innerText = overviewDetails.weight;
        overviewKeywordsText.innerText = overviewDetails.keywords;

        overviewAttackBonusText.innerText = '+' + attackBonus;
        overviewDamageText.innerText = getCaliberDice(caliber);

    }

}
