import Head from "next/head";
import { useState } from "react";
import { styled } from "../stitches.config";

export default function Home() {
  const [colors, setColors] = useState(['#000000']);

  const addColor = () => {
    let items = Object.assign([], colors);
    items.push('#00000');
    setColors(items);
  }

  const removeColor = (index: number) => {
    let items = Object.assign([], colors);
    items.splice(index, 1);
    setColors(items);
  }

  const onChangeEvent = (event: any, index: number) => {
    const color = event.target.value;
    let items: string[] = Object.assign([], colors);
    items[index] = color;
    setColors(items);
  }

  return (
    <div>
      <Head>
        <title>Color Contrast Checker</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Main>
          <Heading>
            Color Contrast Checker
          </Heading>
          <Subtitle>
            A simple tool for calculating the contrast ratio between two HEX values. Based on WCAG 2.0 Level AA standards.
          </Subtitle>
          {
            colors.map((color, index) => 
            <ColorInput key={index}>
              <Input type="text" value={color} onChange={(event) => onChangeEvent(event, index)} />
              <Button color="danger" onClick={() => removeColor(index)}>R</Button>
            </ColorInput>)
          }
          <Button color="success" onClick={() => addColor()}>Add</Button>
          <Button color="primary" onClick={() => addColor()}>Test</Button>
        </Main>
      </main>
    </div>
  );
}

export const Main = styled("div", {
  margin: "auto",
  textAlign: "center"
});

export const Heading = styled("h1", {
  fontFamily: "$h4",
  fontWeight: "$h5",
  fontStyle: "$h5",
  fontSize: "$h5",
  lineHeight: "$h5",
});

export const Subtitle = styled("p", {
  fontFamily: "$subtitle2",
  fontWeight: "$subtitle2",
  fontStyle: "$subtitle2",
  fontSize: "$subtitle2",
  lineHeight: "$subtitle2",
});

export const ColorInput = styled("div", {
  margin: "10px auto",
  maxWidth: "320px",
  '& Input': {
    borderRight: "0",
    borderTopRightRadius: "0",
    borderBottomRightRadius: "0"
  },
  '& Button': {
    borderLeft: "0",
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
  },
});

export const Input = styled("input", {
  padding: '.375rem .75rem',
  fontSize: '1.2rem',
  border: "1px solid #ced4da",
});

export const Button = styled("button", {
  padding: '.375rem .75rem',
  fontSize: '1.2rem',
  border: "1px solid #ced4da",
  borderRadius: ".25rem",
  cursor: "pointer",
  variants: {
    color: {
      primary: {
        backgroundColor: '$pri',
        color: 'white'
      },
      secondary: {
        backgroundColor: '$sec',
        color: 'white'
      },
      success: {
        backgroundColor: '$suc',
        color: 'white'
      },
      danger: {
        backgroundColor: '$ale',
        color: 'white'
      },
    },
  },
});