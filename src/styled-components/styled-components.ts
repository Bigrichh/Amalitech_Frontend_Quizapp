import { styled } from "@vvibe/vue-styled-components";

// Styled component for the main screen container
export const screen = styled("div")`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: var(--bg-color);
  font-family: "Rubik";
  overflow: hidden;
  padding: 24px;

`;

// Styled component for the large top outer circle background
export const outertopcircle = styled("div")`
  border-radius: 100%;
  background-color: var(--outercirclebg-color);
  width: 1000px;
  height: 1000px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -30%;
  left: -200%;
  z-index: 0;

  /* Medium screens (md): 768px */
  @media (min-width: 768px) {
 left: -75%;
    top: -50%;
  }

  /* Large screens (lg): 1024px */
  @media (min-width: 1024px) {
   left: -55%;
    top: -95%;
  }

  /* Extra large screens (xl): 1280px */
  @media (min-width: 1280px) {
    left: -45%;
    top: -80%;
  }

  /*2 Extra large screens (2xl): 1536px */
  @media (min-width: 1536px) {
    left: -35%;
    top: -60%;
  }
`;

// Styled component for the large bottom circle background
export const outerbottomcircle = styled("div")`
  border-radius: 100%;
  background-color: var(--outercirclebg-color);
  width: 1000px;
  height: 1000px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 4000%;
  right: -2500%;
  z-index: 0;
  
  /* Medium screens (md): 768px */
  @media (min-width: 768px) {
    top: 50%;
    right: -75%;
    }
    
    /* Large screens (lg): 1024px */
    @media (min-width: 1024px) {
      top: 50%;
      right: -45%;
  }

  /* Extra large screens (xl): 1280px */
  @media (min-width: 1280px) {
    top: 60%;
    right: -35%;
  }

  /* 2 Extra large screens (2xl): 1536px */
  @media (min-width: 1536px) {
    top: 40%;
    right: -25%;
  }
`;

// Styled component for the inner circle background
export const innercircle = styled("div")`
  border-radius: 100%;
  background-color: var(--bg-color);
  width: 750px;
  height: 750px;
`;

// Styled component for the outer container holding other components
export const outercontainer = styled("div")`
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: end;
  width: 100%;

  /* Medium screens (md): 768px */
  @media (min-width: 768px) {
    width: fit-content;
  }
`;

// Styled component for the inner container
export const innercontainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  z-index: 1;

  /* Medium screens (md): 768px */
  @media (min-width: 768px) {
    align-items: start;
    width: fit-content;
    gap: 48px;
  }

  /* Large screens (lg): 1024px */
  @media (min-width: 1024px) {
    flex-direction: row;
    width: 1000px;
  }

  /* Extra large screens (xl): 1280px */
  @media (min-width: 1280px) {
    flex-direction: row;
    height: auto;
    width: 1160px;
  }
`;

// Styled component for the header container with text elements
export const headercontainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  color: var(--text-color);

  /* Medium screens (md): 768px */
  @media (min-width: 768px) {
    width: 465px;
  }

  /* Extra large screens (xl): 1280px */
  @media (min-width: 1280px) {
    gap: 48px;
    width: 465px;
  }
`;

// Styled component for the header's main title
export const headercontainerh1 = styled("h1")`
  font-size: 32px;
  font-weight: 300;

  /* Medium screens (md): 768px */
  @media (min-width: 768px) {
    font-size: 48px;
  }

  /* Extra large screens (xl): 1280px */
  @media (min-width: 1280px) {
    font-size: 64px;
  }
`;

// Styled component for the header's paragraph text
export const headercontainerp = styled("p")`
  font-size: 18px;
  font-family: "Rubik";
  font-style: italic;
  color: var(--headerp-color);

  /* Medium screens (md): 768px */
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

// Styled component for the header's span text
export const headercontainerspan = styled("span")`
  font-weight: 500;
  display: block;
`;

// Styled component for the card container holding interactive cards
export const cardcontainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100%;

  /* Medium screens (md): 768px */
  @media (min-width: 768px) {
    gap: 24px;
    width: fit-content;
  }

  /* Large screens (lg): 1024px */
  @media (min-width: 1024px) {
    gap: 18px;
  }

  /* Extra large screens (xl): 1280px */
  @media (min-width: 1280px) {
    gap: 24px;
  }
`;

