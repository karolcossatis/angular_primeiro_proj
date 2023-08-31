*CRIAR PRIMEIRO COMPONENTE

export class nomedocomponenteComponent {}

a seguir acima do export vai por o depurador @component - para indicar que a classe é um componente.
para este depurador, precisa atrelar algumas informações:

SELETOR -Forma que irá se referir quando for utilizar o componente. aqui se utiliza o prefixo definido ao projeto (no arquivo angular.json ta especificado o prefix)- seguido do nome do componente, ex: "app-nome-componente"
ao adicionar o @component ele automaticamente irá importar component do angular

TEMPLATE: arquivo html que ira mostrar na tela, pode passar o arquivo html, ou a URL 

STYLES: atribuir uma folha de estilo ou até mesmo o estilo diretamente. por exemplo
styles: ["h2 { color: red;}"]

-- terminado o componente, precisa acrescentar o mesmo, na aplicação. 
dentro da pag: app.module.ts -> @NgModule -> declarations -> add o componente

-- Para mostrar na tela, precisa adicionar o componente no html: acrescentar um tag com o endereço/ seletor , ex: <app-primeiro-componente>

*OUTRA FORMA DE CRIAR UM COMPONENTE:
- pode ser criado pelo terminal, verifique sempre se esta na pasta correta:
exemplo:  cd fundamentos-angular

- ng generate component NomedoCompomente

- irá criar uma pasta já com tudo necessario, html, css, ts, spect(para testes). e já adiciona na declaração no module do app.ts

- nesse momento pode apagar o que veio diferente no components ts, na area do export class

----------------------
interpolação de texto: acrescentar informação que estao alem da classe, no template.

-no segundo componente, só tinha o <p> com uma frase simples.
-fui no html do segundo componente e add:
<h2>Aprofundando os conhecimentos em Angular</h2>
<p>{{ nome | uppercase }}</p> (nesse caso, o nome é uma 'variavel' e | pipe + uppercase usei para adicionar estilo)

- o nome precisa ser declarado la no componente.ts para funcionar:
export class SegundoComponenteComponent {
  nome = "karol";
}

| = o pipe é utilizado para formatar os templates, a forma como os dados aparecem na tela, no exemplo usado acima , foi add um '| uppercase', para que os dados de 'nome' fosse formatados para uppercase.

    -na documentação do angular, vc verifica diferentes formas de formatar com o |
    -Pode tb fazer o seu | :
        ng generate pipe nomedoseupipe (nesse arquivo foi o multiplicaPor)
    - pipe gerado, vou no arquivo, e modificar para agir como quero:
        antes:
        transform(value: unknown, ...args: unknown[]): unknown {
            return null;
        }
        depois:
        transform(valor: number, multiplicador: number): unknown {
            return valor * multiplicador;
        }

. nesse projeto fiz o pipe multiplicaPor e no terminal gerei mais um componente chamado 'pipecustomizado'
-no pipecustomizado.html, add : <p>{{2 | multiplicaPor: 3}}</p>
- na tela vai imprimir o resultado : 6 

--------------------------
PROPETY BINDING E EVENT BINDING
- Propriety biding: ligação de propriedade.  Ele permite que você associe valores a propriedades de elementos HTML ou componentes Angular e mantenha esses valores sincronizados ao longo do tempo. Essa técnica é usada para atualizar dinamicamente o conteúdo exibido na interface do usuário com base em dados ou estados específicos.

Com o Property Binding, você pode vincular o valor de uma propriedade no componente Angular a uma propriedade do elemento HTML. Isso é particularmente útil quando você deseja:

Atualizar o conteúdo exibido no DOM com base em dados do componente.
Interagir com entradas de usuário e alterar dinamicamente propriedades de elementos, como classes, estilos ou atributos.
A sintaxe para usar Property Binding no Angular é usando colchetes [ ]

    neste projeto, utilizei para incorporar uma imagem no html.
    -add uma imagem na pasta assets
    -adicionei o endereço no segundo-componente.ts : urlImagem = "/assets/img.png"
    -no segundoc-componente.html adiciona a tag img: <img [src]="urlImagem" width="300"> 

-Event bidign:  ligação de eventos. disparar um método a partir de um evento, tipo click botao.
Ele permite que você responda a ações do usuário, como cliques, movimentos de mouse, pressionamentos de teclas, etc., executando funções no componente Angular associado.

Com o Event Binding, você pode ouvir eventos disparados por elementos HTML e acionar ações específicas em resposta a esses eventos. Isso permite que você torne sua interface do usuário interativa e responsiva.

A sintaxe para usar Event Binding no Angular é utilizando parênteses ( ). 

        nesse projeto:
        - no segundo-componente.html :
        <button (click)="mostrarDataNascimento()" type="button">Mostrar data de Nascimento</button>
        -para funcionar, preciso montar o método 'mostrarDataNascimento'
        -dentro do segundo-componente.ts:
         mostrarDataNascimento(){
            alert(`A data de nascimento da ${this.nome} é ${this.data} !`)
        }
    

