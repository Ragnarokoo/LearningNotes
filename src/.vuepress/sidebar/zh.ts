import { sidebar } from 'vuepress-theme-hope';

export const zhSidebar = sidebar({
    // Java开发笔记
    '/notes/': [
        {
            text: 'Java Language专栏',
            icon: 'java',
            collapsible: true,
            prefix: '/notes/javacore/java',
            children: [
                '01、变量&标识符&保留字&进制.md',
                '02、JavaSE_Java语言概述.md',
                '03、运算符.md',
                '04、程序流程控制.md',
                '05、数组.md',
                '06、面向对象（上）.md',
                '07、面向对象（中）.md',
                '08、面向对象（下）.md',
                '09、异常.md',
                '10、多线程.md',
                '11、常用类.md',
                '12、枚举类与注解.md',
                '13、集合.md',
                '14、泛型.md',
                '15、IO流.md',
                '16、网络编程.md',
                '17、反射与动态代理.md',
                '18、Java8新特性之Lambda表达式与Stream API.md',
                'Java.md',
                'ThreadLocal全面解析.md',
                '彻底弄懂StringBuffer与StringBuilder的区别.md',
            ],
        },
        {
            text: 'Java网络编程NIO',
            icon: 'IO',
            collapsible: true,
            prefix: '/notes/javacore/nio/',
            children: [
                '第1章_Java NIO概述.md',
                '第2章_Java NIO（Channel）.md',
                '第3章_Java NIO（SocketChannel）.md',
                '第4章_Java NIO（Buffer）.md',
                '第5章_Java NIO（Selector）.md',
                '第6章_Java NIO（Pipe 和 FileLock）.md',
                '第7章_Java NIO（其他）.md',
                '第8章_Java NIO 综合案例.md',
            ],
        },
        {
            text: 'JDBC数据库连接技术',
            icon: 'community',
            collapsible: true,
            prefix: '/notes/jdbc/',
            children: [
                '01、JDBC简介.md',
                '02、获取数据库连接.md',
                '03、使用PreparedStatement实现CRUD操作.md',
                '04、章节练习.md',
                '05、操作BLOB类型字段.md',
                '06、批量插入.md',
                '07、数据库事务.md',
                '08、DAO及相关实现类.md',
                '09、数据库连接池.md',
                '10、Apache-DBUtils实现CRUD操作.md',
                '全新8.x版本JDBC数据库连接技术.md',
            ],
        },
        {
            text: 'JavaWeb',
            icon: 'categoryselected',
            collapsible: true,
            prefix: '/notes/javaweb/',
            children: [
                '01、Web基础概念简介.md',
                '02、拜托了大脑  .md',
                '03、单一架构回顾.md',
                '04、HTML&CSS.md',
                '05、JavaScript.md',
                '06、Vue.js.md',
                '07、书城项目第一阶段.md',
                '08、Tomcat.md',
                '09、HTTP协议.md',
                '10、Servlet.md',
                '11、书城项目第二阶段.md',
                '12、Thymeleaf.md',
                '13、书城项目第三阶段.md',
                '14、会话控制.md',
                '15、书城项目第四阶段.md',
                '16、过滤器.md',
                '17、书城项目第五阶段.md',
                '18、Listener 监听器.md',
                '19、Axios Ajax.md',
                '20、书城项目第六阶段.md',
            ],
        },
        {
            text: 'SSM Framework',
            icon: 'array',
            collapsible: true,
            prefix: '/notes/framework/',
            children: [
                {
                    text: 'Mybatis',
                    icon: 'network',
                    prefix: 'mybatis/',
                    children: [
                        '一、MyBatis简介.md',
                        '二、搭建MyBatis.md',
                        '三、核心配置文件详解.md',
                        '四、MyBatis的增删改查.md',
                        '五、MyBatis获取参数值的两种方式(重点).md',
                        '六、MyBatis的各种查询功能.md',
                        '七、特殊SQL的执行.md',
                        '八、自定义映射resultMap.md',
                        '九、动态SQL.md',
                        '十、MyBatis的缓存.md',
                        '十一、MyBatis的逆向工程.md',
                        '十二、分页插件.md',
                    ],
                },
                {
                    text: 'Spring',
                    icon: 'software',
                    prefix: 'spring/',
                    children: [
                        '00、Spring_README.md',
                        '01、Spring简介.md',
                        '02、IOC容器.md',
                        '03、AOP.md',
                        '04、JdbcTemplate与声明式事务.md',
                        '05、Spring5新功能.md',
                    ],
                },
                {
                    text: 'Spring6',
                    icon: 'software',
                    prefix: 'spring6/',
                    children: ['spring6.md'],
                },
                {
                    text: 'SpringMVC',
                    icon: 'structure',
                    prefix: 'springmvc/',
                    children: [
                        'NOTE_SpringMVC.md',
                        '00、SpringMVC 简介.md',
                        '01、@RequestMapping 注解.md',
                        '02、SpringMVC 获取请求参数.md',
                        '03、域对象共享数据.md',
                        '04、SpringMVC 视图.md',
                        '05、RESTful.md',
                        '05、RESTful 案例.md',
                        '06、HttpMessageConverter.md',
                        '07、拦截器和异常处理.md',
                        '08、完全注解开发.md',
                        '09、SpringMVC 执行流程.md',
                    ],
                },
            ],
        },
        {
            text: 'SpringData',
            icon: 'geometry',
            collapsible: true,
            prefix: '/notes/framework/',
            children: [
                {
                    text: 'SpringData JPA',
                    icon: 'align',
                    prefix: 'jpa/',
                    children: [
                        '01、Spring Data简介.md',
                        '02、Spring Data JPA简介.md',
                        '03、Hibernate快速搭建JPA.md',
                        '04、JPA四大状态.md',
                        '05、Spring data Jpa.md',
                        '06、自定义操作（JPQL|SQL）.md',
                        '07、多表关联.md',
                        '08、乐观锁.md',
                        '09、审计.md',
                        '10、原理.md',
                        '11、springboot整合JPA.md',
                        '12、SpringData_JPA：原理图.md',
                    ],
                },
            ],
        },
        {
            text: 'SpringBoot',
            icon: 'type',
            collapsible: true,
            prefix: '/notes/framework/',
            children: [
                {
                    text: 'SpringBoot【学习笔记】',
                    icon: 'type',
                    prefix: 'springboot/',
                    children: ['SpringBoot学习笔记(上篇).md', 'SpringBoot学习笔记(下篇).md'],
                },
                {
                    text: 'SpringBoot【拓展篇】',
                    icon: 'back-stage',
                    prefix: 'springboot/',
                    children: ['如何查看SPRING-BOOT历史版本.md'],
                },
            ],
        },
        {
            text: 'mybatisplus',
            icon: 'module',
            collapsible: true,
            prefix: '/notes/framework/mybatisplus/',
            children: [
                {
                    text: 'MybatisPlus（Spring）',
                    icon: 'note',
                    prefix: 'mp_spring/',
                    children: [
                        '一、MybatisPlus简介.md',
                        '二、入门案例.md',
                        '三、增删改查.md',
                        '四、常用注解.md',
                        '五、条件构造器.md',
                        '六、常用插件.md',
                        '七、通用枚举.md',
                        '八、代码生成器.md',
                        '九、MyBatisX插件.md',
                    ],
                },
                {
                    text: 'MybatisPlus（SpringBoot）',
                    icon: 'note',
                    prefix: 'mp_springboot/',
                    children: [
                        '一、MybatisPlus简介.md',
                        '二、入门案例.md',
                        '三、增删改查.md',
                        '四、常用注解.md',
                        '五、条件构造器.md',
                        '六、常用插件.md',
                        '七、通用枚举.md',
                        '八、多数据源.md',
                        '九、MyBatisX插件.md',
                        '十、代码生成器.md',
                    ],
                },
            ],
        },
        {
            text: '构建工具&云原生Devops',
            icon: 'operate',
            collapsible: true,
            prefix: '/notes/environment/',
            children: [
                {
                    text: 'Maven',
                    icon: 'storage',
                    collapsible: true,
                    prefix: 'maven/',
                    children: [
                        '第一章 Maven 概述.md',
                        '第二章 Maven 核心程序解压和配置.md',
                        '第三章 使用 Maven：命令行环境.md',
                        '第四章 使用Maven：IDEA环境.md',
                        '第五章 其他核心概念.md',
                        '第六章 单一架构案例.md',
                        '第七章 SSM整合伪分布式案例.md',
                        '第八章 微服务架构案例.md',
                        '第九章 POM深入与强化.md',
                        '第十章 生产实践.md',
                    ],
                },
                {
                    text: 'Git',
                    icon: 'git',
                    collapsible: true,
                    prefix: 'git/',
                    children: [
                        'NOTE_Git.md',
                        '初识 Git.md',
                        '深入 Git.md',
                        'git技术要点篇.md',
                        'Mac配置SSH Key到GitHub.md',
                        'Git系列——github 配置使用 token 认证.md',
                    ],
                },
                {
                    text: 'Docker基础篇',
                    collapsible: true,
                    icon: 'repo',
                    prefix: 'docker-basic/',
                    children: [
                        'Docker Desktop for Mac.md',
                        '1.Docker简介.md',
                        '2.Docker安装.md',
                        '3.Docker常用命令.md',
                        '4.Docker镜像.md',
                        '5.本地镜像发布到阿里云.md',
                        '6.本地镜像发布到私有库.md',
                        '7.Docker容器数据卷.md',
                        '8.Docker常规安装简介.md',
                        'Docker开发中的一些问题.md',
                    ],
                },
                {
                    text: 'Docker高级篇',
                    collapsible: true,
                    icon: 'repo',
                    prefix: 'docker-avanced/',
                    children: [
                        '1.Docker复杂安装详说.md',
                        '2.DockerFile解析.md',
                        '3.Docker微服务实现.md',
                        '4.Docker网络.md',
                        '5.Docker-Compose容器编排.md',
                        '6.Docker轻量级可视化工具Portainer.md',
                        '7.Docker容器监控之CAdvisor+InfluxDB+Granfana.md',
                        '8.终章の总结.md',
                    ],
                },
                {
                    text: 'Nginx',
                    icon: 'nginx',
                    collapsible: true,
                    prefix: 'nginx/',
                    children: [
                        '一、Nginx简介.md',
                        '二、Nginx环境准备.md',
                        '三、Nginx核心配置文件结构.md',
                        '四、Nginx服务器基础配置实例.md',
                        '五、Nginx服务操作的问题.md',
                        '六、Nginx配置成系统服务.md',
                        '七、Nginx命令配置到系统环境.md',
                        '八、Nginx静态资源部署.md',
                        '九、Rewrite功能配置.md',
                        '十、Nginx反向代理.md',
                        '十一、Nginx负载均衡.md',
                        '十二、Nginx缓存集成.md',
                        '十三、Nginx实现服务器端集群搭建.md',
                        '十四、Nginx制作下载站点.md',
                        '十五、Nginx的用户认证模块.md',
                        '十六、Nginx的扩展模块.md',
                        'Nginx的configuration的配置参数.md',
                    ],
                },
            ],
        },
        {
            text: '数据库以及调优策略',
            icon: 'mysql',
            collapsible: true,
            prefix: '/notes/db/',
            children: [
                {
                    text: 'MYSQL基础篇学习专栏',
                    icon: 'mysql',
                    collapsible: true,
                    prefix: 'mysql/',
                    children: [
                        '第00章_写在前面.md',
                        '第01章_数据库概述.md',
                        '第02章_MySQL环境搭建.md',
                        '第03章_基本的SELECT语句.md',
                        '第04章_运算符.md',
                        '第05章_排序与分页.md',
                        '第06章_多表查询.md',
                        '第07章_单行函数.md',
                        '第08章_聚合函数.md',
                        '第09章_子查询.md',
                        '第10章_创建和管理表.md',
                        '第11章_数据处理之增删改.md',
                        '第12章_MySQL数据类型精讲.md',
                        '第13章_约束.md',
                        '第14章_视图.md',
                        '第15章_存储过程与函数.md',
                        '第16章_变量、流程控制与游标.md',
                        '第17章_触发器.md',
                        '第18章_MySQL8其它新特性.md',
                        '第00章_写在最后.md',
                    ],
                },
                {
                    text: 'MYSQL高级篇学习专栏',
                    icon: 'mysql',
                    collapsible: true,
                    prefix: 'mysql_pro/',
                    children: [
                        '第01章_Linux下MySQL的安装与使用.md',
                        '第 02 章_MySQL的数据目录.md',
                        '第 03 章_用户与权限管理.md',
                        '第 04 章_逻辑架构.md',
                        '第 05 章_存储引擎.md',
                        '第 06 章_索引的数据结构.md',
                        '第 08 章_索引的创建与设计原则.md',
                        '第 09 章_性能分析工具的使用.md',
                        '第 10 章_索引优化与查询优化.md',
                        '第11章_数据库的设计规范.md',
                        '第12章_数据库其它调优策略.md',
                        '第13章_事务基础知识.md',
                        '第14章_MySQL事务日志.md',
                        '第15章_锁.md',
                        '第16章_多版本并发控制.md',
                        '第17章_其它数据库日志.md',
                        '第18章_主从复制.md',
                        '第19章_数据库备份与恢复.md',
                    ],
                },
                {
                    text: 'Redis入门到精通',
                    icon: 'workingDirectory',
                    collapsible: true,
                    prefix: 'redis/',
                    children: [
                        '一、Redis入门概述.md',
                        '二、Redis安装配置.md',
                        '三、Redis 10大数据类型.md',
                        '四、Redis持久化.md',
                        '五、Redis事务.md',
                        '六、Redis管道.md',
                        '七、Redis发布订阅.md',
                        '八、Redis复制（replica）.md',
                        '九、Redis哨兵（sentinel）.md',
                        '十、Redis集群（cluster）.md',
                        '十一、SpringBoot集成Redis.md',
                    ],
                },
                {
                    text: 'Redis大厂进阶篇',
                    icon: 'workingDirectory',
                    collapsible: true,
                    prefix: 'redis_pro/',
                    children: [
                        '1.Redis单线程 VS 多线程【入门篇】.md',
                        '2.BigKey.md',
                        '3.缓存双写一致性之更新策略探讨.md',
                        '4.Redis与MYSQL数据双写一致性工程落地案例.md',
                        '5.案例落地实战bitmap|hyperloglog|geo.md',
                        '6.布隆过滤器BloomFilter.md',
                        '7.缓存预热+缓存雪崩+缓存击穿+缓存穿透.md',
                        '8.手写Redis分布式锁.md',
                        '9.Redlock算法和底层源码分析.md',
                        '10.Redis经典五大数据类型源码及底层实现.md',
                        '11.Redis为什么快？高性能设计之epoll和IO多路复用深度解析.md',
                        '12.终章の总结.md',
                    ],
                },
                {
                    text: '数据库优化策略',
                    icon: 'free',
                    collapsible: true,
                    prefix: 'optimization/',
                    children: ['52条SQL性能优化策略.md'],
                },
                {
                    text: 'Elasticsearch7.x分布式搜索引擎',
                    icon: 'search',
                    collapsible: true,
                    prefix: 'es7.x/',
                    children: [
                        'MacOS中Elasticsearch的安装「借助Homebrew」.md',
                        '1.Elasticsearch概述.md',
                        '2.Elasticsearch入门.md',
                        '3.Elasticsearch环境.md',
                        '4.Elasticsearch进阶.md',
                        '5.Elasticsearch 集成.md',
                        '6.Elasticsearch优化.md',
                        '7.Elasticsearch 面试题.md',
                    ],
                },
                {
                    text: 'Elasticsearch8.x分布式搜索引擎',
                    icon: 'search',
                    collapsible: true,
                    prefix: 'es8.x/',
                    children: [
                        '1、Elasticsearch8.x概述.md',
                        '2、Elasticsearch安装&使用.md',
                        '3、Elasticsearch基础功能.md',
                        '4、Elasticsearch进阶功能.md',
                        '5、Elasticsearch优化.md',
                    ],
                },
            ],
        },
        {
            text: '消息中间件',
            icon: 'quote',
            collapsible: true,
            prefix: '/notes/mq/',
            children: [
                {
                    text: 'RabbitMQ',
                    icon: 'blog',
                    collapsible: true,
                    prefix: 'rabbitmq/',
                    children: [
                        '一、MQ的相关概念.md',
                        '二、RabbitMQ介绍.md',
                        '三、RabbitMQ安装.md',
                        '四、RabbitMQ入门案例.md',
                        '五、RabbitMQ消息应答与发布.md',
                        '六、RabbitMQ交换机.md',
                        '七、RabbitMQ死信队列.md',
                        '八、RabbitMQ延迟队列.md',
                        '九、RabbitMQ发布确认模式.md',
                        '十、RabbitMQ其他知识点.md',
                        '十一、RabbitMQ集群.md',
                    ],
                },
                // {
                //     text: 'SocketMQ',
                //     icon: 'quote',
                //     collapsible: true,
                //     prefix: 'socketmq/',
                //     children: [],
                // },
                // {
                //     text: 'ActiveMQ',
                //     icon: 'quote',
                //     collapsible: true,
                //     prefix: 'activemq/',
                //     children: [],
                // },
                // {
                //     text: 'Kafka',
                //     icon: 'quote',
                //     collapsible: true,
                //     prefix: 'kafka/',
                //     children: [],
                // },
            ],
        },
        {
            text: '软件以及环境配置',
            icon: 'tool',
            collapsible: true,
            prefix: '/notes/software/',
            children: [
                'MAC软件已损坏，请移至废纸娄解决方案.md',
                'Eclipse的常用设置与快捷键.md',
                'Idea快捷键大全（Windows）.md',
                'MAC中的IDEA快捷键.md',
                'IDEA中启动微服务时开启Run Dashboard.md',
                'Homebrew安装其他应用问题.md',
                'Mac系列_多JDK切换配置.md',
                'Alacritty配置.md',
                'mac 安装mysql 后设置开机自启.md',
                'Mac 利用Homebrew安装JDK.md',
                'Tmux使用教程.md',
                'Linux执行jps命令报错以及jdk的安装.md',
                'yum安装wget失败，替换yum源为阿里yum源并重新安装.md',
                'MAC配置my.cnf文件.md',
                'Mac安装Consul.md',
                'Linux安装Maven.md',
                'Linux 程序安装目录 opt 和 usr|local 的区别.md',
                'JDBC连接Public Key Retrieval is not all.md',
                'idea中的yml不显示小绿叶图标.md',
                'FirewallD is not running 原因与解决方法.md',
                '解决IDEA中创建maven项目没有src问题.md',
                'SpringInitializr网络连接超时三种解决方案（配图文步骤）.md',
                '打造最舒适的Vscode编辑器.md',
                '程序员必备开发工具.md',
                '玩转IDEA以及调优设置.md',
                '基于Mybatis框架所遇到的常见问题以及解决方案.md',
                'Typora主题优化.md',
            ],
        },
        {
            text: 'Linux操作系统',
            icon: 'ability',
            collapsible: true,
            prefix: '/notes/linux/',
            children: [
                '01 【入门篇-介绍和安装】.md',
                '02 【基础篇-vim编辑器 网络配置 远程登录】.md',
                '03 【基础篇-系统管理】.md',
                '04 【实操篇-帮助命令 文件目录管理基础知识】.md',
                '05【实操篇-文件目录类命令】.md',
                '06 【实操篇-时间日期类 用户和用户组管理】.md',
                '07 【实操篇-文件权限和搜索查找类命令】.md',
                '08 【实操篇-压缩和解压类】.md',
                '09 【实操篇-磁盘查看和分区类】.md',
                '10 【实操篇-进程管理类】.md',
                '11 【实操篇-定时任务 软件安装 克隆虚拟机】.md',
                '快速上手Shell编程.md',
            ],
        },
        {
            text: 'JUC高并发编程',
            icon: 'rank',
            collapsible: true,
            prefix: '/notes/juc/',
            children: [
                '一、线程基础.md',
                '二、线程池.md',
                '三、CompletableFuture.md',
                '四、Java“锁”事.md',
                '五、线程间通信.md',
                '六、LockSupport与线程中断.md',
                '七、集合不安全.md',
                '八、JUC强大的辅助类.md',
                '九、Java内存模型之JMM.md',
                '十、volatile与Java内存模型.md',
                '十一、CAS.md',
                '十二、原子操作类之18罗汉增强.md',
                '十三、ThreadLocal、InheritableThreadLocal.md',
                '十四、Java对象内存布局和对象头.md',
                '十五、Synchronized与锁升级.md',
                '十六、AbstractQueuedSynchronizer之AQS.md',
                '十七、ReentrantLock、ReentrantReadWriteLock、StampedLock.md',
                'Prog.md',
            ],
        },
        {
            text: '深入了解Java虚拟机',
            icon: 'mount',
            collapsible: true,
            prefix: '/notes/jvm/',
            children: [],
        },
        {
            text: 'GOF23种设计模式',
            icon: 'view',
            collapsible: true,
            prefix: '/notes/gof/',
            children: [],
        },
        {
            text: '技术要点业务篇',
            icon: 'tag',
            collapsible: true,
            prefix: '/notes/service',
            children: [
                '当Swagger遇上YApi，瞬间高大上了！.md',
                '肝了一周总结的SpringBoot常用注解大全，看完就炉火纯青了！.md',
                '给Swagger换了个新皮肤，瞬间高大上了！.md',
                '这五款牛逼的 IDEA 插件，堪称代码质量检查利器！.md',
                'Github标星7k！这款Git可视化工具，值得一试！.md',
                'Spring和IDEA都不推荐用的@Autowired注解，为什么还有那么多人用？.md',
                '3 款非常实用的 Node.js 版本管理工具',
            ],
        },
    ],
    // 微服务架构
    '/springcloud/': [
        {
            text: 'SpringCloud NetFlix',
            icon: 'linter',
            prefix: 'netflix/',
            children: ['SpringCloud Netflix.md'],
        },
        {
            text: 'SpringCloud Alibaba',
            icon: 'categoryselected',
            prefix: 'alibaba/',
            children: [
                '一、微服务架构零基础理论入门.md',
                '二、从2.2.x和H版开始说起.md',
                '三、关于Cloud各种组件的停更|升级|替换.md',
                '四、微服务架构编码构建.md',
                '五、Eureka服务注册于发现.md',
                '六、Zookeeper服务注册与发现.md',
                '七、Consul服务注册与发现.md',
                '八、Ribbon负载均衡服务调用.md',
                '九、OpenFeign服务接口调用.md',
                '十、Hystrix断路器.md',
                '十一、Zuul路由网关.md',
                '十二、Gateway新一代网关.md',
                '十三、SpringCloud config分布式配置中心.md',
                '十四、SpringCloud Bus消息总线.md',
                '十五、SpringCloud Stream消息驱动.md',
                '十六、SpringCloud Sleuth分布式请求链路追踪.md',
                '十七、SpringCloud Alibaba入门简介.md',
                '十八、SpringCloud Alibaba Nacos服务注册和配置中心.md',
                '十九、SpringCloud Alibaba Sentinel实现熔断与限流.md',
                '二十、SpringCloud Alibaba Seata处理分布式事务.md',
                '大厂面试第三季预告片之雪花算法.md',
            ],
        },
    ],
    // 分布式架构
    '/distributed/': [
        {
            text: 'Zookeeper从入门到精通',
            icon: 'Apache',
            collapsible: true,
            prefix: 'zk/',
            children: [
                '一、Zookeeper入门.md',
                '二、Zookeeper本地安装.md',
                '三、Zookeeper集群操作.md',
                '四、服务器动态上下线监听案例.md',
                '五、Zookeeper分布式锁案例.md',
                '六、企业面试真题(面试重点).md',
            ],
        },
        {
            text: '分布式微服务架构之Dubbo',
            icon: 'read',
            collapsible: true,
            link: 'dubbo/',
            children: [''],
        },
    ],

    // web开发笔记
    '/web/': [
        {
            text: 'HTML&CSS',
            icon: 'html',
            collapsible: true,
            prefix: '/web/html_css',
            children: [
                '01 【HTML简介】.md',
                '02 【字符实体与语义标签(上)】.md',
                '03 【语义标签(下) CSS简介】.md',
                '04 【CSS选择器 】.md',
                '05 【CSS引入方式 CSS的元素显示模式】.md',
                '06 【CSS字体属性 CSS文本属性】.md',
                '07 【Emmet语法 三大特性及单位】.md',
                '08 【盒模型(上) 盒模型(下)】.md',
                '09 【浮动 常见网页布局】.md',
                '10 【高度塌陷与BFC】.md',
                '11 【定位】.md',
                '12 【网页布局总结 元素的显示与隐藏】.md',
                '13 【精灵图 图标字体 CSS三角 鼠标样式 溢出省略号】.md',
                '14 【margin负值 文字围绕浮动 行内快 CSS三角 CSS初始化】.md',
                '15【背景 渐变色】 .md',
                '16 【过渡 动画】.md',
                '17 【2D转换 3D转换 浏览器私有前缀】.md',
                '18 【移动端基础 流式布局】.md',
                '19 【flex布局】.md',
                '20 【rem适配布局】.md',
                '21 【vw布局】.md',
                '22 【响应式布局】.md',
            ],
        },
        {
            text: '深入学习JavaScript系列',
            icon: 'javascript',
            collapsible: true,
            prefix: '/web/javascript',
            children: [
                '01 【基础语法与基本数据类型】.md',
                '02 【JS表达式与操作符】.md',
                '03 【流程控制语句】.md',
                '04 【对象】.md',
                '05 【函数（上）】.md',
                '06【函数（下）】.md',
                '07 【数组及常用方法】.md',
                '08 【标准库之Date对象】.md',
                '09 【标准库之Math对象和String对象】.md',
                '10 【标准库之RegExp对象】.md',
                '11 【标准库之JSON对象 JSON5】.md',
                '12 【语法之错误处理机制】.md',
                '13 【语法之编程风格】.md',
                '14 【语法之console 对象与控制台】.md',
                '15 【严格模式】.md',
                '16 【DOM概述】.md',
                '17 【Document 节点】.md',
                '18 【节点的关系和内部操作】.md',
                '19 【节点的增删改查】.md',
                '20 【节点的集合】.md',
                '21【节点的属性】.md',
                '22 【事件监听】.md',
                '23 【事件对象与鼠标事件】.md',
                '24 【键盘事件】.md',
                '25 【进度事件和表单事件】.md',
                '26 【触摸事件和其它常见事件】.md',
                '27 【三大家族scroll、offset、client】.md',
                '28 【事件传播】.md',
                '29【定时器和延时器】.md',
                '30【BOM和浏览器环境概述】.md',
                '31【window 对象】.md',
                '32 【Navigator 对象和Screen 对象】.md',
                '33 【History对象和Location对象】.md',
                '34 【表单和FormData 对象】.md',
                '35【Storage接口】.md',
                '36 【节流和防抖】.md',
            ],
        },
        {
            text: 'RESTAPI&AJAX',
            icon: 'ajax',
            collapsible: true,
            prefix: '/web/ajax',
            children: [
                'AJAX概述 HTTP相关问题.md',
                'axios fetch 跨域.md',
                'fetch、ajax、axios的区别.md',
                '三句话让 AJAX 为我欲罢不能.md',
                'Axios入门与源码分析.md',
                'Fetch API 教程',
            ],
        },
        {
            text: 'Promise从入门到精通',
            icon: 'structure',
            collapsible: true,
            prefix: '/web/promise',
            children: ['Promise.md'],
        },
        {
            text: 'jQuery从入门到精通',
            icon: 'jQuery',
            collapsible: true,
            prefix: '/web/jquery',
            children: [
                '01、jQuery 简介.md',
                '02、jQuery 选择器.md',
                '03、jQuery工具、属性、CSS.md',
                '04、jQuery对象的过滤与查找.md',
                '05、jQuery文档、事件、动画.md',
                '06、jQuery插件.md',
                'Zepto.js.md',
            ],
        },
        {
            text: 'CSS 预处理语言',
            icon: 'css',
            collapsible: true,
            prefix: '/web/css/',
            children: [
                {
                    text: 'Less预处理器',
                    icon: 'comment',
                    prefix: 'less/',
                    children: ['01 【less学习笔记】.md'],
                },
                {
                    text: 'Sass预处理器',
                    icon: 'page',
                    prefix: 'sass/',
                    children: [
                        '01、Sass的安装使用.md',
                        '02、Sass语法介绍-变量.md',
                        '03、Sass语法介绍-嵌套.md',
                        '04、Sass语法介绍-运算.md',
                        '05、Sass语法介绍-插值.md',
                        '06、Sass语法介绍-函数.md',
                        '07、Sass语法介绍-控制指令.md',
                        '08、Sass语法介绍-混合指令.md',
                        '09、Sass语法介绍-函数指令.md',
                        '10、Sass语法介绍-继承.md',
                        '11、Sass语法介绍-导入.md',
                    ],
                },
            ],
        },
        {
            text: 'Tailwind CSS',
            icon: 'css',
            collapsible: true,
            prefix: '/web/TailwindCSS/',
            children: [
                '01 【TailWind CSS 安装使用】.md',
                '02 【TailWind CSS 初体验】.md',
                '03 【布局之Aspect-Ratio Container Box-Decoration-Break Object-Fit Object-Position】.md',
                '04 【布局之Overscroll Behavior  定位偏移量】.md',
            ],
        },
        {
            text: 'Vue 渐进式框架',
            icon: 'vue',
            collapsible: true,
            prefix: '/web/vue',
            children: [
                {
                    text: '【Vue2】学习专栏',
                    icon: 'vue',
                    prefix: '/web/vue/vue2',
                    children: [
                        '01 【Vue简介 初识Vue 模板语法和数据绑定】.md',
                        '02 【el和data的两种写法 MVVM模型】.md',
                        '03 【数据代理 事件处理】.md',
                        '04 【计算属性 侦听属性】.md',
                        '05 【绑定样式 条件渲染 列表渲染】.md',
                        '06 【Vue数据监视 v-model双向绑定】.md',
                        '07 【内置指令 自定义指令】.md',
                        '08 【生命周期 组件】.md',
                        '09 【CLI 初始化脚手架 Vue零碎的一些知识】.md',
                        '10 【组件编码流程 组件自定义事件 全局事件总线】.md',
                        '11 【组件通信】.md',
                        '12 【nextTick 过渡与动画】.md',
                        '13 【代理配置 插槽】.md',
                        '14 【Vuex】.md',
                        '15 【Vue-Router】.md',
                        '16 【打包 图片懒加载】.md',
                    ],
                },
                {
                    text: '【Vue3】学习专栏',
                    icon: 'vue',
                    prefix: '/web/vue/vue3',
                    children: [
                        '01 【创建vue3项目】.md',
                        '02 【setup reactive ref】.md',
                        '03 【响应式原理 ref和reactive总结 setup注意点】.md',
                        '04 【计算属性 侦听器】.md',
                        '06 【生命周期 模板引用】.md',
                        '07 【动态组件 组件注册】.md',
                        '08 【Props 组件事件】.md',
                        '09 【Attributes继承 provide与inject】.md',
                        '10 【异步组件 组合式函数(hooks)】.md',
                        '11 【Teleport CSS功能】.md',
                        '12 【其它组合式API】.md',
                        '13 【script setup 总结】.md',
                        '14 【TS类型声明 keepAlive】.md',
                        '15 【Pinia】.md',
                        '16 【Router 4】.md',
                        '17 【vue3自动导入配置】.md',
                    ],
                },
            ],
        },
        {
            text: 'Facebook React',
            icon: 'react',
            prefix: '/web/react',
            children: [],
        },
        {
            text: '深入浅出typescript',
            icon: 'typescript',
            collapsible: true,
            prefix: '/web/ts',
            children: [
                '1. 什么是Typescript.md',
                '2. 安装Typescript.md',
                '3. Hello Typescript.md',
                '4. 原始数据类型.md',
                '5. 任意值.md',
                '6. 类型推断.md',
                '7. 联合类型.md',
                '8. 对象的类型-接口.md',
                '9. 数组的类型.md',
                '10. 函数的类型.md',
                '11. 类型断言.md',
                '12. 声明文件.md',
                '13. 内置对象.md',
                '14. 类型别名.md',
                '15. 字符串字面量类型.md',
                '16. 元组.md',
                '17. 枚举.md',
                '18. 类.md',
                '19. 类与接口.md',
                '20. 泛型.md',
                '21. 声明合并.md',
                '22. 扩展阅读.md',
                '23. 代码检查.md',
                '24. 编译选项.md',
            ],
        },
        {
            text: 'ECMAScript6语法糖系列',
            icon: 'es6',
            collapsible: true,
            prefix: '/web/es6',
            children: [
                '1.ECMAScript 6 简介.md',
                '2.let和const命令.md',
                '3.变量的解构赋值.md',
                '4.字符串的扩展.md',
                '5.字符串的新增方法.md',
                '6.正则的扩展.md',
                '7.数值的扩展.md',
                '8.函数的扩展.md',
                '9.数组的扩展.md',
                '10.对象的扩展.md',
                '11.对象的新增方法.md',
                '12.运算符的扩展.md',
                '13.Symbol.md',
                '14.Set 和 Map 数据结构.md',
                '15.Proxy.md',
                '16.Reflect.md',
                '17.Promise 对象.md',
                '18.Iterator 和 for...of 循环.md',
                '19.Generator 函数的语法.md',
                '20.Generator 函数的异步应用.md',
                '21.async 函数.md',
                '22.Class 的基本语法.md',
                '23.Class 的继承.md',
                '24.Module 的语法.md',
                '25.Module 的加载实现.md',
                '26.编程风格.md',
                '27.读懂 ECMAScript 规格.md',
                '28.异步遍历器.md',
                '29.ArrayBuffer.md',
                '30.最新提案.md',
                '31.装饰器.md',
                '32.参考链接.md',
                '函数式编程.md',
                'Mixin.md',
                'SIMD.md',
                '鸣谢.md',
            ],
        },
        {
            text: '前端构建工具',
            icon: 'view',
            prefix: '/web/build/webpack',
            children: [],
        },
        {
            text: '深入浅出NodeJs系列',
            icon: 'nodeJS',
            prefix: '/web/nodejs',
            children: [],
        },
    ],
});
