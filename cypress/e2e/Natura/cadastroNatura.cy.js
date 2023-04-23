import Cadastro from '../../pages/Home/cadastroPage'

describe('Criar cadastro no site natura', () => {

    it('Criar cadastro na natura', () => {

        Cadastro.siteNatura();
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
        Cadastro.enviar();
        Cadastro.criterios();
        Cadastro.cadastroComSucesso();

    });

    it('Logar com novo cadastro no site natura', () => {

        Cadastro.siteNatura();
        Cadastro.aceitarCookies();
        Cadastro.itens();
        Cadastro.loginNaruta();
        Cadastro.emailLogin();
        Cadastro.senhaLogin();
        Cadastro.entrar();
        Cadastro.criterios();
        Cadastro.cadastroComSucesso();

    });
});