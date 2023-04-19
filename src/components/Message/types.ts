
export type MessageType = 'text' | 'image' | 'card' | 'system'; // system for system  announcement or something



// 消息协议
export type MessageProps = {
    type: MessageType;
    // 内容
    content: any;
    // ID
    id?: string;
    // 创建时间
    createdAt?: number;
    // 发送者信息
    user?: {
        type: 'AI' | 'user';
        avatar: string;
    };
    // 是否显示时间
    hasTime?: boolean;
};