const add = (a,b) => a+b;

test('Should Add 2 numbers',()=>{
    const result = add(3,4)
    expect(result).toBe(7)
})