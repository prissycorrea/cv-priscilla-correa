# 🚀 Portfólio Profissional Interativo

Um portfólio moderno e responsivo criado com HTML, CSS e JavaScript puro, com design em dark mode e tons de lilás frio.

## ✨ Características

- 🎨 **Design Moderno**: Interface elegante com tons de lilás frio e dark mode
- 🌐 **Multi-idioma**: Suporte para português e inglês com troca dinâmica
- 📱 **Responsivo**: Funciona perfeitamente em todos os dispositivos
- 🎭 **Animações**: Cards interativos com animações de scroll e hover
- 🎯 **Seções Completas**: Hero, Skills, Projetos, Certificações e Contato
- 🔧 **Fácil Personalização**: Todos os textos vêm de um arquivo JSON

## 🚀 Como Usar

### 1. Clone ou Baixe o Projeto
```bash
git clone [url-do-repositorio]
cd cv-prissy
```

### 2. Abra o Projeto
Simplesmente abra o arquivo `index.html` em seu navegador ou use um servidor local.

### 3. Personalize o Conteúdo
Edite o arquivo `data.json` para personalizar todos os textos do portfólio.

## 📁 Estrutura dos Arquivos

```
cv-prissy/
├── index.html          # Estrutura HTML principal
├── styles.css          # Estilos CSS com design moderno
├── script.js           # Funcionalidades JavaScript
├── data.json           # Dados de idiomas e conteúdo
└── README.md           # Este arquivo
```

## 🎨 Personalização

### Cores
As cores principais estão definidas no arquivo `styles.css` como variáveis CSS:

```css
:root {
    --primary-color: #8B5CF6;      /* Lilás principal */
    --primary-light: #A78BFA;      /* Lilás claro */
    --primary-dark: #7C3AED;       /* Lilás escuro */
    --secondary-color: #C084FC;    /* Lilás secundário */
    --accent-color: #E879F9;       /* Rosa acento */
}
```

### Conteúdo
Edite o arquivo `data.json` para personalizar:

- **Informações pessoais**: Nome, cargo, descrição
- **Links**: LinkedIn, GitHub, download do CV
- **Skills**: Suas habilidades e níveis
- **Projetos**: Seus projetos com descrições
- **Certificações**: Suas certificações profissionais
- **Contato**: Suas informações de contato

### Exemplo de Personalização
```json
{
  "pt-br": {
    "hero": {
      "name": "Seu Nome Real",
      "title": "Seu Cargo Real",
      "description": "Sua descrição personalizada..."
    }
  }
}
```

## 🌐 Funcionalidades de Idioma

O portfólio suporta dois idiomas:
- **Português (PT-BR)**: Idioma padrão
- **Inglês (EN)**: Clique no botão de idioma para alternar

### Adicionando Novos Idiomas
Para adicionar um novo idioma, edite o arquivo `data.json`:

```json
{
  "pt-br": { /* português */ },
  "en": { /* inglês */ },
  "es": { /* espanhol - novo idioma */ }
}
```

## 📱 Responsividade

O portfólio é totalmente responsivo e funciona em:
- 📱 **Mobile**: 320px - 768px
- 💻 **Tablet**: 768px - 1024px
- 🖥️ **Desktop**: 1024px+

## 🎭 Animações e Efeitos

### Animações de Scroll
- Cards aparecem com efeito fade-in ao fazer scroll
- Barras de skills se preenchem automaticamente
- Formas flutuantes com efeito parallax

### Efeitos de Hover
- Cards se elevam e mudam de cor
- Botões com efeito de brilho
- Links de navegação com underline animado

### Efeitos Especiais
- Efeito de digitação no nome principal
- Formas geométricas flutuantes
- Gradientes e sombras dinâmicas

## 🔧 Funcionalidades JavaScript

### Navegação
- Menu fixo com navegação suave
- Indicador de seção ativa
- Menu mobile responsivo

### Formulário de Contato
- Validação de campos
- Simulação de envio
- Notificações de sucesso

### Troca de Idioma
- Troca dinâmica sem recarregar a página
- Persistência do idioma selecionado
- Atualização automática de todos os textos

## 📝 Seções do Portfólio

### 1. **Hero/About**
- Nome e cargo
- Descrição pessoal
- Botões de ação (CV, LinkedIn, GitHub)
- Imagem de perfil com formas flutuantes

### 2. **Skills**
- Cards interativos para cada habilidade
- Barras de progresso animadas
- Ícones representativos
- Efeitos de hover

### 3. **Projetos**
- Cards de projeto com imagens
- Tags de tecnologias
- Links para projeto e código
- Animações de entrada

### 4. **Certificações**
- Cards de certificação
- Ícones das empresas
- Datas de obtenção
- Efeitos de hover

### 5. **Contato**
- Informações de contato
- Formulário funcional
- Links para redes sociais
- Layout em duas colunas

## 🚀 Deploy

### GitHub Pages
1. Faça push para um repositório GitHub
2. Vá em Settings > Pages
3. Selecione a branch main
4. Seu portfólio estará disponível em `https://seu-usuario.github.io/seu-repositorio`

### Netlify
1. Conecte seu repositório GitHub ao Netlify
2. Configure o build (não é necessário para HTML estático)
3. Seu site será deployado automaticamente

### Vercel
1. Conecte seu repositório ao Vercel
2. Configure o projeto
3. Deploy automático a cada push

## 🐛 Solução de Problemas

### Problemas Comuns

**1. Textos não mudam de idioma**
- Verifique se o arquivo `data.json` está no mesmo diretório
- Abra o console do navegador para ver erros
- Verifique se está rodando em um servidor local

**2. Animações não funcionam**
- Verifique se o JavaScript está carregado
- Teste em diferentes navegadores
- Verifique se há erros no console

**3. Layout quebrado em mobile**
- Verifique as media queries no CSS
- Teste em diferentes tamanhos de tela
- Use as ferramentas de desenvolvedor do navegador

## 📚 Recursos Utilizados

- **Fontes**: Google Fonts (Inter)
- **Ícones**: Font Awesome 6
- **Animações**: CSS puro + JavaScript
- **Layout**: CSS Grid + Flexbox
- **Responsividade**: Media Queries CSS

## 🤝 Contribuições

Sinta-se à vontade para contribuir com melhorias:
1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 📞 Suporte

Se você tiver dúvidas ou problemas:
- Abra uma issue no GitHub
- Entre em contato através do portfólio
- Verifique a documentação

---

**Desenvolvido com ❤️ para criar portfólios incríveis!**