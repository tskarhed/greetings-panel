import React from "react";
import { StandardEditorProps } from "@grafana/data";
import { TagsInput } from "@grafana/ui";
import { css } from "@emotion/css";

interface Settings {
    inputPlaceholder: string;
}

export const TagsEditor: React.FC<StandardEditorProps<string[], Settings>> = ({item, value=[], onChange}) => {
    return <TagsInput className={css`
        flex-direction: column-reverse;
        align-items: start;
        width: 100%;
        gap: 8px;
        &>div:nth-child(2) {
            width: 100%;
        }
    `} tags={value} onChange={onChange} placeholder={item.settings?.inputPlaceholder}/>

}