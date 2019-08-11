var express = require('express');
var router = express.Router();
var {
    find,
    insertMany,
} = require('../libs/db')
const {
    createToken,
    decodeToken
} = require('../../src/vant/token');






router.use((req, res, next) => {
    // 全局添加
    res.append("Access-Control-Allow-Origin", "*");
    next();
});

/* GET users listing. */
router.post('/login', async (req, res, next) => {
    let {
        //前端传过来的数据
        //手机
        phone,
        cod,
        username,
        //密码
        pas,
        inputEmail,
        inputPassword,
        url,
        title,
        name,
        id,
        uid,
        //令牌
        token
    } = req.body;

    //详情页跳到购物车
    if (url && title && name && id) {
        let data = await insertMany('students',
            [{
                url: url,
                title: title,
                name: name,
                id: id,
                uid: uid
            }]
        );
        console.log(data);
        res.send(data);
        return
    }


    //购物车
    if (uid) {
        let data = await find('students', {
            uid: uid
        });
        console.log(data);
        res.json(data);
        return
    }




    //注册
    if (phone && cod && pas) {
        let data = await insertMany('students',
            [{
                phone: phone,
                pas: pas
            }]
        );
        // const token = createToken({
        //     phone: phone,
        // }, 300);
        console.log(token);

        res.send(data);
    } else { //登录

        //第二次访问
        if (token && phone) { //前端发过来的数据，生成令牌存到数据库
            let data = await find('students', {
                phone: phone,
                token: token
            });
            console.log(token);
            res.json(data);
        } else { //第一次访问
            //把令牌和手机号码存到数据库，用户第二次访问时直接查询令牌
            //生成令牌
            let data1 = await find('students', {
                phone: phone,
                pas: pas
            });
            if (data1.length >= 1) {
                //第一次访问如果有数据
                const token = createToken({
                    phone: phone,
                }, 300);
                // token = token.split("=")
                console.log(token);
                res.send(token);
                let pwd = await insertMany('students',
                    [{
                        phone: phone,
                        token: token
                    }]
                );
                res.json(data);
            } else {
                //没找到

                return
            }

        }






    }





});


// // 登录
// router.post('/login', async (req, res, next) => {
//     let {
//         //前端传过来的数据
//         phone,
//         cod,
//         username,
//         pas,
//         inputEmail,
//         inputPassword
//     } = req.body;

//     let data = await find('students', {
//         phone: phone
//     });
//     console.log(phone);
//     console.log(data);
//     //登录
//     // if (phone && pas) {
//     //     let data = await find('students', {
//     //         username: phone
//     //     });
//     //     console.log(data);
//     // }
//     res.send(data);
//     // }
// });












//做判断如果传过来的是注册走注册分支，如果是登录走登录分支
//增
// var {
//     insertMany,
// } = require('../libs/db')

// router.post('/login', async (req, res, next) => {
//     let data = await insertMany('students',
//         [{
//             username: phone,
//             pas: pas
//         }]
//     );
//     console.log(data);

//     res.send(data);
// })



//改
// const {
//     updateOne,
// } = require('./db');
// !(async () => {
//     let data = await updateOne('students', {
//         age: '18'
//     }, {
//         $set: {
//             name: 'cjm'
//         }
//     });
// })
// ();


module.exports = router;



//
// var express = require('express');
// var router = express.Router();
// var {
//     find
// } = require('../libs/db')
// /* GET users listing. */
// router.get('/login', async function (req, res, next) {
//     let data = await find('students', {
//         username: 'cjm'
//     })
//     // res.send(JSON.stringify(data));
//     console.log(data);
//     res.json(data);


// });

// module.exports = router;