export default {
    // 界面相关配置
    config: {
        avatarWhiteList: [], // 头像白名单
        navbar: {}, // 导航
        robot: {}, // 机器人信息
        user: {}, // 发送者信息
        agent: {}, // 客服信息
        feedback: {}, // 点赞点踩&反馈
        messages: [], // 初始化消息
        toolbar: [], // 加号扩展
        quickReplies: [], // 快捷短语
        inputType: '', // 输入方式
        placeholder: '', // 输入框占位符
        sidebar: '', // 侧边栏
    },

    // jsbridge 配置
    bridge: {
        openWindow(url) { }, // 打开新窗口
        popWindow() { }, // 关闭页面
        takePhoto(opts) { }, // 选择图片
        previewImage(data) { }, // 预览大图
    },

    // 请求配置
    requests: {
        baseUrl: '',
        send(msg) { }, // 发送接口
        autoComplete(data) { }, // 联想输入接口
        evaluate(data) { }, // 点赞点踩接口
        feedback(data) { }, // 反馈接口
    },

    // 其它处理函数配置
    handlers: {
        track(data) { }, // 埋点
        parseResponse(res, requestType) { }, // 消息数据后处理函数
        onToolbarClick(item, ctx) { }, // 点击加号扩展中的按钮
    },

    // 组件映射配置
    components: {},

    // 语音输入配置
    makeRecorder({ ctx }) { },

    // 长连接配置
    makeSocket({ ctx }) { },
}