/****************************************************************************
 * index.js
 * November 2024
 *****************************************************************************/

/* global disableNameInput, resetBasicSelection, resetMasterworkSelection, hideOverviewCard, generateRandomGun, displayMasterworkUI, pickRandomMasterworks, getRandomInt, setName */
/* global basicSelectionDiv, masterworkSelectionDiv */

const resetButton = document.getElementById('reset-button');
const randomButton = document.getElementById('random-button');

const randomMasterworkCountSelect = document.getElementById('random-masterwork-count-select');

// TODO: Exporting to Foundry JSON

const genericAdjectives = [
    'Ol\'', 'Rusty', 'Shadowed', 'Greedy', 'Fiery', 'Lone', 'Savage', 'Silent', 'Steely', 'Grizzled', 'Midnight', 'Roaring', 'Wicked', 'Fearless', 'Raging', 'Shattered', 'Relentless', 'Vengeful', 'Cold', 'Thunderous', 'Deadly', 'Ghostly', 'Dusty', 'Grim', 'Blazing', 'Brazen', 'Bigoted', 'Moist', 'Spurious', 'Degenerate', 'Filthy', 'Friendly', 'Harmonious', 'Fearful', 'Noisy', 'Gunpowder', 'Illegal', 'Legal', 'Greasy', 'Demonic',
    'Brave', 'Mysterious', 'Tall', 'Shiny', 'Delicate', 'Gloomy', 'Sparse', 'Curious', 'Silent', 'Bold', 'Gentle', 'Friendly', 'Colorful', 'Sparkling', 'Cheerful', 'Loyal', 'Unpredictable', 'Eager', 'Fierce', 'Awkward', 'Warm', 'Intelligent', 'Fluffy', 'Quiet', 'Unusual', 'Serene', 'Harsh', 'Sturdy', 'Flawless', 'Adventurous', 'Spicy', 'Magical', 'Graceful', 'Mellow', 'Musical', 'Brilliant', 'Weird', 'Invisible', 'Vast', 'Sour', 'Playful', 'Chaotic', 'Deep', 'Smooth', 'Confident', 'Wild',
    'Silver', 'Crimson', 'Blackened', 'Blue', 'Red', 'Green', 'Yellow', 'Purple', 'Orange', 'Pink', 'Bronze',
    'Marshall Lager\'s', 'Rev Runner\'s', 'Daniel Forsyth\'s', 'Blood Daniel\'s', 'Zhao\'s', 'Devil\'s'
];

const genericNouns = [
    'Viper', 'Colt', 'Thunder', 'Reaper', 'Stallion', 'Widow', 'Bounty',
    'Ranger', 'Outlaw', 'Bandit', 'Specter', 'Maverick', 'Coyote', 'Deputy',
    'Venom', 'Justice', 'Whisper', 'Sheriff', 'Desperado', 'Widowmaker',
    'Gambler', 'Phantom', 'Trail', 'Devil', 'Lawman', 'Hawk', 'Rattler',
    'Mustang', 'Scorpion', 'Legend', 'Gun', 'Lance', 'Weapon', 'Aggressor',
    'Firearm', 'Sidearm', 'Piece', 'Iron', 'Heater', 'Cannon', 'Gat', 'Blaster',
    'Shooter', 'Peacemaker', 'Bangstick', 'Rod', 'Strap', 'Heat', 'Hardware',
    'Machine', 'Popper', 'Equalizer', 'Smoke wagon', 'Chopper', 'Boomstick', 'Trigger',
    'Terror', 'Big-Hitter', 'Death-Dealer', 'Bible', 'Rattlesnake', 'Broomhandle', '88',
    'Friend', 'Buddy', 'Companion', 'Brother', 'Sister', 'Partner',
    'Monk', 'Priest', 'Librarian', 'Bankrobber', 'Cowboy', 'Cattle Rustler',
    'Goose', 'Duck', 'Eagle', 'Owl', 'Robin', 'Ibis', 'Grackle', 'Raven', 'Crow', 'Gull', 'Falcon', 'Pelican', 'Canary', 'Kingfisher', 'Flamingo', 'Kestrel', 'Swallow', 'Condor', 'Landshark'
];

