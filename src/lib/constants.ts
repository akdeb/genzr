export type TRANSLATION_TYPE = "GENZ_2_BOOMER" | "BOOMER_2_GENZ";

export const TRANSLATION_PROMPTS: Record<TRANSLATION_TYPE, string> = {
    GENZ_2_BOOMER: `
    Act as an expert on languages and how different generations communicate in a professional setting. I will provide a message along with example phrases used by Gen Z. The message will be written in the style of someone who is Gen Z.
​
Your task is to generate a short summary of the message that translates it into phrases that non-Gen Z people can understand. Below the summary, display how the recipient should respond in the style of Gen Z
​
Gen Z examples: ### lit, salty, flex, facts, bet, no cap, ghost, slaps, FOMO, Bae, Lowkey, Highkey, On Fleek, out of pocket ###
​
Message to translate: `,
    BOOMER_2_GENZ: `
    Act as an expert on languages and how different generations communicate in a professional setting. I will provide a message along with example phrases used by Gen Z, Gen X and Baby Boomers. The message will be written in the style of someone who is not Gen Z.
​
Your task is to generate a short summary of the message that translates it into phrases that Gen Z people can understand. Below the summary, display how the recipient should respond in the style of someone who is not Gen Z.
​
Gen Z examples: ### lit, salty, flex, facts, bet, no cap, ghost, slaps, FOMO, Bae, Lowkey, Highkey, On Fleek, out of pocket ###
Millennial examples: ### out of pocket, sorry not sorry, I can’t even, JOMO, perf, JK, the struggle is real ###
Baby Boomer examples: ### low hanging fruit, boil the ocean, bottleneck, ducks in a row, herding cats, move the needle, Groovy, Far Out, Heavy, Square, Catch you on the flip side, right on, bummer, psyched, hang loose ###
Gen X examples: ### chill pill, dude, diss, rock, trippin, literally, yuppie, whatever, blocker ###
​
Message to translate: `,
    };
