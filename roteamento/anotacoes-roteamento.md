*Roteamento:

- criando novo roteamento: ng new roteamento / depois vai perguntar se quer add o angular routing , respondi não pq vamos adicionar manualmente aqui.
- entrar na pasta criada: cd roteamento
-instalar o angular router: npm i @angular/router
- criei um app-routing.module.ts e acionei no import do app.module.ts .
- editei o app-routing.module.ts, primeiro adicionando o import de RouterModule.forRoot e adicinando a variavel routes com o vetor primeira pagina.
- criei o component primeira-pagina , e relacionei no app-routing.module
- editei o html do primeiro-pagina-component 
- fiz o export : exports: [RouterModule]
para que seja exportado no app.module.ts:
@NgModule({
  declarations: [
    AppComponent,
    PrimeiraPaginaComponent
  ],

- no app.component.html: adiciono o <router-outlet></router-outlet>
pra exibir o q declarei com o router.
- no terminal : ng serve --open 
- irá abrir o projeto, como eu declarei a rota como primeira-pagina, ao abrir o browser , preciso por o /primeira-pagina

----------------
*adicionando navegação entre páginas. 

- no app.component.html fez estrutura :
<nav>
  <ul>
    <li><a routerLink="primeira-pagina">Primeira Página</a></li>
    <li><a routerLink="segunda-pagina"></a>Segunda Página</li>
  </ul>
</nav>
<router-outlet></router-outlet>

- so vamos criar ainda o componente segunda pagina e por um h2 generico para exemplo. e funcionar no codigo acima. 

--
-Trabalhando navegação 

adicionei um botao para o proximo exemplo:
<h2>Primeira página</h2>
<button type="button" (click)="moverParaSegundaPagina()" >Ir para a segunda Página</button>

- para construir o metodo do click, é dentro do primeira-pagina.component.ts:
  constructor(
    private router: Router
  ) {}

  moverParaSegundaPagina() {
    this.router.navigate(["segunda-pagina"])
  }

 *Redirecionamento já para a primeira pagina:
  adicionar no app-routing-module.ts um path vazio  + redirectTo: "pagina-desejada" , patchMatch: "full"
  ex:  
   {path: "", redirectTo: "primeira-pagina", pathMatch: "full" }

* Pagina notFound:
-criei novo componente "pagina-nao-encontrada"
- usa o ** , assim qualquer endereço digitado não existente mostrará esse page Not Found. 
ex: 
  {path: "**", component: PaginaNotfoundComponent }

* Parametros de rota ou de consulta (Query params)

.PARAMETROS DE ROTA
- criei o component "pagina-com-parametros" 
- no app-routing.module.ts adicionar a rota :
    {path: "pagina-com-parametros/:id", component: PaginaComParametrosComponent }
- no constructor do componente "pagina-com-parametros" :
  . implements OnInit 
  . construtor declarar rota a ser usada:
    constructor(private route: ActivatedRoute){}
.metodo a disparar com nginit (//number serve aqui para transformar o id string em number//): esse metodo vai mapear os parametros, buscando o id adicionado no parametro (no caso o id apos o / no endereço EX: locahost/pagina-principal/2  o 2 é o id/parametro)

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get("id")); 
    })
  }

  -defini o que seria o id, podendo ser um number ou nulo:
    id: number | null = null; 

.PARAMENTROS DE CONSULTA 
-no html componente pagina-com-paramentros: adicionei
  <p *ngIf="nome">Query Param de nome: {{ nome }}</p>
  <p *ngIf="idade">Query Param de idade: {{ idade }}</p>

  o *ngIf serve para mostrar SE tiver o parametro digitado (nesse caso no endereço como exemplo locahost/paginaprincipal/4?nome=joao&idade=23)

  -como no html declarei o nome e idade, preciso declarar no componente.ts respectivo, declarei no pagina-com-parametros:
  idade: number | null=null;
  nome: string | null= "";

  e adicionei o seguinte metodo no constructor:
      this.route.queryParamMap.subscribe(params => {
      this.idade = Number(params.get("idade"));
      this.nome = params.get("nome"); 

    })

*Módulo x Componente
um módulo pode conter diversos componentes. 
-dentro de uma aplicação o exemplo: módulo produto -e dentro, alguns componentes.

*LAZY LOADING
-Carregar somente o necessário para que a página funcione. 
-Para exemplo, criei o modulo lazy-loading
  $ ng g module lazy-loading --route=lazy-loading --module=app.module 
  (dessa forma acima ele cria o módulo lazy-loading ja com componente principal / o route e )

  -o loadchildren pede um callback, uma função.   no caso, o import do nosso modulo-> caminho do nosso modulo, then - modo assincrono. 

*ROUTE GUARD 
- guardar , proteger as rotas
- gerei o component pagina-protegida, adicionei um botao no html dele, adicionei a rota no app-routing. 
- agora vamos proteger a rota, só irá ter acesso após login, pra isso vamos começar criando um route guard
- no terminal criei com:  ng g guard auth
  vai abrir opções de route guard, vou escolher o "canActivate"

-no auth.guard.ts vou trocar o return para false. 
- no app.routing.ts, na declaração da rota de pagna-protegida, vou adicionar o  canActivate: [authGuard] 
  ex: {path: "pagina-protegida", component: PaginaProtegidaComponent, canActivate: [authGuard] },

Como declarei false, ao clicar no link da pagina na home, ela nao carrega pois esta protegida.

- como quero poder entrar quando estiver logada, vou criar o componente login para exemplificar:
  no template do componente login. obs: usei o [(ngModel)],para two-way data binding e para funcionar preciso ir no import do app.module.ts e adicionar o Formsmodule
- adicionei um botao no login, com evento de click e vou criar a função/metodo no contructor do login.ts, vou usar um service nesse metodo, então cria ng g service auth , para fazer serviço de autenticação do login.

-no auth.service.ts :  fiz os métodos relacionado ao login.
-volto no login.component.ts para consumir o auth.service.ts 

- injeto o service:
      constructor(
       private  auth: AuthService
      ){ }

- injeto tb dentro do constructor a rota que será usada para acessar a pagina apos login:
  private router : Router

- no Login() adiciono o metodo com if :
{
    if (this.auth.login(this.email, this.senha)) {
      this.router.navigate(["pagina-protegida"]); 
      //após injetar aqui o router, vou usar para navegar á pagina desejada = "pagina-protegida" 
      return;
    }
    alert("Login está inválida");
    this.email = "";
    this.senha = "";
    //além do alert , vai limpar os campos 
  }

-no html login adicionei a função login () no botão :
  <button (click)="login()">Entrar</button>

- no pagina protetgida, alem do conteudo fiz um botão logout no template. pra ele funcionar:
  no template: 
  <button (click)="logout()">Logout</button>
  no componente descrever o metodo usando o service :
  export class PaginaProtegidaComponent {

  constructor(
    private auth: AuthService,
    private router: Router
  ){}

  logout(){
    this.auth.logout();
    this.router.navigate([""]);
  }

  OBSERVAÇÃO: PARA AO CLICAR NA PAGINA PROTEGIDA E SEGUIR PARA O LOGIN, PRECISARIA MUDAR O AUTH.GUARD, 
  PORÉM O CODIGO MOSTRADO NO VÍDEO TA DEPRECIADO. 