const makeNameComponents = [
    [['Cheap', 'Moon Peak', 'Government Issued', 'Official', 'Military', 'Standard Issue', 'Captain\'s', 'Cap\'n\'s', 'Crusader\'s'], ['Soldier', 'Grunt', 'Private', 'Captain', 'Defender', 'Bastion']], // Ashforge
    [['Gnomexican', 'Gnomish', 'Meticulous', 'Clockwork', 'Varied', 'Flexible'], ['Gnome', 'Timepiece', 'Tick-Tock', 'Cog']], // Gaxit
    [['Reliable', 'Sturdy', 'Dependable', 'Sound', 'Stalwart', 'Trusty'], ['Reliable', 'Backbone', 'Rock']], // Holdinger
    [['Repeating', 'Loaded', 'Athean', 'Reloading', 'Never-ending'], ['Barrage', 'Avalanche', 'Floodgate', 'Deluge', 'Maelstrom']], // Leander-Sherridan
    [['Precise', 'Careful', 'Exact', 'Exacting', 'Pinpoint', 'Clear-cut'], ['Second Try', 'Rebound', 'Lifeline', 'Replay', 'Rerun', 'Safety Net']], // Irvine
    [['Elegant', 'Crafted', 'Light', 'Lightweight', 'Featherweight', 'Twinned', 'Paired', 'Elven', 'Double'], ['Twin', 'Duo', 'Sidekick', 'Pair']], // Quicksilver
    [['All-range', 'Close-quarters', 'Point Blank', 'Close', 'Close Quarter'], ['Sword', 'Blade', 'Shiv', 'Stabber']], // Kammaren
    [['Golden', 'Impressive', 'Regal', 'Kingly', 'Princely', 'Majestic', 'Grand', 'Noble', 'The High'], ['Scepter', 'Monarch', 'King', 'Queen', 'Prince', 'Princess', 'Duke', 'Duchess', 'Baron', 'Baronness']], // Valenzio
    [['Hidden', 'Hiding', 'Trench', 'Underground', 'Subterranean', 'Sneaky', 'Fortifying', 'Fortified', 'Defensive'], ['Unifier', 'Protector']], // Bursat
    [['Powerful', 'Siege', 'Heavy', 'Massive', 'Big', 'Large', 'Extra Large', 'Sizeable', 'Chunky'], ['Cannon', 'Artillery', 'Trebuchet', 'Ballista', 'Onager', 'Sambuca']], // Faljuqman
    [['Cursed', 'Reckless', 'Spiteful', 'Viscious', 'Accursed', 'Hexed', 'Black', 'Evil', 'Monstrous', 'Necrotic', 'Blighted', 'Baneful'], ['Stinger', 'Blight', 'Scourge', 'Bane', 'Menace', 'Plague', 'Burden']], // Valmoran
    [['Multi', 'Combination', 'Combined', 'Integrated', 'Mingled', 'Joined', 'Blended'], ['Amalgam', 'Unison', 'Alloy', 'Compound', 'Blend', 'Partnership']], // Carron
    [['Weird', 'Cobbled together', 'Engineered', 'Pioneering', 'Cutting-edge', 'Revolutionary', 'Trailblazing', 'Complicated', 'Alchemical'], ['Device', 'Machine', 'Invention', 'Revolution', 'Trailblazer', 'Potion', 'Poison']], // Tesiphon
    [['Duelling', 'Gentleman\'s', 'Slim', 'Sleek', 'Ornate', 'Refined', 'Nobel\'s', 'Nobel', 'Just', 'Honourable'], ['Dueller', 'Duel', 'Challenger', 'Gambit', 'Verdict', 'Contender']], // Olympia
    [['Bespoke', 'Custom', 'Quickdraw', 'Kicking', 'Unique', 'Personal', 'Swift'], ['Combo', 'Quickdraw', 'Kicker', 'Flash', 'Instinct', 'Swiftshot']], // Salcorin Bespoke
    [['Ironclad', 'Risky', 'Lucky', 'Foolish', 'Unfortunate', 'Lady Luck\'s', 'Big Game'], ['Dragon', 'Claw', 'Tooth', 'Dice', 'Mishap', 'Mistake', 'Gambler']] // Ironcoil
];

function generateRandomName (makeIndex) {

    const makeComponents = makeNameComponents[makeIndex];
    const makeAdjectives = makeComponents[0];
    const makeNouns = makeComponents[1];

    const adjectives = [...genericAdjectives, ...makeAdjectives];
    const nouns = [...genericNouns, ...makeNouns];

    const adjective = adjectives[getRandomInt(adjectives.length)];
    const noun = nouns[getRandomInt(nouns.length)];

    return Math.random() <= 0.25 ? 'The ' + adjective + ' ' + noun : adjective + ' ' + noun;

}

resetButton.addEventListener('click', () => {

    resetBasicSelection();
    resetMasterworkSelection();

    disableNameInput();
    hideOverviewCard();
    basicSelectionDiv.style.display = '';
    masterworkSelectionDiv.style.display = 'none';

});

randomButton.addEventListener('click', () => {

    resetBasicSelection();
    resetMasterworkSelection();

    const randomGun = generateRandomGun();

    displayMasterworkUI();

    const name = generateRandomName(randomGun.make);
    setName(name);

    pickRandomMasterworks(parseInt(randomMasterworkCountSelect.value));

});
