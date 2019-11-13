<template>
    <div id="proxy">
        <div class="header">
            <h2>反向代理(仅供校内使用)</h2>
        </div>
        <div class="content">
            <div class="card" v-for="(item,key) in proxies">
                <div class="cardlogo">
                    <div class="cardlogo-img">
                        <img src="../assets/cube.png">
                    </div>
                    <div class="cardlogo-msg">
                        <a :href="proxies[key].url">
                            <p class="name">{{proxies[key].name}}</p>
                            <p class="date">
                                URL:
                                <br>
                                {{proxies[key].url}}
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'proxyCard',
        data() {
            return {
                proxies: [],
            };
        },
        mounted() {
            this.getProxy();
        },
        methods: {
            getProxy() {
                const loadedHowto = fetch('/api/proxies.json')
                    .then((res) => res.json())
                    .then((data) => {
                        data.forEach((f) => {
                            const proxyItem = {
                                name: f.name,
                                url: f.url,
                                upstream: f.upstream,
                                help: null,
                            };
                            this.proxies.push(proxyItem);
                        });
                    });
            },
        },
    };
</script>

<style lang="scss" scoped>
a{
    text-decoration: none;
    color: black
}
#proxy {
    width: 1240px;
    margin: 0 auto;
    margin-top: 50px;
}
.content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.card {
    width: 500px;
    height: 200px;
    border: 1px solid #ebeef5;
    color: #303133;
    transition: .3s;
    border-radius: 4px;
    box-shadow: 0 0 12px 2px rgba(0,0,0,.1);
    margin-top: 50px;
    .cardlogo {
        width: 500px;
        height: 200px;
        float: left;
        .cardlogo-img {
            height: 200px;
            width: 50px;
            float: left;
            padding-left: 10px;
            img {
                position: relative;
                top: 100px;
                transform: translateY(-16px)
            }
        }
        .cardlogo-msg {
            float: left;
            text-align: left;
        }
        .name {
            font-size: 25px;
            margin-top: 82px;
            transition: 0.4s;
        }
        .date {
            margin-top: 20px;
            opacity: 0;
            transition: 0.4s;

        }
    }
}
.card:hover {
    .cardlogo {
        .name {
            font-size: 20px;
            margin-top: 70px;
        }
        .date {
            opacity: 1;
        }
    }
}

</style>
