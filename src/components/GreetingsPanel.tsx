import React from 'react';
import { GrafanaTheme2, PanelProps } from '@grafana/data';
import { GreetingsOptions } from 'types';
import { css } from '@emotion/css';
import { useStyles2 } from '@grafana/ui';

interface Props extends PanelProps<GreetingsOptions> {}

const BASE_URL = "https://source.unsplash.com/random/";
const PANEL_CONTENT_PADDING = 8;

const getStyles = (theme: GrafanaTheme2) => {
  return {
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
      index: -1;
      position: absolute;
      top: 0;
      left: 0;
    `
  };
};

export const GreetingsPanel: React.FC<Props> = ({ options, width, height }) => {
  
  const styles = useStyles2(getStyles);
  const imageWidth = width + 2*PANEL_CONTENT_PADDING;
  const imageHeight = height + 2*PANEL_CONTENT_PADDING;
  const filters = options.imageFilter.join(",");
  const url = `${BASE_URL}${imageWidth}x${imageHeight}/?${filters}`;
  

  const selectedPhrase = options.phrases[Math.floor(Math.random() * options.phrases.length)];
  return (
    <>
    <div className={css`
      position: relative;
      z-index: 1;
      width: 100%;
      height: 100%;
      display: grid;
      justify-content: center;
    `}>
      <p className={styles.text}>{selectedPhrase}</p>
    </div>
      <img
      src={url}
        className={styles.image}
      />
    </>
  );
};
