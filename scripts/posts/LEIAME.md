# Tradução de slides de posts (EN/ES)

Ferramentas usadas para redesenhar o texto dos slides em inglês e espanhol (`assets/posts/<código>/NN.en.webp` e `NN.es.webp`). Rodam fora do site, em Python 3 com Pillow, OpenCV, pytesseract (tesseract com `por`).

Fontes (baixar em `/home/claude/fonts/`, do repositório google/fonts):
- `Poppins-ExtraBold.ttf` — capas do Tesoura com Ponta (46 px, espaço entre palavras 10,3 px)
- `Inter.ttf` (variável, opsz/wght) — slides do Desvendando o Pop (corpo 41 px, opsz 18, peso 600)

Arquivos:
- `card.py` — acha o card branco da capa do Tesoura e as linhas de texto
- `tesoura_capa.py` — redesenha o título da capa; trecho `[entre colchetes]` sai sublinhado (título do filme). Edite o dicionário `T`.
- `ocr.py` — linhas e caixas de texto via OCR
- `desv.py` — slides de lista do Desvendando (corpo, "Destaque", selo LISTA, crédito, selo "leia a resenha")
- `capa_desv.py` — capa do ranking mensal (apaga o texto sobre a foto e redesenha)

Depois de gerar as imagens, marcar no `assets/data/posts.js` o campo `"tr":[...]` com os números dos slides traduzidos.
