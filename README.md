๐capa-node-server READ.MD ์์

# capaProject

capa coding test์์ ์ํ๋ api ๋ก์ง์ ์์ฑํ ํ๋ก์ ํธ ์๋๋ค โ

์๋ํ์ญ๋๊น. ์ด๋ฒ ์์ดํ๋ฒค์ฒ์ค ์ฝ๋ฉํ์คํธ๋ฅผ ์งํํ๊ฒ๋ ์ก์ธ์ฑ ๊ฐ๋ฐ์์๋๋ค. ์ฐ์  ํ์คํธ๋ฅผ ๋ณผ ๊ธฐํ๋ฅผ ์ ๊ณตํด์ฃผ์์ ๊ฐ์ฌํฉ๋๋ค.
์ด๋ฒ ํ๋ก์ ํธ๋ ์ ๊ฐ ํด๋น ์ด์ง์ ์ค๋นํ๋ฉด์ ๋ง๋ค์ด ๋์ node-server์์ buildํด ๋๊ฐ๋ ๊ณผ์ ์ผ๋ก ์งํํ์์ต๋๋ค.
ํด๋น ํ๋ก์ ํธ์ ๊ธฐ์กด์ผ๋ก ์ธํ์ ํด๋์ ๊ฒ์ผ๋ก๋ ๊ฐ๋จํ docker-compose up์ ํตํ์ฌ ์ปจํ์ด๋๋ฅผ ํตํ์ฌ node-server๋ฅผ ๋์ด๋๋ ์ด๊ธฐ ์ธํ์ ๊ฐ์ง ์ฝ๋์์ต๋๋ค.

#์ด๋ฒ ํ๋ก์ ํธ๋ฅผ ์งํํ  List Up์๋๋ค.


๐Stores.json์์ ์์  ๋ชฉ๋ก์ ์ป์ ์ ์์ต๋๋ค.
- ์ฐ์  ํด๋น ํ์ผ๋ก ์ ์ํด์ฃผ์จ๋ .jsonํ์ผ์ Stores.tsํ์ผ๋ก ๋ณ๊ฒฝํ์ฌ ๋ฐฐ์ด์ ๋ด๋ ๋ณ์๋ฅผ exportํ์ฌ ์ฌ์ฉ ํ  ์ ์๊ฒ ๋ง๋ค์์ต๋๋ค.
- ์์  ๋ชฉ๋ก์ ๊ฒฝ์ฐ์๋ Stores.json์ ์ ์ฅ๋์ด ์๋ json๋ฐฐ์ด์ DB์ ๋ด์์ ๋ณด๋ค ๋น ๋ฅด๊ฒ selectํด ์ฌ ์ ์๋๋ก ์งํํ์ต๋๋ค.
- ํด๋น stores.json์ ์๋ ๋๊ฐ์ key๊ฐ์ ๋ฉ์ธ ๋๊ฐ์ ์ปฌ๋ผ์ผ๋ก ์ผ์์ entity๋ฅผ ๋ง๋ค์์ต๋๋ค.

๐Stores.json์์ ์์ ์ ํน์  ํญ๋ชฉ์ ๊ฐ์ ธ์ฌ ์ ์์ต๋๋ค.
- ํด๋น Stores.jsonํ์ผ ์์ ์๋ data๋ฅผ ๋ณ์๋ก ๋ด์ localData๋ฅผ selectํด์ฌ ์ ์๋ ์ฝ๋์ createStoresMutation graphql API๋ฅผ ํตํด์ Stores.jsonํ์ผ์ ๋ฐ์ดํฐ๋ฅผ db์ ๋ฃ์ด์ sql์ ํตํด์
์์ ์ list๋ฐ ํน์  ํญ๋ชฉ์ ๊ฐ์ง๊ณ  ์ฌ ์ ์๊ฒ ํ์ต๋๋ค.

