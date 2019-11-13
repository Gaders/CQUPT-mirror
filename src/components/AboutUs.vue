<template>
    <div id="about">
        <h2>联系我们</h2>
        <div class="info">
            <address>CQUPT LUG QQ群: 124449892</address>
            <div class="link">
                <a href="https://github.com/CQUPTMirror/MirrorsNews">镜像源公告</a>
                <br>
                <a href="https://github.com/CQUPTMirror/Report">问题反馈与添加镜像</a>
            </div>
            <footer>
                <p>本站点由重庆邮电大学 LUG 运行维护，本站点的搭建与运行离不开重庆邮电大学信息与网络中心的支持。</p>
                <p>本站点使用 <a href="https://github.com/tuna/tunasync">tunasync</a> 作为镜像管理器。</p>
            </footer>
        </div>
    </div>
</template>

<script>
    export default {
    };
</script>

<style lang="scss" scoped>
#about {
    text-align: center
}
.info {
    margin-top: 20px;
    color: rgb(98, 97, 97)
}
h2 {
    margin-top: 100px;
    background-color: white;
}
a {
    text-decoration: none;
    line-height: 40px;
    color: rgb(27, 59, 154);
}
.link {
    margin: 0 auto;
    width: 200px;;
}
p {
    font-size: 12px;
}
</style>
