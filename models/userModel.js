/**
 * Created by mosaic101 on 2016/7/14.
 */
const UserSchema = require('../schema/UserSchema');
const bcrypt = require('bcryptjs');

var User = function(opt) {
    this.opt = opt;
};

/**
 * ������û���
 * @param callback {function}
 */
User.prototype.save = function (callback) {
    var action = new UserSchema(this.opt);
    action.save(callback);
};

/**
 * ����ѯ�����û���
 * @param where {object}
 * @param callback {function}
 */
User.findOne = (where, callback) => {
    UserSchema
        .findOne(where)
        .exec((err, doc) => {
            callback(err, doc);
        });
};

/**
 * ���޸��û���Ϣ��
 * @param where {object}
 * @param options {object}
 * @param callback {function}
 */
User.update = (where, options, callback) => {
    UserSchema.update(where, options,{multi: true},(err, numberAffected, raw) => {
        if(err) {
            return callback(err);
        }
        callback(null, numberAffected);

    })
};




module.exports = exports = User;