๐API ์๋น์๋ Stores.json์ ์ด๋ฆ์ผ๋ก ํญ๋ชฉ์ ์๋ณํ  ์ ์์ต๋๋ค.
- Stores.jsํ์ผ์ ๋ณ์๋ก ๋ด์ ํ์ผ์ exportํด์ GraphQL์ ํตํด์ ์ด๋ฆ์ผ๋ก ํญ๋ชฉ์ ์กฐํ ํ  ์ ์๊ฒ ๋ง๋ค์์ต๋๋ค. ๋ํ createStoresMutation์ ํตํ์ฌ ์์ฑ๋ row๋ค์ค ์ด๋ฆ์ props๋ก ๋ฐ์์ ํด๋น ํ๋ ์ ๋ณด๋ฅผ ์กฐํ ํ  ์ ์๊ฒ ํ์ต๋๋ค.

๐๊ฐ ์ฐํธ ๋ฒํธ์ ๋ํ ์๋์ ๊ฒฝ๋๋ฅผ ์ป์ ์ ์์ต๋๋ค.(postcodes.io๋ฅผ ์ฌ์ฉํ์ฌ ๊ฐ ์ฐํธ๋ฒํธ์ ์๋์ ๊ฒฝ๋๋ฅผ ์ป์ ์ ์์ต๋๋ค.)
- ํด๋น ๋ถ๋ถ์ axios ๋ชจ๋์ ์ฌ์ฉํ์ฌ ํด๋น postcodes.io์์ ์์ฒญ์ ์๋ตํด์ฃผ๋ restAPI๋ฅผ ์ฌ์ฉํ์์ต๋๋ค.
(+graphql playground์์์ ๋ชจ๋ ํธ์ถ ํ  ์ ์๋ resolver๋ฅผ ๋ณด์ฌ์ฃผ๊ธฐ์ํ์ฌ restAPI๋ฅผ graphql API๋ก ๊ฐ์ธ๋ ์์์ ์งํํ์ต๋๋ค.)

๐์๊ตญ์์ ์ฃผ์ด์ง ์ฐํธ๋ฒํธ์ ์ฃผ์ด์ง ๋ฐ๊ฒฝ์ ์๋ ์์  ๋ชฉ๋ก์ ๋ฐํํ  ์ ์๋ ๊ธฐ๋ฅ์ ์ป์ ์ ์์ต๋๋ค.
- ํด๋น restAPI๋ก ์์ฒญ์ ํ์ฌ ๋ฐ์์ค๋ ๋ฐฐ์ด data๋ฅผ filteringํ์ฌ ๋ถ -> ๋จ์ผ๋ก ์ ๋ ฌํ๊ฒ ํ๋ ์์์ ์งํํ์ต๋๋ค.


#์ด๋ฒ ํ๋ก์ ํธ์์ ์ฌ์ฉ๋ ๊ธฐ์  ์คํ
- typescript
- typeorm
- graphql
- type-graphql
- axios
- docker
- node.js
- express.js
- heroku

๐ ์ง๋ฌธ ์ฃผ์  ์ฌํญ์ ๋ํ ๋ต๋ณ
- If you had chosen to spend more time on this test, what would you have done differently?
  ๋ ๋ง์ ์๊ฐ ํ์คํธ๋ฅผ ์งํํด ๋ณผ ์ ์์๋ค๋ฉด, Redis๋ฅผ ์ฌ์ฉํด๋ณด๊ณ  ์ถ๋ค๋ผ๋ ์๊ฐ์ ํ์ต๋๋ค. Redis๋ in-memory Database๋ผ๊ณ  ์๊ณ  ์์ต๋๋ค. ๋ฉ๋ชจ๋ฆฌ ๋จ์์ db์์์ ํ๊ณ , ํด๋น Data๋ฅผ ์ฌ์ฉํ๊ณ ์
  ํ๋ค๋ฉด slave server์ ์ ์ฅํ๋ ๋ฑ์ ๋ฐฉ๋ฒ์ ์ฌ์ฉํ  ์ ์๋ค ์ ๋์ ์์ค์ผ๋ก ์๊ณ  ์์ด์ ์ ์๊ฒ ์๊ฐ์ด ๋ ์ฃผ์์ง๋ค๋ฉด ํด๋น ๊ธฐ์  ์คํ์ ์ฌ์ฉํด๋ณผ ๊ฒ ๊ฐ์ต๋๋ค.
  
  
