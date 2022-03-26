const ConversorDeNumeroRomano = require('./index.js')

test("Deve entender o símbolo I.", () =>{
    var conversorRomano = new ConversorDeNumeroRomano();
    var numero = conversorRomano.converte("I");
    expect(numero).toBe(1);
});

test("Deve entender o símbolo I.", () =>{
    var conversorRomano = new ConversorDeNumeroRomano();
    var numero = conversorRomano.romanoParaDecimal("I");
    expect(numero).toBe(1);
});

test("Deve entender o símbolo V.", () =>{
    var conversorRomano = new ConversorDeNumeroRomano();
    var numero = conversorRomano.converte("V");
    expect(numero).toBe(5);
});

test("Deve entender o símbolo V.", () =>{
    var conversorRomano = new ConversorDeNumeroRomano();
    var numero = conversorRomano.romanoParaDecimal("V");
    expect(numero).toBe(5);
});

test("Deve entender o símbolo X.", () =>{
    var conversorRomano = new ConversorDeNumeroRomano();
    var numero = conversorRomano.converte("X");
    expect(numero).toBe(10);
});

test("Deve entender o símbolo X.", () =>{
    var conversorRomano = new ConversorDeNumeroRomano();
    var numero = conversorRomano.romanoParaDecimal("X");
    expect(numero).toBe(10);
});

test("Deve entender o símbolo L.", () =>{
    var conversorRomano = new ConversorDeNumeroRomano();
    var numero = conversorRomano.converte("L");
    expect(numero).toBe(50);
});

test("Deve entender o símbolo L.", () =>{
    var conversorRomano = new ConversorDeNumeroRomano();
    var numero = conversorRomano.romanoParaDecimal("L");
    expect(numero).toBe(50);
});

test("Deve entender o símbolo C.", () =>{
    var conversorRomano = new ConversorDeNumeroRomano();
    var numero = conversorRomano.converte("C");
    expect(numero).toBe(100);
});

test("Deve entender o símbolo C.", () =>{
    var conversorRomano = new ConversorDeNumeroRomano();
    var numero = conversorRomano.romanoParaDecimal("C");
    expect(numero).toBe(100);
});

test("Deve entender o símbolo D.", () =>{
    var conversorRomano = new ConversorDeNumeroRomano();
    var numero = conversorRomano.converte("D");
    expect(numero).toBe(500);
});

test("Deve entender o símbolo D.", () =>{
    var conversorRomano = new ConversorDeNumeroRomano();
    var numero = conversorRomano.romanoParaDecimal("D");
    expect(numero).toBe(500);
});

test("Deve entender o símbolo M.", () =>{
    var conversorRomano = new ConversorDeNumeroRomano();
    var numero = conversorRomano.converte("M");
    expect(numero).toBe(1000);
});

test("Deve entender o símbolo M.", () =>{
    var conversorRomano = new ConversorDeNumeroRomano();
    var numero = conversorRomano.romanoParaDecimal("M");
    expect(numero).toBe(1000);
});

test("Deve entender o símbolo II.", () =>{
    var conversorRomano = new ConversorDeNumeroRomano();
    var numero = conversorRomano.romanoParaDecimal("II");
    expect(numero).toBe(2);
});

test("Deve entender o símbolo IV.", () =>{
    var conversorRomano = new ConversorDeNumeroRomano();
    var numero = conversorRomano.romanoParaDecimal("IV");
    expect(numero).toBe(4);
});

test("Deve entender o símbolo VI.", () =>{
    var conversorRomano = new ConversorDeNumeroRomano();
    var numero = conversorRomano.romanoParaDecimal("VI");
    expect(numero).toBe(6);
});

test("Deve entender o símbolo IX.", () =>{
    var conversorRomano = new ConversorDeNumeroRomano();
    var numero = conversorRomano.romanoParaDecimal("IX");
    expect(numero).toBe(9);
});

test("Não deve entender o símbolo IIII.", () =>{
    var conversorRomano = new ConversorDeNumeroRomano();
    var numero = conversorRomano.romanoParaDecimal("IIII");
    expect(numero).toBe(-1);
});

test("Deve entender o símbolo XXVIII.", () =>{
    var conversorRomano = new ConversorDeNumeroRomano();
    var numero = conversorRomano.romanoParaDecimal("XXVIII");
    expect(numero).toBe(28);
});

test("Não deve entender o símbolo VX.", () =>{
    var conversorRomano = new ConversorDeNumeroRomano();
    var numero = conversorRomano.romanoParaDecimal("VX");
    expect(numero).toBe(-1);
});

test("Não deve entender o símbolo XVIIII.", () =>{
    var conversorRomano = new ConversorDeNumeroRomano();
    var numero = conversorRomano.romanoParaDecimal("XVIIII");
    expect(numero).toBe(-1);
});

test("Deve entender o símbolo DCCLVII.", () =>{
    var conversorRomano = new ConversorDeNumeroRomano();
    var numero = conversorRomano.romanoParaDecimal("DCCLVII");
    expect(numero).toBe(757);
});

test("Deve entender o símbolo MMMDCCCLXVII.", () =>{
    var conversorRomano = new ConversorDeNumeroRomano();
    var numero = conversorRomano.romanoParaDecimal("MMMDCCCLXVII");
    expect(numero).toBe(3867);
});

test("Não deve entender o símbolo DMMMDCCCLXVII.", () =>{
    var conversorRomano = new ConversorDeNumeroRomano();
    var numero = conversorRomano.romanoParaDecimal("DMMMDCCCLXVII");
    expect(numero).toBe(-1);
});

test("Não deve entender o símbolo MMMDDDCCCLLLXXXVVVIII.", () =>{
    var conversorRomano = new ConversorDeNumeroRomano();
    var numero = conversorRomano.romanoParaDecimal("MMMDDDCCCLLLXXXVVVIII");
    expect(numero).toBe(-1);
});

test("Não deve entender o símbolo MMMDIDDCCCLLLXXXVVVIII.", () =>{
    var conversorRomano = new ConversorDeNumeroRomano();
    var numero = conversorRomano.romanoParaDecimal("MMMDIDDCCCLLLXXXVVVIII");
    expect(numero).toBe(-1);
});

test("Não deve entender o símbolo IIV.", () =>{
    var conversorRomano = new ConversorDeNumeroRomano();
    var numero = conversorRomano.romanoParaDecimal("IIV");
    expect(numero).toBe(-1);
});

test("Não deve entender o símbolo VIX.", () =>{
    var conversorRomano = new ConversorDeNumeroRomano();
    var numero = conversorRomano.romanoParaDecimal("VIX");
    expect(numero).toBe(-1);
});