/**
 * 配置参考：https://wechat-miniprogram.github.io/kbone/docs/config/
 */

module.exports = {
    origin: 'https://test.miniprogram.com',
    entry: '/app',
    router: {
        home: [ '/home' ],
        about: [ '/about' ],
    },
    redirect: {
        notFound: 'home',
        accessDenied: 'home',
    },
    generate: {
        autoBuildNpm: 'npm',
    },
    app: {
        navigationBarTitleText: '一个学者',
    },
	appExtraConfig: {
        sitemapLocation: 'sitemap.json',
	},
    global: {},
    pages: {},
    optimization: {
		domSubTreeLevel: 10,

		elementMultiplexing: true,
		textMultiplexing: true,
		commentMultiplexing: true,
		domExtendMultiplexing: true,

		styleValueReduce: 5000,
		attrValueReduce: 5000,
	},
    projectConfig: {
        projectname: 'mp-self',
        appid: 'wxfd887e5784f41e9e',
    },
}
