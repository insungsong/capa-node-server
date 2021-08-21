# CapaProject
## capa-node-server

capa coding test에서 원하는 api 로직을 작성한 프로젝트 입니다 ✅

안녕하십니까. 이번 에이팀벤처스 코딩테스트를 진행하게된 송인성 개발자입니다. 우선 테스트를 볼 기회를 제공해주셔서 감사합니다.
이번 프로젝트는 제가 해당 이직을 준비하면서 만들어 놓은 node-server위에 build해 나가는 과정으로 진행하였습니다.
해당 프로젝트에 기존으로 세팅을 해놓은 것으로는 간단한 docker-compose up을 통하여 컨테이너를 통하여 node-server를 띄어놓는 초기 세팅을 가진 코드였습니다.

#이번 프로젝트를 진행할 List Up입니다.
📌Stores.json에서 상점 목록을 얻을 수 있습니다.
우선 해당 파일로 제시해주셨던 .json파일을 Stores.ts파일로 변경하여 배열을 담는 변수를 export하여 사용 할 수 있게 만들었습니다.

상점 목록의 경우에는 Stores.json에 저장되어 있는 json배열을 DB에 담아서 보다 빠르게 select해 올 수 있도록 진행했습니다.
해당 stores.json에 있는 두개의 key값을 메인 두개의 컬럼으로 삼아서 entity를 만들었습니다.

📌Stores.json에서 상점의 특정 항목을 가져올 수 있습니다.
createStoresMutation graphql API를 통해서 만들어진 row data들을 통해서 상점의 특정 항목을 가지고 올 수 있게 했습니다.

📌API 소비자는 Stores.json의 이름으로 항목을 식별할 수 있습니다.
createStoresMutation을 통하여 생성된 row들중 이름을 props로 받아서 해당 하는 정보를 조회 할 수 있게 했습니다.

📌각 우편 번호에 대한 위도와 경도를 얻을 수 있습니다.(postcodes.io를 사용하여 각 우편번호의 위도와 경도를 얻을 수 있습니다.)
해당 부분은 axios 모듈을 사용하여 해당 postcodes.io에서 요청시 응답해주는 restAPI를 사용하였습니다.
(+graphql playground상에서 모두 호출 할 수 있는 resolver를 보여주기위하여 restAPI를 graphql API로 감싸는 작업을 진행했습니다.)

📌영국에서 주어진 우편번호의 주어진 반경에 있는 상점 목록을 반환할 수 있는 기능을 얻을 수 있습니다. (목록은 북쪽에서 남쪽으로 정렬되어야 합니다.)
해당 restAPI로 요청을 하여 받아오는 배열 data를 filtering하여 북에서 👉 남으로 정렬하게 하는 작업을 진행했습니다.

#해당 리스트를 API화 진행 수순
기존의 기본적으로 제가 작업을 하기위해 만들어놓은 node-server 프로젝트를 활용하여 List를 진행 했습니다.

#이번 프로젝트에서 사용된 기술 스택
- typescript
- typeorm
- graphql
- type-graphql
- axis
- docker
- node.js
- express.js

📌 질문 주신 사항에 대한 답변
- If you had chosen to spend more time on this test, what would you have done differently
  더 많은 시간 테스트를 진행해 볼 수 있었다면, Redis를 사용해보고 싶다라는 생각을 했습니다. Redis는 in-memory Database라고 알고있습니다. 메모리 단에서 db작업을 하고, 해당 Data를 사용하고자
  한다면 slave server에 저장하는 등의 방법을 사용할 수 있다. 수준으로 정도로만 알고 있어서 저에게 시간이 더 주워진다면 해당 기술 스택을 사용해볼 것 같습니다.
  그리고 이번 프로젝트를 진행하면서, 하나의 서버 즉 graphql Playground 서버 안에서 CAPA 관계자 측에서 만들어야 하는 List로 주신 모든 API 로직이 동작할 수 있게 하기위해서 axios를 graphql 요청딴에
  함께 묶어서 작업을 진행했습니다. 이번 코딩테스트를 계기로 처음으로 graphql API 요청에 restful한 axios를 넣어서 진행을 한 것이기에 해당 로직이 어떠한 취약점을 가지고 있는지에 따른 부분을 알아보아야 할
  것으로 판단됩니다.
  
