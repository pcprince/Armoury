/****************************************************************************
 * overview.js
 * openacousticdevices.info
 * November 2024
 *****************************************************************************/

/* global GUN_TYPE_SHOTGUN */
/* global getSelectedGunMakeName, getSelectedGunTypeName, getSelectedGunTypeIndex, getTypeInformation, getCaliberDiceString, getCurrentPrice */
/* global getMasterworkSelection, getName */

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

function addRow (descriptionText, label, value) {

    return descriptionText + '<tr><td data-colwidth=\"100\">' + label + '</td><td data-colwidth=\"100\">' + value + '</td></tr>';

}

function getDescriptionText () {

    const masterworkSelection = getMasterworkSelection();
    const overviewInformation = getOverview();

    let descriptionText = '<p><strong>' + getSelectedGunMakeName() + ' ' + getSelectedGunTypeName() + '</strong></p>';

    descriptionText += '<table><tbody>';

    descriptionText = addRow(descriptionText, 'Range', overviewInformation.shortRange + '/' + overviewInformation.longRange + ' ft');
    descriptionText = addRow(descriptionText, 'Capacity', overviewInformation.bulletCapacity);
    descriptionText = addRow(descriptionText, 'Caliber', overviewInformation.caliber);

    descriptionText = addRow(descriptionText, 'Critical range', overviewInformation.critical < 20 ? overviewInformation.critical + '-20' : '20');

    descriptionText = addRow(descriptionText, 'Misfire', overviewInformation.misfire === 1 ? '1' : '1-' + overviewInformation.misfire);

    descriptionText += '</tbody></table>';

    descriptionText += '<p><em>Keywords: ' + overviewInformation.keywordList.join(', ') + '</em></p>';

    if (masterworkSelection.length > 0) {

        descriptionText += '<p></p>';
        descriptionText += '<p><strong>Masterworks:</strong></p>';

        for (let i = 0; i < masterworkSelection.length; i++) {

            descriptionText += '<p><i>' + masterworkSelection[i].name + '</i></p>';
            descriptionText += '<p>' + masterworkSelection[i].description + '</p>';

        }

    }

    return descriptionText;

}

function getOverview () {

    const typeInformation = getTypeInformation(getSelectedGunTypeIndex());

    let misfire = parseInt(typeInformation.misfire);
    let critical = 20;
    let bulletCapacity = parseInt(typeInformation.bulletCapacity);
    let durability = parseInt(typeInformation.durability);
    let keywordList = typeInformation.keywords.split(', ');
    let attackBonus = 1;
    let damageBonus = 0;

    // Shotguns have 2 values for caliber and range

    let caliber = parseInt(typeInformation.caliber);
    let shortRange = parseInt(typeInformation.shortRange);
    let longRange = parseInt(typeInformation.longRange);

    let caliberSplit, slugCaliber, shotCaliber;
    let shortRangeSplit, slugShortRange, shotShortRange;
    let longRangeSplit, slugLongRange, shotLongRange;

    if (getSelectedGunTypeIndex() === GUN_TYPE_SHOTGUN) {

        caliberSplit = typeInformation.caliber.split('(');
        slugCaliber = parseInt(caliberSplit[0]);
        shotCaliber = parseInt(caliberSplit[1]);

        shortRangeSplit = typeInformation.shortRange.split('(');
        slugShortRange = parseInt(shortRangeSplit[0]);
        shotShortRange = parseInt(shortRangeSplit[1]);

        longRangeSplit = typeInformation.longRange.split('(');
        slugLongRange = parseInt(longRangeSplit[0]);
        shotLongRange = parseInt(longRangeSplit[1]);

    }

    const masterworkSelection = getMasterworkSelection();

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

        case 'Fatal Forecast':
            critical = 19;
            break;

        }

    }

    return {
        name: getName(),
        misfire,
        critical,
        bulletCapacity,
        durability,
        keywordList,
        attackBonus,
        damageBonus,
        weight: typeInformation.weight,
        gunMake: getSelectedGunMakeName(),
        gunType: getSelectedGunTypeName(),
        caliber,
        shortRange,
        longRange,
        slugCaliber,
        shotCaliber,
        slugShortRange,
        slugLongRange,
        shotShortRange,
        shotLongRange
    };

}

function updateOverviewCard () {

    const overviewDetails = getOverview();

    if (getSelectedGunTypeIndex() === GUN_TYPE_SHOTGUN) {

        overviewCaliberText.innerText = overviewDetails.slugCaliber + ' (' + overviewDetails.shotCaliber + ')';
        overviewRangeText.innerText = overviewDetails.slugShortRange + '/' + overviewDetails.slugLongRange + ' (' + overviewDetails.shotShortRange + '/' + overviewDetails.shotLongRange + ')';
        overviewDamageText.innerText = getCaliberDiceString(overviewDetails.slugCaliber) + ' (' + getCaliberDiceString(overviewDetails.shotCaliber) + ')';

    } else {

        overviewCaliberText.innerText = overviewDetails.caliber;
        overviewRangeText.innerText = overviewDetails.shortRange + '/' + overviewDetails.longRange;
        overviewDamageText.innerText = getCaliberDiceString(overviewDetails.caliber);

    }

    // Add values to card which are same between shotgun and others

    if (overviewDetails.damageBonus > 0) {

        overviewDamageText.innerText += ' + ' + overviewDetails.damageBonus;

    } else if (overviewDetails.damageBonus < 0) {

        let damageBonus = overviewDetails.damageBonus;
        damageBonus *= -1;
        overviewDamageText.innerText += ' - ' + damageBonus;

    }

    overviewNameText.innerText = overviewDetails.gunMake + ' ' + overviewDetails.gunType;
    overviewMisfireText.innerText = overviewDetails.misfire;
    overviewCapacityText.innerText = overviewDetails.bulletCapacity;
    overviewDurabilityText.innerText = overviewDetails.durability;
    overviewWeightText.innerText = overviewDetails.weight;
    overviewKeywordsText.innerText = overviewDetails.keywordList.join(', ');

    overviewAttackBonusText.innerText = '+' + overviewDetails.attackBonus;

}