- ์ด๋ฒ ํ๋ก์ ํธ๋ฅผ ์งํํ๋ฉด์, CAPA ๊ด๊ณ์ ์ธก์์ ์ ๊ณตํด์ฃผ์  Stores.json์ ํตํ์ฌ ๋ง๋ค์ด ๋ด์ผํ๋ List๋ฅผ GraphQL Playground ์๋ฒ ์์์ ๋ชจ๋  API ๋ก์ง์ด ๋์ํ  ์ ์๊ฒ ํ์ต๋๋ค. axios๋ฅผ GraphQL ์์ฒญ   ๋ด์ ํจ๊ป ๋ฌถ์ด์ ์์์ ์งํํ์ต๋๋ค.
  
- ์ด๋ฒ ์ฝ๋ฉํ์คํธ๋ฅผ ๊ณ๊ธฐ๋ก ์ฒ์์ผ๋ก GraphQL API ์์ฒญ์ restfulํ axios๋ฅผ ๋ฃ์ด์ ์งํ์ ํ ๊ฒ์ด์์ต๋๋ค. ํด๋น ๋ก์ง์ด ์ด๋ ํ ์ทจ์ฝ์ ์ ๊ฐ์ง๊ณ  ์๋์ง	์ ๋ฐ๋ฅธ ๋ถ๋ถ์ ์์๋ณด์์ผ ํ  ๊ฒ์ผ๋ก ํ๋จ๋ฉ๋๋ค.
  
