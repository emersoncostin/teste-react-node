<h1 align="center">
  <img alt="mentores" title="mentores" src="https://d26lpennugtm8s.cloudfront.net/partners/nube_logos/logo-mentores-transparente.png" width="300px" />
</h1>

<h3 align="center">
  Mentores Team: Teste de Node e React
</h3>

<h3 align="center">
  :warning: Não é necessário realizar o teste inteiro :warning:
</h3>

<p>Este teste é para avaliarmos seu conhecimento em Node e ReactJS, por isto siga a risca o enunciado a baixo</p>

<blockquote align="center">“Após finalizar o teste, crie uma Pull Request para que possamos avaliar seu teste”!</blockquote>

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o teste</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-entrega">Entrega</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## 🚀 Sobre o teste

Neste teste você precisa criar uma ferramenta de upload de arquivos, utilizando React no Frontend e Node no Backend.

### Funcionaliadades

**Backend**:

1. Crie uma rota de upload de arquivo utilizando multer, com tamanho máximo de 5mb;

2. Utilize o MongoDB Atlas para seu banco não relacional, armazene o arquivo com duração de 1 semana contanto com a data de Upload no sistema, após, ele precisa ser excluido do servidor;

3. Armazene o arquivo dentro de uma pasta chamada (`uploads`), renomeando ele, porém salve o nome do arquivo original no Banco.

4. Crie uma rota para listagem de todos os arquivos disponíveis de naquela semana, ou seja, os uploads que foram feitos de segunda a sexta. É importante não listar os arquivos que não existem dentro da pasta `uploads`.

5. Crie uma rota para que seja feito o download de um terminado arquivo passando o ID por `QueryParams`.

**Frontend**:

1. A Home precisa conter um input <a href="https://github.com/react-dnd/react-dnd"> DnD </a> para upload de um arquivo.

2. Crie uma rota de listagem de todos os arquivos presentes no backend naquela respectiva semana.

3. Ao clicar em um arquivo dentro da listagem, o mesmo deverá ser baixado.

4. Crie uma URL compartilhavel, ou seja, ao subir um arquivo `XY`, uma rota dentro do frontend precisará buscar no Backend o arquivo `XY`, caso o mesmo não esteja mais disponível exibir um alerta para o usuário;

### Informações importantes

1. Utilize Redux para fazer a comunicação entre Frontend e Backend.

2. Crie uma validação do arquivo inserido, caso o arquivo contenha mais 5bm, exibir alerta para usuário.

## 🎨 Layout

O Layout é por sua conta, mas gostariamos que você utiliza-se o <a href="https://v2.grommet.io/" >**Grommet**</a>.

## 📅 Entrega

Ao finalizar o teste, crie um Pull Request para o repositório em questão e mencione **@MatheusKindrazki**;
