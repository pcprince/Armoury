/****************************************************************************
 * overview.js
 * openacousticdevices.info
 * November 2024
 *****************************************************************************/

/* global GUN_TYPE_SHOTGUN */
/* global getSelectedGunMakeName, getSelectedGunTypeName, getSelectedGunTypeIndex, getTypeInformation, getCaliberDice, getCurrentPrice */

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

function scaleRange (range) {

    range *= 1.25;
    return Math.ceil(range / 5) * 5;

}

function getCurrentKeywords () {

    return overviewKeywordsText.innerText.split(', ');

}

function updateOverviewCard (masterworkSelection) {

    const overviewDetails = getTypeInformation(getSelectedGunTypeIndex());

    let misfire = parseInt(overviewDetails.misfire);
    let bulletCapacity = parseInt(overviewDetails.bulletCapacity);
    let durability = parseInt(overviewDetails.durability);
    let keywordList = overviewDetails.keywords.split(', ');
    let attackBonus = 1;
    let damageBonus = 0;

    // Shotguns have 2 values for caliber and range

    let caliber = parseInt(overviewDetails.caliber);
    let shortRange = parseInt(overviewDetails.shortRange);
    let longRange = parseInt(overviewDetails.longRange);

    let caliberSplit, slugCaliber, shotCaliber;
    let shortRangeSplit, slugShortRange, shotShortRange;
    let longRangeSplit, slugLongRange, shotLongRange;

    if (getSelectedGunTypeIndex() === GUN_TYPE_SHOTGUN) {

        caliberSplit = overviewDetails.caliber.split('(');
        slugCaliber = parseInt(caliberSplit[0]);
        shotCaliber = parseInt(caliberSplit[1]);

        shortRangeSplit = overviewDetails.shortRange.split('(');
        slugShortRange = parseInt(shortRangeSplit[0]);
        shotShortRange = parseInt(shortRangeSplit[1]);

        longRangeSplit = overviewDetails.longRange.split('(');
        slugLongRange = parseInt(longRangeSplit[0]);
        shotLongRange = parseInt(longRangeSplit[1]);

    }

    // Needed for Gilded Lily

    const currentValue = getCurrentPrice();

    for (let i = 0; i < masterworkSelection.length; i++) {

        switch (masterworkSelection[i].name) {

        case 'Accurate +X':
            attackBonus++;
            break;

        case 'Durable':
            durability *= 2;
            break;

        case 'Extra Range':

            if (getSelectedGunTypeIndex() === GUN_TYPE_SHOTGUN) {

                slugShortRange = scaleRange(slugShortRange);
                shotShortRange = scaleRange(shotShortRange);
                slugLongRange = scaleRange(slugLongRange);
                shotLongRange = scaleRange(shotLongRange);

            } else {

                shortRange = scaleRange(shortRange);
                longRange = scaleRange(longRange);

            }

            break;

        case 'Enlarged Clip':
            bulletCapacity = Math.ceil(bulletCapacity * 1.5);
            break;

        case 'Higher Caliber':

            if (getSelectedGunTypeIndex() === GUN_TYPE_SHOTGUN) {

                slugCaliber++;
                shotCaliber++;

            } else {

                caliber++;

            }

            break;

        case 'Naval Brass':
            misfire = Math.max(1, misfire - 1);
            break;

        case 'Overcompensating':

            if (getSelectedGunTypeIndex() === GUN_TYPE_SHOTGUN) {

                slugCaliber = Math.max(1, slugCaliber - 1);
                shotCaliber = Math.max(1, shotCaliber - 1);

            } else {

                caliber = Math.max(1, caliber - 1);

            }

            break;

        case 'Gilded Lily':
            damageBonus = Math.floor(currentValue / 2000);
            break;

        case 'Steady':
            keywordList.push('Steady');
            break;

        case 'Etrugol Brass':
            keywordList.push('Bulky');
            break;

        case 'Travelling Arsenal':
            keywordList = keywordList.filter(k => k !== 'Light');
            break;

        case 'Shortened Frame':
            keywordList = keywordList.filter(k => k !== '2-handed');
            break;

        }

    }

    if (getSelectedGunTypeIndex() === GUN_TYPE_SHOTGUN) {

        overviewCaliberText.innerText = slugCaliber + ' (' + shotCaliber + ')';
        overviewRangeText.innerText = slugShortRange + '/' + slugLongRange + ' (' + shotShortRange + '/' + shotLongRange + ')';
        overviewDamageText.innerText = getCaliberDice(slugCaliber) + ' (' + getCaliberDice(shotCaliber) + ')';

    } else {

        overviewCaliberText.innerText = caliber;
        overviewRangeText.innerText = shortRange + '/' + longRange;
        overviewDamageText.innerText = getCaliberDice(caliber);

    }

    // Add values to card which are same between shotgun and others

    if (damageBonus > 0) {

        overviewDamageText.innerText += ' + ' + damageBonus;

    } else if (damageBonus < 0) {

        damageBonus *= -1;
        overviewDamageText.innerText += ' - ' + damageBonus;

    }

    overviewNameText.innerText = getSelectedGunMakeName() + ' ' + getSelectedGunTypeName();
    overviewMisfireText.innerText = misfire;
    overviewCapacityText.innerText = bulletCapacity;
    overviewDurabilityText.innerText = durability;
    overviewWeightText.innerText = overviewDetails.weight;
    overviewKeywordsText.innerText = keywordList.join(', ');

    overviewAttackBonusText.innerText = '+' + attackBonus;

}
