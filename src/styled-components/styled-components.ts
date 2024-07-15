import { styled } from "@vvibe/vue-styled-components";


export const screen = styled("div")`
  display: flex;
  position:relative;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: #f4f6fa;
  font-family:"Rubik";
  overflow:hidden;
`;

export const outertopcircle = styled("div")`
  border-radius:100%;
  background-color:#EDF1F9;
  width:1000px;
  height:1000px;
  position:absolute;
  display:flex;
  align-items: center;
  justify-content: center;
  top:-60%;
  left:-35%;
  z-index:0;
  `;

export const outerbottomcircle = styled("div")`
  border-radius:100%;
  background-color:#EDF1F9;
  width:1000px;
  height:1000px;
  position:absolute;
  display:flex;
  align-items: center;
  justify-content: center;
  top:40%;
  right:-25%;
  z-index:0;
  `;

export const innercircle = styled("div")`
  border-radius:100%;
  background-color:#f4f6fa;
  width:750px;
  height:750px;
  `;

export const outercontainer = styled("div")`
  z-index: 10; 
  display: flex; 
  flex-direction: column; 
  gap: 50px; 
  align-items: end;
`;

export const innercontainer = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  height: auto;
  width: 1160px;
  z-index:1;
`;

export const headercontainer = styled("div")`
 display:flex;
 flex-direction:column;
 gap:48px; 
 width:465px;
 color:#313E51;
 `;

export const headercontainerh1 = styled("h1")`
 font-size:64px;
 font-weight: 300;
 `;

export const headercontainerp = styled("p")`
 font-size:20px;
 font-family:"Rubik";
 font-style: italic;
 color:#626C7F;
 `;

export const headercontainerspan = styled("span")`
 font-weight: 500;
`;

export const cardcontainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap:24px;
  align-items: center;
  justify-content: center;
`;

export const card = styled("div")`
  display: flex;
  color:#313E51;
  align-items: center;
  justify-content: start;
  background-color: #ffffff;
  border-radius: 24px;
  gap:24px;
  padding: 20px;
  width: 564px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
    
`;

export const icondiv = styled("div")`
  background-color:#F4F6FA;
  width:56px;
  height:56px;
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color:F4F6FA;
  color:#626C7F;
  font-size:28px;
  font-weight: 500;
  `;

export const cardtext = styled("p")`
 font-size:26px;
 font-weight: 500;
 color:#313E51;
 text-align:left;

`;

export const titletogglecontainer =styled("div")`
  display: flex; 
  width: 100%; 
  justify-content: space-between;
`;

export const titlediv =styled("div")`
  display:flex;
  align-items:center;
  gap:24px;
`;

export const question =styled("p")`
  font-size:36px;
  color:#313E51;
  font-weight:500;
  `;
  
  export const styledbutton = styled("button")`
  width:100%;
  border-radius: 24px;
  padding: 32px;
  background-color: #A729F5;
  color: #ffffff;
  font-size: 28px;
  font-weight:500;
  opacity:1;

  border: none;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    opacity:0.6;
  }
`;

export const QuestionCard = styled(card)`
  width: 500px;
`;

export const choice = styled("li") <{ selected: boolean }>`
  background-color: ${(props) => (props.selected ? "#d1c4e9" : "#ffffff")};
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const ErrorMessage = styled("p")`
  color: red;
  margin-top: 10px;
`;

export const AnswerResult = styled("div") <{ correct: boolean }>`
  color: ${(props) => (props.correct ? "green" : "red")};
  margin-top: 20px;
`;
