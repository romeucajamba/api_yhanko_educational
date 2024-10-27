# 📚 **Yhanko Edu Tecnology - API para Rede Social Educacional**

Uma API projetada para conectar desenvolvedores a recursos educacionais e permitir a interação entre eles, promovendo o aprendizado e o desenvolvimento conjunto. A YhankoEt possibilita a busca por cursos, plataformas, instituições e professores de qualidade, além de funcionalidades de rede social, chatbot, notificações e análise de desempenho.  

## 📖 **Sobre o Projeto**

YhankoET é uma API para uma rede social que oferece recursos e ferramentas para estudantes de tecnologia. Com ela, os usuários podem se cadastrar, interagir, criar conexões, acessar conteúdo educativo, monitorar seu progresso e muito mais. A API será consumida por um aplicativo mobile.

### 🎯 **Principais Funcionalidades**
- **Perfil**: cadastro, edição, foto de perfil, capa, biografia.
- **Interação**: chat privado, chatbot, publicações, comentários.
- **Recursos Educacionais**: busca por instituições, canais e professores de tecnologia.
- **Desempenho**: gráfico de monitoramento de atividades.
- **Organização Pessoal**: agenda, lista de tarefas, lembretes e bloco de notas.
- **Configurações**: alteração de senha, idioma, tema, etc.

## 🛠 **Tecnologias Utilizadas**

- **Backend**: Node.js, Fastify, TypeScript, Swagger
- **Banco de Dados**: PostgreSQL com ORM Prisma
- **Autenticação e Segurança**: JWT, criptografia de senhas
- **Validação de Dados**: Zod
- **Upload de Arquivos**: multer
- **WebSocket**: Socket.io
- **Integração de Chatbot**: Gemini API (Google)

## 🗂 **Estrutura da Arquitetura**

A API segue uma **Arquitetura Monolítica** com princípios **SOLID** para garantir alta coesão e baixo acoplamento, o que facilita a manutenção e escalabilidade. 

### **Principais Componentes**
1. **Controllers**: Contêm a lógica dos endpoints, manipulando requisições e respostas.
2. **Use Cases**: Aplicam a lógica de negócio, separando regras específicas.
3. **Repositories**: Realizam as operações com o banco de dados.
4. **Factories**: Criam instâncias das classes, facilitando a gestão de dependências.
5. **Middlewares**: Tratam autenticação, autorização e validações gerais.

## ⚙️ **Requisitos e Configurações do Projeto**

### **Instalação**
Para configurar o projeto localmente:
```bash
# Clonar o repositório
git clone https://github.com/username/DevConnect.git

# Acessar o diretório do projeto
cd DevConnect

# Instalar dependências
npm install

# Configurar o banco de dados
npx prisma migrate dev --name init
```

### **Iniciar a API**
```bash
# Iniciar o servidor
npm run dev
```

### **Configuração de Variáveis de Ambiente**
Crie um arquivo `.env` com as seguintes variáveis:
```
DATABASE_URL=postgresql://user:password@localhost:5432/devconnect
JWT_SECRET=your_secret_key
GOOGLE_GEMINI_API_KEY=your_gemini_api_key
```

## ✅ **Requisitos Funcionais e Não Funcionais**

### **Funcionais**
- Cadastro e autenticação de usuários
- Recuperação e alteração de senha
- Manipulação de perfis (edição, visualização, upload de foto de perfil)
- Criação e manipulação de postagens e comentários
- Envio de mensagens privadas e interação com chatbot
- Sistema de busca e recomendações de cursos e instituições
- Integração de lista de amigos, notificações e estatísticas de uso

### **Não Funcionais**
- Persistência dos dados em PostgreSQL
- Autenticação via JWT
- Senhas armazenadas de forma segura e criptografada
- Interfaces de dados alinhadas na horizontal (específico do frontend)

## 📋 **Estrutura da API**

