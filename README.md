# Matching 42 Practice

개발에 들어가기 전 간단한 프로세스를 연습해보고, 최소한의 연습을 해보는 과제
기한: 이번주 토요일까지
궁금한것은 언제든지 물어볼것

해당 레포는 이 과정이 끝나면 삭제할겁니다.

이 과정이 필요없는 분도 있겠지만 여러분들의 이해도 파악 및 연습 의미에서 반드시 참여 부탁드립니다.

### 양쪽 다
0. development branch를 clone 할 것
```
git clone -b development --single-branch {url}
```

1. 본인의 issue를 하나씩 발급할 것
    - template를 선택해서 쓸 것(들어가보면 알겁니다)
    - 제목: 어떤 이슈인지
    - 내용: 해야할 일
    - 라벨과 프로젝트 설정을 꼭 할 것

2. 본인의 branch를 development 브런치로 부터 만들어서 진행할 것
    - branch 이름은 practice/#_intraid 로 만들기
```
git checkout -b practice/#_seolim development
```

3. 각자의 section directory(FRONT / BACK)에서 본인의 directory를 만들고 진행할 것(연습이니까 merge confilct 방지용)

4. commit을 규칙에 맞추어 작성할 것
commit template 적용법
```
git config commit.template {gitmessage.txt file path}
```

5. 본인 branch에 push 후 development로 pull request를 보낼 것
```
git push origin practice/#_seolim
```

6. pull Request의 내용을 자세히 작성할 것
    - 이걸 하기위해 뭘 조사했고 어떻게 하였는지 작성
    - 이 PR을 보고 다른사람이 똑같이 따라하였을 때, 따라할 수 있게끔 작성


### FRONT END 
1. 최소조건
React App울 띄워볼 것
하나 이상 상태에 따라 동적으로 변하는 component를 만들어 볼것

2. 추가조건(하면 좋고 아님 말고)
CRA없이 직접 설정해보기


### BACK END
1. 최소조건
Express App을 띄워볼 것
2개 이상의 routing을 구현할 것

2. 추가조건(하면 좋고 아님 말고)
MVC 패턴 구조
각종 미들웨어 사용해보기
TypeScript로 해보기
