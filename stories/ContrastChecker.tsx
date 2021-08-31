import React, { useEffect, useState } from "react";
import { Crad, HeaderCrad, BodyCrad, LoadingCard, RatioTest } from "./components/components";
import { CheckerProps } from "./models/CheckerProps";

export const ContrastChecker = (props: { color: string}) => {

  let object: CheckerProps = { 
    Hex: props.color,
    Rgb: '',
    Cmyk: '',
    Pantone: '',
    DarkRatio: '',
    LightRatio: '',
  };

  let [loading, setLoading] = useState<boolean>(true);
  let [item, setItem] = useState<CheckerProps>(object);
  let [error, setError] = useState<string>();

  useEffect(() => {
    if (item.Hex && /^#([0-9A-F]{3}){1,2}$/i.test(item.Hex)) {
      fetch("/api/Checker", {
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "accept": "application/json"
        },
        "body": JSON.stringify({
          Hex: props.color
        })
      })
      .then(response => response.json())
      .then(response => {
        try {
          if (response && response.Rgb && response.Cmyk && response.LightRatio && response.DarkRatio) {  
            setItem(response as CheckerProps);  
            setLoading(false);     
          }
          else {
            throw 'Something wrong!';
          }
        } catch (e) {
          setError(e);  
          console.error(e);
        }
      })
      .catch(err => {
        console.error(err);
        setError(err);  
      });
    }
    else {
      setError('Something wrong!');  
    }
  }, []);
  
  return (
    <Crad>
      <HeaderCrad css={{ backgroundColor: item.Hex }}>
        <h3 title="nameColor">{item.Hex}</h3>
        <ul>
          <li className="dark">
            <p>Aa Bb Cc</p>
            <RatioTest color={item.DarkRatio} title="darkRatio">
              {item.DarkRatio}
            </RatioTest>
          </li>
          <li className="light">
            <p>Aa Bb Cc</p>
            <RatioTest color={item.LightRatio} title="lightRatio">
              {item.LightRatio}
            </RatioTest>
          </li>
        </ul>
      </HeaderCrad>
      <BodyCrad>
        <ul>
          <li>
            <label>HEX</label>
            <p title="hexColor">{item.Hex}</p>
          </li>
          <li>
            <label>RGB</label>
            <p title="rgbColor">{item.Rgb}</p>
          </li>
          <li>
            <label>CMYK</label>
            <p title="cmykColor">{item.Cmyk}</p>
          </li>
          <li>
            <label>Pantone</label>
            <p>{item.Pantone}</p>
          </li>
        </ul>
      </BodyCrad>
      {
        loading && 
        <LoadingCard title="loading">
          {
            !error ? <div id="loading"></div> : <p title="error">Something wrong!</p>
          }
        </LoadingCard>
      }
    </Crad>
  );
};
