var util = require("util")
 
var isDisabled = false
 
 
var types = [
	"Anima",
	"Guardian",
	"Breaker",
	"Lord",
	"Oracle"
];
 
var units = [
	"Firedrake (3)", 
	"Dragon Graven (4)",
	"Dalimaone (5)",
	"Knight Agni (3)", 
	"Fire Knight Agni (4)", 
	"Magma Knight Agni (5)", 
	"Phoenix (3)",
	"Lava Phoenix (4)", 
	"God Phoenix (5)", 
	"Lava (3)", 
	"Fire Knight Lava (4)",
	"Fire God Lava (5)", 
	"Lancia (3)", 
	"Hot Chef Lancia (4)",
	"Head Chef Lancia (5)", 
	"Lorand (3)",
	"Professor Lorand (4)",
	"Master Lorand (5)",
 	"Drake Chief Aisha (3)", 
	"Drake Lord Aisha (4)", 
	"Drake Queen Aisha (5)", 
	"Red Axe Michele (4)",
	"Lotus Axe Michele (5)",
	"War Demon Vishra (4)", 
	"Rakshasa Vishra (5)", 
	"Homusubi (4)",
	"Kagutsuchi (5)", 
	"Red Slash Farlon (4)",
 	"Red Blade Farlon (5)", 
	"Fire Step Ramna (4)", 
	"Fire Dance Ramna (5)",
 	"Dark Arts Dia (4)",
	"Dark Princess Dia (5)", 
	"Luther (4)",
	"Defiant Luther (5)",
	"Bodyguard Darvanshel (4)", 
	"Protector Darvanshel (5)",
	"Emperor Orwen (4)",
	"Divine Emperor Orwen (5)", 
	"Fire Witch Ulkina (4)",
	"Fire Dragoon Ulkina (5)",
	"Ember Elder Fiora (4)",
 	"Ember Sage Fiora (5)", 
	"Phoenix Knight Arus (4)",
	"Phoenix Emperor Arus (5)",
	"Red Hood Ciara (4)",
	"Scarlet Hood Ciara (5)", 
	"Ultor (4)",
	"Valiant Ultor (5)", 
	"Nick (4)",
	"Furious Nick (5)",
	"Undine	(3)",
	"Siren (4)", 
	"Meltia (5)", 
	"Knight Sergio (3)",
	"Ice Ruler Sergio (4)",
	"Ice Knight Sergio (5)", 
	"Leviathan (3)",
	"Loch Ness (4)", 
	"Malnaplis (5)", 
	"Captain Mega (3)",
	"War Captain Mega (4)", 
	"Commander Mega (5)", 
	"Elimo (3)",
	"Royal Elimo (4)",
	"Genius Elimo (5)",
	"Dean (3)",
	"Ice Mage Dean (4)",
	"Ice Wizard Dean (5)",
	"Twin Gem Rickel (3)",
	"Twin Flash Rickel (4)",
	"Twin Shot Rickel (5)", 
	"Polar Angel Tiara (4)",
	"Ice Apostle Tiara (5)", 
	"Hail Bot Reeze (4)",
	"Hail Mech Reeze (5)", 
	"Ice Keep Copra (4)",
	"Ice Tower Tesla (5)", 
	"Snow Cub Signas (4)", 
	"Snow Lion Signas (5)", 
	"Spear Fist Raydn (4)", 
	"Spear Arms Raydn (5)", 
	"Azure Blade Lucina (4)",
	"Azure Warrior Lucina (5)",
	"Phee (4)",
	"Tyrant Phee (5)", 
	"Dark Axe Mariudeth (4)", 
	"Axe King Mariudeth (5)", 
	"Prince Arius (4)",
	"Divine Prince Arius (5)", 
	"Aquamancer Kuhla (4)",
	"Aqua Ruler Kuhla (5)", 
	"Sea Pirate Eve (4)",
	"Pirate Empress Eve (5)", 
	"Disciple Belfura (4)", 
	"Slayer Belfura (5)",
	"Tridon (4)",
	"Merciless Tridon (5)", 
	"Jack (4)",
	"Jack Frost (5)",
	"Dryad (3)",
	"High Elf (4)", 
	"Lemenara (5)", 
	"Princess Lidith (3)", 
	"Queen Lidith (4)",
	"Empress Lidith (5)",
	"Great Tree Alneu (3)", 
	"World Tree Altro (4)", 
	"God Tree Eltri (5)",
	"Gunner Douglas (3)",
	"Gun King Douglas (4)", 
	"Gun God Douglas (5)", 
	"Pixy Leore (3)",
	"Pixy Royal Leore (4)", 
	"Pixy King Leore (5)", 
	"Edea (3)",
	"Earth Knight Edea (4)", 
	"Mother Earth Edea (5)", 
	"Twins Il & Mina (3)", 
	"Earthly Il & Mina (4)", 
	"Gemini Il & Mina (5)", 
	"Scar Blade Zelban (4)", 
	"Blade Hero Zelban (5)", 
	"Pugilist Dilma (4)",
	"Champ Fist Dilma (5)", 
	"Golem (4)",
	"Great Golem (5)", 
	"Havoc Girl Luly (4)", 
	"Havoc Queen Luly (5)",
	"Battle Girl Ophelia (4)", 
	"War Girl Ophelia (5)",
	"Iron Shield Darvan (4)", 
	"Steel Shield Darvan (5)", 
	"Nalmika (4)",
	"Ivy Nalmika (5)", 
	"Great Thief Zelnite (4)", 
	"Noble Thief Zelnite (5)",
	"Flora Princess Faris (4)",
	"Flora Queen Faris (5)",
	"Forest Guardian Tia (4)", 
	"Divine Guardian Tia (5)",
	"Spirit Ruler Lucca (4)",
	"Phantom Ruler Lucca (5)",
	"Green Dragon Vael (4)",
	"Royal Dragon Farvnil (5)",
	"Thunderbird (3)",
	"Great Falcon Ziz (4)",
	"Zazabis (5)",
	"Sky Knight Falma (3)",
	"Sky King Falma (4)",
	"Sky Legend Falma (5)", 
	"Behemoth (3)",
	"King Behemoth (4)", 
	"Alpha Behemoth	(5)",
	"Emilia (3)",
	"Princess Emilia (4)",
	"Goddess Emilia (5)",
	"Tinkerer Elulu (3)",
	"Inventor Elulu (4)",
	"Bolt Mallet Elulu (5)", 
	"Loch (3)",
	"Shock Bow Loch (4)", 
	"Zeus Bow Loch (5)",
	"Bolt Pike Amy (3)",
	"Bolt Knight Amy (4)", 
	"Bolt Goddess Amy (5)", 
	"Drakeborn Lodin (4)", 
	"Drake God Lodin (5)", 
	"Shock Mage Rashil (4)", 
	"Bolt Magus Rashil (5)", 
	"Sky Angel Kushra (4)", 
	"Rebel Angel Elsel (5)", 
	"Gold Warrior Rina (4)", 
	"Gold Knight Rina (5)", 
	"Mech Arms Grybe (4)", 
	"Mech Cannon Grybe (5)", 
	"Sage Bran (4)",
	"Lightning Sage Bran (5)", 
	"Uda (4)",
	"Crusher Uda (5)", 
	"Thunder Beast Ahvel (4)", 
	"Thunder God Esna (5)",
	"Lead Engineer Garnan (4)", 
	"Head Engineer Garnan (5)",
	"Bolt Gun Rowgen (4)",
	"Thunder Gun Rowgen (5)", 
	"Thunder Whip Orna (4)", 
	"Divine Whip Orna (5)", 
	"Thunder Guard Shera (4)", 
	"Thunder Sentry Shera (5)",
	"Vocals Kagamine Rin (4)",
	"Gemini Kagamine Rin (5)",
	"Valkyrie (3)", 
	"Sky Hero Athena (4)",
	"Legendary Jona (5)",
	"Cowboy Heidt (3)",
	"Holy Shot Heidt (4)", 
	"Pistol God Heidt (5)", 
	"Wyvern (3)",
	"Bahamut (4)", 
	"Rameldria (5)", 
	"Knight Will (3)",
	"Holy Knight Will (4)", 
	"God Knight Will (5)", 
	"Knight Aem (3)",
	"Champion Aem (4)", 
	"Holy Master Aem (5)", 
	"Eight Blade Sefia (3)", 
	"Blade Storm Sefia (4)", 
	"Blade Queen Sefia (5)",
	"Legionary Melchio (4)", 
	"Centurion Melchio (5)",
	"Cyborg Lilith (4)",
	"Cyborg Lilith II (5)", 
	"White Lebra (4)",
	"Lubradine (5)",
	"Horseman Sodis	(4)", 	
	"Cavalryman Sodis (5)", 
	"Light Blade Alyut (4)", 
	"Holy Warrior Alyut (5)", 
	"Prodigy Themis (4)",
	"Unflinching Themis (5)", 
	"Zellha (4)",
	"Ruin Zellha (5)", 
	"Dark Angel Azael (4)",
	"Wisdom Angel Azael (5)", 
	"Brave Legend Hogar (4)", 
	"Brave King Hogar (5)", 
	"Mad Knight Narza (4)", 
	"Mad King Narza (5)",
	"Holy Treasures Yujeh (4)",
	"Sacred Relics Yujeh (5)",
 	"Clavier Kagamine Len (4)",
	"Gemini Kagamine Len (5)",
	"Eva (4)",
	"Snow Princess Eva (5)",
	"Vampire (3)", 
	"Lich (4)",
	"Legion (5)",
	"Shida (3)",
	"Garroter Shida (4)", 
	"Executioner Shida (5)", 	
	"Memetes (3)",
	"Hell King Hades (4)", 
	"Death God Lodaga (5)", 
	"Alice (3)",
	"Scythe Alice (4)", 
	"Scythe God Alice (5)",
	"Lemia (3)",
	"Necromancer Lemia (4)", 
	"Soul Keeper Lemia (5)", 
	"Kikuri (3)",
	"Goth Kikuri (4)", 
	"Goth Idol Kikuri (5)", 
	"Duel-GX (4)",
	"Duel-GX II (5)", 
	"Dark Swords Logan (4)",
	"Evil Blades Logan (5)", 
	"Half Blood Lira (4)", 
	"Magistra Lira (5)",
	"Dark Charm Lunaris (4)", 
	"Dark Curse Lunaris (5)", 
	"Dark Blade Zephyr (4)", 
	"Dark Warrior Zephyr (5)", 
	"Magic Riffs Eric (4)",
	"Dark Tunes Eric (5)", 
	"Kajah (4)",
	"Evil Kajah (5)", 
	"Dictator Lilly Matah (4)", 
	"Empress Lilly Matah (5)", 
	"Inferno Elza (4)",
	"Inferno Queen Elza (5)", 
	"Assassin Kuda (4)",
	"Loyal Assassin Kuda (5)", 
	"Dark Winged Ardin (4)",
	"Dark Seraph Ardin (5)", 
	"Semira (4)",
	"Pumqueen Semira (5)", 
	"Hadaron (4)",
	"Heartless Hadaron (5)",
	"Royal Edge Priscilla (4)",
	"Poinsetta Priscilla (5)",
	"Dark Keeper Lidor (4)",
	"Draconian Varfed (5)",
	"Gilded Armor Vanberk (4)",
	"Blaze Armor Vanberk (5)",
	"Alchemist Rigness (4)",
	"Synthesizer Rigness (5)",
	"Floret Petal Rosetta (4)",
	"Floret Queen Rosetta (5)",
	"Dragoon Elder Bargus (4)",
	"Dragoon Lord Bargus (5)",
	"Priestess Elmedia (4)",
	"High Priestess Elmedia (5)",
	"Dark Blades Zergel (4)",
	"Penta Blade Zergel (5)",
	"Scorching Alpha (5)",
	"Piercing Tazer (5)",
	"Thorned Tora (5)",
	"Admonition Kanon (5)",
	"Larking Kira (5)",
	"Misfortune Feeva (5)",
	"Huntress Fang (4)",
	"Heroine Fang (5)",
	"Andaria (4)",
	"Swiftshot Andaria (5)",
	"Zedus (4)",
	"Boltstrike Zedus (5)",
	"Meiko (4)",
	"Cantata Meiko (5)",
	"Kaito (4)",
	"Sonata Kaito (5)",
	"Dolce Megurine Luka (4)",
	"Duetto Megurine Luka (5)",
	"Deadly Bonnie (4)",
	"Fatal Spark Bonnie (5)",
	"Cottontail Carrol (4)",
	"Egg Hunter Carrol (5)"	
];
 
var randomType = function () {
	var index = Math.floor(Math.random () * types.length);
	return types[index];
};
 
var randomSummon = function () {
	var index = Math.floor(Math.random () * units.length);
	return units[index];
};
 
var SummonPlugin = { 
    init: function (client, imports) {
	const requiresAdmin = imports.admin.requiresAdmin;
        return {
            handlers: {
                '!summon': function (command){
                	if(!isDisabled)
                		client.act(command.channel, "opens the gate for " + command.nickname + " and pulls a " + randomType() + " " + randomSummon() );
                	else
                		client.say(command.channel, "Summoning has been disabled");
                }, 
                '!disable': requiresAdmin(function (command){
                	client.say(command.channel, "Summoning has been disabled");
                	isDisabled = !isDisabled;
                }), 
            },
            help: {
                'summon': [
                    'summon',
                    ' ',
                    'Pulls a random 3-5 star unit from the summon gate!'
                ]
            },
            commands: ['summon']
        };
    },
    requiresRoles: ['admin']
};
module.exports = SummonPlugin;	