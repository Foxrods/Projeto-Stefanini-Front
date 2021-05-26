# Projeto-Stefanini Front-End

## Rodando o Projeto

Na raiz do projeto:
```bash
  npm install
  npm start
```
O arquivo environment.ts está pronto para enviar as requisições para o continer Docker da API.
```typescript
const host = '127.0.0.1';
export const environment = {
	production: false,
	api_url: `http://${host}:5010/api`
};
```
Caso estiver rodando o projeto localmente, trocar a porta de 5010 para 5000.
