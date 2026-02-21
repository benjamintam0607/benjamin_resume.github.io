// Vue 3 个人履历应用
const { createApp } = Vue;

createApp({
    data() {
        return {
            // 个人基本信息
            userName: 'TAM WAI PAN BENJAMIN',
            userTitle: '机器学习工程师',
            userSummary: '专注于人工智能和机器学习的计算机科学毕业生，具有在Vidi Labs Limited开发视觉语言模型和计算机视觉系统的经验。擅长Python、深度学习和全栈开发，热衷于将AI技术应用于实际问题解决。',
            userEmail: 'benjamin.tam0607@gmail.com',
            userPhone: '(852) 67080288',
            userLocation: '香港',
            userLinkedIn: 'www.linkedin.com/in/benjamintam0607',
            userGitHub: '',
            
            // 当前语言
            currentLanguage: 'en',
            
            // 本地化字符串
            localizedStrings: {
                en: {
                    // 页面标题
                    title: 'Personal Resume',
                    subtitle: 'Professional Resume and Skills Showcase',
                    // 卡片标题
                    profile: 'Profile',
                    skills: 'Key Skills',
                    experience: 'Work Experience',
                    education: 'Education',
                    contact: 'Contact',
                    // 技能分类
                    skillCategories: ['All', 'Programming Languages', 'Frontend Development', 'Machine Learning', 'Frameworks & Libraries', 'Tools & Platforms', 'Languages'],
                    // 工作经历统计
                    totalExperience: 'Years of Experience',
                    totalProjects: 'Projects Completed',
                    totalSkills: 'Skills',
                    // 教育背景
                    degree: 'Degree',
                    institution: 'Institution',
                    period: 'Period',
                    location: 'Location',
                    field: 'Field of Study',
                    gpa: 'GPA',
                    courses: 'Relevant Courses',
                    honors: 'Honors',
                    // 专业认证
                    certifications: 'Professional Certifications',
                    // 联系方式
                    name: 'Name',
                    email: 'Email',
                    phone: 'Phone',
                    address: 'Address',
                    linkedin: 'LinkedIn',
                    github: 'GitHub',
                    sendMessage: 'Send Message',
                    yourName: 'Your Name',
                    yourEmail: 'Your Email',
                    subject: 'Subject',
                    message: 'Message',
                    placeholderName: 'Please enter your name',
                    placeholderEmail: 'example@email.com',
                    placeholderSubject: 'Message subject',
                    placeholderMessage: 'Please enter your message...',
                    // 按钮
                    download: 'Download Resume',
                    print: 'Print',
                    backToTop: 'Back to Top',
                    // 页脚
                    footerNote: 'This website is built with Vue 3, responsive design for all devices.',
                    // 其他
                    achievements: 'Achievements',
                    totalWorkExperience: 'Total Work Experience',
                    totalPositions: 'Number of Positions',
                    years: 'years',
                    positions: 'positions',
                    lastUpdatedLabel: 'Last Updated',
                    messageSent: 'Message sent!',
                    fillRequiredFields: 'Please fill in name, email and message content!',
                    demoMessage: 'Thank you for your message! As this is a demo site, the message was not actually sent.',
                    pdfNotFound: 'If the resume PDF does not open, please ensure Benjamin_Tam_Resume.pdf file is in the same directory as the webpage.',
                    pdfError: 'Cannot open resume PDF file. Please ensure Benjamin_Tam_Resume.pdf file is in the same directory as the webpage.'
                },
                zh: {
                    // 页面标题
                    title: '个人履历',
                    subtitle: '专业简历与技能展示',
                    // 卡片标题
                    profile: '个人简介',
                    skills: '关键技能',
                    experience: '工作经历',
                    education: '教育背景',
                    contact: '联系方式',
                    // 技能分类
                    skillCategories: ['全部', '编程语言', '前端开发', '机器学习', '框架与库', '工具与平台', '语言'],
                    // 工作经历统计
                    totalExperience: '年经验',
                    totalProjects: '个项目',
                    totalSkills: '项技能',
                    // 教育背景
                    degree: '学位',
                    institution: '学校',
                    period: '时间',
                    location: '地点',
                    field: '专业',
                    gpa: 'GPA',
                    courses: '相关课程',
                    honors: '荣誉',
                    // 专业认证
                    certifications: '专业认证',
                    // 联系方式
                    name: '姓名',
                    email: '邮箱',
                    phone: '电话',
                    address: '地址',
                    linkedin: 'LinkedIn',
                    github: 'GitHub',
                    sendMessage: '发送消息',
                    yourName: '您的姓名',
                    yourEmail: '您的邮箱',
                    subject: '主题',
                    message: '消息内容',
                    placeholderName: '请输入您的姓名',
                    placeholderEmail: 'example@email.com',
                    placeholderSubject: '消息主题',
                    placeholderMessage: '请输入您的消息...',
                    // 按钮
                    download: '下载简历',
                    print: '打印',
                    backToTop: '返回顶部',
                    // 页脚
                    footerNote: '本网站使用 Vue 3 构建，响应式设计适配所有设备。',
                    // 其他
                    achievements: '主要成就',
                    totalWorkExperience: '总工作经验',
                    totalPositions: '工作经历数量',
                    years: '年',
                    positions: '个职位',
                    lastUpdatedLabel: '最后更新',
                    messageSent: '消息已发送！',
                    fillRequiredFields: '请填写姓名、邮箱和消息内容！',
                    demoMessage: '感谢您的消息！由于这是演示网站，消息并未实际发送。',
                    pdfNotFound: '如果简历PDF没有打开，请确保Benjamin_Tam_Resume.pdf文件与网页在同一目录下。',
                    pdfError: '无法打开简历PDF文件。请确保Benjamin_Tam_Resume.pdf文件与网页在同一目录下。'
                }
            },
            
            // 工作年限（根据工作经历计算）
            workExperience: 2,
            
            // 技能数据
            activeSkillCategory: 'all',
            skillCategoryKeys: [
                { key: 'all', en: 'All', zh: '全部' },
                { key: 'programming', en: 'Programming Languages', zh: '编程语言' },
                { key: 'frontend', en: 'Frontend Development', zh: '前端开发' },
                { key: 'ml', en: 'Machine Learning', zh: '机器学习' },
                { key: 'frameworks', en: 'Frameworks & Libraries', zh: '框架与库' },
                { key: 'tools', en: 'Tools & Platforms', zh: '工具与平台' },
                { key: 'languages', en: 'Languages', zh: '语言' }
            ],
            skills: [
                { name: 'Python', level: 90, category: 'programming', tags: ['数据分析', '机器学习', '后端开发'] },
                { name: 'Java', level: 75, category: 'programming', tags: ['面向对象', '企业级应用'] },
                { name: 'SQL', level: 80, category: 'programming', tags: ['数据库查询', '数据管理'] },
                { name: 'Vue.js', level: 85, category: 'frontend', tags: ['前端框架', '响应式设计'] },
                { name: 'Three.js', level: 70, category: 'frontend', tags: ['3D图形', 'WebGL'] },
                { name: 'HTML/CSS', level: 85, category: 'frontend', tags: ['网页布局', '样式设计'] },
                { name: 'JavaScript', level: 80, category: 'frontend', tags: ['交互开发', 'ES6+'] },
                { name: '机器学习', level: 85, category: 'ml', tags: ['算法', '模型训练'] },
                { name: '深度学习', level: 85, category: 'ml', tags: ['神经网络', 'AI模型'] },
                { name: 'LLM/VLM', level: 80, category: 'ml', tags: ['大语言模型', '视觉语言模型'] },
                { name: 'PyTorch', level: 85, category: 'frameworks', tags: ['深度学习框架', '模型开发'] },
                { name: 'TensorFlow', level: 75, category: 'frameworks', tags: ['机器学习框架', '神经网络'] },
                { name: 'OpenCV', level: 80, category: 'frameworks', tags: ['计算机视觉', '图像处理'] },
                { name: 'Pandas', level: 85, category: 'frameworks', tags: ['数据分析', '数据处理'] },
                { name: 'NumPy', level: 85, category: 'frameworks', tags: ['数值计算', '数组操作'] },
                { name: 'Matplotlib', level: 80, category: 'frameworks', tags: ['数据可视化', '图表'] },
                { name: 'Langchain', level: 75, category: 'frameworks', tags: ['LLM应用', '代理框架'] },
                { name: 'Git', level: 85, category: 'tools', tags: ['版本控制', '协作开发'] },
                { name: 'Conda', level: 80, category: 'tools', tags: ['环境管理', '包管理'] },
                { name: 'Linux', level: 80, category: 'tools', tags: ['操作系统', '服务器管理'] },
                { name: 'Windows', level: 90, category: 'tools', tags: ['操作系统', '桌面应用'] },
                { name: '粤语', level: 100, category: 'languages', tags: ['母语', '流利'] },
                { name: '英语', level: 85, category: 'languages', tags: ['流利', '专业使用'] },
                { name: '普通话', level: 80, category: 'languages', tags: ['流利', '沟通'] }
            ],
            
            // 工作经历
            workExperiences: [
                {
                    title: '机器学习工程师',
                    company: 'Vidi Labs Limited',
                    period: '2024年6月 - 2025年11月',
                    location: '香港',
                    description: '开发和优化大型视觉语言模型(VLMs)及计算机视觉系统，应用于实际业务场景。',
                    achievements: [
                        '使用LLaMA-Factory开发和微调大型视觉语言模型，如Qwen3-VL和Llava，用于多模态理解和生成',
                        '构建基于YOLO的完整目标检测流水线，涵盖数据收集、自动标注、模型训练和部署优化',
                        '设计纯视觉室内自主导航框架，集成单目深度估计、语义建图和路径规划',
                        '与香港国际机场合作，将视觉导航系统应用于实际物流场景'
                    ],
                    technologies: ['Python', 'PyTorch', 'LLaMA-Factory', 'YOLO', '计算机视觉', '深度学习']
                },
                {
                    title: '机器学习工程师实习生',
                    company: 'Vidi Labs Limited',
                    period: '2023年6月 - 2023年8月',
                    location: '香港',
                    description: '参与计算机视觉模型的开发和优化，支持工业自动化任务。',
                    achievements: [
                        '开发和微调计算机视觉模型（包括CNN和YOLO变体），用于目标检测和图像分类',
                        '实现文本布局检测、OCR和文档结构分析流水线，从复杂视觉文档中提取结构化信息'
                    ],
                    technologies: ['Python', '计算机视觉', 'CNN', 'YOLO', 'OCR']
                },
                {
                    title: 'AI项目：低光图像增强',
                    company: '香港浸会大学',
                    period: '2023年',
                    location: '香港',
                    description: '基于深度学习的低光图像增强系统，使用RetinexNet架构提高低光条件下的图像可见性。',
                    achievements: [
                        '使用PyTorch和RetinexNet架构设计和实现图像增强系统',
                        '通过系统化的图像清洗、归一化和预处理准备训练数据',
                        '通过定性和定量分析评估模型性能，验证增强输出满足视觉清晰度和结构保真度要求'
                    ],
                    technologies: ['Python', 'PyTorch', 'RetinexNet', '深度学习', '图像处理']
                },
                {
                    title: '软件工程项目：图书馆管理系统',
                    company: '香港浸会大学',
                    period: '2022年',
                    location: '香港',
                    description: '使用Vue.js开发的全功能图书馆管理Web应用。',
                    achievements: [
                        '使用Vue.js、HTML、CSS和JavaScript开发全功能Web应用',
                        '实现核心功能，包括图书编目、借阅跟踪和归还处理',
                        '设计直观的用户界面并集成RESTful API端点以支持高效数据检索和状态管理',
                        '在敏捷团队环境中协作，为系统架构、组件开发和项目按时完成做出贡献'
                    ],
                    technologies: ['Vue.js', 'HTML', 'CSS', 'JavaScript', 'RESTful API']
                },
                {
                    title: '外务秘书',
                    company: '香港浸会大学社会服务协会',
                    period: '待补充',
                    location: '香港',
                    description: '领导志愿者团队设计和实施社区粤语教学计划。',
                    achievements: [
                        '领导10名志愿者团队设计和实施社区粤语教学计划，监督课程规划和参与者协调',
                        '作为协会与外部利益相关者之间的主要联络人，管理所有外展、合作伙伴沟通和公众参与工作',
                        '维护组织良好且最新的外部通信记录，确保协作活动的透明度和连续性'
                    ],
                    technologies: ['团队领导', '沟通协调', '项目管理']
                },
                {
                    title: '献血周推广志愿者',
                    company: '香港红十字会输血服务中心',
                    period: '待补充',
                    location: '香港',
                    description: '协助组织和协调校园推广活动，提高献血意识。',
                    achievements: [
                        '帮助组织和协调校园推广活动，提高献血意识并鼓励自愿献血',
                        '与其他志愿者合作，与公众互动，回答问题并支持活动顺利运作'
                    ],
                    technologies: ['活动组织', '公众参与', '志愿服务']
                },
                {
                    title: '环保巡守志愿者',
                    company: '恒生-保育协会生态巡守计划',
                    period: '待补充',
                    location: '香港',
                    description: '参与山野清洁活动，保护自然环境。',
                    achievements: [
                        '加入保育团队进行山野清洁活动，帮助清除垃圾并保护香港郊区的自然栖息地',
                        '通过参与者参与和现场协调支持环保外展工作'
                    ],
                    technologies: ['环保活动', '团队协作', '社区服务']
                }
            ],
            
            // 教育背景
            education: [
                {
                    degree: '计算机科学学士（荣誉）',
                    institution: '香港浸会大学',
                    period: '2020年 - 2024年',
                    location: '香港',
                    field: '计算机科学，人工智能方向',
                    gpa: '待补充',
                    courses: ['人工智能', '机器学习', '深度学习', '计算机视觉', '软件工程'],
                    honors: '参与获国际认可的项目，包括香港ICT Awards 2024、CES Innovation Award in Accessibility & Agetech、SC WIN Now & Next Challenge的Venture of the Year Award'
                },
                {
                    degree: '香港中学文凭',
                    institution: 'TWGHs Sun Hoi Directors\' College',
                    period: '2016年 - 2020年',
                    location: '香港',
                    field: '理科',
                    gpa: '待补充',
                    courses: ['数学', '物理', '化学', '信息科技'],
                    honors: '待补充'
                }
            ],
            
            // 专业认证
            certifications: [
                '香港ICT Awards 2024 获奖项目',
                'CES Innovation Award in Accessibility & Agetech',
                'SC WIN Now & Next Challenge - Venture of the Year Award'
            ],
            
            // 项目统计
            completedProjects: 4,
            
            // 联系方式表单数据
            messageName: '',
            messageEmail: '',
            messageSubject: '',
            messageContent: '',
            messageSent: false,
            
            // 页面信息
            lastUpdated: '2026年2月21日',
            loadTime: ''
        };
    },

    
    computed: {
        // 当前语言的本地化字符串
        localized() {
            return this.localizedStrings[this.currentLanguage];
        },
        
        // 技能分类键数组
        categoryKeys() {
            return this.skillCategoryKeys.map(item => item.key);
        },
        
        // 本地化的技能分类名称数组
        localizedSkillCategories() {
            return this.skillCategoryKeys.map(item => item[this.currentLanguage]);
        },
        
        // 过滤技能按分类
        filteredSkills() {
            if (this.activeSkillCategory === 'all') {
                return this.skills;
            }
            return this.skills.filter(skill => skill.category === this.activeSkillCategory);
        },
        
        // 所有技能标签（去重）
        allSkillTags() {
            const tags = new Set();
            this.skills.forEach(skill => {
                skill.tags.forEach(tag => tags.add(tag));
            });
            return Array.from(tags);
        },
        
        // 计算工作年限（基于正式工作经历）
        calculatedWorkExperience() {
            // 计算正式工作经验：机器学习工程师（2024年6月-2025年11月）约1.5年
            // 加上机器学习工程师实习生（2023年6月-8月）约0.25年
            // 总计约1.75年，四舍五入为2年
            return 2;
        }
    },
    
    methods: {
        // 切换语言
        toggleLanguage() {
            this.currentLanguage = this.currentLanguage === 'en' ? 'zh' : 'en';
        },
        
        // 加载用户数据
        loadUserData() {
            const savedData = localStorage.getItem('resume_data');
            if (savedData) {
                try {
                    const data = JSON.parse(savedData);
                    this.updateResumeData(data);
                } catch (e) {
                    console.error('解析用户数据失败:', e);
                }
            }
        },
        
        // 发送消息
        sendMessage() {
            if (!this.messageName.trim() || !this.messageEmail.trim() || !this.messageContent.trim()) {
                alert(this.localized.fillRequiredFields);
                return;
            }
            
            // 在实际应用中，这里应该发送到后端API
            console.log('消息已发送:', {
                name: this.messageName,
                email: this.messageEmail,
                subject: this.messageSubject,
                content: this.messageContent
            });
            
            this.messageSent = true;
            
            // 重置表单
            this.messageName = '';
            this.messageEmail = '';
            this.messageSubject = '';
            this.messageContent = '';
            
            // 3秒后重置发送状态
            setTimeout(() => {
                this.messageSent = false;
            }, 3000);
            
             alert(this.localized.demoMessage);
        },
        
        // 下载简历
        downloadResume() {
            // 尝试打开PDF文件
            const pdfUrl = 'Benjamin_Tam_Resume.pdf';
            try {
                window.open(pdfUrl, '_blank');
                // 如果文件不存在，1秒后显示提示
                setTimeout(() => {
                     alert(this.localized.pdfNotFound);
                }, 1000);
            } catch (error) {
                 alert(this.localized.pdfError);
            }
        },
        
        // 打印简历
        printResume() {
            window.print();
        },
        
        // 格式化时间
        formatTime(date) {
            return date.toLocaleString('zh-CN', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            });
        },
        
        // 更新页面数据（当用户提供简历信息时调用）
        updateResumeData(newData) {
            // 这个方法可以在用户提供简历信息后调用
            // 例如：this.updateResumeData(parsedResumeData)
            Object.assign(this, newData);
            
            // 保存到本地存储
            localStorage.setItem('resume_data', JSON.stringify(newData));
        }
    },
    
    watch: {
        currentLanguage(newLang) {
            // 更新页面标题
            document.title = this.localized.title + ' | Professional Resume';
        }
    },
    
    mounted() {
        // 设置页面加载时间
        this.loadTime = this.formatTime(new Date());
        
        // 计算工作年限
        this.workExperience = this.calculatedWorkExperience;
        
        // 从本地存储加载用户数据（如果有）
        this.loadUserData();
        
        // 监听技能分类变化，添加动画效果
        this.$watch('activeSkillCategory', () => {
            const skillBars = document.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                bar.style.transition = 'none';
                void bar.offsetWidth; // 触发重绘
                bar.style.transition = 'width 1s ease-in-out';
            });
        });
        
        // 设置页面标题
        document.title = this.localized.title + ' | Professional Resume';
        
        console.log('个人履历网站已加载！');
    }
}).mount('#app');