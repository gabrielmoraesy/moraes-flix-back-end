# Biblioteca de Filmes

Este projeto é uma aplicação de gerenciamento de filmes que permite aos usuários adicionar, editar, listar e avaliar filmes. O sistema oferece recomendações personalizadas com base nas avaliações dos usuários e fornece funcionalidades de pesquisa e filtragem.

## Funcionalidades

- **CRUD de Filmes**: Adicionar, editar, listar e remover filmes na biblioteca.
- **Avaliações de Filmes**: Usuários podem avaliar filmes de 1 a 5 estrelas.
- **Recomendações**: Recomendações baseadas em avaliações semelhantes feitas por outros usuários.
- **Autenticação de Usuários**: Usuários devem se cadastrar e fazer login para acessar e avaliar os filmes.
- **Pesquisa e Filtragem**: Usuários podem pesquisar por filmes específicos e filtrar por gênero, ano, etc.

## Requisitos Funcionais

1. **Cadastro e Login de Usuários**:
   - Usuários devem ser capazes de se cadastrar.
   - Usuários devem ser capazes de fazer login com autenticação via JWT.

2. **CRUD de Filmes**:
   - Os usuários podem adicionar filmes com os seguintes campos:
     - Título do filme
     - Descrição
     - Gênero
     - Ano de lançamento
     - Duração
   - Os usuários podem editar informações de filmes existentes.
   - Os usuários podem listar todos os filmes cadastrados.
   - Os usuários podem remover filmes da biblioteca.

3. **CRUD de Avaliações**:
   - Os usuários podem avaliar filmes com uma nota de 1 a 5 estrelas.
   - Os usuários podem deixar um comentário opcional sobre a avaliação.

4. **Recomendações**:
   - O sistema deve listar filmes que foram bem avaliados por outros usuários com perfis de avaliação semelhantes.

5. **Pesquisa e Filtragem**:
   - Os usuários podem pesquisar filmes por título.
   - Os usuários podem filtrar filmes por gênero, ano e outros critérios.

## Regras de Negócio

- As avaliações dos filmes devem ser associadas ao usuário que as criou.
- Usuários não podem avaliar o mesmo filme mais de uma vez.
- O sistema deve garantir que as recomendações sejam baseadas em um algoritmo que analisa as avaliações dos usuários e a similaridade dos perfis.
- Apenas usuários autenticados podem adicionar, editar ou remover filmes e avaliações.

## Requisitos Não Funcionais

- **Segurança**: O sistema deve usar autenticação JWT para proteger rotas sensíveis.
- **Desempenho**: As respostas do servidor devem ser rápidas, com tempo de resposta inferior a 2 segundos para operações CRUD.
- **Escalabilidade**: O sistema deve ser capaz de lidar com um aumento no número de usuários e filmes sem degradação do desempenho.
- **Usabilidade**: A interface do usuário deve ser intuitiva e fácil de navegar, permitindo que os usuários realizem operações sem dificuldade.
- **Documentação**: O código deve ser bem documentado, e o sistema deve incluir uma documentação do API clara.

## Instalação

1. Clone o repositório:
   