### **Autenticação**
| Método | Endpoint             | Descrição                      |
|--------|-----------------------|-------------------------------|
| POST   | `/auth/register`     | Cadastro de usuário           |
| POST   | `/auth/login`        | Login do usuário              |
| POST   | `/auth/recover`      | Recuperação de senha          |

### **Perfil do Usuário**
| Método | Endpoint                 | Descrição                            |
|--------|---------------------------|--------------------------------------|
| GET    | `/user/profile`           | Visualizar dados do perfil          |
| PUT    | `/user/profile`           | Editar dados do perfil              |
| POST   | `/user/profile/picture`   | Upload de foto de perfil            |
| DELETE | `/user/profile/picture`   | Remover foto de perfil              |

### **Chat e Mensagens**
| Método | Endpoint                  | Descrição                                  |
|--------|----------------------------|--------------------------------------------|
| GET    | `/messages`                | Listar mensagens                           |
| POST   | `/messages`                | Enviar nova mensagem                       |
| DELETE | `/messages/:id`            | Apagar uma mensagem                        |
| POST   | `/chatbot/message`         | Enviar mensagem para o chatbot             |

### **Conteúdos Educacionais**
| Método | Endpoint                       | Descrição                             |
|--------|--------------------------------|---------------------------------------|
| GET    | `/education/institutions`      | Listar instituições de ensino         |
| GET    | `/education/channels`          | Listar canais e professores           |
| GET    | `/education/recommendations`   | Recomendações personalizadas          |

### **Postagens e Interações**
| Método | Endpoint                | Descrição                                   |
|--------|--------------------------|---------------------------------------------|
| GET    | `/posts`                 | Listar postagens                            |
| POST   | `/posts`                 | Criar nova postagem                         |
| PUT    | `/posts/:id`             | Editar uma postagem                         |
| DELETE | `/posts/:id`             | Apagar uma postagem                         |
| POST   | `/posts/:id/comment`     | Adicionar comentário na postagem            |

## 📊 **Monitoramento de Desempenho**

O sistema registra e monitora as interações dos usuários com a plataforma, atualizando o **gráfico de desempenho** conforme:
- Novas postagens ou comentários
- Interações com o chatbot
- Criação de novos amigos
- Atualização de informações do perfil

### **Notificações e Agenda**
- Notificações para lembretes, atividades recentes, atualizações.
- Sistema de agenda com funcionalidades de tarefas e notas.

## 🚀 **Deployment**

Para o deploy em produção, é necessário configurar o servidor com:
- Um banco de dados PostgreSQL acessível
- Certificados SSL (caso necessário)
- Variáveis de ambiente para chaves de API e JWT
- Ferramentas de monitoramento e logs

---

## Uma visão mais técnica

## Regras de negócio
- [ ] O usuário não pode se cadastrar na plataforma com email já cadastrado;
- [ ] O sistema deve adicionar a sua nacionalidade na plataforma;
- [ ] O usuário só deve ter no máximo 5000 conexões ou amigos;

---

