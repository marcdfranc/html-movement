# HTML Movement Library

Uma biblioteca simples em jQuery para animar elementos DOM com base na posição de scroll da janela. Cria efeitos parallax suaves e interações interessantes durante o rolagem da página.

## Características

- Animação de elementos DOM baseada na posição de scroll
- Suporte a múltiplas propriedades CSS simultâneas
- Vários tipos deease (linear, ease-in/out, elastic, bounce, etc.)
- Interface intuitiva e flexível
- Código minimizado disponível para produção

## Requisitos

- jQuery 3.4.1 ou superior

## Instalação

A biblioteca pode ser incluída diretamente no HTML ou instalada via package manager:

```html
<!-- Include jQuery first -->
<script src="path/to/jquery.min.js"></script>

<!-- Then include movement library -->
<script src="dist/movement.js"></script>
```

## Uso Básico

### Animação Global

Anima todos os elementos especificados na janela ao rolar:

```javascript
$.movement({
  properties: [
    {
      selector: "#man",
      start_time: 424,
      end_time: 757,
      name: "left",
      type: "ease-out-back",
      start_value: 20,
      end_value: 50,
      unit: "%",
    },
    {
      selector: "#man",
      start_time: 424,
      end_time: 757,
      name: "bottom",
      type: "ease-out-back",
      start_value: 110,
      end_value: 240,
      unit: "px",
    },
  ],
});
```

### Animação em Elemento Específico

Anima apenas um elemento específico:

```javascript
$("#man").movement({
  properties: [
    {
      name: "left",
      type: "ease-out-cubic",
      start_value: 20,
      end_value: 50,
      unit: "%",
    },
    {
      name: "bottom",
      type: "ease-out-back",
      start_value: 110,
      end_value: 240,
      unit: "px",
    },
  ],
  start_time: 424,
  end_time: 757,
});
```

## Propriedades

| Nome          | Descrição                                                                     |
| ------------- | ----------------------------------------------------------------------------- |
| `selector`    | Seleador CSS do elemento DOM a ser animado (apenas no uso global)             |
| `name`        | Nome da propriedade CSS a animar (ex: left, right, margin, top, bottom, etc.) |
| `type`        | Efeito de animação para suavizar a transição                                  |
| `start_value` | Valor inicial da propriedade CSS                                              |
| `end_value`   | Valor final da propriedade CSS                                                |
| `start_time`  | Posição de scroll (em pixels) onde a animação deve iniciar                    |
| `end_time`    | Posição de scroll (em pixels) onde a animação deve terminar                   |
| `unit`        | Unidade da propriedade CSS (ex: %, px, em, rem, etc.)                         |

## Tipos de Ease

A biblioteca suporta diversos efeitos de suavização para criar diferentes sensações de movimento:

- **Linear**: Movimento constante
- **Quadratic**: ease-in, ease-out, ease-in-out
- **Cubic**: ease-in, ease-out, ease-in-out
- **Quartic**: ease-in, ease-out, ease-in-out
- **Quintic**: ease-in, ease-out, ease-in-out
- **Sinusoid**: ease-in, ease-out, ease-in-out
- **Exponential (exp)**: ease-in, ease-out, ease-in-out
- **Circular**: ease-in, ease-out, ease-in-out
- **Elastic**: ease-in, ease-out, ease-in-out
- **Back**: ease-in, ease-out, ease-in-out
- **Bounce**: ease-in, ease-out, ease-in-out

## Exemplo Prático

```javascript
$.movement({
  properties: [
    {
      selector: ".hero-image",
      start_time: 0,
      end_time: 1000,
      name: "transform",
      type: "ease-out-back",
      start_value: "scale(1)",
      end_value: "scale(1.1)",
      unit: "",
    },
    {
      selector: ".hero-text",
      start_time: 200,
      end_time: 800,
      name: "opacity",
      type: "ease-in-out-quadratic",
      start_value: 0,
      end_value: 1,
      unit: "",
    },
  ],
});
```

## Testes

Para executar os testes:

```bash
npm test
```

Os testes utilizam QUnit e podem ser rodados diretamente no navegador.

## Build

O projeto usa Gulp para automação de build:

- Limpar arquivos minificados
- Minificar arquivos JavaScript com Terser

```bash
gulp clear
gulp terser
```

## Arquivos Principais

- `dist/movement.js` - Biblioteca completa
- `dist/movement.min.js` - Versão minimizada para produção
- `test/html-movement.html` - HTML de teste
- `test/js/html-movement_test.js` - Casos de teste QUnit

## Licença

MIT License

## Autor

Marcelo Francisco <marcdfranc@gmail.com>