- What part did you find the hardest? What part are you most proud of? In both cases, why?
  - ์ฝ๋๋ฅผ ์ณ ๋ด๋ ค๊ฐ๋ ๊ฒ๋ณด๋ค ์ด๋ค ์์ผ๋ก ์ ํด์ฃผ์  ๊ณผ์ ๋ฅผ ํด๊ฒฐํด ๋๊ฐ์ผํ ์ง์ ๋ํ ๊ณ ๋ฏผ์ด ๊ฐ์ฅ ์ปธ์ต๋๋ค. ์ด๋ฌํ ๋ถ๋ถ์์ ๋ฐ์ํ๋ ๊ณ ๋ฏผ์ ํฌ๊ฒ ์ธ๊ฐ์ง ์์ต๋๋ค.
    -  1๏ธโฃ์ ์ํด์ฃผ์  stores.jsonํ์ผ์ ์ด๋ค์์ผ๋ก ์ ๊ทผํด์ผํ ์ง์ ๋ํ ๊ณ ๋ฏผ
    -  2๏ธโฃpostcode.io๋ผ๋ ์ธ๋ถ api๋ฅผ ์ด๋ค์์ผ๋ก ์ ์ฉ์ํฌ์ง์ ๋ํ ๊ณ ๋ฏผ
    -  3๏ธโฃ๋ง์ง๋ง TO DO LIST ๋ฌธํญ์ ๋ํ ๊ณ ๋ฏผ
  
  -  1๏ธโฃ ์๋ํ ์ค๋ช
 
      - stores.json ์์ฒด๋ฅผ Database์์ create ํ์ง ์๊ณ  json ์์ฒด๋ง์ ๊ฐ์ง๊ณ  ์ผ๋ฐ ์ฝ๋ฉ์ ํด์ select์ ํด์ค ๊ฒ์ธ์ง, ์๋๋ฉด ํด๋น jsonํ์ผ์ db์ ์ ์ฅํ๋ ์ฝ๋๋ฅผ ๋ง๋ค์ด์ ์ ์ฅ๋ db์์์ sql๋ฌธ์ ์จ์ผํ ์ง์ ๋ํ ๊ณ ๋ฏผ์ด ํด๋น ๊ณผ์ ๋ฅผ ๋ฐ์์๋์ ์ฒซ๋ฒ์งธ ๊ณ ๋ฏผ์ด์์ต๋๋ค. 
      - ์ ์์ ๋ฐฉ๋ฒ์ ๊ฒฝ์ฐ์๋ ํ  ์ ์๊ฒ ์ง๋ง ๋ฐ์ดํฐ๊ฐ ๋ง์ ๊ฒฝ์ฐ ๊ต์ฅํ ๋นํจ์จ์ ์ธ ์ฝ๋๊ฐ ๋ง์ด ๋์ฌ ๊ฒ์ด๋ผ๊ณ  ํ๋จํ์ต๋๋ค. 
      - sql๋ฌธ์ ์ฌ์ฉํ์ ์์ ์ค์ด๋๋ ์ฝ๋์ ์๊ณผ ํ๋์ฝ๋ฉ์ ๊ฐ๊น์ด js๋ฅผ ํตํ ๋ง์ ๋ฐ๋ณต๋ฌธ๊ณผ ๊ฐ์ ์ฝ๋๋ฅผ ์ค์ด๋ ๋ฐฉ๋ฒ์ด ๋ง๋ค๋ผ๋ ํ๋จ์ด ๋ค์๊ธฐ๋๋ฌธ์ ๊ณต๋ถ๋ฅผ ํ๋ค๋ ๋ง์์ผ๋ก ์ ์์ ๋ฐฉ๋ฒ๊ณผ ํ์์ ๋ฐฉ๋ฒ์ ๋ชจ๋ resolverํ์ผ์์ ๊ตฌํํด๋์์ต๋๋ค. 
      - ์ ์ํด์ฃผ์  json ํ์ผ์ ๋ณ์ํ ์ฒ๋ฆฌํ์ฌ ํ๋ฒ์ createํ๋ Mutation๊ณผ ํน์  [{์์  ์ ๋ณด Dataโฆ},{์์  ์ ๋ณด Dataโฆ}]๋ฅผ props๋ก ๋์ ธ์ ๋ค์ด์จ props๊ฐ ๊ธฐ์กด์ entityd์ row data๋ก ์กด์ฌํ๋ ๊ฒ์ธ์ง ํ๋จํ๊ณ  ์กด์ฌํ์ง ์์๋ ๊ฒ์ด๋ผ๋ฉด create ๋ฐ ์กฐํ๊ฐ ๊ฐ๋ฅํ๋๋ก ๋ง๋ค์์ต๋๋ค.

  -  2๏ธโฃ ์๋ํ ์ค๋ช
     - postcode.io๋ฅผ ์ฌ์ฉํ ๋๋ postman์ ํตํ์ฌ test๋ฅผ ์งํํ๋ฉด์ restful๋ฐฉ์์ ๋ชจ๋์ธ axios๋ฅผ ์ฌ์ฉํ์ต๋๋ค. 
     - ์ด ๋ถ๋ถ์ ์ฌ์ฉํ๋ ๊ฒ์ ๋ํ ์ด๋ ค์๊ณผ ๊ณ ๋ฏผ์ด๋ผ๊ธฐ ๋ณด๋ค๋ graphql ์์ฒญ์ ์ฌ์ฉํ๋ playground๋ผ๋ ํ๋์ ์๋ฒ์์ ๊ตฌ๋ํ๊ณ ์ ํ์ต๋๋ค. 
     - ๋ํ axios์ ๊ฐ์ restful์์ฒญ๋ ํฌํจํ๋ฉฐ ํ๋์ ์๋ฒ์์ ์๋์ํค๊ฒ ํ  ์ ์์๊น๋ผ๋ ๊ณ ๋ฏผ์ ํ์ต๋๋ค. 
     - ์ด๊ฒ์ด ์ค ํ๋ก์ ํธ ์๋ค๋ฉด graphql์๋ฒ๋ ์๋ฒ๋๋ก, axios๋ฅผ ๋ฐ์์ค๋ responseData๋ผ๋ฉด ํด๋น ๋ฐ์ดํฐ ๋๋ก Front-end๋ด์ผ๋ก ๋ฐ๋ก ๋ฟ๋ ค์ View์์ ๊ฐ๊ณตํด์ ๋ณด์ฌ์ฃผ๋ฉด ๋๋ ์์์๋๋ค. 
     - ๊ทธ๋ฌ๋ ์ด๋ฒ Back-end ๊ณผ์ ๋ฅผ ์งํํ๋ฉด์ ํ๋์ ๊ฐ๊ฒฐํ ์๋ฒ์์ TO DO LIST์ ํด๋นํ๋ API๋ค	์๋ชจ๋ ๋ณด์ฌ๋๋ฆฌ๊ณ  ์ถ์์ต๋๋ค. 
     - ๋ฐ๋ผ์ GraphQL API๋ฅผ ์์ฒญํ๋ ํ์ผ์์ ํด๋น axios๋ถ๋ถ๋ graphql๋ก ๊ฐ์ธ์ graphQL playground์์์๋ restAPI ์์ฒญ๋ ๊ฐ์ด grapnel API์์ ๊ฐ์ด ์ฒ๋ฆฌํ  ์ ์๋๋ก ํต์ผ์ฑ ๋ฐฉํฅ์ ์ ํํ์ต๋๋ค.
   
  -  3๏ธโฃ ์๋ํ ์ค๋ช
     - ์ฐํธ ๋ฒํธ๋ฅผ props๋ก ๋๊ฒจ์คฌ์๋ ํด๋น props์ ํด๋นํ๋ ์ฐํธ๋ฒํธ์ ๋ฐ๊ฒฝ ๋ชฉ๋ก์ ๋ณด์ฌ์ฃผ๋ ๊ฒ์์ฒด๋ ์ด๋ ค์ด ๋ถ๋ถ์ด ์๋์์ต๋๋ค. 
     - postcode.io๋ฅผ ํตํด ๊ฐ์ ธ์จ ๋ฐฐ์ด์ ํ๋ฒ ๋ ๊ฐ๊ณต์ ํ ๋ ์ด๋ค์ด ๊ฐ์ฅ ํจ์จ์ ์ผ๋ก ์ฌ๋ฐฐ์ด์ ํ๋ ๊ฒ์ผ๊น์ ๋ํ ๊ณ ๋ฏผ์ ํ์ต๋๋ค. 
     - A์์ ์ ๋ฐ๊ฒฝ์ผ๋ก ๋์ค๋ ๋ฐฐ์ด๊ฐ์ ์ ๊น DB์ ์ ์ฅํด๋์ด ์ ์ฅ๋ ๋ฐ์ดํฐ๋ฅผ sql๋ฌธ์ผ๋ก ๋ถ->๋จ์ผ๋ก ๋ณด์ฌ์ฃผ๋ sql๋ฌธ์ ์์ฑํฉ๋๋ค. 
     - ๊ทธ๋ฆฌ๊ณ  ํด๋น ๊ฐ์ filteringํ๊ฒ์ด return ๋์๋ค๋ฉด ํด๋น ์ ์ฅ๋์๋ row๋ฅผ ์ญ์ ์ํค๋ ๋ฐฉ๋ฒ์ผ๋ก ๊ฐ์ ธ์ค๋ ๋ฐฉ๋ฒ์ด ์๊ฐ์ด ๋ฌ์ต๋๋ค. 
     - ๋ฌผ๋ก  ํด๋น ๋ฐฉ๋ฒ์ ์ฌ์ฉํ๊ธฐ์ํด์  ํด๋น ์ ์ ์ ์ ๋ณด๋ฅผ ๋ํ๋ด๋ id๋ฅผ ๋ด๋ column๋ ํ์ํ๊ฒ ์ง๋ง ์งํํด๋ด๋ ํฅ๋ฏธ๋กญ๊ฒ ๋ค๋ผ๋ ์๊ฐ์ ํ์ต๋๋ค. 
     - ์ฝ๋์์ผ๋ก ๊ตฌํ์ด ๋์๋ ๊ฒ์ฒ๋ผ postcode.io์์ ๋ฐฐ์ด์ ๋ฐ์์์ ๊ทธ ๋ฐฐ์ด์ ์๋ฒ์์ ๊ฐ๊ณตํ๋ ๋ฐฉ๋ฒ์๋๋ค. 
     - 2๋ฒ์ ์ ํํ ์ด์ ๋ 1๋ฒ์ฒ๋ผ ํ์๋ ๊ณผ์ฐ ์ ๊น indexing์ ์ํ entity์ ๋ฐ์ดํฐ๊ฐ ์ ๊น๋ง ์๋ค๊ฐ ๋ค์ ์ญ์ ํด์ผํ๋ ๋ก์ง์ด๋ผ๊ณ  ํ๋ค๋ฉด ๋ง์ ์์ฒญ์ด ์์๋ ๋ถํ๊ฐ ์ค์ง ์์๊น ๋ผ๋ ์๊ฐ์ ํ์ต๋๋ค. 
  


