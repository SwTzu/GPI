import Fuse from 'fuse.js';
import { champions } from './champions';

const validCommands = ['compra a ', 'reroll', 'comprar xp'];



const fuseOptions = {
    includeScore: true,
    threshold: 0.3
};


const fuse = new Fuse(champions, fuseOptions);

export const validateCommand = (command) => {
    const commandLowerCase = command.toLowerCase();
    const commandParts = commandLowerCase.split(' ');

    if (commandLowerCase.startsWith('compra a ')) {
        const inputChampion = commandParts.slice(2).join(' ');
        const result = fuse.search(inputChampion);
        if (result.length > 0 && result[0].score < 0.3) {
            const closestChampion = result[0].item;
            return { success: true, corrected_command: { action: 'compra a ', champion: closestChampion.charAt(0).toUpperCase() + closestChampion.slice(1)} };
        }
    } else if (validCommands.includes(commandLowerCase)) {
        return { success: true, corrected_command: { action: commandLowerCase } };
    }
    return { success: false };
};

// const testCommands = [
//     'compra a Aatrox',
//     'compra a lux',
//     'reroll',
//     'comprar xp',
// ];

// testCommands.forEach(command => {
//     const result = validateCommand(command);
//     console.log(`Command: "${command}" =>`, result);
// });