## Requisitos funcionais
- [ ] O sistema deve permitir o cadastro de usuário;
- [ ] O sistema deve permitir se autenticar;
- [ ] O sistema deve permitir o usuário recuperar a senha;
- [ ] O sistema deve permitir obter os dados de um usário logado;
- [ ] O sistema deve permitir o usuário adiconar suas informações ao perfil
- [ ] O sistema deve permitir o usuário editar os dados do perfil;
- [ ] O sistema deve permitir o usuário se cadastrar com conta Google ou Github;
- [ ] O sistema deve permitir o usuário visualizar os seus dados do perfil;
- [ ] O sistema deve permitir o usuário adicionar imagem de capa;
- [ ] O sistema deve permitir o usuário atualizar imagem de capa;
- [ ] O sistema deve permitir o usuário eliminar imagem de capa;
- [ ] O sistema deve permitir o usuário adiconar foto de perfil;
- [ ] O sistema deve permitir o usuário atualizar foto de perfil;
- [ ] O sistema deve permitir o usuário eliminar foto de perfil;
- [ ] O sistema deve permitir o usuário buscar por pessoas pelo nome;
- [ ] O sistema deve permitir o usuário conversar com o chat bot na home_page e durante uma conversa na caixa de mensagem;
- [ ] O sistema deve permitir o usuário conversar com outros usuários que fazem parte da sua rede de amigos virtuais;
- [ ]  O sistema deve permitir enviar mensagem de audio;
- [ ] O sistema deve permitir o usuário procurar por mensagem de amigos pelo nome;
- [ ] O sistema deve permitir o usuário ver quem está online;
- [ ] O sistema deve permitir o usuário enviar emoji nas mensagens ou publicações;
- [ ] O sistema deve permitir ao usuário eliminar mensagem;
- [ ] O sistema deve permitir o usuário eliminar conversa;
- [ ] O sistema deve permitir ao usuário editar a mensagem antes de 30 minutos; 
- [ ] O sistema deve permitir o usuário adiconar biografia;
- [ ] O sistema deve permitir o usuário atualizar a biografia;
- [ ] O sistema deve permitir o usuário eliminar a biografia;
- [ ] O sistema deve permitir o usuário visualizar quantidade de mensagem que foi enviado;
- [ ] O sistema deve permitir o usuário ver quantidade de notificação;
- [ ] O sistema deve permitir o usuário visualizar gráfico de desempenho;
- [ ] O sistema deve permitir o usuário visualizar de gui de uso da plataforma;
- [ ] O sistema deve permitir o usuário criar agenda;
- [ ] O sistema deve permitir o usuário editar os dados da agenda;
- [ ] O sistema deve permitir o usuário eliminar os dados da agenda;
- [ ] O sistema deve permitir o usuário eleminar a agenda;
- [ ] O sistema deve permitir o usuário acessar o repositório;
- [ ] O sistema deve permitir o usuário adiconar projetos do seu PC;
- [ ] O sistema deve permitir o usuário eliminar projectos;
- [ ] O sistema deve permitir o usuário criar projetos;
- [ ] O sistema deve permitir o usuário praticar programação;
- [ ] O sistema deve permitir o usuário visualizar os melhores professores;
- [ ] O sistema deve permitir o usuário visualizar as melhores instituições de ensino;
- [ ] O sistema deve permitir o usuário fazer postes;
- [ ] O sistema deve permitir o usuário editar posts;
- [ ] O sistema deve permitir o usuário eleimar postes;
- [ ] O sistema deve permitir os usuários comentarem em posts;
- [ ] O sistema deve permitir o usuário reqgir postes;
- [ ] O sistema deve permitir o usuário partilhar postes;
- [ ] O sistema deve permitir o usuário eliminar comentários em postes;
- [ ] O sistema deve permitir o usuário mudar de tema;
- [ ] O sistema deve permitir o usuário mudar de idioma;
- [ ] O sistema deve permitir o usuário alterar nome e palavra passe;
- [ ] O sistema deve permitir o usuário partilhar projetos com outros usuários;
- [ ] O sistema deve permitir o usuário fazer logOut;
- [ ] O sistema deve permitir visualizar publicações;
- [ ] O sistema deve permitir o usuário partilhar imagens, vídeos e textos nas publicações;
- [ ] O sistema deve permitir enviar vídeos, imagens nas conversas privadas;

---

## Requisitos não funcionais
- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisam estar persistidos em um banco de dados PostgreSQL;
- [ ] Todas listas de dados precisam estar alinhadas na horizontal;
- [ ] O usuário deve ser identificado por um JWT(Json web Token);
- [ ] O usuário perde acesso a pltaforma se qubrar as regras;
- [ ] O usuário não pode alterar dados de outro usuários;
- [ ] O usuário pode mencionar amigos nas publicações;
- [ ] O usuário pode mencionar amigos em comentário;