# 环境部署

## 准备工作

* JDK >= 11 
* MariaDB >= 10.0.0
* Maven >= 3.0
* Node >=10
* Git >= 2

## 运行系统

### 后台

1. 下载项目
    ```
    git clone https://github.com/hankaibo/myspringboot.git
    ```
2. 导入项目
    
    使用自己的 IDE 导入, Intellij IDEA 社区版本即可。
3. 导入数据库

    安装 MySQL(MariaDB) 数据库，执行 init_table.sql 文件建表，执行 init_data 初始化数据；
    
    安装 redis 创建 redis 数据库。
4. 配置数据库

    打开 application-dev.yml 修改 MySQL 和 Redis 连接信息。
5. 启动项目

    找到 SpringbootApplication 启动类, 启动即可。
    
### 前端

1. 下载项目
    ```
    git clone https://github.com/hankaibo/myantdpro.git
    ```
2. 导入项目

    使用自己的 IDE 打开下载的项目。
3. 安装依赖
    ```
    npm install (npm --registry https://registry.npm.taobao.org install)
    ```
4. 启动项目
    ```
    npm start             # 访问 http://localhost:8000（项目本地mock模拟接口）
    or
    npm run dev           # 访问 http://localhost:9000（你自己的后台真实接口）
    or
    npm run pre           # 访问 http://localhost:9000（我的在线测试接口）
    ```
