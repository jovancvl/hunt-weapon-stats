export class TraitType {
    static readonly SOLO = new TraitType('Solo', 'Provides an additional effect when playing solo.')
    static readonly BURN = new TraitType('Burn', 'Destroyed after use.')
    static readonly SCARCE = new TraitType('Scarce', 'Can only be found in the world.')
    static readonly REGULAR = new TraitType('Regular', 'Can be purchased or obtained from Trait Spurs.')
    static readonly EVENT = new TraitType('Event', 'Trait exclusive to Events.')

    private constructor(
        public readonly key: string,
        public readonly description: string,
        public readonly icon?: string
    ) { }

    static values() {
        return Object.keys(TraitType)
            .map(name => (TraitType as any)[name] as TraitType)
    }
}

export class Trait {
    static readonly ADRENALINE = new Trait('Adrenaline', 'Small stamina boost on critical health.', 1, [TraitType.REGULAR]);
    static readonly AMBIDEXTROUS = new Trait('Ambidextrous', 'Quicker reload of dual pistols.', 3, [TraitType.REGULAR]);
    static readonly ASSAILANT = new Trait('Assailant', 'Increases melee effectiveness of throwing melee.', 1, [TraitType.REGULAR]);
    static readonly BEASTFACE = new Trait('Beastface', 'Reduced reaction range from animals.', 4, [TraitType.REGULAR]);
    static readonly BERSERKER = new Trait('Berserker', 'Scarce: boosts melee damage.', 2, [TraitType.SCARCE]);
    static readonly BOLT_THROWER = new Trait('Bolt Thrower', 'Reduced crossbow reload time.', 3, [TraitType.SCARCE]);
    static readonly BULWARK = new Trait('Bulwark', 'Reduce explosion & flash bomb damage.', 2, [TraitType.REGULAR]);
    static readonly BLOODLESS = new Trait('Bloodless', 'Bleeding cannot escalate beyond light.', 3, [TraitType.REGULAR]);
    static readonly BLADESEER = new Trait('Blade Seer', 'Highlight bolts, arrows & axes in Dark Sight.', 1, [TraitType.REGULAR]);
    static readonly BULLETGRUBBER = new Trait('Bulletgrubber', 'Recover unfired round on partial reloads.', 4, [TraitType.REGULAR]);
    static readonly CONDUIT = new Trait('Conduit', 'Health/stamina boost when picking up clues.', 5, [TraitType.REGULAR, TraitType.SOLO]);
    static readonly DAUNTLESS = new Trait('Dauntless', 'Can defuse stuck thrown explosives.', 1, [TraitType.REGULAR]);
    static readonly DOCTOR = new Trait('Doctor', 'Medkit heals faster.', 4, [TraitType.REGULAR]);
    static readonly DEATH_CHEAT = new Trait('Death Cheat', 'Consume one when you die to survive.', 3, [TraitType.SCARCE, TraitType.BURN]);
    static readonly DECOY_SUPPLY = new Trait('Decoy Supply', 'Restock decoys from ammo crates.', 1, [TraitType.REGULAR]);
    static readonly DETERMINATION = new Trait('Determination', 'Boost stamina regen earlier.', 3, [TraitType.REGULAR]);
    static readonly FRONTIERSMAN = new Trait('Frontiersman', 'Tools get an extra use.', 7, [TraitType.REGULAR]);
    static readonly GATOR_LEGS = new Trait('Gator Legs', 'Less stamina drain in water.', 2, [TraitType.REGULAR]);
    static readonly GHOUL = new Trait('Ghoul', 'Gain health when looting a Hunter.', 4, [TraitType.REGULAR]);
    static readonly GREYHOUND = new Trait('Greyhound', 'Longer full-speed sprint.', 2, [TraitType.REGULAR]);
    static readonly HORNSKIN = new Trait('Hornskin', 'Reduce blunt damage by 25%.', 3, [TraitType.REGULAR]);
    static readonly IRON_EYE = new Trait('Iron Eye', 'Mark hit enemies in Dark Sight.', 1, [TraitType.REGULAR]);
    static readonly KITESKIN = new Trait('Kiteskin', 'Reduce fall damage by 50%.', 1, [TraitType.REGULAR]);
    static readonly LEVERING = new Trait('Levering', 'Faster hip-fire with lever-action rifles.', 3, [TraitType.REGULAR]);
    static readonly LIGHTFOOT = new Trait('Lightfoot', 'Vault, jump, climb ladders silently.', 5, [TraitType.REGULAR]);
    static readonly MAGPIE = new Trait('Magpie', 'Solo: more cash from clues.', 1, [TraitType.REGULAR, TraitType.SOLO]);
    static readonly SCOPESMITH = new Trait('Marksman Scopesmith', 'Stay in ironsight after medium-scope shot.', 2, [TraitType.REGULAR]);
    static readonly MITHRIDATIST = new Trait('Mithridatist', 'Halve poison duration.', 3, [TraitType.REGULAR]);
    static readonly NECROMANCER = new Trait('Necromancer', 'Burn: gain health on Hunter kill.', 1, [TraitType.REGULAR, TraitType.BURN, TraitType.SOLO]);
    static readonly PACKMULE = new Trait('Packmule', 'Extra tool/consumable from loot boxes.', 3, [TraitType.REGULAR]);
    static readonly PAIN_SENSE = new Trait('Pain Sense', 'Reveal burning/poisoned enemies in Dark Sight.', 1, [TraitType.REGULAR]);
    static readonly PITCHER = new Trait('Pitcher', 'Increased throwing range.', 6, [TraitType.REGULAR]);
    static readonly POACHER = new Trait('Poacher', 'Place/disarm traps quietly.', 2, [TraitType.REGULAR]);
    static readonly QUARTERMASTER = new Trait('Quartermaster', 'Equip 3-slot plus large slot weapon.', 6, [TraitType.REGULAR]);
    static readonly RAMPAGE = new Trait('Rampage', 'Burn/Scarce: gain speed on kill.', 1, [TraitType.SCARCE, TraitType.BURN]);
    static readonly RELENTLESS = new Trait('Relentless', 'Burn/Scarce: faster firing on low health.', 1, [TraitType.SCARCE, TraitType.BURN]);
    static readonly REMEDY = new Trait('Remedy', 'Burn/Scarce: remove fire/poison on bandage.', 1, [TraitType.SCARCE, TraitType.BURN]);
    static readonly RESILIENCE = new Trait('Resilience', 'Revive with up to 100 health.', 4, [TraitType.REGULAR]);
    static readonly SALVESKIN = new Trait('Salveskin', 'Fire heal faster.', 2, [TraitType.REGULAR]);
    static readonly SERPENT = new Trait('Serpent', 'Solo: enemies don\'t drop bounty.', 1, [TraitType.REGULAR, TraitType.SOLO]);
    static readonly SHADOW_LEAP = new Trait('Shadow Leap', 'Scarce: silent vault + free drop damage.', 1, [TraitType.SCARCE]);
    static readonly SHADOW = new Trait('Shadow', 'Scarce: silent weapon use.', 1, [TraitType.SCARCE]);
    static readonly SILENT_KILLER = new Trait('Silent Killer', 'Reduce melee sound.', 5, [TraitType.REGULAR]);
    static readonly SUREFOOT = new Trait('Surefoot', 'Increased crouch speed.', 3, [TraitType.REGULAR]);
    static readonly VIGILANT = new Trait('Vigilant', 'Bonus Dark Sight durability.', 4, [TraitType.REGULAR]);
    static readonly VIGOR = new Trait('Vigor', 'Bonus Hidden Cache durability.', 5, [TraitType.REGULAR]);
    static readonly VULTURE = new Trait('Vulture', 'More consumables from boxes.', 5, [TraitType.REGULAR]);
    static readonly WHISPERSMITH = new Trait('Whispersmith', 'Scarce: track injured animals.', 2, [TraitType.SCARCE]);
    static readonly WITNESS = new Trait('Witness', 'Gain adrenaline on bullet damage.', 2, [TraitType.REGULAR]);

    private constructor(
        readonly name: string,
        readonly description: string,
        readonly cost: number,
        readonly types: TraitType[],
        readonly icon?: string,
        readonly art?: string,
    ) { }

    static values() {
        return Object.keys(Trait)
            .map(name => (Trait as any)[name] as Trait)
    }
}