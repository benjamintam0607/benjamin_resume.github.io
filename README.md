# 个人履历网站

这是一个使用 Vue 3 构建的个人履历网站，具有响应式设计和现代化界面。

## 功能特性

- **个人简介**：展示姓名、职位和个人简介
- **关键技能**：分类展示技能，带有熟练度进度条
- **工作经历**：时间线展示工作经历，包括成就和使用的技术
- **教育背景**：展示学历、专业、课程和荣誉
- **联系方式**：联系信息展示和消息发送表单（演示）
- **响应式设计**：适配手机、平板和桌面设备

## 使用方法

1. 直接在浏览器中打开 `index.html` 文件
2. 网站使用示例数据，您需要更新为您的真实信息

## 更新简历信息

### 方法一：直接编辑 JavaScript 文件
编辑 `app.js` 文件，找到 `data()` 函数，更新以下字段：

```javascript
userName: '您的姓名',
userTitle: '您的职位',
userSummary: '您的个人简介...',
userEmail: '您的邮箱',
userPhone: '您的电话',
userLocation: '您的地址',
userLinkedIn: '您的LinkedIn链接',
userGitHub: '您的GitHub链接',
```

### 方法二：通过控制台更新
在浏览器中打开网站，按 F12 打开开发者工具，在控制台中输入：

```javascript
// 更新基本信息
app.updateResumeData({
    userName: '您的姓名',
    userTitle: '您的职位',
    userSummary: '您的个人简介...',
    userEmail: '您的邮箱',
    userPhone: '您的电话',
    userLocation: '您的地址',
    userLinkedIn: '您的LinkedIn链接',
    userGitHub: '您的GitHub链接',
    
    // 更新工作经历
    workExperiences: [
        {
            title: '您的职位',
            company: '公司名称',
            period: '工作时间',
            location: '工作地点',
            description: '工作描述',
            achievements: ['成就1', '成就2'],
            technologies: ['技术1', '技术2']
        }
    ],
    
    // 更新教育背景
    education: [
        {
            degree: '学位',
            institution: '学校',
            period: '学习时间',
            location: '学校地点',
            field: '专业',
            gpa: 'GPA',
            courses: ['课程1', '课程2'],
            honors: '荣誉'
        }
    ],
    
    // 更新技能
    skills: [
        { name: '技能名称', level: 85, category: '分类', tags: ['标签1', '标签2'] }
    ]
});
```

### 方法三：通过表单更新（高级）
您可以在网站中添加一个管理界面，让用户通过表单更新信息。

## 自定义样式

编辑 `style.css` 文件可以自定义网站外观：

- 修改颜色主题：调整 `#0f3460` 和 `#2a5298` 颜色值
- 调整布局：修改卡片、边距和间距
- 添加动画：在相应类中添加 CSS 动画

## 部署

这个网站是纯静态的，可以直接部署到任何静态网站托管服务：

1. GitHub Pages
2. Netlify
3. Vercel
4. 自己的服务器

## 技术栈

- **Vue 3**：通过 CDN 引入，无需构建工具
- **Font Awesome**：图标库
- **CSS3**：现代样式，包括 Flexbox 和 Grid 布局
- **LocalStorage**：浏览器本地存储，保存用户数据

## 注意事项

1. 消息发送功能仅为演示，实际使用时需要后端API支持
2. 下载简历功能需要后端服务提供PDF文件
3. 所有数据默认保存在浏览器本地存储中

## 从用户获取简历信息

由于无法直接读取PDF文件，您可以：

1. 让用户提供文本格式的简历
2. 将文本内容解析为结构化数据
3. 调用 `updateResumeData()` 方法更新网站

或者提供一个表单让用户手动输入各项信息。

## 许可证

MIT