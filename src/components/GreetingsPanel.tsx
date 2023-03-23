import React, { useState } from 'react';
import { GrafanaTheme2, PanelProps } from '@grafana/data';
import { GreetingsOptions } from 'types';
import { css, cx } from '@emotion/css';
import { useStyles2 } from '@grafana/ui';

interface Props extends PanelProps<GreetingsOptions> {}

const BASE_URL = "https://source.unsplash.com/random/";
const PANEL_CONTENT_PADDING = 8;

const getStyles = (theme: GrafanaTheme2) => {
  
  return {
    visibleImage: css`
      opacity: 1;
    `,
    textContainer: css`
      position: relative;
      z-index: 1;
      width: 100%;
      height: 100%;
      display: grid;
      justify-content: center;
    `,
    text: css`
      text-align: center;
      font-family: ${theme.typography.h1.fontFamily};
      font-weight: 700;
      font-size: ${theme.typography.h1.fontSize};
      color: white;
      text-shadow: 2px 3px 7px black;
      margin: auto;
    `,
    image: css`
      position: absolute;
      top: 0;
      left: 0;
      transition: opacity 1s linear;
      opacity: 0;
    `,
    panelContainer: css`
      height: 100%;
      background-color: #8EC5FC;
      background-image: ${theme.isDark ? 'linear-gradient(225deg, #FF3CAC 0%, #784BA0 50%, #2B86C5 100%)':'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)'};
    `
  };
};

export const GreetingsPanel: React.FC<Props> = ({ options, width, height }) => {
  
  const styles = useStyles2(getStyles);
  const imageWidth = width + 2*PANEL_CONTENT_PADDING;
  const imageHeight = height + 2*PANEL_CONTENT_PADDING;
  const filters = encodeURIComponent(options.imageFilter.join(","));
  const url = `${BASE_URL}${imageWidth}x${imageHeight}/?${filters}`;

  const [ isLoaded, setLoaded ] = useState(false);
  

  const selectedPhrase = options.phrases[Math.floor(Math.random() * options.phrases.length)];
  return (
    <div className={styles.panelContainer}>
      <div className={styles.textContainer}>
        <p className={styles.text}>{selectedPhrase}</p>
      </div>
      <img
      src={url}
      onLoad={()=> {
        setLoaded(true);
      }}
        className={cx(styles.image, {[styles.visibleImage]: isLoaded})}
      />
    </div>
  );
};
