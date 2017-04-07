function combinacoes(a, b, totalCombincao, acc, retorno, t) {
    console.log(t, a, b, totalCombincao, acc, retorno);
    if ( acc == undefined ) acc = [];
    if ( retorno === undefined ) retorno = [];

    if ( totalCombincao == 0 ) {
        retorno.push(acc);
        return retorno;
    }
    if ( a > b ) return retorno;

    combinacoes(a+1, b, totalCombincao-1, acc.concat([a]), retorno, '1º');

    return combinacoes(a+1, b, totalCombincao, acc, retorno, '2º');
}


var a = ['R', 'I', 'A'];
var t = combinacoes(0, a.length - 1, 2);
var n = t.map(function(c){ return c.map(function(cc){ return a[cc]; }) })

console.log('Vai arrumar nada aqui');
console.log(t);
console.log(n);
