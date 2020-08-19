//设置别名

module.exports = {
    configureWebpack:{
        resolve:{
            // extensions:[],
            alias:{
                //@表示src目录，vue-cli3已有定义过
                //src/router和src/store可以直接通过this.$router和this.$store直接引用，所以不需要使用别名
                'assets': '@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',
            }
        }
    }

}
