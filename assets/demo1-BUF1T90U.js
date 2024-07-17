const r=`<template>\r
    <div class="container">\r
        <t-select :optionsArr="options"></t-select>\r
    </div>\r
</template>\r
\r
<script setup>\r
import { reactive } from "vue";\r
const options = reactive([\r
    {\r
        label: 'A',\r
    },\r
    {\r
        label: 'B',\r
    },\r
    {\r
        label: 'C',\r
    }\r
]);\r
<\/script>\r
\r
<style lang="less" scoped></style>`;export{r as default};
