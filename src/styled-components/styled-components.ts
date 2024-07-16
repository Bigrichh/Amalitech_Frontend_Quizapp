import { styled } from "@vvibe/vue-styled-components";

// Styled component for the main screen container
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

    /* Small screens (sm): 640px */
   @media (min-width: 640px) {
    
  }

  /* Medium screens (md): 768px */
  @media (min-width: 768px) {
    
  }

  /* Large screens (lg): 1024px */
  @media (min-width: 1024px) {
    
  }

  /* Extra large screens (xl): 1280px */
  @media (min-width: 1280px) {
    
  }

  /* 2 Extra large screens (2xl): 1536px */
  @media (min-width: 1536px) {
    
  }
`;

// Styled component for the large top outer circle background
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

// Styled component for the large bottom circle background
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

// Styled component for the inner circle background
export const innercircle = styled("div")`
  border-radius:100%;
  background-color:#f4f6fa;
  width:750px;
  height:750px;
  `;

// Styled component for the outer container holding other components
export const outercontainer = styled("div")`
  z-index: 10; 
  display: flex; 
  flex-direction: column; 
  gap: 50px; 
  align-items: end;
`;

// Styled component for the inner container 
export const innercontainer = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  height: auto;
  width: 1160px;
  z-index:1;
`;

// Styled component for the header container with text elements
export const headercontainer = styled("div")`
 display:flex;
 flex-direction:column;
 gap:48px; 
 width:465px;
 color:#313E51;
 `;

// Styled component for the header's main title
export const headercontainerh1 = styled("h1")`
 font-size:64px;
 font-weight: 300;
 `;

// Styled component for the header's paragraph text
export const headercontainerp = styled("p")`
 font-size:20px;
 font-family:"Rubik";
 font-style: italic;
 color:#626C7F;
 `;

// Styled component for the header's span text
export const headercontainerspan = styled("span")`
 font-weight: 500;
`;

// Styled component for the card container holding interactive cards
export const cardcontainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap:24px;
  align-items: center;
  justify-content: center;
`;

// Styled component for an individual card
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

// Styled component for the icon container within a card
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


// Styled component for the text within a card
export const cardtext = styled("p")`
 font-size:26px;
 font-weight: 500;
 color:#313E51;
 text-align:left;

`;

// Styled component for a container with title and toggle components
export const titletogglecontainer = styled("div")`
  display: flex; 
  width: 100%; 
  justify-content: space-between;
`;

// Styled component for a container with title
export const titlediv = styled("div")`
  display:flex;
  align-items:center;
  gap:24px;
`;

// Styled component for a question text
export const question = styled("p")`
  font-size:36px;
  color:#313E51;
  font-weight:500;
  `;

// Styled component for a custom-styled button
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

// Styled component for an error message text
export const errormessage = styled("span")`
  color:#EE5454; 
  font-weight: normal; 
  font-size: 24px; 
  display: flex; 
  align-items: center;
`;

// Styled component for score card container
export const scorecard = styled("div")`
  width: 600px; 
  height: 400px; 
  padding: 48px; 
  display: flex; 
  flex-direction: column;
  justify-content: space-between; 
  align-items: center; 
  background-color: white; 
  border-radius: 24px;  
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;


// Styled component for a score text
export const score = styled("p")`
  font-size: 144px; 
  font-weight: 500; 
  color:#313E51;
`;

// Styled component for a score container
export const scorediv = styled("div")`
  display: flex; 
  flex-direction: column; 
  gap: 16px; 
  align-items: center;
`;