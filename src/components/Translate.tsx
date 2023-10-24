"use client";

import { TRANSLATION_TYPE } from "@/lib/constants";
import { ArrowsLeftRight } from "@phosphor-icons/react/dist/ssr/ArrowsLeftRight";
import { Sparkle } from "@phosphor-icons/react/dist/ssr/Sparkle";
import { Flex, Button, Heading, Grid, TextArea } from "@radix-ui/themes";
import React from "react";

const Translate = () => {
    const [ translate, setTranslate ] = React.useState<TRANSLATION_TYPE>("GENZ_2_BOOMER");
    const translateFrom = translate === "GENZ_2_BOOMER" ? "Gen Z" : "Boomer";
    const translateTo = translate === "GENZ_2_BOOMER" ? "Boomer" : "Gen Z";

    return <Flex direction="column" gap="4" align="center">
        <Flex gap="3">
            <Heading>{translateFrom}</Heading> 
                <a onClick={() => setTranslate(translate === "GENZ_2_BOOMER" ? "BOOMER_2_GENZ" : "GENZ_2_BOOMER" ) }>
                <ArrowsLeftRight size={32} />
                </a> 
            <Heading>{translateTo}</Heading>
        </Flex>
        <Grid columns={{sm: "1", md: "2"}} gap={"6"} width="auto">
        <TextArea key="from" size="3" rows={5} placeholder={translateFrom} />
        <TextArea key="to" disabled size="3" rows={5} />
        </Grid>
        <Button size="4">Translate <Sparkle size={16} weight="fill" /></Button>

    </Flex>;
};

export default Translate;