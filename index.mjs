function* generatorFunc() {
    console.log('ジェネレータ関数開始')
    console.log('yield 1')
    yield 1
    console.log('yield 2')
    const yield2 = yield 2
    console.log(yield2)
    console.log('yield 3')
    yield 3
    console.log('ジェネレータ関数終了')
    return 'ジェネレータ関数戻り値'
}

const generator = generatorFunc()

console.log(generator.next())
console.log(generator.next())
console.log(generator.next(true))
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())