/****************************************************************************
 * masterworks.js
 * November 2024
 *****************************************************************************/

const masterworks = [
    {
        'name': 'Accurate +X',
        'description': 'Confers +X to hit, this can be taken up to 5 times. All guns start with Accurate +1.',
        'kicker': '',
        'maker': 'General',
        'complexity': 'Basic'
    },
    {
        'name': 'Durable',
        'description': 'Doubles the Durability. Damaged and broken thresholds remain the same.',
        'kicker': '',
        'maker': 'General',
        'complexity': 'Basic'
    },
    {
        'name': 'Easy Clear',
        'description': 'The Misfire Clear action can be made in place of a ranged weapon attack and are made with advantage',
        'kicker': '',
        'maker': 'General',
        'complexity': 'Basic'
    },
    {
        'name': 'Extra Range',
        'description': 'Increase range by 25% (round up to nearest 5-foot)',
        'kicker': '',
        'maker': 'General',
        'complexity': 'Basic'
    },
    {
        'name': 'Enlarged Clip',
        'description': 'Increase Bullet Capacity by 50% (round up)',
        'kicker': '',
        'maker': 'General',
        'complexity': 'Basic'
    },
    {
        'name': 'Higher Caliber',
        'description': 'Increase the Caliber used by 1',
        'kicker': '',
        'maker': 'General',
        'complexity': 'Basic'
    },
    {
        'name': 'Specialisation +X',
        'description': 'Increase the DCs of all other Traits on this weapon and bullets fired from this weapon by X, this can be taken up to 3 times.',
        'kicker': '',
        'maker': 'General',
        'complexity': 'Basic'
    },
    {
        'name': 'Cheaper Customisation',
        'description': 'Additional masterwork traits taken after this one are made at 50% off the cost. This one does not count as a masterwork trait for the purposes of calculating the incremental masterwork cost or reaching Prestige trait requirements.',
        'kicker': '',
        'maker': 'Ashforge',
        'complexity': 'Basic'
    },
    {
        'name': 'Modest Profile',
        'description': 'When you take the attack action while in cover reduce the amount of Exposure gained by 2.',
        'kicker': '',
        'maker': 'Ashforge',
        'complexity': 'Basic'
    },
    {
        'name': 'Volley Fire',
        'description': 'Increase the damage this weapon inflicts by 3 for each ally who has fired a Volley Fire weapon this round.',
        'kicker': '',
        'maker': 'Ashforge',
        'complexity': 'Basic'
    },
    {
        'name': "Soldier's Companion",
        'description': 'Once per long rest, if an attack would reduce your hitpoints to 0 while you are holding this weapon. Instead your hitpoints are reduced to 1 this weapon takes 1d4+1 damage.',
        'kicker': '',
        'maker': 'Ashforge',
        'complexity': 'Basic'
    },
    {
        'name': 'Old Friend',
        'description': 'While you are holding this weapon saving throws made to resist fear effects are made with advantage.',
        'kicker': '',
        'maker': 'Ashforge',
        'complexity': 'Basic'
    },
    {
        'name': 'Vigilant Watchman',
        'description': 'If you would be Surprised, you can draw this weapon as a free action to negate the condition and gain +2 initiative.',
        'kicker': '',
        'maker': 'Ashforge',
        'complexity': 'Basic'
    },
    {
        'name': 'Standardised Parts',
        'description': 'You can take one Masterwork Trait from a different Make for double the cost. It also counts as two masterwork traits when determining the cost of future traits.',
        'kicker': '',
        'maker': 'Ashforge',
        'complexity': 'Basic'
    },
    {
        'name': 'Ratchet Roulette',
        'description': 'As long as each bullet fired from this weapon is of a different type, gain 2 additional damage for every previous attack made with this weapon.',
        'kicker': '',
        'maker': 'Gaxit',
        'complexity': 'Basic'
    },
    {
        'name': 'Amalgam Mechanism',
        'description': "As part of an attack made using this weapon and firing a special bullet, you can expend an additional loaded bullet to apply its effect to the attack. Only the first bullet's caliber damage should be applied.",
        'kicker': '',
        'maker': 'Gaxit',
        'complexity': 'Basic'
    },
    {
        'name': 'Clock Strikes One',
        'description': 'While no two bullets loaded into this weapon are the same type you gain: Once per round, when you make an attack with this weapon you can choose to use the upgraded effect of a bullet fired.',
        'kicker': '',
        'maker': 'Gaxit',
        'complexity': 'Basic'
    },
    {
        'name': 'Caliber Countdown',
        'description': 'You can load lower Caliber rounds into this weapon. So long as successive bullets fired from this weapon have been of decreasing caliber when you hit with a bullet of caliber 1, deal additional piercing damage per the Scaling Damage Table.',
        'kicker': '',
        'maker': 'Gaxit',
        'complexity': 'Basic'
    },
    {
        'name': 'Spinning Block Chambering',
        'description': 'You can load one bullet into this weapon as a bonus action',
        'kicker': '',
        'maker': 'Gaxit',
        'complexity': 'Basic'
    },
    {
        'name': 'Spring Loaded Cylinder',
        'description': 'As part of an initiative check, you may exchange up to half of the bullets loaded in this weapon with others on your person',
        'kicker': '',
        'maker': 'Gaxit',
        'complexity': 'Basic'
    },
    {
        'name': 'Helical Torsion Alarm',
        'description': 'At the start of combat note the number of bullets this weapon is loaded with. Upon reaching the round matching that number all bullets loaded into this weapon from the start of combat can be fired using their upgraded effect.',
        'kicker': '',
        'maker': 'Gaxit',
        'complexity': 'Basic'
    },
    {
        'name': '*Click*',
        'description': 'Once per turn, when you miss with an attack using this weapon you can choose not to expend the ammunition.',
        'kicker': '',
        'maker': 'Holdinger',
        'complexity': 'Basic'
    },
    {
        'name': 'Loaded Dice',
        'description': 'Instead of rolling damage you can choose to take the average of each dice rounded down on attacks with this weapon',
        'kicker': '',
        'maker': 'Holdinger',
        'complexity': 'Basic'
    },
    {
        'name': 'Mulligan',
        'description': 'Three times per short rest you can reroll a missed attack with this weapon',
        'kicker': '',
        'maker': 'Holdinger',
        'complexity': 'Basic'
    },
    {
        'name': 'Work it Out',
        'description': 'This weapon will automatically repair a misfire at the end of the round it misfired.',
        'kicker': '',
        'maker': 'Holdinger',
        'complexity': 'Basic'
    },
    {
        'name': 'Steady',
        'description': 'Give the weapon Steady.',
        'kicker': '',
        'maker': 'Holdinger',
        'complexity': 'Basic'
    },
    {
        'name': 'From Strength to Strength',
        'description': 'If your last 3 attacks have hit, instantly reload this weapon.',
        'kicker': '',
        'maker': 'Holdinger',
        'complexity': 'Basic'
    },
    {
        'name': 'Last Resort',
        'description': 'If this weapon is drawn to replace a firearm without any ammunition in it, the creature hit by the first attack made with this weapon is vulnerable to the damage dealt.',
        'kicker': '',
        'maker': 'Holdinger',
        'complexity': 'Basic'
    },
    {
        'name': 'Double Tap',
        'description': 'When you make an attack roll, you can choose to increase the misfire chance on this weapon by +3 (for the purposes of these attacks) and make another attack against the same target.',
        'kicker': '',
        'maker': 'Leander-Sherriden',
        'complexity': 'Basic'
    },
    {
        'name': 'Spring to Action',
        'description': 'As part of an initiative check, you can also use the result of the roll for an attack as a free action against an enemy in range of this weapon (If your hands are free you can draw this weapon as part of this action). This attack has a +1 bonus to hit for each enemy you can see.',
        'kicker': '',
        'maker': 'Leander-Sherriden',
        'complexity': 'Basic'
    },
    {
        'name': 'Am I Feeling Lucky?',
        'description': 'Once per round, after the last shot is fired from the magazine of this weapon, declare a number between 1 and 6. Then roll a d6, if the number rolled is greater than or equal to the declared number instantly reload your gun with the declared number of bullets.',
        'kicker': '',
        'maker': 'Leander-Sherriden',
        'complexity': 'Basic'
    },
    {
        'name': 'Sweep the Room',
        'description': 'As an attack action resolve an attack against every enemy within range and line of sight, all attack rolls made as part of this action are made with a -2 penalty to hit and expend ammunition as normal.',
        'kicker': '',
        'maker': 'Leander-Sherriden',
        'complexity': 'Basic'
    },
    {
        'name': 'Hail of Bullets',
        'description': "As an attack action you can declare a cone originating in your square, with range equal to this weapon's short range. Consume all bullets in this weapon and roll the caliber damage dice for each consumed in this way. Every creature in the cone must make a DC 15 Dexterity saving throw or take the resulting damage divided by 10. On a success they instead take half damage.",
        'kicker': '',
        'maker': 'Leander-Sherriden',
        'complexity': 'Basic'
    },
    {
        'name': 'Up the Tempo',
        'description': 'At the start of your turn, you can choose to apply a -1 modifer to attack rolls using this weapon. After each attack improve the modifer by +2. This modifer is lost at the start of your next turn.',
        'kicker': '',
        'maker': 'Leander-Sherriden',
        'complexity': 'Basic'
    },
    {
        'name': 'Follow Along',
        'description': "As an action, enter a readied state. Until the start of your next turn whenever an ally misses a target within range and line of sight you can resolve an immediate attack against that target. You can use this action only if you haven't moved during this turn, and after you use the action, your speed is 0 until the end of the current turn.",
        'kicker': '',
        'maker': 'Leander-Sherriden',
        'complexity': 'Basic'
    },
    {
        'name': 'Raking Fire',
        'description': 'While attacking an enemy that is not benefiting from cover against you, this weapon deals +2 bonus damage.',
        'kicker': '',
        'maker': 'Irvine',
        'complexity': 'Basic'
    },
    {
        'name': 'Broadside',
        'description': 'While attacking an enemy within 1/4 of this weapons short range, this weapon deals +2 bonus damage.',
        'kicker': '',
        'maker': 'Irvine',
        'complexity': 'Basic'
    },
    {
        'name': 'Plunging Fire',
        'description': 'While attacking an enemy, if you are on higher ground or otherwise above them, this weapon deals +2 bonus damage.',
        'kicker': '',
        'maker': 'Irvine',
        'complexity': 'Basic'
    },
    {
        'name': 'Careening',
        'description': 'If when you make an attack with this weapon you are at least 30ft away from where you started this turn or are in a moving vehicle, this weapon deals +2 bonus damage.',
        'kicker': '',
        'maker': 'Irvine',
        'complexity': 'Basic'
    },
    {
        'name': 'Line of Battle',
        'description': 'If at the start of your turn all enemies are in cover against you, this weapon gains Hipfire until the start of your next turn.',
        'kicker': '',
        'maker': 'Irvine',
        'complexity': 'Basic'
    },
    {
        'name': 'Naval Brass',
        'description': 'Reduce the misfire value of this weapon by 1 (To a minimum of 1).',
        'kicker': '',
        'maker': 'Irvine',
        'complexity': 'Basic'
    },
    {
        'name': 'Salty',
        'description': 'All bullets fired from this weapon are considered to be Salt and Harpoon bullets (as well as any other types they might be).',
        'kicker': '',
        'maker': 'Irvine',
        'complexity': 'Basic'
    },
    {
        'name': 'Nimble Workings',
        'description': 'When you take an attack using this gun as part of a bonus action, you can make an additional attack.',
        'kicker': '',
        'maker': 'Quicksilver',
        'complexity': 'Basic'
    },
    {
        'name': 'Hair Trigger',
        'description': 'You gain an extra reaction each round that can only be used to activate Hipfire. (This effect can stack for each weapon with this trait you have equipped)',
        'kicker': '',
        'maker': 'Quicksilver',
        'complexity': 'Basic'
    },
    {
        'name': 'Custom Rifling',
        'description': 'After you attack an enemy, reduce their AC by 2 until the start of your next turn. This ability cannot stack with itself.',
        'kicker': '',
        'maker': 'Quicksilver',
        'complexity': 'Basic'
    },
    {
        'name': 'Filigree Sights',
        'description': 'The Hipfire reaction can be used against enemies when they make an attack against an ally while within 1/2 of this weapons short range. Resolve this reaction before the triggering attack resolves, if the Hipfire attacks hits the triggereing attack is made with disadvantage. Additionally If they are reduced to 0 hitpoints by the Hipfire attack the triggering attack does not resolve.',
        'kicker': '',
        'maker': 'Quicksilver',
        'complexity': 'Basic'
    },
    {
        'name': 'Swift Hammer',
        'description': 'After you hit an enemy with an attack, you can force them to move 5ft in any direction. You can only use this ability once per creature per turn.',
        'kicker': '',
        'maker': 'Quicksilver',
        'complexity': 'Basic'
    },
    {
        'name': 'Roaring Barrel',
        'description': 'After an attack roll is made you can choose to miss. When you miss an attack against an enemy, apply a -2 penalty to their to hit chance until the start of your next turn. This ability cannot stack with itself.',
        'kicker': '',
        'maker': 'Quicksilver',
        'complexity': 'Basic'
    },
    {
        'name': 'Reflex Grip',
        'description': 'If this weapon is used to make a bonus action attack while Two-weapon fighting, on hit you mark the target. The next ally to make an attack against that target gains 1d6 bonus damage to all attacks made against that target during their turn. The mark lasts until used or the start of your next turn.',
        'kicker': '',
        'maker': 'Quicksilver',
        'complexity': 'Basic'
    },
    {
        'name': 'Interference',
        'description': 'While an enemy armed with a gun is within reach of a melee attack using this weapon, they cannot make ranged attacks.',
        'kicker': '',
        'maker': 'Kammaren',
        'complexity': 'Basic'
    },
    {
        'name': 'Butt In',
        'description': 'As a reaction to an enemy within reach of a melee attack using this weapon making a successful attack roll against an ally, you can resolve the damage as if you were the target and then make a melee weapon attack using this weapon. This attack always deals bludgeoning damage.',
        'kicker': '',
        'maker': 'Kammaren',
        'complexity': 'Basic'
    },
    {
        'name': 'Impaling Charge',
        'description': 'This trait can only be taken if the melee weapon damage for this gun is piercing. If you move 20ft before making a melee attack with this weapon gain advantage on your first melee attack and if the attack is successful the enemy is grappled.',
        'kicker': '',
        'maker': 'Kammaren',
        'complexity': 'Basic'
    },
    {
        'name': 'Razor-Sharp',
        'description': 'This trait can only be taken if the melee weapon damage for this gun is slashing. Once per round, after you hit an enemy with this weapon in melee they must make a DC 16 Constitution saving throw or take an additional 2d4 damage at the end of each round for 1 minute. The target can make a save at the end of each turn to stop bleeding. If the target is bleeding when you apply the effect instead do an additional 1d4 damage instantly.',
        'kicker': '',
        'maker': 'Kammaren',
        'complexity': 'Basic'
    },
    {
        'name': 'Longgun',
        'description': 'This trait can only be taken if the weapon has the 2-handed trait. When you hit with a melee attack using this weapon, you can expend a loaded ammunition to deal an additional 1d6 damage. Additionally this weapon gains reach.',
        'kicker': '',
        'maker': 'Kammaren',
        'complexity': 'Basic'
    },
    {
        'name': 'Bushwhack',
        'description': 'Twice per short rest, when you make a melee attack with this weapon. You can immediately make a free ranged attack with this weapon against the same target expending ammunition as usual.',
        'kicker': '',
        'maker': 'Kammaren',
        'complexity': 'Basic'
    },
    {
        'name': 'Interceptor',
        'description': 'When you make an opportunity attack using this weapon you can attack the provoking creature twice.',
        'kicker': '',
        'maker': 'Kammaren',
        'complexity': 'Basic'
    },
    {
        'name': 'Intimidating Styling',
        'description': 'While you are holding this weapon you gain Advantage on intimidation checks.',
        'kicker': '',
        'maker': 'Valenzio',
        'complexity': 'Basic'
    },
    {
        'name': 'Reminder of Mortality',
        'description': 'When a creature is critically hit by an attack with this weapon they are frightened of you for 1d4 rounds.',
        'kicker': '',
        'maker': 'Valenzio',
        'complexity': 'Basic'
    },
    {
        'name': 'Backed by Firepower',
        'description': 'While this weapon is visibly in your posession you gain Advantage on diplomacy checks when attempting to request aid from another creature.',
        'kicker': '',
        'maker': 'Valenzio',
        'complexity': 'Basic'
    },
    {
        'name': 'Startling Shot',
        'description': 'As a bonus action once per short rest, expend a bullet to give all friendly creatures within 60ft Advantage on their next Intelligence, Wisdom or Charisma saving throw.',
        'kicker': '',
        'maker': 'Valenzio',
        'complexity': 'Basic'
    },
    {
        'name': 'Everybody Down!',
        'description': 'As a bonus action once per short rest, expend a bullet. Each creature within a 90ft cone originating in your square must make a DC15 Charisma saving throw or fall prone.',
        'kicker': '',
        'maker': 'Valenzio',
        'complexity': 'Basic'
    },
    {
        'name': 'Overcompensating',
        'description': 'Reduce the caliber of this weapon by 1. While holding this weapon any attacks made against you using using a firearm of lower caliber are made with disadvantage.',
        'kicker': '',
        'maker': 'Valenzio',
        'complexity': 'Basic'
    },
    {
        'name': 'Gilded Lily',
        'description': 'Divide the value in gold of this weapon by 2000. Gain a bonus to damage equal to that amount (rounded down).',
        'kicker': '',
        'maker': 'Valenzio',
        'complexity': 'Basic'
    },
    {
        'name': "No Man's Land",
        'description': "As an action, if you have not moved this round, declare a 30ft cone origninating from you. Your move speed is reduced to 0. You can resolve an attack against any enemy that starts it's next turn in the cone and does not end their turn in cover from you.",
        'kicker': '',
        'maker': 'Bursat',
        'complexity': 'Advanced'
    },
    {
        'name': 'Foremounted Shield',
        'description': 'While holding this weapon you have a +2 bonus to AC against ranged attacks made from greater than 30ft from you while you are prone.',
        'kicker': '',
        'maker': 'Bursat',
        'complexity': 'Advanced'
    },
    {
        'name': 'Dust Blowback',
        'description': 'When you take a hide action while holding this weapon, you may consume 1 loaded ammunition to create a cloud of dust at your location obscuring you from view. While in this cloud you are blinded but cannot be seen. This effect can allow you to fulfil the conditions to hide. Additionally after an attack is made with this weapon it creates the same cloud of dust at your location. All clouds of dust made by this trait last until the start of your next turn.',
        'kicker': '',
        'maker': 'Bursat',
        'complexity': 'Advanced'
    },
    {
        'name': 'Ironsight Rangefinder',
        'description': 'After you make an attack with this weapon against an enemy their exposure increases by one until the start of your next turn. (This effect can stack with itself.)',
        'kicker': '',
        'maker': 'Bursat',
        'complexity': 'Advanced'
    },
    {
        'name': 'Shortened Frame',
        'description': 'This trait can only be purchased if this weapon has 2-handed. Remove the 2-handed tag from the weapon. This weapon suffers a -1 penalty to all attack rolls and halves all its range values.',
        'kicker': '',
        'maker': 'Bursat',
        'complexity': 'Advanced'
    },
    {
        'name': 'Broken Outline',
        'description': 'The first attack you make with this gun against an enemy you are hidden from each round deals an additional +6 damage. Increase this damage bonus to +12 if you were hidden from them for 10 minutes.',
        'kicker': '',
        'maker': 'Bursat',
        'complexity': 'Advanced'
    },
    {
        'name': 'Mounting Spikes and Hourglass Trigger',
        'description': 'As an action, you embed this weapon in place. While holding this weapon your move speed is set to 0 and the first attack made each turn using this embedded weapon is made with advantage. This effect ends if you move while holding the gun by any other means or you use an action to end the effect. Additionally the weapon has a small hourglass built into its structure that, when rotated as an action and allowed to drain will automatically fire the weapon after 5 minutes. Markings on the glass allow 1 minute increments to be used up to the full 5 instead.',
        'kicker': '',
        'maker': 'Bursat',
        'complexity': 'Advanced'
    },
    {
        'name': 'Smoothbore',
        'description': 'When you make an attack with this weapon at a enemy within 20ft you can choose to take a -2 penalty to the attack roll. If you do the attack deals an additional 15 damage.',
        'kicker': '',
        'maker': 'Faljuqman',
        'complexity': 'Advanced'
    },
    {
        'name': 'Barrage',
        'description': 'When you make an attack with this weapon against an enemy you have already attacked this round deal an additional 1d6 damage.',
        'kicker': '',
        'maker': 'Faljuqman',
        'complexity': 'Advanced'
    },
    {
        'name': 'Faljuq Screw Breech',
        'description': 'You can as an action lock down the weapon, preventing the weapon jam and durability loss of misfires. This gun cannot be reloaded until an action is taken to remove this effect.',
        'kicker': '',
        'maker': 'Faljuqman',
        'complexity': 'Advanced'
    },
    {
        'name': 'Well Founded',
        'description': 'When rolling damage with this weapon treat all 1s or 2s rolled as a 3.',
        'kicker': '',
        'maker': 'Faljuqman',
        'complexity': 'Advanced'
    },
    {
        'name': 'Pyrotechnic Legacy',
        'description': "When you make an attack while firing a Special bullet that deals extra damage roll an additional damage dice for the special bullet's bonus damage.",
        'kicker': '',
        'maker': 'Faljuqman',
        'complexity': 'Advanced'
    },
    {
        'name': 'Etrugol Brass',
        'description': 'While this gun has this trait it is Bulky. Once per round, when you make a ranged attack with this weapon all creatures in a 15ft wide line between you and the target take 1d10 thunder damage.',
        'kicker': '',
        'maker': 'Faljuqman',
        'complexity': 'Advanced'
    },
    {
        'name': 'Shattering Fusilade',
        'description': 'Once per round, when you make an attack with this weapon you can instead choose to shoot the ground at a point within range. Make the attack as usual and roll damage if the attack is not a misfire. All creatures in a 5ft radius take 5 damage. Increase the damage dealt by 2 and the effected radius by 5ft for every 5 damage the attack rolled. The effected area is difficult terrain for 1 minute.',
        'kicker': '',
        'maker': 'Faljuqman',
        'complexity': 'Advanced'
    },
    {
        'name': 'Naud the Rune of Hunger',
        'description': 'When you make an attack with this weapon, you can have the attack consume twice the amount of ammunition. If you do the attack also inflicts the effect of going 2 days without food on the target on hit. (After 3 + Con days each additional day inflicts a level of exhaustion).',
        'kicker': '',
        'maker': 'Valmoran',
        'complexity': 'Advanced'
    },
    {
        'name': 'Myrr the Rune of Collapse',
        'description': 'When you make an reduce the hitpoint of an enemy to 0 with this weapon, you can take a level of exhaustion. If you do you may take another action this turn.',
        'kicker': '',
        'maker': 'Valmoran',
        'complexity': 'Advanced'
    },
    {
        'name': 'Izaz the Rune of Desolation',
        'description': 'When you make an attack with this weapon and it misfires, you can become deafened for 10 minutes. If you do you can reroll the attack with advantage. This effect can only be used once every 10 minutes.',
        'kicker': '',
        'maker': 'Valmoran',
        'complexity': 'Advanced'
    },
    {
        'name': 'Paorth the Rune of Madness',
        'description': 'After you make an attack with this weapon, you can become confused for 10 minutes (At the start of each turn roll a d4: on a 1 act normally, on a 2 do nothing this round, on a 3 punch self and deal normal damage, on a 4 attack the nearest creature with this weapon.) At the end of your turns, make a DC 15 Wisdom saving throw, on success remove this condition. If you do become confused the target of the attack is hit by the spell Feeblemind with an effective spellcaster DC of 17.',
        'kicker': '',
        'maker': 'Valmoran',
        'complexity': 'Advanced'
    },
    {
        'name': 'Kauna the Rune of Affliction',
        'description': 'When you make an attack with this weapon, you can become poisoned until the end of your next turn. If you do this weapon deals an additional 4d4 poison damage.',
        'kicker': '',
        'maker': 'Valmoran',
        'complexity': 'Advanced'
    },
    {
        'name': 'Haglaz the Rune of Deluge',
        'description': "Once per round when you make an attack with this weapon, you can choose to be hit by the following effect without being able to reduce the damage in any way. If you do you can cast the spell erupting earth at 3rd level originating from your target's square (with a DC 15 Reflex save for half damage)",
        'kicker': '',
        'maker': 'Valmoran',
        'complexity': 'Advanced'
    },
    {
        'name': 'Fehu the Rune of Greed',
        'description': 'This weapon is equipped with a special chamber which can be filled with 50gp worth of diamond powder (obtainable anywhere spellcrafting components could be bought). When you attack with this weapon you can choose to consume the diamond powder to use the upgraded effect of the bullet fired. The special chamber can be refilled by taking 10 minutes to disassemble and reassemble your gun.',
        'kicker': '',
        'maker': 'Valmoran',
        'complexity': 'Advanced'
    },
    {
        'name': 'Heavy Barrage',
        'description': 'This trait can only be purchased if this weapon has Spread. Increase the area of the Spread cone to 25ft and you can split the damage evenly between up to 2 enemies.',
        'kicker': '',
        'maker': 'Carron',
        'complexity': 'Advanced'
    },
    {
        'name': 'Rampart Gun',
        'description': 'This trait can only be purchased if this weapon has Steady. As an Action you can prepare the the weapon granting a +5 bonus to hit for all attacks made with this weapon until you move.',
        'kicker': '',
        'maker': 'Carron',
        'complexity': 'Advanced'
    },
    {
        'name': 'Solid Build',
        'description': 'This trait can only be purchased if this weapon has 2-handed. While holding this weapon you have a +1 bonus to AC against ranged attack made from greater than 20ft from you.',
        'kicker': '',
        'maker': 'Carron',
        'complexity': 'Advanced'
    },
    {
        'name': 'Coordinated Fire',
        'description': 'This trait can only be purchased if this weapon has Hipfire. When you trigger Hipfire and you choose to attack with all barrels of this weapon, if either of the disadvantage dice rolls a 20 you can make another attack against this enemy as part of the reaction. This can only active once per round.',
        'kicker': '',
        'maker': 'Carron',
        'complexity': 'Advanced'
    },
    {
        'name': 'Travelling Arsenal',
        'description': 'This trait can only be purchased if this weapon has Light. Remove the Light tag from the weapon and the combination weapon no longer has -1 ammo capacity penalty for each barrel.',
        'kicker': '',
        'maker': 'Carron',
        'complexity': 'Advanced'
    },
    {
        'name': 'Readied Reload',
        'description': 'Once per long rest, you can reload this weapon as an action.',
        'kicker': '',
        'maker': 'Carron',
        'complexity': 'Advanced'
    },
    {
        'name': 'Triplet / Quadruplet',
        'description': "Add an additional barrel of any gun model to this weapon (paying the additional weapon's cost). The weapon's ammo capacity penatlty is increased by an additional 1 per barrel. This trait may be purchased twice.",
        'kicker': '',
        'maker': 'Carron',
        'complexity': 'Advanced'
    },
    {
        'name': 'Energetic Converter (Fire)',
        'description': 'Each time you make an attack, before you roll, you can choose to convert the damage the weapon deals into fire damage.',
        'kicker': '',
        'maker': 'Tesiphon',
        'complexity': 'Advanced'
    },
    {
        'name': 'Energetic Converter (Cold)',
        'description': 'Each time you make an attack, before you roll, you can choose to convert the damage the weapon deals into cold damage.',
        'kicker': '',
        'maker': 'Tesiphon',
        'complexity': 'Advanced'
    },
    {
        'name': 'Energetic Converter (Lightning)',
        'description': 'Each time you make an attack, before you roll, you can choose to convert the damage the weapon deals into lightning damage.',
        'kicker': '',
        'maker': 'Tesiphon',
        'complexity': 'Advanced'
    },
    {
        'name': 'Energetic Converter (Thunder)',
        'description': 'Each time you make an attack, before you roll, you can choose to convert the damage the weapon deals into thunder damage.',
        'kicker': '',
        'maker': 'Tesiphon',
        'complexity': 'Advanced'
    },
    {
        'name': 'Recompacting Pressure Chamber',
        'description': 'Treat bullets that this gun fires as if they were a caliber lower for the purposes of determining damage. Attacks made with this weapon have a +3 bonus to damage.',
        'kicker': '',
        'maker': 'Tesiphon',
        'complexity': 'Advanced'
    },
    {
        'name': 'Running Hot',
        'description': 'At the start of any of your turns you can choose to have the weapon take 2 durability damage per shot for the rest of the current combat. Every attack made with this weapon after the first on your each of your turns deals an additional 3d4 fire damage.',
        'kicker': '',
        'maker': 'Tesiphon',
        'complexity': 'Advanced'
    },
    {
        'name': 'Coolant Release Valve',
        'description': 'As an Action cast the spell Fog targeting self and repair 2 durability damage taken by this weapon in this combat. This ability can be used once every 10 minutes.',
        'kicker': '',
        'maker': 'Tesiphon',
        'complexity': 'Advanced'
    },
    {
        'name': 'Fine Tuning',
        'description': 'As an Action while in combat you can adjust the parameters of your gun. All attacks made before the end of your next turn with this weapon overcome any resistances and deal +5 bonus damage.',
        'kicker': '',
        'maker': 'Tesiphon',
        'complexity': 'Advanced'
    },
    {
        'name': 'Pressure Gauge',
        'description': 'This weapon takes 5 durability damage on every 5th attack made with it. It can not lose durability as part of any other effect. After 10 minutes out of combat the attack count is reset.',
        'kicker': '',
        'maker': 'Tesiphon',
        'complexity': 'Advanced'
    },
    {
        'name': 'Resonance Inducer',
        'description': 'Once per short rest, when you would make an attack action you can choose to treat the rolled damage dice for all attacks made as part of this action as if they had rolled the maximum possible amount. Then take damage equal to the number of damage dice rolled this action.',
        'kicker': '',
        'maker': 'Tesiphon',
        'complexity': 'Advanced'
    },
    {
        'name': 'Sudden Clarity',
        'description': 'When you attack with this weapon, if it is the first attack you have made this combat, the attack deals an additional 1d6 sneak attack damage. If the target has not acted this combat, the attack is also an automatic critical hit (if it hits.)',
        'kicker': '',
        'maker': 'Olympia',
        'complexity': 'Advanced'
    },
    {
        'name': 'Pacify',
        'description': 'When you attack with this weapon, if it is the first attack you have made this combat, on hit the target must make a DC15 STR save or their weapon is thrown 35ft away from them. If the target has not acted this combat, the DC increases to 16 and you can choose to instead make their next attack misfire an equipped gun.',
        'kicker': '',
        'maker': 'Olympia',
        'complexity': 'Advanced'
    },
    {
        'name': 'Ring of Hollow Steel',
        'description': 'When you attack with this weapon, if it is the first attack you have made this combat, the attack gains +1 to hit for every chamber in the gun that is empty. If the target has not acted this combat, the attack deals an additional +2 damage per empty chamber.',
        'kicker': '',
        'maker': 'Olympia',
        'complexity': 'Advanced'
    },
    {
        'name': 'Shot Caller',
        'description': 'As a reaction, when you roll the highest initiative in a combat, you and all allies have advantage on their first attack this combat. If your initiative is lower than an enemies you can instead draw their attention onto yourself and give them advantage and automatic critical hits against. If you do this you can make a free attack on any enemies that attack you, the first attack this way treats the enemy as if it has not yet acted this combat. (Their action still resolves fully no matter what.)',
        'kicker': '',
        'maker': 'Olympia',
        'complexity': 'Advanced'
    },
    {
        'name': 'Hastened Enmity',
        'description': 'When you attack with this weapon, if it is the first attack you have made this combat, the attack deals an additional +1 damage for each point of difference in initiative between you and your target. If the target has not acted this combat, on hit they also lose 1d4+2 initiative.',
        'kicker': '',
        'maker': 'Olympia',
        'complexity': 'Advanced'
    },
    {
        'name': 'Beaten to the Punch',
        'description': 'When you attack with this weapon, if it is the first attack you have made this combat, if the attack hits all attacks made by the target on their next turn are made with disadvantage. If the target has not acted this combat, on hit they are stunned until the start of your next turn.',
        'kicker': '',
        'maker': 'Olympia',
        'complexity': 'Advanced'
    },
    {
        'name': 'Closing Argument',
        'description': 'After initiative is rolled in a combat containing at least 2 enemies, if your initiative is lower than all enemies, set your initiative to 1 higher than the lowest initiative rolled by an enemy.',
        'kicker': '',
        'maker': 'Olympia',
        'complexity': 'Advanced'
    },
    {
        'name': 'Fatal Forecast',
        'description': 'Attacks made with this weapon can critically hit on a 19 and 20.',
        'kicker': 'After you hit with an attack with this weapon all attacks made against the target can critically hit on 19 and 20 until the start of your next turn.',
        'maker': 'Salcorin Bespoke',
        'complexity': 'Advanced'
    },
    {
        'name': 'Levelling Lead',
        'description': 'Attacks made with this weapon deal an additional 1d6 damage.',
        'kicker': 'The bonus damage is increased by an additional 2d6.',
        'maker': 'Salcorin Bespoke',
        'complexity': 'Advanced'
    },
    {
        'name': 'Singing Steel',
        'description': 'After you hit an enemy with this weapon you gain temporary hit points equal to a quarter of the damage dealt by this attack.',
        'kicker': 'The amount of temporary hitpoints received increases to a half of the damage dealt but they must be distributed evenly between all friendly creatures within 30ft of you.',
        'maker': 'Salcorin Bespoke',
        'complexity': 'Advanced'
    },
    {
        'name': 'Hex Hunter',
        'description': 'After you hit an enemy with this weapon and they are concentrating on a spell, the concentration check is made with disadvantage.',
        'kicker': 'After you hit an enemy cancel the concentration instead.',
        'maker': 'Salcorin Bespoke',
        'complexity': 'Advanced'
    },
    {
        'name': 'Concussive Cannon',
        'description': 'After you hit an enemy with this weapon they must make a DC17 constitution check or be stunned until another creature acts.',
        'kicker': 'Increase the duration of the stun to the start of your next turn.',
        'maker': 'Salcorin Bespoke',
        'complexity': 'Advanced'
    },
    {
        'name': 'Reloading Reprieve',
        'description': 'After you hit an enemy with this weapon target ally within 30ft can instantly reload their weapon.',
        'kicker': 'The effect increases to all allies.',
        'maker': 'Salcorin Bespoke',
        'complexity': 'Advanced'
    },
    {
        'name': 'Starting Shot',
        'description': 'After you hit an enemy with this weapon, you can immediately move up to 30ft and all subsequent attacks made this turn have a +2 bonus to hit.',
        'kicker': 'The effect instead allows all allies within 30ft of you to make an immediate move of up to 30ft and all attacks made on their next turn have a +2 bonus to hit.',
        'maker': 'Salcorin Bespoke',
        'complexity': 'Advanced'
    },
    {
        'name': 'Ace in the Hole',
        'description': 'If your last 3 attacks have missed your next attack with this weapon will automatically crit and will do 11 additional damage.',
        'kicker': '',
        'maker': 'Ironcoil',
        'complexity': 'Advanced'
    },
    {
        'name': 'Hot Hand',
        'description': 'Each successive attack after the first deals 2 additional damage and increases this weapons misfire chance by 1. Both of these effects stack incrementally and can be reset at any time.  While the misfire chance of this weapon is 5 or greater, attacks score a critical hit on a roll of 18 to 20.',
        'kicker': '',
        'maker': 'Ironcoil',
        'complexity': 'Advanced'
    },
    {
        'name': 'All In',
        'description': 'When you attack with this weapon, you can choose to expend all remaining bullets. Once the attack resolves increase the damage by 1d6 per bullet expended in this manner.',
        'kicker': '',
        'maker': 'Ironcoil',
        'complexity': 'Advanced'
    },
    {
        'name': 'Winning Streak',
        'description': 'After you have hit with 4 attacks in a row with this weapon you gain the following until an attack is missed: All attacks with this weapon are made with advantage.',
        'kicker': '',
        'maker': 'Ironcoil',
        'complexity': 'Advanced'
    },
    {
        'name': 'Upping the Ante',
        'description': 'Once per combat as an attack action you can increase your misfire chance to 10. If you do not misfire, the attack is a critical hit and then you can choose to shoot again up to the number of attacks you can make as part of an attack action.',
        'kicker': '',
        'maker': 'Ironcoil',
        'complexity': 'Advanced'
    },
    {
        'name': 'Shoot the Moon',
        'description': 'Choose a number between 1 and 20, then roll a d20. If the number rolled matches the number you chose immediately resolve a successful attack against a valid target with this weapon. Then you can use effect of Divine Intervention as if you were a level 20 Cleric. If the number does not match this gun gains the Broken condition. This Trait cannot be influenced by any other ability.',
        'kicker': '',
        'maker': 'Ironcoil',
        'complexity': 'Advanced'
    },
    {
        'name': "Dead Man's Hand",
        'description': 'Once per combat at the start of your turn, you can specify that up to 5 targets will die during this turn. If they all die, gain that many charges which can be used for any of the following effects: <br>- When you take damage, consume a charge to reduce each instance of damage you take this turn by 8 including the triggering source.<br>- When you hit with an attack, consume a charge to make that attack a critical hit.<br>- After you make an attack roll, but before any effects of the attack are applied, consume a charge to add 8 to the attack roll.<br>- When you would be reduced to 0 hit points, consume a charge to instead be reduced to 1 hit point.<br>- As a bonus action consume a charge to be able to use Dead Man’s Hand again this combat.<br>If any of the targets did not die, take the topmost penalty. Then for each other target still living take the next topmost unused penalty: <br>- Take 5 damage.<br>- Your AC is reduced by 2 until the end of the combat.<br>- The next time this combat you take the attack action, all attacks made as part of that action are made with disadvantage.<br>- Your misfire chance increases by 1 with all firearms until the end of this combat.<br>- Your hitpoints are set to 0.',
        'kicker': '',
        'maker': 'Ironcoil',
        'complexity': 'Advanced'
    }
];

function getMasterworksByMaker (maker) {

    const m = [];

    for (let i = 0; i < masterworks.length; i++) {

        if (masterworks[i].maker === maker) {

            m.push(masterworks[i]);

        }

    }

    return m;

}

function getStandardisedPartsMasterworks () {

    const m = [];

    for (let i = 0; i < masterworks.length; i++) {

        if (masterworks[i].maker !== 'General' && masterworks[i].maker !== 'Ashforge') {

            m.push(masterworks[i]);

        }

    }

    return m;

}
