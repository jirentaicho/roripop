const gulp = require("gulp");
const exec = require('child_process').exec;

/**
 * そもそも npm run generate
 * するとdistフォルダがぶっ壊れるので
 * そこでgit管理するのはダメ。
 */

// これで実行可能
// curl -X POST -u kenshi:生成したトークン http://localhost:8888/job/lolpopdep/build

/**
 * この書き方で、この処理が終わってから次の処理を行う制御ができる
 * task("hoe",done=> { exec("fuga",(e)=> {done(e)})})
 */
gulp.task('generate', done => {
    exec("npm run generate", (err,stdout,stderr) => {
        done(err);
    })
})

gulp.task("prepare", done => {
    process.chdir("./result");
    done();
});
    

//githubにpushする
gulp.task('add', done => {
    exec("git add .",
        (err,stdout,stderr) => {
            done(err);
        })
})

gulp.task('commit', done => {
    exec('git commit -m "from gulp"',
        (err,stdout,stderr) => {
            done(err);
        })
})

gulp.task('push', done => {
    exec('git push origin main',
        (err,stdout,stderr) => {
            done(err);
        })
})

// ローカルだからトークンもフルオープンでばちこり公開していますが、通常は注意してください。
gulp.task('jenkins', done => {
    exec("curl -X POST -u kenshi:117a2ae57192b0b7b518738f5f59714864 http://localhost:8888/job/lolpopdep/build",
        (err,stdout,stderr) => {
            done(err);
        })
})


// 直列処理でタスクを1つずつ実行します。
gulp.task('default', 
    gulp.series(
        'generate',
        'prepare',
        'add',
        'commit',
        'push',
        'jenkins',
    )
)