*TWO-WAY DATA BINDING: 
(ligação de dados bidirecional). Utilizado em formularios e input. É uma funcionalidade do Angular que permite vincular automaticamente o valor de um elemento HTML a uma propriedade em um componente, e vice-versa. Isso significa que as alterações na interface do usuário são refletidas imediatamente nas propriedades do componente, e as alterações nas propriedades do componente também são refletidas na interface do usuário.

Em outras palavras, o Two-Way Data Binding permite que você mantenha sincronizadas as alterações feitas tanto na interface do usuário quanto no código do componente.

A sintaxe para usar Two-Way Data Binding no Angular envolve a combinação de Property Binding e Event Binding. Ela é indicada pelo uso de [( )], como mostrado a seguir:

    -no projeto: criei um novo componente chamado two-way-data-binding (pelo terminal ng generate component two-way-data-binding).
    - alterei o arquivo ts e o html do two-way-data-binding adicionando o conteúdo desejado.
    -<label for="nome">Digite o nome:</label>
    <input type="text" [(ngModel)]="nome">
    <p>Nome digitado: {{ nome }}</p>
    ! o [(ngmodel)] = é o q da caracteristica two-way data binding, "puxa" a propriedade q desejo, nesse caso, propriedade 'nome'.
     -para o ng model funcionar : ir no app.module e  por no 'imports' a biblioteca: 'FormsModule'

*TYPAR 
    Este termo de refere a adicionar tipos de dados ás variáveis e parâmentros de uma aplicação, utilizando Typescript.

*RENDERIZANDO LISTAS
    - Criei mais um componente: ng generate component renderizando-listas
    - No renderizando-listas.ts:
        export class RenderizandoListasComponent {
            Celulares
        }
    - precisa TIPAR esse celulares , entao segui:
    -criei uma nova pasta "TYPES" com um novo arquivo 'Celular.ts'
    - e ai no arquivo 'celular.ts' crio o objeto:

            export interface Celular {
                    id: number;
                    nome: string;
                    descricao: string;
                    esgotado: boolean;
               }

    -volto no arquivo renderizando-listascomponent.ts e completo:

        export class RenderizandoListasComponent {
        celulares: Celular[] = [
        { id: 1, nome: "Celular XL", descricao: "Um celular grande", esgotado: false };
        { id: 2, nome: "Celular Normal", descricao: "Um celular somente", esgotado: false };
        { id: 3, nome: "Celular Mini", descricao: "Um celular pequeno", esgotado: true }
    ]
    }   

            -no arquivo renderizando-listas.html criei a estrutura html de lista. usei a biblioteca ng:
            *ngFor="let celular of celulares" = o ngFor, criou um for , um loop, para cada celular, de celulares, ele vai criar a estrutura declarada conforme descrevi. 

            *ngclass - adiciona uma classe, de acordo com a condicional declarada.
                [ngClass]="celular.esgotado ? 'esgotado' : ''" = nesse caso, adicionar a classe esgotado para uso do css esgotado. 

*INTERPOLAÇÃO:
-  A interpolação é uma maneira de exibir valores de variáveis ou expressões diretamente no template HTML do componente.

-No exemplo {{ sobrenome }} seria substituído pelo valor da variável sobrenome definida no componente e exibida no DOM. Isso é uma maneira simples de exibir dados dinâmicos na interface do usuário.

- técnica que o Angular oferece para interagir com os dados e exibir conteúdo dinâmico em seus templates. Além disso, você também pode usar Property Binding ([ ]), Event Binding (( )), Two-Way Data Binding ([( )]) e outras diretivas para manipular dados e interações entre componentes e o DOM.

*DECORADOR @INPUT e @OUTPUT:

- O @INPUT() permite que você crie componentes reutilizáveis e modulares, pois permite que os componentes pais forneçam dados específicos para os componentes filhos. Isso é especialmente útil quando você precisa de componentes que exibem informações diferentes, mas têm a mesma estrutura ou comportamento.

-O decorador @OUTPUT() permite a comunicação entre componentes pais e filhos, mas desta vez permitindo que o componente filho emita eventos para o componente pai. Isso é útil quando um componente filho precisa notificar um componente pai sobre a ocorrência de algum evento, como um clique de botão.

O @Output() é usado em conjunto com a classe EventEmitter para criar um evento personalizado que pode ser capturado e tratado pelo componente pai.

-NO NOVO COMPONENTE componente-personalizado, usei o decorador @input no .ts: 
    export class ComponentePresonalizadoComponent {
    @Input() nome = ""
    @Input() sobrenome = "";
    }
    
    e no template usei interpolação, pois quero nome e sobrenome distintos a cada uso:
    <p>{{nome}} {{sobrenome}}</p> 

    no app.html pude usar o componente 2 vezes, com informações distintas:
    <app-componente-presonalizado nome="karol" sobrenome="cossatis"></app-componente-presonalizado>
    <app-componente-presonalizado nome="katia" sobrenome="cossatis"></app-componente-presonalizado>

