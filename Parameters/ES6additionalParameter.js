const spread = (x, y, ...a) => {
    return (x + y) * a.length
}
console.log(spread(1, 2, "blabla", false, 56, 4+6))