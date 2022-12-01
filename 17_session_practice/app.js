const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// session({ 세션모듈_옵션 })
// - secret: 세션 발급시 사용되는 키 -> 반드시 필요한 옵션
// - resave: 매 요청마다 세션을 다시 저장할 것인지
// - saveUninitialized: 초기값이 지정되지 않은 상태에서도 처음부터 세션 생성할지
// - secure: true 설정시 https에서만 세션을 주고 받음
// - name: 세션 쿠키명 (connet.sid 이지만 다른 이름 줄수도 있음)
app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: true,
  })
);

// (임시) DB에 저장되어 있는 유저정보
const userInfo = { id: "a", pw: "1" };

// GET /login -> login.ejs render
app.get("/login", (req, res) => {
  res.render("login");
});

// GET / -> index.ejs render
app.get("/", (req, res) => {
  const user = req.session.user;
  console.log("req.session.user >> ", user);
  // 세션 설정 x -> undefined
  // 세션 설정 o -> userInfo.id 값

  if (req.session.user !== undefined) {
    // 세션 값이 있으면, index.ejs render { isLogin: true, user: req.session.user }
    console.log(req.session.user);
    res.render("index", { isLogin: true, user: req.session.user });
  } else {
    // 세션 값이 없으면, index.ejs render { isLogin: false }
    res.render("index", { isLogin: false });
  }

  //   res.render("index");
});

//POST/login
// 로그인 정보 일치; 세션 설정
//로그인 정보 불일치; 경로 이동
app.post("/login", (req, res) => {
  console.log("***", req.body); // { id: 'a', pw: 'a' }
  console.log("***", req.body.id); // 'a'

  if (req.body.id === userInfo.id && req.body.pw === userInfo.pw) {
    // 로그인 정보 일치한다면
    // - req.session.user 저장
    req.session.user = req.body.id; // 세선 설정
    // - / 리다이렉트
    res.redirect("/");
  } else {
    // 로그인 정보 일치하지 않으면
    // - alert
    // - / 경로로 이동
    res.send(
      `<script>
            alert('로그인 실패..😅');
            document.location.href = '/';
        </script>`
    );
  }
});

// get /logout
app.get("/logout", (req, res) => {
  const user = req.session.user;
  console.log("GET /logout | req.session.user >>>", user);
  // 'a'
  // undefined

  if (user !== undefined) {
    // req.session.destroy(콜백)
    // 콜백 안에서 로그아웃 -> 리다이렉트
    req.session.destroy((err) => {
      if (err) {
        throw err;
      }
      res.redirect("/");
    });
  } else {
    // 유저가 브라우저에서 /logout 경로로 직접 접근
    // res.send()
    // - alert('잘못된 접근입니다');
    // - /경로로 이동
    res.send(
      `<script>
        alert('잘못된 접근입니다.);
    document.location.href = '/';
    </script>`
    );
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// req.session: "사용자별"로 해당 객체 안에 세션 정보 유지됨

// [세션쿠키 설정]
// req.session.키 = 값

// [세션쿠키 사용]
// req.session.키

// [세션 삭제]
// req.session.destroy(콜백함수)
// - 콜백함수: 세션 삭제시 호출할 콜백함수