- What is one thing we could do to improve this test?
   - postcode.io์ ์ ๋ณด๊ฐ Stores.jsonํ์ผ์ ๋ค์ด๊ฐ ์๋ ์ ๋ณด๋ผ๊ณ  ํ๊ฒ ์ต๋๋ค. 
   - ๊ทธ๋ฆฌ๊ณ  axios ๋ชจ๋์ ํตํ postcode.io API๋ฅผ ์์ฒญ์ ํตํด Stores.json์ ๊ฐ์ ์ ๋ณด๋ฅผ ๋ด๋ Entity์ row๊ฐ ์์ฑ๋ ๋ ํ์ฌ Stores.json์ ํํ์ธ {name:โstringโ, postcode:โstringโ}์ ๋๊ฐ์ column๋ฟ๋ง ์๋๋ผ ํ๋ฒ ์ ์ฅํ ๋ postcode.io์์ ์ ๊ณตํ๋ ์์  ์ ๋ณด๋ฅผ ๋ณด๋ค ๋ง์ด ๋ด๋ Entity์ column๋ค์ด ์กด์ฌํ๋ค๋ฉด sql๋ฌธ์ ๋ณด๋ค ํจ๊ณผ์ ์ผ๋ก ์ฌ์ฉํ์ฌ ๋น ๋ฅด๊ฒ select๋ฅผ ํด์ฌ ์ ์์ง ์์๊น ์๊ฐํฉ๋๋ค. 
   - ๋ํ ํ์ฌ๋ heroku์ ๋ฐฐํฌํ API๋ค์ stores.json ํ์ผ์ด๋ผ๋ LocalData๋ฅผ ๊ฐ์ง๊ณ  select๋ฅผ ํด์ค๋ API์ axios๋ฅผ ํ์ฉํ postcode.io API๋ฅผ ๋ณด์ฌ์ฃผ๋ ์์ค๊น์ง๋ง ์์ฑํ์ต๋๋ค. ๋ฐ๋ผ์ ๋ณด์ํ๋ค๋ฉด db๋ก ์ ์ฅ๋ stores.json data๋ค์ db ์๋ฒ(GCP๋ AWS RDS ๋ฑ๋ฑ)๋ฅผ ์ฌ์ฉํ์ฌ ์ ์ฉ์ํค๊ณ  ์ถ์ ์์ฌ์์ด ๋จ์ต๋๋ค.

