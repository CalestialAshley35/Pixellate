// stringpixelator/index.js
function pixelate(text, size) {
    if (!text || typeof text !== 'string') {
        throw new Error('Text must be a valid string');
    }
    if (!size || typeof size !== 'number' || size <= 0) {
        throw new Error('Size must be a positive number');
    }

    const charMap = {
        'A': [
            ' ███ ',
            '█   █',
            '█████',
            '█   █',
            '█   █',
        ],
        'B': [
            '████ ',
            '█   █',
            '████ ',
            '█   █',
            '████ ',
        ],
        'C': [
            ' ███ ',
            '█    ',
            '█    ',
            '█    ',
            ' ███ ',
        ],
        'D': [
            '████ ',
            '█   █',
            '█   █',
            '█   █',
            '████ ',
        ],
        'E': [
            '█████',
            '█    ',
            '█████',
            '█    ',
            '█████',
        ],
        'F': [
            '█████',
            '█    ',
            '████ ',
            '█    ',
            '█    ',
        ],
        'G': [
            ' ███ ',
            '█    ',
            '█  ██',
            '█   █',
            ' ███ ',
        ],
        'H': [
            '█   █',
            '█   █',
            '█████',
            '█   █',
            '█   █',
        ],
        'I': [
            ' ███ ',
            '  █  ',
            '  █  ',
            '  █  ',
            ' ███ ',
        ],
        'J': [
            '  ███',
            '   █ ',
            '   █ ',
            '█  █ ',
            ' ██  ',
        ],
        'K': [
            '█   █',
            '█  █ ',
            '███  ',
            '█  █ ',
            '█   █',
        ],
        'L': [
            '█    ',
            '█    ',
            '█    ',
            '█    ',
            '█████',
        ],
        'M': [
            '█   █',
            '██ ██',
            '█ █ █',
            '█   █',
            '█   █',
        ],
        'N': [
            '█   █',
            '██  █',
            '█ █ █',
            '█  ██',
            '█   █',
        ],
        'O': [
            ' ███ ',
            '█   █',
            '█   █',
            '█   █',
            ' ███ ',
        ],
        'P': [
            '████ ',
            '█   █',
            '████ ',
            '█    ',
            '█    ',
        ],
        'Q': [
            ' ███ ',
            '█   █',
            '█   █',
            '█  ██',
            ' ████',
        ],
        'R': [
            '████ ',
            '█   █',
            '████ ',
            '█  █ ',
            '█   █',
        ],
        'S': [
            ' ████',
            '█    ',
            ' ███ ',
            '    █',
            '████ ',
        ],
        'T': [
            '█████',
            '  █  ',
            '  █  ',
            '  █  ',
            '  █  ',
        ],
        'U': [
            '█   █',
            '█   █',
            '█   █',
            '█   █',
            ' ███ ',
        ],
        'V': [
            '█   █',
            '█   █',
            '█   █',
            ' █ █ ',
            '  █  ',
        ],
        'W': [
            '█   █',
            '█   █',
            '█ █ █',
            '██ ██',
            '█   █',
        ],
        'X': [
            '█   █',
            ' █ █ ',
            '  █  ',
            ' █ █ ',
            '█   █',
        ],
        'Y': [
            '█   █',
            ' █ █ ',
            '  █  ',
            '  █  ',
            '  █  ',
        ],
        'Z': [
            '█████',
            '   █ ',
            '  █  ',
            ' █   ',
            '█████',
        ],
    };

    const lines = Array(size * 5).fill(''); // To hold the pixelated result
    for (const char of text.toUpperCase()) {
        if (!charMap[char]) continue;
        charMap[char].forEach((line, i) => {
            const scaledLine = line
                .replace(/ /g, ' '.repeat(size))
                .replace(/█/g, '█'.repeat(size));
            for (let j = 0; j < size; j++) {
                lines[i * size + j] += scaledLine + ' ';
            }
        });
    }

    return lines.map((line) => line.trim()).join('\n');
}

module.exports = { pixelate };
