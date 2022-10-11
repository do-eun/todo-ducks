import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/*폰트*/
@font-face {
    font-family: 'HBIOS-SYS';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2207-01@1.0/HBIOS-SYS.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

* {
    font-family: 'HBIOS-SYS';
    font-size: 20px;
}

/*제목, 내용을 입력받는 상자*/
form {
  border: 3px solid gray;
  border-radius: 10px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;

  display: flex;
  gap: 20px;
}

label {
  font-weight: 700;
}

input {
  border: 2px solid gray;
  border-radius: 10px;
  height: 40px;
  padding: 0 12px;
  width: 240px;

}


/*리스트 박스*/
h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

/*투두박스*/
button {
    border: none;
    border-radius: 8px;
    cursor: pointer;
    height: 40px;
    width: 50%;
}

p {
  font-size: 15px;
  color: #2b2b61;
  text-decoration: underline;
}

`;

export default GlobalStyle;
