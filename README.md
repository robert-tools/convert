# 🗂️ @robert.tools/convert

A conversion package for robert.tools.

## 📜 Usage

### 🟢 Installation

```bash
npm install @robert.tools/convert
```

### 📝 Sample usage

```typescript
import { convert2CamelCase } from '@robert.tools/convert';
```
## 📜 Usage

```typescript
convert2CamelCase('hello_world'); // 'helloWorld'
```

### 🗃️ API

- `convertNumber2String(value: number): string` - Converts the input number to a string.
- `convert2KeyValue(line: string): KEY_VALUE` - Converts the input string to a key-value object.
- `convert2CamelCase(key: string): string` - Converts the input key to camelCase.
- `convert2KebapCase(key: string): string` - Converts the input key to kebap-case.
- `convert2HeaderCase(key: string): string` - Converts the input key to Header Case.
- `normalizeText(value: string): string` - Normalizes the input text by removing diacritics and converting to lowercase.
- `cleanSpaces(text: string): string` - Cleans up extra spaces in the input text.
- `absoluteUrl(value: $string, baseUrl: string): $string` - Resolves the absolute URL based on the base URL.

## ⚖️ Notes
This software is hand-crafted, test-driven and assisted by AI tools. I know each line of my code. ✌️


| Tool  | Comment |
 | ------------- | ------------- |
| <img src="https://img.shields.io/badge/Jest-TDD-008800?logo=jest" alt="assisted by Jest" />  | Test-driven development with Jest |
| <img src="https://img.shields.io/badge/robert.tools-ecosystem-008800" alt="assisted by robert.tools" />  | Part of the robert.tools ecosystem |
| <img src="https://img.shields.io/badge/GitHub_Copilot-assisted-8A2BE2?logo=githubcopilot" alt="assisted by GitHub Copilot" />   | Code completion |
| <img src="https://img.shields.io/badge/OpenAI-assisted-8A2BE2?logo=openaigym" alt="assisted by OpenAI" />  | chatGPT research |