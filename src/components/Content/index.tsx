import { ScrollArea, Stack, rem, Avatar } from '@mantine/core';
import TopHeader from './TopHeader';
import BottomInput from './BottomInput';
import Message from '../Message';
import { getCommonStyles } from './common';
import type { MessageProps } from '../Message/types';

type Props = {};

export default function Context({}: Props) {
  const mockData = [
    {
      type: 'text',
      user: {
        type: 'user',
        avatar:
          'http://wx.qlogo.cn/mmopen/QCLtXx8I8bz2qicJlyF5ibV0zzBcYOnU0GukaE5rxBE34De1hQYzTMuA9AhgeVkAJiaShSbYvaa8jhIORezUsmmPg/96',
      },
      content: '我才看到',
    },
    {
      type: 'text',
      user: {
        type: 'user',
        avatar:
          'http://wx.qlogo.cn/mmopen/QCLtXx8I8bz2qicJlyF5ibV0zzBcYOnU0GukaE5rxBE34De1hQYzTMuA9AhgeVkAJiaShSbYvaa8jhIORezUsmmPg/96',
      },
      content:
        '【分布式系统】\n\n分布式系统是由多个计算机节点通过网络互相连接，共同协作组成的系统，旨在提供更高效、更可靠的计算和存储资源。这些节点共同协作完成各种计算、存储任务，可以包括负载均衡、容错处理、数据共享等。\n\n【Node.js 实现分布式系统】\n\nNode.js 本身并不支持分布式，但是可以通过第三方模块来实现。下面是一些 Node.js 分布式框架的例子：\n\n1. TadpoleJS：TadpoleJS 是一个轻量级的分布式服务器框架，它使用 Node.js 和 Redis 实现分布式计算和分布式数据存储。[[1](https://github.com/Tencent/Tadpole)]\n\n2. PM2：PM2 是 Node.js 生态系统中最流行的生产过程管理工具之一，可以在多台服务器上管理和监控 Node.js 进程，实现 Node.js 的自动化部署和负载均衡。[[2](https://pm2.keymetrics.io/)]\n\n3. StrongLoop：StrongLoop 是一个全栈性能平台，它提供了一套完整的 Node.js 分布式应用开发框架，包括 API 网关、微服务等组件。[[3](https://strongloop.com/)]\n\n4. Apache Mesos：Apache Mesos 是一个通用的集群管理器，可以管理多种类型的应用程序，包括 Docker、Hadoop 和 Node.js 等。[[4](http://mesos.apache.org/)]\n\n这些框架可以让 Node.js 在分布式系统中获得更好的表现，提高整个应用的性能和可扩展性。',
    },
    {
      type: 'text',
      user: {
        type: 'user',
        avatar:
          'http://wx.qlogo.cn/mmopen/QCLtXx8I8bz2qicJlyF5ibV0zzBcYOnU0GukaE5rxBE34De1hQYzTMuA9AhgeVkAJiaShSbYvaa8jhIORezUsmmPg/96',
      },
      content:
        '`forwardRef` 和 `ref` 都是 React 中与访问 `DOM` 元素或组件实例相关的 `API`。`forwardRef` 可以访问在父组件中定义的 `ref`，而 `ref` 与 `useRef` 可以访问 `DOM` 元素或组件的实例。\n\n具体来说：\n\n- `forwardRef` 是一个高阶函数，它接受一个渲染函数，并返回一个新的组件，该组件可以将父组件传递下来的 `ref` 属性转发给其内部的子组件。这样做的作用是可以将 `ref` 关联到内部的子组件，从而方便对子组件进行各种操作。例如：\n\n   ```\n   const MyInput = forwardRef((props, ref) => {\n     return <input ref={ref} {...props} />;\n   });\n   ```\n\n   父组件可以将 `ref` 传递给 `MyInput` 这个组件，并将该 `ref` 作为参数传递给 `forwardRef` 函数中定义的渲染函数。在这个例子中，我们建立了一个 `MyInput` 组件，它可以将接收到的 `ref` 转发给内部的 input 元素上。\n\n- `ref` 属性主要用于访问 `DOM` 元素或组件实例。在类组件中，可以使用 `React.createRef()` 创建一个 `ref` 对象并将其关联到组件中确定的元素或组件实例，进而可以在组件中使用 `this.refName.current` 访问该元素或组件实例。例如：\n\n  ```\n  class MyComponent extends React.Component {\n    constructor(props) {\n      super(props);\n      this.myRef = React.createRef();\n    }\n\n    render() {\n      return <div ref={this.myRef}>Hello World!</div>;\n    }\n  }\n  ```\n\n  在这个例子中，我们创建了一个 `ref` 对象 `myRef` 并将其关联到 `div` 元素上。这样，我们就可以在组件的其他方法中使用 `this.myRef.current` 来访问该 `div` 元素。\n\n- `useRef` 是一个 `Hook`，主要用于在函数式组件中访问 `DOM` 元素或组件实例。与 `ref` 类似，我们也可以使用 `React.useRef()` 来创建一个 `ref` 对象。不同之处在于，我们不需要使用 `this` 关键字来访问 `ref.current` 属性，而是直接使用 `ref.current` 即可访问。例如：\n\n  ```\n  import { useRef } from \'react\';\n\n  function MyComponent() {\n    const myRef = useRef(null);\n\n    function handleClick() {\n      console.log(myRef.current.value);\n    }\n\n    return (\n      <div>\n        <input type="text" ref={myRef} />\n        <button onClick={handleClick}>Click Me</button>\n      </div>\n    );\n  }\n  ```\n\n  在这个例子中，我们使用 `useRef` 创建了一个 `myRef` 对象，并将其关联到 input 元素上。然后，我们在 `handleClick` 函数中可以使用 `myRef.current.value` 访问 input 元素的值。\n\n总的来说，`forwardRef` 可以将父组件传递下来的 `ref` 传递给内部的子组件，而 `ref` 和 `useRef` 则都可以用于访问 `DOM` 元素或组件实例。不同之处在于 `ref` 主要应用于类组件中，而 `useRef` 则主要应用于函数式组件中。',
    },
    {
      type: 'text',
      user: {
        type: 'user',
        avatar:
          'http://wx.qlogo.cn/mmopen/QCLtXx8I8bz2qicJlyF5ibV0zzBcYOnU0GukaE5rxBE34De1hQYzTMuA9AhgeVkAJiaShSbYvaa8jhIORezUsmmPg/96',
      },
      content:
        '群公告\n\n🌈谷雨"免单"周，抢最高🔟元！\n\n🌈4/17-4/23\n\n🐑限时春日美味，🉑0元解锁!\n\n-------------------------\n\n✅【福利1】本群每天可领2️⃣次红包>上午11~12点>下午17~18点，连续签到5天，必中大红包\n\n✅【福利2】午餐、下午茶、夜宵.....均🈶￥9.9特惠专区，欢迎光临！\n\n✅【福利3】首次添加好友，必中2元红包🧧 weixin://dl/business/?t=qa8yKzUVjPn \n\n------------------------\n\n💖唯春光与美食不可辜负💖',
    },
    {
      type: 'image',
      user: {
        type: 'AI',
        avatar:
          'http://wx.qlogo.cn/mmopen/QCLtXx8I8bz2qicJlyF5ibV0zzBcYOnU0GukaE5rxBE34De1hQYzTMuA9AhgeVkAJiaShSbYvaa8jhIORezUsmmPg/96',
      },
      content: {
        picUrl:
          'https://img.alicdn.com/imgextra/i3/O1CN01uA5nWT1dKtERDeTth_!!6000000003718-2-tps-748-934.png',
      },
    },
    {
      type: 'text',
      user: {
        type: 'AI',
        avatar:
          'http://wx.qlogo.cn/mmopen/xN4PTYkZJLwQKaGQnTib08hHOL5Ig3micXwgvGOickgYicF9HWDXhgqqjlaYYNqkn4CrBy8cGwPQKibqSIxEVMBXzJIu4xPicaiawGr/96',
      },
      content: '我才看到<h1>行啊伤心啊是</h1><script>alert("xxx")</script>',
    },
    {
      type: 'image',
      user: {
        type: 'AI',
        avatar:
          'http://wx.qlogo.cn/mmopen/xN4PTYkZJLwQKaGQnTib08hHOL5Ig3micXwgvGOickgYicF9HWDXhgqqjlaYYNqkn4CrBy8cGwPQKibqSIxEVMBXzJIu4xPicaiawGr/96',
      },
      content: {
        picUrl:
          'https://gw.alicdn.com/tfs/TB1j2Y3xUY1gK0jSZFMXXaWcVXa-602-337.png',
      },
    },
  ] as MessageProps[];

  return (
    <Stack h="100%" spacing="0" justify="space-between">
      <TopHeader />
      <ScrollArea
        sx={(theme) => ({
          flex: 1,
          ...getCommonStyles(theme),
        })}
      >
        {mockData.map((item, i) => (
          <Message key={item.type + i} {...item} />
        ))}
      </ScrollArea>
      <BottomInput />
    </Stack>
  );
}
