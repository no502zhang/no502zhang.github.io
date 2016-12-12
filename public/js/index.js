var user = 'no502zhang';

var blog;
/**
 * 初始化
 */
$(document).ready(function () {
    $(document).attr('title', user);

    sidebar = new Vue({
        el: '#sidebar',
        data: {
            blogs: {},
            message: 'Hello Vue!'
        },
        created: function () {
            getBlogList('blog');
        },
        methods: {
            dirClick: function (path) {
                getBlogList(path);
            },
            fileClick: function (blogURL) {
                getBlogContent(blogURL);
            }
        }
    })

    main = new Vue({
        el: '#main',
        data: {
            message: 'Hello Vue!'
        }
    })
});

/**
 * 获取博客列表
 */
function getBlogList(path) {
    blogListURL = 'https://api.github.com/repos/' + user + '/' + user + '.github.io/contents/' + path;

    $.getJSON(blogListURL, function (json) {
        sidebar.blogs = json;
    });
}

/**
 * 获取博客内容
 */
function getBlogContent(blogURL) {
    $.get(blogURL, function (result) {
        main.message = result;
    });
}