- Para exemplificar o Output, gerei 2 novos componentes, 'componente-pai' e 'componente-filho' para mostrar a interação entre os 2 componentes. (vide anotações nos componentes descritos.)

* SERVIÇOS: funcionalidade para reutilizar em diversos componentes.
- para exemplo: criei o componente exemplo-serviços1 
    no ts. declarei nome = "";
    no template: adicionei um input com ngModel:
    <input type="text" [(ngModel)]="nome"> 
<!-- aqui o ngmodel vai apontar para nome, ele faz: uma ligação de dados bidirecional -->
    e adicionei um botão que ao clicar, usará um metodo:
    <button type="button" (click)="adicionarNome()">Adicionar nome</button>
<!--Criado o botao, que irá ter o metodo adicionarNome() ao evento de click nele.-->
    esse metodo adicionarNome() vai ser descrito no 'exemplo-servicos1':
        export class ExemploServicos1Component {
        nome = "" ;

        adicionarNome() {
            alert(`O nome ${this.nome} foi adicionado`);
        }

        }
    depois disso, adicione o component no app.component.ts.

- Criei o exemplo-servicos2 com a mesma funcao, porem muda os nomes, vou gerar um novo serviço, tipo uma função, um método que podera ser utilizado em ambos compomnentes. 
no caso do exemplo-servicos1 e o 2 tem em comum o retorno do metodo - que é o alert. 
entao se gera um serviço para ser reutilizado em ambos, assim nao sera necessario descrever o mesmo metodo 2 vezes. 
    -ng generate service logger
    -no logger.service.ts , descrevi o método que sera usado em 2 componentes  :
    import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  mensagens: string[] = [];

  logar(mensagem: string) {
    console.log(mensagem);
    this.mensagens.push(mensagem);
   }

   exibeTodosOsLogs() {
    console.log(this.mensagens);
   }
}
    -Usei no componente exemplo-servicos1.ts da seguinte forma: 
        export class ExemploServicos1Component {
        nome = "" ;

        constructor(private logger: LoggerService){ //injetando aqui o serviço logger. 
            //como usei o private, eu só posso usar o método aqui , como está abaixo , dentro do adicionarNome
            //caso deixasse como public, poderia declarar em outro lugar como direto no template.

        }

        adicionarNome() {
        // alert(`O nome ${this.nome} foi adicionado`); *Apos fazer o logger vou alterar isto para:

        this.logger.logar(`O nome ${this.nome} foi adicionado`);
        }
        }
    
    -Pode usar tambem direto no template:
    Por exemplo, usei no exemplo-servicos2.html: 

    <button type="button" (click)="this.logger.exibeTodosOsLogs()">Exibe todos Logs </button>

*CICLO DE VIDA DO COMPONENTE
-ng generate component ciclo-de-vida // componente criado para exemplificar
-criado tb depois o ciclo-de-vida-pai , onde foi usado o ngmodel (two data binding)
os 2 componentes foram interligados para o exemplo. 

- sobre ciclo de vida:
Os componentes no Angular passam por um ciclo de vida predefinido enquanto são criados, atualizados e destruídos. Isso permite que você controle o comportamento do componente em diferentes momentos, executando ações específicas em cada etapa do ciclo de vida. 
O ciclo de vida de um componente no Angular é gerenciado automaticamente pelo framework. Cada um desses métodos permite que você execute ações específicas em momentos específicos do ciclo de vida do componente. Isso é útil para tarefas como inicialização de dados, atualizações da interface do usuário, gerenciamento de recursos e muito mais.

Lembre-se de que o uso adequado das etapas do ciclo de vida é importante para garantir um comportamento correto e eficiente do seu componente.

Aqui está uma visão geral das etapas do ciclo de vida de um componente Angular:

ngOnChanges: Esse método é chamado quando um valor de entrada (Input) do componente é alterado. Ele recebe um objeto com as alterações detectadas.

ngOnInit: Esse método é chamado depois que o componente e suas propriedades iniciais são inicializados. É um bom lugar para realizar inicializações adicionais.

ngDoCheck: Esse método é chamado durante cada detecção de mudança e é útil para detecção manual de mudanças que o Angular não pode detectar automaticamente.

ngAfterContentInit: Esse método é chamado após o conteúdo inserido no componente (por meio de projeção de conteúdo) ser inicializado.

ngAfterContentChecked: Esse método é chamado após cada verificação do conteúdo inserido.

ngAfterViewInit: Esse método é chamado após a exibição do componente e suas visualizações filho serem inicializadas.

ngAfterViewChecked: Esse método é chamado após cada verificação da exibição do componente e suas visualizações filho.

ngOnDestroy: Esse método é chamado antes de o componente ser destruído. Ele é usado para executar ações de limpeza, como cancelar assinaturas de observáveis e liberar recursos.

*NGCONTENT 
- elemento utilizado para reutilizar o codigo, quando queremos utiizar uum componente dentro do outro.
- ng generate component card 
- 