- What part did you find the hardest? What part are you most proud of? In both cases, why?
  코드를 쳐 내려가는 것보다 어떤 식으로 정해주신 과제를 해결해 나가야할지에 대한 고민이 가장 컸습니다. 이러한 부분에서 발생했던 고민은 크게 세가지 였습니다.
  1. 제시해주신 stores.json파일을 어떤식으로 접근해야할지에 대한 고민
  2. postcode.io라는 외부 api를 어떤식으로 적용시킬지에 대한 고민
  3. 마지막 TO DO LIST 문항에 대한 고민
  
   👉 1 에대한 설명
      stores.json 자체를 Database상에 create 하지 않고 json 자체만을 가지고 일반 코딩을 해서 select을 해줄 것인지, 
      아니면 해당 json파일을 db에 저장하는 코드를 만들어서 저장된 db안에서 sql문을 써야할지에 대한 고민이 해당 과제를 받았을때에 첫번째 고민이였습니다.
      선자의 방법의 경우에는 할 순 있겠지만 굉장히 비효율적인 코드가 많이 나올 것이라고 판단했습니다. sql문을 사용했을 시에 줄어드는 코드의 양과 하드코딩에 가까운 js를 통한 많은 반복문과 같은
      코드를 줄이는 방법이 맞다라는 판단으로 후자의 방법을 통하여 제시해주신 json 파일을 변수화 처리하여 한번에 create하는 Mutation과 특정 [{상점 정보 Data…},{상점 정보 Data…}]를 props로 던져서
      들어온 props가 기존에 entity에 존재하는 것인지 판단하고 존재하지 않았던 것이라면 create되도록 만들었습니다.

   👉 2 에대한 설명
	postcode.io를 사용할때는 postman을 통하여 test를 진행하면서 restful방식의 모듈인 axios를 사용했습니다. 이 부분을 사용하는 것에 대한 어려움과 고민이라기 보다는 graphql 요청을 사용하는 playground하나의 서버에서
	axios와 같은 restful요청도 포함하며 하나의 서버에서 작동시키게 할 수 있을까라는 고민을 했습니다. 이것이 실 프로젝트 였다면 graphql서버는 서버대로 axios해오는 것은 axios해온대로 front-end딴으로 바로 뿌려서 View에
	가공해서 보여주면 되는 작업이지만 API라는 backend 과제를 진행하면서 하나의 간결한 서버에서 TO DO LIST에 해당하는 API들을 모두 보여드리고 싶었습니다.
	따라서 grapnel API를 요청하는 파일에서 해당 axios부분도 graphql로 감싸서 grapnel playground상에서도 restAPI 요청도 같이 grapnel API에서 같이 처리할 수 있도록 통일성 방향을 선택했습니다.
   
    👉 3 에대한 설명
	 우편 번호를 props로 넘겨줬을때 해당 props의 해당하는 우편번호의 반경 목록을 보여주는 것자체는 어려운 부분이 아니였으나, postcode.io를 통해 가져온 배열을 한번 더 가공을 할때 어떤이 가장 효율적으로
	 재 배열을 하는 것일까에 대한 고민을 했습니다.
	 1. DataBase의 특정 entity에서 배열로 들어온 내용들을 db상에 저장을 해서 sql을 select를 활용하여 배열을 가져오면서 추가됐된 row를 삭제시키는 방법으로 가져오는 방법이 생각이 났습니다.
	 2.코드상으로 구현이 되있는 것처럼 postcode.io에서 배열을 받아와서 그 배열을 서버에서 가공하는 방법
	 2번을 선택한 이유는 1번처럼 했을때 과연 잠깐 indexing을 위한 entity에 데이터가 잠깐만 있다가 다시 삭제해야하는 로직이라고 한다면 많은 요청이 있을때 부하가 오지 않을까 라는 생각을 했습니다. 
  


- What is one thing we could do to improve this test?
 postcode.io의 정보가 Stores.json파일에 들어가 있는 정보라고 하겠습니다. 그리고 axios 모듈을 통한 postcode.io API를 요청을 통해 Stores.json와 같은 정보를 담는 Entity의 row가 생성될때
 현재 Stores.json의 형태인 {name:”string”, postcode:”string”}의 두개의 column뿐만 아니라 한번 저장할때 postcode.io에서 제공하는 상점 정보를 보다 많이 담는다면 DB안에서 sql문을 보다 효과적으로 사용하여
 빠르게 select를 해올 수 있지 않을까 생각합니다.
 또한 현재는 localserver에서만 playground가 동작합니다. Graphql 서버 연결까지는 완료했지만 
DB 서버 연결까지는 진행하지 못했습니다. 따라서 보안한다면 LocalServer에서만 동작시켰던 DB 서버를 GCP나 AWS RDS을 사용하여 적용시키고 싶은 아쉬움이 남습니다.



📌 구현한 ERD & API
PDF 파일 참조 바랍니다.

📌프로젝트 파일 실행 수순 안내
- 프로젝트를 clone 받으신 후에 해당 project 경로에서 -> cd backend 폴더로 진입합니다.
- ~backend 경로에서 yarn install 진행합니다.
- ~backend 경로에서 docker-compose up —build or docker-compose up을 진행합니다.
- http://localhost:8080/graphql로 접근해서 grapnel Playground에서 api 작업을 진행합니다.(저의 경우 dbeaver를 사용하여 db 의 변경사항을 확인했습니다.)

📌heroku를 통한 grpahql 서버
https://capa-node-server.herokuapp.com/graphql

->해당 url은 로드까지는 완성했으나 db를 클라우드상 서버 혹은 서버로 db를 연동시키는 작업까지는 시간적 제한으로 이뤄내지 못했습니다.

📌마치며,,
재직중인 회사의 프로젝트 마감기한이 급하여 최대한으로 더 많은 것을 채워서 보여드리지 못한 아쉬움이 남지만 오랜만에 데드라인이라는 기간안에 무언가를 만들어내는 개발 자체의 재밌는 시간을 가졌던 시간이였습니다. 해당 테스트에 응할 수 있는 기회를 주셔서 감사합니다. 🙆‍♂️ 이상입니다. 








