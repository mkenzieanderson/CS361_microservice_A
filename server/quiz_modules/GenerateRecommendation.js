// plant type light ranges
const MIN_FLOWERING =   160;
const MAX_FLOWERING =   220;
const MIN_SUCCULENT =   120;
const MAX_SUCCULENT =   160;
const MIN_FERN =        100;
const MAX_FERN =        140;
const MIN_TROPICAL =    120;
const MAX_TROPICAL =    160;
const MIN_VINE =        170;
const MAX_VINE =        210;

// window direction values
const NORTH =   50;
const SOUTH =   100;
const EAST =    65;
const WEST =    75;
const NO_WINDOW = 0;

// hours of daylight values
const LESS_SIX =        20;
const SIX_TEN =         40;
const ELEVEN_FIFTEEN =  60;
const SIXTEEN_TWENTY =  80;
const MORE_TWENTY =     100;

// uv light values
const NO_GROW_LIGHT =  0; 
const HAS_GROW_LIGHT = 100;

// response blurbs
const NEEDS_MORE_LIGHT =        "Based on your responses, it sounds like your plant may not be getting enough light. To increase the amount of light that your plant gets, try moving your plant to a south-facing window, or try out a Grow light to substitute natural light. If you are already using a Grow light, you could try changing the settings such that the light emits high frequency rays at longer time intervals";
const GETTING_ENOUGH_LIGHT =    "Based on your responses, it sounds like your plant is getting just the right amount of light for its needs. Keep up what you are doing, and your plant should stay happy!";
const NEEDS_LESS_LIGHT =        "Based on your responses, it sounds like your plant may be getting too much light. To lessen the amount of light that your plant receives throughout the day, you could move the plant to a north-facing window or to an east-facing window. If you are using a Grow light, you may consider changing its settings such that it emits lower frequency light at smaller time intervals."; 


function determineMinMax(response) {
    if (response === 'A') {
        return [MIN_FLOWERING, MAX_FLOWERING];
    } else if (response === 'B') {
        return [MIN_SUCCULENT, MAX_SUCCULENT];
    } else if (response === 'C') {
        return [MIN_FERN, MAX_FERN];
    } else if (response === 'D') {
        return [MIN_TROPICAL, MAX_TROPICAL];
    } else if (response === 'E') {
        return [MIN_VINE, MAX_VINE]
    } else {
        return "Error"
    }
};

function windowScore(response) {
    if (response === 'A') {
        return NORTH;
    } else if (response === 'B') {
        return SOUTH;
    } else if (response === 'C') {
        return EAST;
    } else if (response === 'D') {
        return WEST;
    } else if (response === 'E') {
        return NO_WINDOW;
    } else {
        return "Error"
    }
};

function daylightScore(response) {
    if (response === 'A') {
        return LESS_SIX;
    } else if (response === 'B') {
        return SIX_TEN;
    } else if (response === 'C') {
        return ELEVEN_FIFTEEN;
    } else if (response === 'D') {
        return SIXTEEN_TWENTY;
    } else if (response === 'E') {
        return MORE_TWENTY;
    } else {
        return "Error"
    }
};

function growLightScore(response) {
    if (response === 'A') {
        return HAS_GROW_LIGHT;
    } else if (response === 'B') {
        return NO_GROW_LIGHT;
    } else {
        return "Error"
    }
};

function GenerateRecommendation(responses) {
    const min_max_range = determineMinMax(responses[0]);
    if (min_max_range === "Error") {
        console.log("ERROR");
        return;
        // ADD ERROR RESPONSE HERE
    }
    let light_sum = 0;
    const window_score = windowScore(responses[1]);
    if (window_score === "Error") {
        console.log("ERROR");
        return;
        // ADD ERROR RESPONSE HERE
    }
    const daylight_score = daylightScore(responses[2]);
    if (daylight_score === "Error") {
        console.log("ERROR");
        return;
        // ADD ERROR RESPONSE HERE
    }
    const grow_light_score = growLightScore(responses[3]);
    if (daylight_score === "Error") {
        console.log("ERROR");
        return;
        // ADD ERROR RESPONSE HERE
    }
    light_sum += (window_score + daylight_score + grow_light_score);
    if (light_sum < min_max_range[0]) {
        console.log(NEEDS_MORE_LIGHT);
        return NEEDS_MORE_LIGHT;
    } else if (light_sum > min_max_range[1]) {
        console.log(NEEDS_LESS_LIGHT);
        return NEEDS_LESS_LIGHT;
    }
    return GETTING_ENOUGH_LIGHT;
}

module.exports = GenerateRecommendation;