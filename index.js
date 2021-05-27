/*Criar funções construtoras que herdam o prototype de outras funções*/

/*Função que servirá de base*/

function Base (nome, preco,){
    this.nome = nome;
    this.preco = preco;
}

/*Passando os métodos no prototype da função base, está função cria um receptor de roupas*/

Base.prototype.diaAumento = function(quantia){
    this.preco += quantia;
};
Base.prototype.diaDesconto = function(quantia){
    this.preco -= quantia;
};

/*Inicio da nova função*/

function Novasroupas (nome, preco, marca, tipotec){
    Base.call(nome, preco,);
    this.marca = marca;
    this.tipotec = tipotec;
}

/*Declarando o criador correto e também colocando o prototype da função base*/

Novasroupas.prototype = Object.create(Base.prototype);
Novasroupas.prototype.constructor = Novasroupas;

/*Outra função */
function Maisroupas (nome, preco, marca, tipotec, cor){
    Novasroupas.call(nome, preco, marca, tipotec);
    this.cor = cor;
}

Maisroupas.prototype = Object.create(Novasroupas.prototype);
Maisroupas.prototype.constructor = Maisroupas;

/*Outra função base de uso de pneus
function Novabase (marca, tipo, cor, modouso){
    this.marca = marca;
    this.tipo = tipo;
    this.cor = cor;
    this.modouso = modouso;
}

Novabase.prototype.carroPneu = function(carpneu){
    this.carpneu = carpneu
    if(carpneu === 'terra' || 'neve');
    print('Este pneu de carro é do tipo C');
};
Novabase.prototype.motoPneu = function(bikepneu){
    this.bikepneu = bikepneu;
    if(bikepneu === 'terra' || 'neve' || 'asfalto')
    print('Este pneu de moto é tipo HV');
};
*/
