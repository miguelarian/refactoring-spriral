const spiral = (size) => {
    if (size < 3 || isEvenNumber(size))
        throw Error('Size must be odd number >= 3')

    const matrix = Array.from(Array(size), () =>
        Array.from(Array(size), () => 0)
    )
    let row = Math.floor(size / 2)
    let col = row
    let direction = 0
    let value = 1
    const square = size * size

    while (value <= square) {
        do {
            matrix[row][col] = value++
            row += [0, 1, 0, -1][direction]
            col += [1, 0, -1, 0][direction]
        } while (
            matrix[row + [1, 0, -1, 0][direction]][
                col + [0, -1, 0, +1][direction]
            ]
        )

        direction = ++direction % 4
    }

    paintSpiral(size, row, col, matrix)
}

function paintSpiral(size, row, col, matrix) {
    let line
    const maxWidth = (size * size).toString().length + 1
    for (row = 0; row < size; row++) {
        line = ''
        for (col = 0; col < size; col++)
            line += matrix[row][col].toString().padStart(maxWidth, ' ')
        console.log(line)
    }
}

function isEvenNumber(size) {
    return size % 2 === 0
}

module.exports = spiral
