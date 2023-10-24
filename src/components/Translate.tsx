"use client";

import { TRANSLATION_TYPE } from "@/lib/constants";
import { ArrowsLeftRight } from "@phosphor-icons/react/dist/ssr/ArrowsLeftRight";
import { Sparkle } from "@phosphor-icons/react/dist/ssr/Sparkle";
import { Flex, Button, Text, Grid, TextArea } from "@radix-ui/themes";
import { useCompletion } from "ai/react";
import React from "react";

const Translate = () => {
    const [ translate, setTranslate ] = React.useState<TRANSLATION_TYPE>("GENZ_2_BOOMER");
    const [ inputText, setInputText ] = React.useState<string>("");
    const { complete, completion, isLoading } = useCompletion({
        api: '/api/completion',
        body: {
            translateType: translate,
        }
      });

      const aiTranslate = React.useCallback(
        async (c: string) => {
          await complete(c);
        },
        [complete],
      );

    const translateFrom = translate === "GENZ_2_BOOMER" ? "Gen Z" : "Boomer";
    const translateTo = translate === "GENZ_2_BOOMER" ? "Boomer" : "Gen Z";

    return <Flex direction="column" gap="6" mt="4" align="center">
<Flex direction="column" gap="2" align="center">
        <Flex gap="6">
            <Text size={"4"} weight="bold">{translateFrom}</Text> 
                <a onClick={() => setTranslate(translate === "GENZ_2_BOOMER" ? "BOOMER_2_GENZ" : "GENZ_2_BOOMER" ) }>
                <ArrowsLeftRight size={24} />
                </a> 
            <Text size={"4"} weight="bold">{translateTo}</Text>
        </Flex>
        <Grid columns={{sm: "1", md: "2"}} gap={"6"} width="auto">
        <TextArea key="from" value={inputText} onChange={(e) => setInputText(e.currentTarget.value)} size="3" rows={5} placeholder={translateFrom} />
        <TextArea key="to" disabled size="3" value={completion} rows={5} />
        </Grid>
    </Flex>
    <Button size="4" onClick={() => aiTranslate(inputText)} disabled={isLoading || !inputText}>Translate <Sparkle size={24} weight="fill" /></Button>
    </Flex>
    ;
};

export default Translate;