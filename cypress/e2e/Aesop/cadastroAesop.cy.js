import Cadastro from '../../pages/Home/cadastroPage'

describe('Criar cadastro no site Aesop', () => {

    it('Criar cadastro na aesop', () => {

        Cadastro.siteAesop();
        Cadastro.aceitarCookies();
        Cadastro.itens();
        Cadastro.cadastrar();
        Cadastro.primeiroNome();
        Cadastro.sobrenome();
        Cadastro.email();
        Cadastro.senha();
        Cadastro.repetirSenha();
        Cadastro.cpf();
        Cadastro.dataDeNascimento();
        Cadastro.genero();
        Cadastro.celular();
        Cadastro.termos();
        Cadastro.termosNovidades();
        Cadastro.termosInformacoes();
        Cadastro.enviar();
        Cadastro.criterios();
        Cadastro.cadastroComSucesso();

    });

    it('Logar com novo cadastro no site Aesop', () => {

        Cadastro.siteAesop();
        Cadastro.aceitarCookies();
        Cadastro.itens();
        Cadastro.loginAesop();
        Cadastro.emailLogin();
        Cadastro.senhaLogin();
        Cadastro.entrar();
        Cadastro.criterios();
        Cadastro.cadastroComSucesso();

    });
});