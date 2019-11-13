<template>
<div id="mirrorList">
    <div class="mirrorList">
        <div class="header">
            <img src="../assets/cube.png" alt="">
            <h2>镜像列表</h2>
        </div>
        <div class="content">
            <div class="card" v-for="(item,key) in mirrors">
                <div class="cardlogo">
                    <div class="cardlogo-img">
                        <img src="../assets/cube.png">
                    </div>
                    <div class="cardlogo-msg">
                        <a :href="mirrors[key].name" >
                            <p class="name">{{mirrors[key].name}}</p>
                        </a>
                        <p class="date">
                            LastUpdate:
                            <br>
                            {{mirrors[key].lastUpdate}}
                        </p>
                    </div>
                </div>
                <div class="cardinfo">
                    <div class="cardinfo-size">
                        <span>Size</span>
                        <span>{{mirrors[key].size}}</span>
                    </div>
                    <div class="cardinfo-status">
                        <p>Status</p>
                        <i v-show="mirrors[key].syncStatus === 'success'"  class="el-icon-circle-check"></i>
                        <i v-show="mirrors[key].syncStatus === 'failed'"  class="el-icon-circle-close"></i>
                        <i v-show="mirrors[key].syncStatus === 'disabled'"  class="el-icon-remove-outline"></i>
                        <i v-show="mirrors[key].syncStatus === 'syncing'"  class="el-icon-refresh"></i>
                        <i v-show="mirrors[key].syncStatus === 'paused'"  class="el-icon-video-pause"></i>
                        <p>{{mirrors[key].syncStatus}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</template>

<script>
    export default {
        name: 'mirrorListCard',
        data() {
            return {
                mirrors: [],
                howtoIndex: {},
            };
        },
        mounted() {
            this.getMirrorList();
        },
        methods: {
            getMirrorList() {
                const loadedHowto = fetch('/api/static/tunasync.json')
                    .then((res) => res.json())
                    .then((data) => {
                        data.forEach((f) => {
                            const mirrorItem = {
                                name: f.name,
                                lastUpdate: (new Date(f.last_update_ts * 1000)).toLocaleString('chinese', { hour12: false }),
                                syncStatus: f.status,
                                size: f.size,
                                upstream: f.upstream,
                                help: null,
                            };
                            this.mirrors.push(mirrorItem);
                        });
                    });
            },
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.mirrorList {
    margin: 0 auto;
    width: 1240px;
    margin-top: 50px;
    a {
        color: rgb(93, 93, 218);
        text-decoration: none
    }
}
.header {
    text-align: center;
    img {
        margin-left: 10px;
        margin-bottom: -5px;
    }
    h2 {
        text-align: left;
        display: inline;
        margin-left: 20px
    }
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
    overflow: hidden;
    .cardlogo {
        width: 300px;
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
            margin-left: 0px;
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
    .cardinfo {
        width: 200px;
        height: 200px;
        float: left;
        text-align: center;
        opacity: 0;
        transition: 0.4s;
        .cardinfo-status {
            width: 100px;
            height: 200px;
            float: left;
            position: relative;
            top: 50px;
            i {
                font-size: 40px;
                display: block;
                margin-top: 10px;
            }
            p  {
                margin-top: 10px;
            }
        }
        .cardinfo-size {
            width: 100px;
            height: 200px;
            float: left;
            position: relative;
            top: 40px;
            span {
                text-align: center;
                display: block;
                margin-top: 20px;
            }
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
    .cardinfo {
        opacity: 1;
    }
}


</style>>
