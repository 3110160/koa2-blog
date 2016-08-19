/**
 * Created by mosaic101 on 2016/7/14.
 * intro： controller of user
 */
const _ = require('lodash');
const userService = require('../services/userService');
const Logger = require("../utils/logger").Logger("userController");

/**
 * 【register】
 * @param ctx
 * @param next
 */
exports.register = async (ctx,next) => {
    let user = {
        name:'wujianjin',
        slug: 'mosaic',
        email: 'mosaic101@foxmail.com',
        password: 123456,
        headImg: '/uploads/images/0_1.jpg'
    };
    //返回的promise对象，也可以使用.then().catch()
    try {
        let result = await userService.register(user);
        ctx.body = {
            tag:'success',
            status:1,
            message:'注册成功!',
            data:result
        };
    }catch (err) {
        Logger.error('register error', err);
        ctx.body = {
            tag:'error',
            status:err.status,
            message:err.message
        };
    }
};

/**
 * 【login】
 * @param ctx
 * @param next
 */
exports.login = async (ctx,next) => {
    var user = ctx.request.body || {
            name:'wujianjin',
            password:'123456'
        };
    if (!user) {
        return ctx.body = {
            tag:'error',
            status:-1,
            message:'参数缺失！'
        };
    }
    try {
        var result = await userService.login(user);
        ctx.body = {
            tag:'success',
            status:1,
            message:'登录成功!',
            token:result
        };
    }catch (err) {
        Logger.error('login error', err);
        ctx.body = {
            tag:'error',
            status:err.status,
            message:err.message
        };
    }
};

/**
 * 【one】
 * @param ctx
 * @param next
 */
exports.one = async (ctx,next) => {
    var _id = ctx.request.query.id || '579dee11391e4d639e76e4c6';
    if (!_id) {
        return ctx.body = {
            tag:'error',
            status:-1,
            message:'参数缺失！'
        };
    }
    try {
        let conditions = {_id: _id};
        await userService.one(conditions);
        ctx.body = {
            tag:'success',
            status:1,
            message:'查询成功!'
        };
    }catch (err) {
        Logger.error('one error', err);
        ctx.body = {
            tag:'error',
            status:err.status,
            message:err.message
        };
    }
};