// Styled component for an individual card
export const card = styled("div")`
  display: flex;
  color: var(--text-color);
  align-items: center;
  justify-content: start;
  background-color: var(--cardbg-color);
  border-radius: 12px;
  gap: 24px;
  padding: 12px;
  width: 100%;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  /* Medium screens (md): 768px */
  @media (min-width: 768px) {
    width: 564px;
    padding: 20px;
    border-radius: 24px;
  }

  /* Large screens (lg): 1024px */
  @media (min-width: 1024px) {
    width: 524px;
    padding: 14px;
  }

  /* Extra large screens (xl): 1280px */
  @media (min-width: 1280px) {
    width: 564px;
  }

  /* 2 Extra large screens (2xl): 1536px */
  @media (min-width: 1536px) {
    padding: 16px;
  }
`;

// Styled component for the icon container within a card
export const icondiv = styled("div")`
  background-color: #f4f6fa;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: F4F6FA;
  color: #626c7f;
  font-size: 20px;
  font-weight: 500;

  /* Medium screens (md): 768px */
  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 24px;
  }

  /* Extra large screens (xl): 1280px */
  @media (min-width: 1280px) {
    width: 48px;
    height: 48px;
  }

  /* 2 Extra large screens (2xl): 1536px */
  @media (min-width: 1536px) {
    width: 56px;
    height: 56px;
    font-size: 28px;
  }
`;

// Styled component for the text within a card
export const cardtext = styled("p")`
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: var(--text-color);

  /* Medium screens (md): 768px */
  @media (min-width: 768px) {
    font-size: 22px;
  }

  /* Large screens (lg): 1024px */
  @media (min-width: 1024px) {
    font-size: 20px;
  }

  /* Extra large screens (xl): 1280px */
  @media (min-width: 1280px) {
    font-size: 24px;
  }
`;

// Styled component for a container with title and toggle components
export const titletogglecontainer = styled("div")`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

// Styled component for a container with title
export const titlediv = styled("div")`
  display: flex;
  align-items: center;
  gap: 24px;
`;

// Styled component for a question text
export const question = styled("p")`
  font-size: 22px;
  color: var(--text-color);
  font-weight: 500;

  /* Medium screens (md): 768px */
  @media (min-width: 768px) {
    font-size: 28px;
  }

  /* Extra large screens (xl): 1280px */
  @media (min-width: 1280px) {
    font-size: 36px;
  }
`;

// Styled component for a custom-styled button
export const styledbutton = styled("button")`
  width: 100%;
  border-radius: 12px;
  padding: 18px;
  font-size: 22px;
  background-color: #a729f5;
  color: #ffffff;
  font-weight: 500;
  opacity: 1;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }

  /* Medium screens (md): 768px */
  @media (min-width: 768px) {
    padding: 24px;
    border-radius: 24px;
    font-size: 24px;
  }

  /* Extra large screens (xl): 1280px */
  @media (min-width: 1280px) {
    padding: 26px;
    font-size: 26px;
  }

  /* 2 Extra large screens (2xl): 1536px */
  @media (min-width: 1536px) {
    border-radius: 24px;
    padding: 28px;
    font-size: 28px;
  }
`;

// Styled component for an error message text
export const errormessage = styled("span")`
  color: var(--errortext-color);
  font-weight: normal;
  font-size: 16px;
  display: flex;
  align-items: center;

  /* Medium screens (md): 768px */
  @media (min-width: 768px) {
    font-size: 24px;
  }

  /* Extra large screens (xl): 1280px */
  @media (min-width: 1280px) {
    font-size: 22px;
  }

  /* 2 Extra large screens (2xl): 1536px */
  @media (min-width: 1536px) {
    font-size: 24px;
  }
`;

// Styled component for score card container
export const scorecard = styled("div")`
  width: 100%;
  height: fit-content;
  padding: 40px;
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--scorecardbg-color);
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  /* Medium screens (md): 768px */
  @media (min-width: 768px) {
    border-radius: 24px;
    width: 550px;
    height: 350px;
    font-size: 24px;
  }

  /* Extra large screens (xl): 1280px */
  @media (min-width: 1280px) {
    font-size: 22px;
  }

  /* 2 Extra large screens (2xl): 1536px */
  @media (min-width: 1536px) {
    width: 550px;
    height: 350px;
    padding: 48px;
  }
`;

// Styled component for a score text
export const score = styled("p")`
  font-size: 100px;
  font-weight: 500;
  color: var(--text-color);

  /* Medium screens (md): 768px */
  @media (min-width: 768px) {
    font-size: 144px;
  }
`;

// Styled component for a score container
export const scorediv = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  width: 100%;
`;
