import { Text, Anchor, Code, rem } from '@mantine/core';
import MarkdownIt from 'markdown-it';
import { MarkdownWrapper } from '@ver5/markdown-it-react';
import { Prism } from '@mantine/prism';
import mdKatex from '@traptitech/markdown-it-katex';
import { useStyles } from './styles';
import { MessageProps } from './types';

export default function Chat(props: MessageProps) {
  const { content } = props;
  const { classes } = useStyles(props)();

  const mdi = new MarkdownIt({
    linkify: true,
    highlight(code, language) {
      console.log(code, language);
      return '';
      // const validLang = !!(language && hljs.getLanguage(language));
      // if (validLang) {
      //   const lang = language ?? '';
      //   return highlightBlock(
      //     hljs.highlight(code, { language: lang }).value,
      //     lang
      //   );
      // }
      // return highlightBlock(hljs.highlightAuto(code).value, '');
    },
  });
  // const mdi = new MarkdownIt({
  // html: true,
  // linkify: true,
  // highlight(code, language) {
  //   const validLang = !!(language && hljs.getLanguage(language));
  //   if (validLang) {
  //     const lang = language ?? '';
  //     return highlightBlock(
  //       hljs.highlight(code, { language: lang }).value,
  //       lang
  //     );
  //   }
  //   return highlightBlock(hljs.highlightAuto(code).value, '');
  // },
  // });
  mdi.use(mdKatex, {
    blockClass: 'katexmath-block rounded-md',
    errorColor: ' #cc0000',
  });

  // {/* <Text fz="sm">大姐姐</Text> */}
  return (
    // <Text fz="md" className={classes.text}>
    <Text
      fz="md"
      lh={rem(26)}
      className={classes.text}
      // dangerouslySetInnerHTML={{ __html: mdi.render(content) }}
    >
      {/* <pre style={{ whiteSpace: 'pre-line', margin: 0 }}> */}
      <MarkdownWrapper
        md={mdi}
        rendererOpts={{
          renderRules: {
            a: (attrs, content, children) => (
              <Anchor href={attrs?.href} target="_blank" rel="noopener">
                {children}
              </Anchor>
            ),
            code: (attrs, content, children) => <Code>{children}</Code>,
            pre: (attrs, content, children) => (
              <Prism my="md" withLineNumbers language="jsx">
                {content}
              </Prism>
            ),
          },
          // tokenHandlerRules: {
          //   fence: (tokens, idx, env) => {
          //     // return env.pushTag(Prism, tokens[idx].attrs!);
          //     // console.log('tokens', tokens[idx], env.popTag('code'));
          //     // <Prism language="jsx">{tokens[idx].content}</Prism>
          //     return (
          //       <pre>
          //         <code>{tokens[idx].content}</code>
          //       </pre>
          //     );
          //     // env.pushRendered(<Prism lang="jsx">{children}</Prism>);
          //   },
          // },
        }}
        children={content}
      />

      {/* </pre> */}
    </Text>
  );
}
