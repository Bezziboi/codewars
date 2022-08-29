// You will be given a string representing the garden such as:

// garden = 'gravel gravel gravel gravel gravel gravel gravel gravel gravel rock slug ant gravel gravel snail rock gravel gravel gravel gravel gravel gravel gravel slug gravel ant gravel gravel gravel gravel rock slug gravel gravel gravel gravel gravel snail gravel gravel rock gravel snail slug gravel gravel spider gravel gravel gravel gravel gravel gravel gravel gravel moss gravel gravel gravel snail gravel gravel gravel ant gravel gravel moss gravel gravel gravel gravel snail gravel gravel gravel gravel slug gravel rock gravel gravel rock gravel gravel gravel gravel snail gravel gravel rock gravel gravel gravel gravel gravel spider gravel rock gravel gravel'
// Rake out any items that are not a rock or gravel and replace them with gravel such that:

// garden = 'slug spider rock gravel gravel gravel gravel gravel gravel gravel'
// Returns a string with all items except a rock or gravel replaced with gravel:

// garden = 'gravel gravel rock gravel gravel gravel gravel gravel gravel gravel'

function rakeGarden(garden) {
    let rakedGarden= garden
                            .split(' ')
                            .map(value=>value=='rock'?'rock':'gravel')
                            .join(' ') 
    return rakedGarden;
}