๐ ๊ตฌํํ ERD & API
- PDF ํ์ผ ์ฐธ์กฐ ๋ฐ๋๋๋ค.

๐ํ๋ก์ ํธ ํ์ผ ์คํ ์์ ์๋ด

- ํ๋ก์ ํธ๋ฅผ clone ๋ฐ์ผ์  ํ์ ํด๋น project ๊ฒฝ๋ก์์ -> cd backend ํด๋๋ก ์ง์ํฉ๋๋ค.
- ~backend ๊ฒฝ๋ก์์ yarn install ์งํํฉ๋๋ค.
- ~backend ๊ฒฝ๋ก์์ docker-compose up โbuild or docker-compose up์ ์งํํฉ๋๋ค.
- http://localhost:8080/graphql๋ก ์ ๊ทผํด์ GraphQL Playground์์ api ์์ ํ์คํธ๋ฅผ ์งํํฉ๋๋ค.(์ ์ ๊ฒฝ์ฐ LocalData๊ฐ ์๋ db๋ก ์์ฑํ์ฌ ํ์คํธํ ๊ฒ์ ๊ฒฝ์ฐ์๋ DBeaver Tool๋ฅผ ์ฌ์ฉํ์ฌ db ์ ๋ณ๊ฒฝ์ฌํญ์ ํ์ธํ์ต๋๋ค.)

