import type { NextApiRequest, NextApiResponse } from "next";

/* HEX to RGB function */
const hexToRgb = (hex: string) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (result) {
      return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      };
  }

  return {
    r: 0,
    g: 0,
    b: 0,
  };
};

/* RGB to CMYK function */
const rgbToCMYK = (rgb: any) => {
    let computedC = 0;
    let computedM = 0;
    let computedY = 0;
    let computedK = 1;
      
    // BLACK
    if (rgb.r != 0 && rgb.g !=0 && rgb.b != 0) {
      computedC = 1 - (rgb.r/255);
      computedM = 1 - (rgb.g/255);
      computedY = 1 - (rgb.b/255);
     
      const minCMY = Math.min(computedC,Math.min(computedM,computedY));
     
      computedC = parseFloat(((computedC - minCMY) / (1 - minCMY)).toFixed(2)) * 100;
      computedM = parseFloat(((computedM - minCMY) / (1 - minCMY)).toFixed(2)) * 100;
      computedY = parseFloat(((computedY - minCMY) / (1 - minCMY)).toFixed(2)) * 100;
      computedK = parseFloat((minCMY).toFixed(2)) * 100;
    }  
   
    return { C: Math.floor(computedC), M: Math.floor(computedM), Y: Math.floor(computedY), K: Math.floor(computedK) };
}

/* Function that gets the sRGB value of a color brightness value */
const checksRGB = (color: number) => {
  if (color <= 0.03928) {
    return color / 12.92;
  } else {
    return Math.pow((color + 0.055) / 1.055, 2.4);
  }
};

/* Function that calculates the rluminance */
const getLuminance = (r: number, g: number, b: number) => {
    var a = [r, g, b].map(function (v) {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

/* Function that calculates the ratio between two colors */
const calculateRatio = (foreground: any, background: any) => {
  const foregroundColor = hexToRgb(foreground);
  const backgroundColor = hexToRgb(background);

  const colorOneL = getLuminance(foregroundColor.r, foregroundColor.g, foregroundColor.b);
  const colorTwoL = getLuminance(backgroundColor.r, backgroundColor.g, backgroundColor.b);

  if (colorOneL > colorTwoL) {
    return (colorOneL + 0.05) / (colorTwoL + 0.05);
  } else {
    return (colorTwoL + 0.05) / (colorOneL + 0.05);
  }
};

const getRgbColorText = (r: number, g: number, b: number) => {
  return `${(`${r}`).padStart(3,'0')}-${(`${g}`).padStart(3,'0')}-${(`${b}`).padStart(3,'0')}`;
}

const getCmykColorText = (c: number, m: number, y: number, k: number) => {
  return `${(`${c}`).padStart(3,'0')}-${(`${m}`).padStart(3,'0')}-${(`${y}`).padStart(3,'0')}-${(`${k}`).padStart(3,'0')}`;
}

const getRatioStatus = (foreground: any, background: any) => {
  const ratio = calculateRatio(foreground, background);

  return ratio > 4.5 ? 'pass' : 'fail';
}

type Data = {
  Hex: string;
  Rgb: string;
  Cmyk: string;
  Pantone: string;
  DarkRatio: string;
  LightRatio: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const hexColor = req.body.Hex;

    const colorRgb = hexToRgb(hexColor);
    const colorCmyk = rgbToCMYK(colorRgb);

    const data = { 
      Hex: hexColor.toUpperCase(),
      Rgb: getRgbColorText(colorRgb.r, colorRgb.g, colorRgb.b),
      Cmyk: getCmykColorText(colorCmyk.C, colorCmyk.M, colorCmyk.Y, colorCmyk.K),
      Pantone: 'Not Found!',
      LightRatio: getRatioStatus('#FFFFFF', hexColor),
      DarkRatio: getRatioStatus('#000000', hexColor)
    };

    res.status(200).json(data)
  }