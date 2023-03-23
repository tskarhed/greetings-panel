import React from "react";
import { StandardEditorProps } from "@grafana/data";
import { TagsInput, useStyles2 } from "@grafana/ui";
import { css } from "@emotion/css";

interface Settings {
    inputPlaceholder: string;
}
const getStyles = () => css`
    align-items: start;
    width: 100%;
    gap: 8px;
    &>div:nth-child(2) {
        width: 100%;
    }
`;


export const TagsEditor: React.FC<StandardEditorProps<string[], Settings>> = ({item, value=[], onChange}) => {
    const styles = useStyles2(getStyles);
    
    return <TagsInput
        className={styles}
        tags={value}
        onChange={onChange}
        placeholder={item.settings?.inputPlaceholder}
    />
}
