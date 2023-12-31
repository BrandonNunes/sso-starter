export const translations = {
pt:{
  actions: {
    new: "Criar novo",
    edit: "Editar",
    show: "Mostrar",
    delete: "Deletar",
    bulkDelete: "Deletar tudo",
    list: "Listagem",
  },
  buttons: {
    save: "Salvar",
    addNewItem: "Adicionar Novo Item",
    filter: "Filtro",
    applyChanges: "Aplicar Mudanças",
    resetFilter: "Resetar",
    confirmRemovalMany: "Confirmar a remoção de {{count}} registro(s)",
    confirmRemovalMany_plural: "Confirmar a remoção de {{count}} registros",
    logout: "Logout",
    seeTheDocumentation: "Ver: <1>a documentação</1>",
    createFirstRecord: "Criar primeiro registro",
  },
  labels: {
    navigation: "Navegação",
    pages: "Páginas",
    selectedRecords: "Selecionados ({{selected}})",
    filters: "Filtros",
    adminVersion: "Admin: {{version}}",
    appVersion: "App: {{version}}",
    loginWelcome: "Bem vindo",
    Product: "Produtos",
  },
  // properties: {
  //   'active': 'Ativo',
  //   'active.true': 'Sim',
  //   'active.false': 'Não',
  // },
  resources: {
    cores: {
      properties: {
        ip_api: "Endereço IP do CORE",
        smtpId: "ID do servidor SMTP cadastrado",
        defRegional: "este CORE define regional",
        uf: "Nome CORE",
        descricao: "Sigla CORE",
      },
    },
    usuarios: {
      properties: {
        isAdmin: "Tipo usuario",
      },
    },
  },
  messages: {
    successfullyBulkDeleted: "removido(s) {{count}} registro(s)",
    successfullyBulkDeleted_plural: "removidos {{count}} registros",
    successfullyDeleted: "Registro deletado",
    successfullyUpdated: "Registro atualizado",
    thereWereValidationErrors: "Erros de validação, cheque-os abaixo",
    forbiddenError:
        "Você não pode executar a ação {{actionName}} em {{resourceId}}",
    anyForbiddenError: "Você não pode executar esta ação",
    successfullyCreated: "Criado novo registro",
    bulkDeleteError:
        "Houve um erro deletando registros, cheque o console para saber mais.",
    errorFetchingRecords:
        "Houve um erro buscando registros, cheque o console para saber mais.",
    errorFetchingRecord:
        "Houve um erro buscando record, cheque o console para saber mais.",
    noRecordsSelected: "Você não selecionou nenhum dos registros",
    theseRecordsWillBeRemoved:
        "O(s) seguinte(s) registro(s) vai(ão) ser deletado(s)",
    theseRecordsWillBeRemoved_plural:
        "Os seguintes registros vão ser deletados",
    pickSomeFirstToRemove:
        "Para deletar registros, você precisa selecionar primeiro",
    error404Resource: "Recurso de id: {{resourceId}} não encontrado",
    error404Action:
        "Recurso de id: {{resourceId}} não tem nenhuma ação nomeada de: {{actionName}}",
    error404Record:
        "Recurso de id: {{resourceId}} não tem nenhum registro com o ID: {{recordId}}",
    seeConsoleForMore:
        "Veja o console de desenvolvimento para mais detalhes...",
    noActionComponent:
        "Você deve implementar o componente de ação para a sua Ação",
    noRecordsInResource: "Não há registros neste recurso",
    noRecords: "Sem registros",
    confirmDelete: "Tem certeza de que deseja remover este item?",
    welcomeOnBoard_title: "Bem-vindo a bordo!",
    welcomeOnBoard_subtitle:
        "Agora você é um de nós! Preparamos algumas dicas para você começar:",
    loginWelcome: "", //'Para AdminBro - a melhor estrutura de administração para aplicativos Node.js, com base no React.',
    addingResources_title: "Adicionando recursos",
    addingResources_subtitle: "Como adicionar novos recursos à barra lateral",
    customizeResources_title: "Recursos Personalizados",
    customizeResources_subtitle:
        "Definindo comportamento, adicionando propriedades e mais ...",
    customizeActions_title: "Personalizar Ações",
    customizeActions_subtitle:
        "Modificando ações existentes e adicionando novas",
    writeOwnComponents_title: "Escreva os Componentes",
    writeOwnComponents_subtitle: "Como modificar a aparência do AdminBro",
    customDashboard_title: "Painel Personalizado",
    customDashboard_subtitle:
        "Como modificar esta visualização e adicionar novas páginas na barra lateral",
    roleBasedAccess_title: "Controle de acesso baseado em função",
    roleBasedAccess_subtitle:
        "Crie funções de usuário e permissões no AdminBro",
    community_title: "Junte-se à comunidade slack",
    community_subtitle:
        "Fale com os criadores do AdminBro e outros usuários AdminBro",
    foundBug_title: "Encontrou um bug? precisa de melhorias?",
    foundBug_subtitle: "Levantar um problema em nosso repositório GitHub",
    needMoreSolutions_title: "Precisa de soluções mais avançadas?",
    needMoreSolutions_subtitle:
        "Estamos aqui para fornecer a você um belo design de UX/UI e um software feito sob medida com base (não apenas) no AdminBro",
    invalidCredentials: "Email e/ou senha errados",
  },
  "components": {
    "Login": {
      "welcomeHeader": "Bem-Vindo",
      "welcomeMessage": "Painel administrativo para as entidades do banco de dados",
      "properties": {
        "email": "Email",
        "password": "Senha"
      },
      "loginButton": "Login"
    }
  },

}
};
