const productsTables = [

    [
        ['Cahier Sombreroche', 7.00, 4, 0.05],
        ['Feutre indélébile générique', 3.99, 5, 0.2],
        ['Stylo à bille Sib', 35, 12, 0.2]
    ],

    [
        ['Carnet Capiha Format A4', 8.23, 1, 0.05],
        ["Cartouche de feuille d'imprimante 90g/m²", 5, 2, 0.2]
    ],

    [
        ['Lot de craies', 3.99, 3, 0.2],
        ['Tableau blanc', 12.00, 1, 0.2]
    ]

]

function computeTaxesProducts(productsTable) {
    let price = 0
    for (line of productsTable) {
        price = price + line[1] * line[2] * (1 + line[3])
    }
    console.log('Total Price with taxe: ', price.toFixed(2), ' €')
}

for (let table of productsTables) {
    computeTaxesProducts(table)
}
