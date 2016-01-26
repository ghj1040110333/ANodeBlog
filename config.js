var Config = {
    site: {
        title: 'Wincn开发网',
        description: '秉承开源、分享精神，专注技术开发领域，用Coding创造财富',
        version: '1.0.2'
    },
    db: {
        cookieSecret: 'blogbynodesecret',
        name: 'blog',
        host: 'localhost',
        url: 'mongodb://127.0.0.1:27017/blog'
    },
    constant: {
        flash: {
            success: 'success',
            error: 'error'
        }
    },
    article: {
        pageSize: 10,
        types: ['原创', '分享']
    }
};
module.exports = Config;