๐heroku๋ฅผ ํตํ GraphQL ์๋ฒ
- https://capa-node-server.herokuapp.com/graphql
  - heroku ์๋ฒ๋ฅผ ๋น๋ํ ๋ถ๋ถ์์ ์์ฌ์์ด ๋จ๋ ๋ถ๋ถ
  - Local ๋ฐ์ดํฐ๋ก ์กด์ฌํ๋ jsonํ์ผ์ ์ฟผ๋ฆฌ ์กฐํ ๋ฐ postcode.io API๋ฑ ์๊ตฌ์ฌํญ์ ๋ง๊ฒ ํ๋ก์ ํธ๋ฅผ ๋ง๋ค์์ต๋๋ค. ๊ทธ๋ฌ๋ ์ถํ ์๊ฐ์ด ๋ ์ฃผ์์ง๋ค๋ฉด, GCP ๋๋ aws์ RDS ํด๋ผ์ฐ๋ DB์๋ฒ๋ฅผ ํ์ฉํ์ฌ json๋ฐ์ดํฐ๋ฅผ  DB์์ ๋ฃ์ด DB์์์ sql๋ฌธ์ ํตํด rows Data๋ค์ ์กฐํ ํ  ์ ์๊ฒ ํ๋ฉด ๋ ์ข์ ๊ฒ ๊ฐ์ต๋๋ค.

๐๋ง์น๋ฉฐ,,
  -  ์ฌ์ง์ค์ธ ํ์ฌ์ ํ๋ก์ ํธ ๋ง๊ฐ๊ธฐํ์ด ๊ธํ์ฌ ์ต๋ํ์ผ๋ก ๋ ๋ง์ ๊ฒ์ ์ฑ์์ ๋ณด์ฌ๋๋ฆฌ์ง ๋ชปํ ์์ฌ์์ด ๋จ์ง๋ง ์ค๋๋ง์ ์ด๋ค ์๊ตฌ์ฌํญ์ ํ์ฌ ์๋ฌด๊ฐ ์๋ ๊ธด์ฅ ๋์น๋ ๋ง์์ผ๋ก ์๊ตฌ์ฌํญ์ ๋ง๋ ํ๋ก์ ํธ๋ฅผ ๋ฐ๋๋ผ์ธ์ด๋ผ๋ ์ ํ์๊ฐ ์์ ๋ฌด์ธ๊ฐ๋ฅผ ๋ง๋ค์ด๋ด๋ ๊ฐ๋ฐ ์์ฒด์ ์ฌ๋ฐ๋ ์๊ฐ์ ๊ฐ์ก๋ ์๊ฐ์ด์์ต๋๋ค. ํด๋น ํ์คํธ์ ์ํ  ์ ์๋ ๊ธฐํ๋ฅผ ์ฃผ์์ ๊ฐ์ฌํฉ๋๋ค. ๐โโ๏ธ ์ด์์๋๋ค. 






